/* ==========================================
       STATE
   ========================================== */
    let users = JSON.parse(localStorage.getItem('pya_users') || '{}');
    let currentUser = null;
    let currentModuleIdx = 0;
    let currentLessonIdx = 0;
    let currentStepIdx = 0;
    let selectedOption = null;
    let codeChallengeSolved = false;
    let currentScreen = 'dashboard';
    const COURSE_STATE_KEY = 'pya_course_state';
    let xp = 0;
    let totalXPEarned = 0;
    let leaderboardData = [];

    /* ── PYODIDE ENGINE ── */
    let pyodide = null;
    let sandboxFiles = { 'main.py': '' };
    let currentFile = 'main.py';

    async function initPyodide() {
        try {
            pyodide = await loadPyodide();
            // Silence initial output and prepare environment
            await pyodide.runPythonAsync(`
import sys
import io
class WebConsole:
    def __init__(self):
        self.out = io.StringIO()
    def write(self, s):
        self.out.write(s)
    def flush(self):
        pass
    def get_output(self):
        res = self.out.getvalue()
        self.out = io.StringIO()
        return res

web_console = WebConsole()
sys.stdout = web_console
sys.stderr = web_console
            `);
            console.log('🐍 Pyodide Engine Initialized');
            document.getElementById('engine-loader').classList.add('hidden');
        } catch (e) {
            console.error('Pyodide Init Failed:', e);
            document.querySelector('.loader-text').textContent = 'Engine Error';
            document.querySelector('.loader-subtext').textContent = 'Check your internet connection and refresh.';
        }
    }

    async function runPython(code, files = {}) {
        if (!pyodide) return 'Engine not ready.';
        try {
            // Write virtual files to Pyodide FS
            for (const [name, content] of Object.entries(files)) {
                pyodide.FS.writeFile(name, content);
            }

            // Execute the code
            await pyodide.runPythonAsync(code);

            // Retrieve captured output
            const output = await pyodide.runPythonAsync('web_console.get_output()');

            // Get current global variables for the inspector (excluding built-ins)
            const globalsJson = await pyodide.runPythonAsync(`
import json
def get_clean_globals():
    banned = ['sys', 'io', 'WebConsole', 'web_console', 'get_clean_globals', 'json', 'WebConsole']
    res = {}
    for k, v in globals().items():
        if not k.startswith('__') and k not in banned:
            try:
                if isinstance(v, (int, float, str, bool, list, dict)):
                    res[k] = v
                else:
                    res[k] = str(v)
            except:
                pass
    return json.dumps(res)
get_clean_globals()
            `);

            return { output: output || '(no output)', globals: JSON.parse(globalsJson) };
        } catch (e) {
            return { output: 'Error: ' + e.message, globals: {} };
        }
    }

    import { PATH_DATA } from './curriculum.js';

    /* ── CURRICULUM LOGIC ── */
    let currentPath = 'python';
    let MODULES = PATH_DATA[currentPath];

    // Path-specific lesson storage
    let ALL_LESSONS = [];
    let GLOBAL_LESSON_MAP = {};

    function updateLessonMaps() {
        MODULES = PATH_DATA[currentPath];
        ALL_LESSONS = MODULES.reduce((acc, mod) => acc.concat(mod.lessons), []);
        GLOBAL_LESSON_MAP = {};
        let globalIdx = 0;
        MODULES.forEach((mod, mi) => {
            mod.lessons.forEach((lesson, li) => {
                GLOBAL_LESSON_MAP[globalIdx] = { moduleIdx: mi, lessonIdx: li, lesson };
                globalIdx++;
            });
        });
    }

    updateLessonMaps();
    currentLessonIdx = 0;

    function repairText(value) {
        if (typeof value !== 'string' || !/[ÃÂâðŸÎ]/.test(value)) return value;
        const replacements = {
            'â€”': '—',
            'â€“': '–',
            'â€˜': '‘',
            'â€™': '’',
            'â€œ': '“',
            'â€': '”',
            'â€¦': '…',
            'Â·': '·',
            'âœ“': '✓',
            'âœ…': '✅',
            'âŒ': '❌',
            'âš¡': '⚡',
            'Î»': 'λ'
        };
        let repaired = value;
        Object.entries(replacements).forEach(([bad, good]) => {
            repaired = repaired.split(bad).join(good);
        });
        try {
            return decodeURIComponent(escape(repaired));
        } catch (_) {
            return repaired;
        }
    }

    function prepareCurriculum() {
        Object.values(PATH_DATA).forEach(pathModules => {
            pathModules.forEach((mod, mi) => {
                mod.title = repairText(mod.title);
                mod.description = repairText(mod.description);
                mod.lessons.forEach((lesson, li) => {
                    lesson.title = repairText(lesson.title);
                    // Practice challenges logic can be added here if needed
                    lesson.steps.forEach(step => {
                        if (step.content) step.content = repairText(step.content);
                        if (step.instruction) step.instruction = repairText(step.instruction);
                        if (step.question) step.question = repairText(step.question);
                        if (step.options) step.options = step.options.map(repairText);
                    });
                });
            });
        });
    }

    prepareCurriculum();
    /* ── ACHIEVEMENTS ── */
    const ACHIEVEMENTS = [
        { id: 'first_lesson', name: 'First Steps', icon: '👣', desc: 'Complete your first lesson',
        condition: () => (users[currentUser?.email]?.completed || []).length >= 1 },
        { id: 'five_lessons', name: 'Learner', icon: '📚', desc: 'Complete 5 lessons',
            condition: () => (users[currentUser?.email]?.completed || []).length >= 5 },
        { id: 'ten_lessons', name: 'Scholar', icon: '🎓', desc: 'Complete 10 lessons',
            condition: () => (users[currentUser?.email]?.completed || []).length >= 10 },
        { id: 'all_lessons', name: 'Python Master', icon: '👑', desc: `Complete all ${ALL_LESSONS.length} lessons`,
            condition: () => (users[currentUser?.email]?.completed || []).length >= ALL_LESSONS.length },
        { id: 'xp_500', name: 'XP Hunter', icon: '⚡', desc: 'Earn 500 total XP',
        condition: () => totalXPEarned >= 500 },
        { id: 'level5', name: 'Level 5', icon: '📈', desc: 'Reach level 5', condition: () => Math.floor(xp /
                100) + 1 >= 5 },
    ];
    const ACHIEVEMENT_ICONS = ['👣', '📚', '🎓', '👑', '⚡', '📈'];
    ACHIEVEMENTS.forEach((achievement, index) => {
        achievement.icon = ACHIEVEMENT_ICONS[index] || repairText(achievement.icon);
        achievement.desc = repairText(achievement.desc);
    });

    /* ── AUTH ── */
    function switchAuthTab(t) {
        document.getElementById('tab-login').classList.toggle('active', t === 'login');
        document.getElementById('tab-signup').classList.toggle('active', t === 'signup');
        document.getElementById('auth-login').style.display = t === 'login' ? 'block' : 'none';
        document.getElementById('auth-signup').style.display = t === 'signup' ? 'block' : 'none';
        hideErr('login-err');
        hideErr('signup-err');
    }

    function showErr(id, msg) {
        const el = document.getElementById(id);
        el.style.display = 'block';
        el.textContent = msg;
    }

    function hideErr(id) { const el = document.getElementById(id); if (el) el.style.display = 'none'; }

    async function signup() {
        hideErr('signup-err');
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const pass = document.getElementById('signup-pass').value;
        
        if (!name) return showErr('signup-err', 'Please enter your name.');
        if (!email.includes('@')) return showErr('signup-err', 'Enter a valid email address.');
        if (pass.length < 6) return showErr('signup-err', 'Password must be at least 6 characters.');
        
        try {
            // Create user in Supabase Auth
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email,
                password: pass,
            });
            
            if (authError) throw authError;
            if (!authData.user) throw new Error('Signup failed');
            
            // Save profile to Supabase users table
            const { error: dbError } = await supabase.from('users').insert([
                {
                    id: authData.user.id,
                    email,
                    full_name: name,
                    role: 'student',
                }
            ]);
            
            if (dbError) throw dbError;
            
            // Also keep in localStorage as backup
            users[email] = { name, pass, xp: 0, completed: [], totalXP: 0, supabaseId: authData.user.id };
            localStorage.setItem('pya_users', JSON.stringify(users));
            
            currentUser = { email, name, supabaseId: authData.user.id, ...users[email] };
            localStorage.setItem('pya_current_user', email);
            
            xp = 0;
            totalXPEarned = 0;
            enterCourse();
            showScreen('dashboard');
        } catch (error) {
            showErr('signup-err', 'Signup failed: ' + error.message);
            console.error('Signup error:', error);
        }
    }

    async function login() {
        hideErr('login-err');
        const email = document.getElementById('login-email').value.trim();
        const pass = document.getElementById('login-pass').value;
        
        if (!email) return showErr('login-err', 'Enter your email.');
        if (!pass) return showErr('login-err', 'Enter your password.');
        
        try {
            // Try Supabase first
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password: pass,
            });
            
            if (error) throw error;
            if (!data.user) throw new Error('Login failed');
            
            // Get user profile
            const { data: userProfile, error: profileError } = await supabase
                .from('users')
                .select('*')
                .eq('id', data.user.id)
                .single();
            
            if (profileError) console.warn('Profile fetch warning:', profileError);
            
            // Sync with Supabase data
            if (userProfile) {
                users[email] = {
                    name: userProfile.full_name || email,
                    xp: userProfile.xp || 0,
                    level: userProfile.level || 1,
                    totalXP: userProfile.total_xp || 0,
                    completed: users[email]?.completed || [] // Merge with local completed for now
                };
            } else if (!users[email]) {
                users[email] = { name: email, xp: 0, completed: [], totalXP: 0, level: 1 };
            }
            
            currentUser = { email, supabaseId: data.user.id, ...users[email] };
            localStorage.setItem('pya_current_user', email);
            
            xp = currentUser.xp || 0;
            totalXPEarned = currentUser.totalXP || xp;
            enterCourse();
            showScreen('dashboard');
        } catch (error) {
            showErr('login-err', 'Login failed: ' + error.message);
            console.error('Login error:', error);
        }
    }

    function logout() {
        if (confirm('Sign out of PyAcademy? Your progress is saved.')) {
            currentUser = null;
            // REMOVE SESSION
            localStorage.removeItem('pya_current_user');
            showScreen('auth');
        }
    }

    function enterCourse() {
        xp = currentUser.xp || 0;
        totalXPEarned = currentUser.totalXP || xp;
        updateXPDisplay();
        renderModules();
        showScreen('dashboard');
    }

    function saveCourseState() {
        const state = {
            currentPath,
            currentModuleIdx,
            currentLessonIdx,
            currentStepIdx,
            currentScreen,
            savedAt: Date.now()
        };
        localStorage.setItem(COURSE_STATE_KEY, JSON.stringify(state));
    }

    function restoreCourseState() {
        try {
            const raw = localStorage.getItem(COURSE_STATE_KEY);
            if (!raw) return;
            const state = JSON.parse(raw);
            if (state.currentPath && PATH_DATA[state.currentPath]) {
                currentPath = state.currentPath;
                updateLessonMaps();
                const pythonBtn = document.getElementById('path-python');
                const webBtn = document.getElementById('path-web');
                if (pythonBtn) pythonBtn.className = currentPath === 'python' ? 'btn btn-sm' : 'btn-outline btn-sm';
                if (webBtn) webBtn.className = currentPath === 'web' ? 'btn btn-sm' : 'btn-outline btn-sm';
            }

            if (Number.isInteger(state.currentModuleIdx)) currentModuleIdx = state.currentModuleIdx;
            if (Number.isInteger(state.currentLessonIdx)) currentLessonIdx = Math.min(state.currentLessonIdx, ALL_LESSONS.length - 1);
            if (Number.isInteger(state.currentStepIdx)) currentStepIdx = Math.max(0, state.currentStepIdx);
            if (state.currentScreen) currentScreen = state.currentScreen;
        } catch (_) {
            localStorage.removeItem(COURSE_STATE_KEY);
        }
    }

    function switchPath(path) {
        currentPath = path;
        updateLessonMaps();
        saveCourseState();

        // Update UI buttons
        document.getElementById('path-python').className = path === 'python' ? 'btn btn-sm' : 'btn-outline btn-sm';
        document.getElementById('path-web').className = path === 'web' ? 'btn btn-sm' : 'btn-outline btn-sm';
        document.getElementById('path-python').style.boxShadow = path === 'python' ? '' : 'none';
        document.getElementById('path-web').style.boxShadow = path === 'web' ? '' : 'none';
        document.getElementById('path-python').style.borderColor = path === 'python' ? '' : 'transparent';
        document.getElementById('path-web').style.borderColor = path === 'web' ? '' : 'transparent';

        const desc = path === 'python'
            ? 'Work through Python step by step, from first program to production-grade backend concepts.'
            : 'Master the art of building beautiful, interactive websites with HTML, CSS, and JavaScript.';
        document.getElementById('path-desc').textContent = desc;

        renderModules();
    }

    /* ── SCREENS ── */
    function showScreen(s) {
        currentScreen = s;
        document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
        const target = document.getElementById('screen-' + s);
        if (target) target.classList.add('active');
        saveCourseState();
    }

    /* ── DASHBOARD TABS ── */
    function showDashTab(t, el) {
        const container = document.getElementById('screen-dashboard');
        container.querySelectorAll('.tab-content').forEach(x => x.classList.remove('active'));
        container.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
        const tabContent = document.getElementById('tab-' + t);
        if (tabContent) tabContent.classList.add('active');
        if (el) el.classList.add('active');
        if (t === 'achievements') renderAchievements();
        if (t === 'sandbox') renderVFS();
        if (t === 'leaderboard') fetchLeaderboard();
    }

    /* ── XP & LEVEL ── */
    function updateXPDisplay() {
        const level = Math.floor(xp / 100) + 1;
        const pct = xp % 100;
        const label = level < 3 ? 'Beginner' : level < 6 ? 'Intermediate' : level < 9 ? 'Advanced' : 'Expert';
        document.getElementById('user-xp').textContent = xp + ' XP';
        document.getElementById('xp-bar').style.width = pct + '%';
        document.getElementById('xp-label').textContent = xp + ' / ' + (level * 100) + ' XP to next level';
        document.getElementById('level-ring').textContent = level;
        document.getElementById('level-label').textContent = 'Level ' + level + ' — ' + label;
        if (currentUser) {
            const u = users[currentUser.email];
            document.getElementById('user-avatar').textContent = (u?.name || 'A')[0].toUpperCase();
            document.getElementById('welcome-name').textContent = 'Welcome back, ' + (u?.name || 'Learner') +
                '!';
        }
    }

    async function addXP(amount) {
        xp += amount;
        totalXPEarned += amount;
        const level = Math.floor(xp / 100) + 1;

        if (currentUser) {
            users[currentUser.email].xp = xp;
            users[currentUser.email].totalXP = totalXPEarned;
            users[currentUser.email].level = level;
            localStorage.setItem('pya_users', JSON.stringify(users));

            // Sync with Supabase if logged in
            if (currentUser.supabaseId) {
                try {
                    await supabase
                        .from('users')
                        .update({
                            xp: xp,
                            level: level,
                            total_xp: totalXPEarned,
                            updated_at: new Date().toISOString()
                        })
                        .eq('id', currentUser.supabaseId);
                } catch (e) {
                    console.error('Supabase Sync Failed:', e);
                }
            }
        }

        updateXPDisplay();
        const oldLevel = Math.floor((xp - amount) / 100) + 1;
        if (level > oldLevel) {
            showToast(`🎉 Level Up! You're now Level ${level}!`);
        }
    }

    async function fetchLeaderboard() {
        try {
            const { data, error } = await supabase
                .from('leaderboard')
                .select('*')
                .limit(20);

            if (error) throw error;
            leaderboardData = data;
            renderLeaderboard();
        } catch (e) {
            console.error('Leaderboard Fetch Failed:', e);
            document.getElementById('leaderboard-list').innerHTML = '<div class="err-text">Failed to load leaderboard.</div>';
        }
    }

    function renderLeaderboard() {
        const container = document.getElementById('leaderboard-list');
        if (!container) return;

        container.innerHTML = leaderboardData.map((u, i) => `
            <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-md);${u.id === currentUser?.supabaseId ? 'border-color:var(--accent);background:var(--bg-secondary)' : ''}">
                <div style="font-weight:800;font-size:16px;color:var(--text-muted);width:24px">${i + 1}</div>
                <div class="avatar" style="width:32px;height:32px;font-size:12px">${(u.full_name || 'U')[0]}</div>
                <div style="flex:1">
                    <div style="font-weight:700;font-size:14px;color:var(--text-primary)">${u.full_name || 'Anonymous User'}</div>
                    <div style="font-size:11px;color:var(--text-muted)">Level ${u.level}</div>
                </div>
                <div style="text-align:right">
                    <div style="font-weight:800;color:var(--accent);font-size:14px">${u.xp} XP</div>
                </div>
            </div>
        `).join('');
    }

    /* ── TOAST ── */
    function showToast(msg) {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = msg;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    /* ── MODULE RENDERING ── */
    function getFirstActiveModuleIndex() {
        const completed = users[currentUser?.email]?.completed || [];
        for (let i = 0; i < MODULES.length; i++) {
            const modStartIdx = MODULES.slice(0, i).reduce((acc, mod) => acc + mod.lessons.length, 0);
            const hasUnfinished = MODULES[i].lessons.some((_, li) => !completed.includes(modStartIdx + li));
            if (hasUnfinished) return i;
        }
        return 0;
    }

    function renderModules() {
        const completed = users[currentUser?.email]?.completed || [];
        const allLessonIndices = completed;
        const firstActiveModuleIndex = getFirstActiveModuleIndex();
        const html = MODULES.map((mod, mi) => {
            const modLessonCount = mod.lessons.length;
            const modStartIdx = MODULES.slice(0, mi).reduce((acc, m) => acc + m.lessons.length, 0);
            const modCompletedCount = mod.lessons.filter((_, li) => allLessonIndices.includes(
                modStartIdx + li)).length;
            const modComplete = modCompletedCount >= modLessonCount;
            const isLocked = mi > 0 && MODULES.slice(0, mi).reduce((acc, m) => acc + m.lessons
                .length, 0) > 0 && MODULES.slice(0, mi).some((m, mi2) => {
                const sIdx = MODULES.slice(0, mi2).reduce((a, mm) => a + mm.lessons.length, 0);
                return m.lessons.some((_, li) => !allLessonIndices.includes(sIdx + li));
            });
            const isStartHere = mi === firstActiveModuleIndex && !modComplete;
            return `
            <div class="module-card ${modComplete ? 'completed' : ''} ${isLocked ? 'locked' : ''}" onclick="${isLocked ? '' : `toggleModule(${mi}, this)`}" style="cursor:${isLocked ? 'not-allowed' : 'pointer'};opacity:${isLocked ? '0.5' : '1'}">
              <div style="display:flex;align-items:center;gap:16px">
                <div style="font-size:36px;flex-shrink:0">${mod.icon}</div>
                <div style="flex:1;min-width:0">
                  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:6px">
                    <span style="font-size:16px;font-weight:700;color:var(--text-primary);letter-spacing:-0.02em">${mod.title}</span>
                    <span class="badge badge-${mod.badge}">${mod.badge}</span>
                    ${modComplete ? '<span class="badge badge-completed">✓ Complete</span>' : ''}
                    ${isStartHere ? '<span class="badge badge-completed" style="background:rgba(59,130,246,0.12);color:#7dd3fc;border-color:rgba(125,211,252,0.35)">Start here</span>' : ''}
                    ${isLocked ? '<span style="font-size:12px;color:var(--text-muted)">🔒</span>' : ''}
                  </div>
                  <p style="font-size:13px;color:var(--text-muted);margin-bottom:8px;line-height:1.5">${mod.description}</p>
                  <div style="display:flex;align-items:center;gap:10px">
                    <div class="progress-bar" style="flex:1;max-width:180px"><div class="progress-fill" style="width:${Math.round((modCompletedCount / modLessonCount) * 100)}%"></div></div>
                    <span style="font-size:11px;color:var(--text-muted);font-weight:600">${modCompletedCount}/${modLessonCount} lessons</span>
                  </div>
                </div>
                <i class="ti ti-chevron-down" style="color:var(--text-muted);font-size:18px;flex-shrink:0;transition:transform .3s" id="chevron-${mi}"></i>
              </div>
              <div id="module-lessons-${mi}" style="display:none;margin-top:16px;padding-top:14px;border-top:1px solid var(--border);flex-direction:column;gap:8px"></div>
            </div>`;
        }).join('');
        document.getElementById('modules-list').innerHTML = html;
    }

    function toggleModule(mi, el) {
        const container = document.getElementById('module-lessons-' + mi);
        const chevron = document.getElementById('chevron-' + mi);
        const isOpen = container.style.display !== 'none' && container.innerHTML !== '';

        if (isOpen) {
            container.style.display = 'none';
            if (chevron) chevron.style.transform = 'rotate(0deg)';
            return;
        }

        const completed = users[currentUser?.email]?.completed || [];
        const modStartIdx = MODULES.slice(0, mi).reduce((acc, m) => acc + m.lessons.length, 0);
        const mod = MODULES[mi];

        container.innerHTML = mod.lessons.map((l, li) => {
            const globalLi = modStartIdx + li;
            const isComp = completed.includes(globalLi);
            const prevCompleted = li === 0 || completed.includes(globalLi - 1) || isComp;
            const locked = !prevCompleted && !isComp;
            return `
            <div class="lesson-card ${isComp ? 'completed' : ''} ${locked ? 'locked' : ''}" onclick="${locked ? '' : `startLesson(${globalLi})`}" style="cursor:${locked ? 'not-allowed' : 'pointer'}">
              <div style="display:flex;align-items:center;gap:12px">
                <div style="font-size:22px;flex-shrink:0">${l.icon}</div>
                <div style="flex:1;min-width:0">
                  <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:3px">
                    <span style="font-size:13px;font-weight:700;color:var(--text-primary)">${l.title}</span>
                    <span class="badge badge-${l.badge}">${l.badge}</span>
                    ${isComp ? '<span style="color:var(--accent);font-size:12px;font-weight:600">✓</span>' : ''}
                    ${locked ? '<span style="font-size:11px;color:var(--text-muted)">🔒</span>' : ''}
                  </div>
                  <div style="font-size:11px;color:var(--text-muted)">${l.steps.length} steps · +${l.xpReward} XP</div>
                </div>
              </div>
            </div>`;
        }).join('');
        container.style.display = 'flex';
        if (chevron) chevron.style.transform = 'rotate(180deg)';
    }

    /* ==========================================
       ACHIEVEMENTS
   ========================================== */
    function renderAchievements() {
        const html = ACHIEVEMENTS.map(a => {
            const earned = a.condition();
            return `
            <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:18px;text-align:center;transition:all var(--transition);opacity:${earned ? '1' : '0.45'};box-shadow:var(--shadow-sm)">
              <div style="font-size:40px;margin-bottom:8px">${earned ? a.icon : '🔒'}</div>
              <div style="font-weight:700;font-size:13px;color:var(--text-primary);margin-bottom:4px">${a.name}</div>
              <div style="font-size:11px;color:var(--text-muted)">${a.desc}</div>
              ${earned ? '<div style="margin-top:6px"><span class="badge badge-completed">Earned</span></div>' : ''}
            </div>`;
        }).join('');
        document.getElementById('achievements-grid').innerHTML = html;
    }

    /* ── LESSON FLOW ── */
    function startLesson(globalIdx) {
        // Prevent access if not logged in
        if (!currentUser) {
            showScreen('auth');
            return;
        }
        const mapped = GLOBAL_LESSON_MAP[globalIdx];
        if (!mapped) return;
        currentModuleIdx = mapped.moduleIdx;
        currentLessonIdx = globalIdx;
        currentStepIdx = 0;
        selectedOption = null;
        codeChallengeSolved = false;
        document.getElementById('lesson-title-header').textContent = mapped.lesson.title;
        showScreen('lesson');
        saveCourseState();
        renderStep();
    }

    function goBack() {
        renderModules();
        showScreen('dashboard');
        document.getElementById('tab-modules').classList.add('active');
        document.getElementById('tab-ai').classList.remove('active');
        document.getElementById('tab-sandbox').classList.remove('active');
        document.getElementById('tab-achievements').classList.remove('active');
        const tabs = document.querySelectorAll('#screen-dashboard .tab');
        tabs.forEach(t => t.classList.remove('active'));
        if (tabs[0]) tabs[0].classList.add('active');
    }

    function getCurrentLesson() {
        const mapped = GLOBAL_LESSON_MAP[currentLessonIdx];
        return mapped ? mapped.lesson : ALL_LESSONS[0];
    }

    function renderStep() {
        const lesson = getCurrentLesson();
        if (!lesson) return;
        const step = lesson.steps[currentStepIdx];
        const total = lesson.steps.length;
        const pct = Math.round((currentStepIdx / total) * 100);
        selectedOption = null;
        codeChallengeSolved = false;
        saveCourseState();

        document.getElementById('lesson-progress-bar').style.width = pct + '%';
        document.getElementById('lesson-step-label').textContent = (currentStepIdx + 1) + '/' + total;

        let html = '';
        if (step.type === 'lesson') {
            html = `
            <div style="margin-bottom:28px">${step.content}</div>
            <button class="btn" onclick="nextStep()">Continue →</button>`;
        } else if (step.type === 'code') {
            html = `
            <div class="challenge-box" style="margin-bottom:18px"><strong>✏️ Challenge:</strong> ${step.instruction}</div>
            <div class="editor" style="margin-bottom:12px">
              <div class="editor-header">
                <div class="dot dot-red"></div><div class="dot dot-yellow"></div><div class="dot dot-green"></div>
                <span style="margin-left:8px">challenge.py</span>
              </div>
              <textarea id="code-editor" spellcheck="false">${step.starter}</textarea>
            </div>
            <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">
              <button class="btn btn-sm" onclick="runLessonCode()">▶ Run Code</button>
              <button class="btn-outline btn-sm" onclick="getHint()">💡 Get Hint</button>
            </div>
            <div id="run-output" class="output-box" style="display:none;margin-bottom:12px"></div>
            <div id="hint-box" class="hint-box" style="display:none;margin-bottom:12px"></div>
            <button class="btn" id="next-btn" style="display:none" onclick="nextStep()">Next →</button>`;
        } else if (step.type === 'quiz') {
            html = `
            <div style="margin-bottom:22px">
              <div style="font-size:11px;font-weight:700;color:var(--text-muted);letter-spacing:.06em;text-transform:uppercase;margin-bottom:10px">📝 Quiz</div>
              <div style="font-size:18px;font-weight:700;color:var(--text-primary);margin-bottom:20px;line-height:1.5">${step.question}</div>
              <div style="display:flex;flex-direction:column;gap:10px" id="quiz-opts">
                ${step.options.map((o, i) => `
                  <div class="quiz-option" id="opt-${i}" onclick="selectOption(${i},${step.correct})">
                    <span style="font-weight:700;color:var(--text-muted);margin-right:10px">${String.fromCharCode(65+i)}.</span>${o}
                  </div>`).join('')}
              </div>
            </div>
            <div id="quiz-feedback" style="display:none;margin-bottom:16px;padding:16px;border-radius:var(--radius-md);font-size:14px;font-weight:500"></div>
            <button class="btn" id="quiz-next" style="display:none" onclick="nextStep()">Next →</button>`;
        }
        document.getElementById('lesson-content').innerHTML = html;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function nextStep() {
        const lesson = getCurrentLesson();
        currentStepIdx++;
        saveCourseState();
        if (currentStepIdx >= lesson.steps.length) {
            completeLesson();
        } else {
            renderStep();
        }
    }

    function completeLesson() {
        const lesson = getCurrentLesson();
        const earned = lesson.xpReward;
        addXP(earned);
        const completed = users[currentUser.email]?.completed || [];
        if (!completed.includes(currentLessonIdx)) completed.push(currentLessonIdx);
        users[currentUser.email].completed = completed;
        localStorage.setItem('pya_users', JSON.stringify(users));
        saveCourseState();

        document.getElementById('lesson-progress-bar').style.width = '100%';
        document.getElementById('lesson-step-label').textContent = 'Done! 🎉';

        const nextGlobal = currentLessonIdx + 1;
        const hasNext = GLOBAL_LESSON_MAP[nextGlobal] !== undefined;
        const nextBtn = hasNext ?
            `<button class="btn-outline" onclick="startLesson(${nextGlobal})">Next Lesson →</button>` :
            `<button class="btn" onclick="goBack()">🎓 View Curriculum</button>`;

        document.getElementById('lesson-content').innerHTML = `
          <div class="complete-screen">
            <div class="confetti">🎉</div>
            <h2 style="font-size:26px;font-weight:800;color:var(--text-primary);margin-bottom:10px;letter-spacing:-0.03em">Lesson Complete!</h2>
            <p style="color:var(--text-muted);font-size:15px;margin-bottom:8px">You earned</p>
            <div style="font-size:40px;font-weight:800;color:var(--accent);margin-bottom:24px">+${earned} XP</div>
            <p style="color:var(--text-secondary);margin-bottom:30px;line-height:1.6">Excellent work finishing <strong>${lesson.title}</strong>!<br>Keep up the momentum.</p>
            <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap">
              <button class="btn-outline" onclick="goBack()">← Back to Curriculum</button>
              ${nextBtn}
            </div>
          </div>`;
        updateXPDisplay();
        if (completed.length >= ALL_LESSONS.length) {
            setTimeout(() => showToast('👑 Congratulations! You completed the entire Python curriculum!'), 500);
        }
    }

    /* ── QUIZ ── */
    function selectOption(i, correct) {
        if (selectedOption !== null) return;
        selectedOption = i;
        document.querySelectorAll('.quiz-option').forEach((el, idx) => {
            if (idx === correct) el.classList.add('correct');
            else if (idx === i && i !== correct) el.classList.add('wrong');
        });
        const fb = document.getElementById('quiz-feedback');
        fb.style.display = 'block';
        if (i === correct) {
            fb.style.cssText =
                'display:block;background:#ecfdf5;color:#065f46;padding:16px;border-radius:8px;font-size:14px;font-weight:500;margin-bottom:16px';
            fb.innerHTML = '✅ <strong>Correct!</strong> Well done! +5 bonus XP';
            addXP(5);
        } else {
            fb.style.cssText =
                'display:block;background:#fef2f2;color:#991b1b;padding:16px;border-radius:8px;font-size:14px;font-weight:500;margin-bottom:16px';
            const lesson = getCurrentLesson();
            const correctText = lesson.steps[currentStepIdx].options[correct];
            fb.innerHTML = `❌ Not quite. The correct answer is: <strong>${correctText}</strong>`;
        }
        document.getElementById('quiz-next').style.display = 'inline-block';
    }

    /* ── CODE RUNNER ── */

    async function runLessonCode() {
        const code = document.getElementById('code-editor');
        if (!code) return;

        if (codeChallengeSolved) {
            document.getElementById('next-btn').style.display = 'inline-block';
            return;
        }

        const lesson = getCurrentLesson();
        const step = lesson.steps[currentStepIdx];
        const out = document.getElementById('run-output');
        out.style.display = 'block';
        out.className = 'output-box';

        let result = '';
        if (currentPath === 'python') {
            const { output } = await runPython(code.value);
            result = output;
        } else {
            result = code.value;
        }

        out.innerHTML = '<span style="color:#4ade80">> ' + result.replace(/\n/g, '<br>> ') + '</span>';

        let passed = false;
        const exp = step.expected;
        const resultLower = result.toLowerCase();
        passed = resultLower.includes(exp.toLowerCase());

        if (passed) {
            codeChallengeSolved = true;
            out.innerHTML += '\n\n<span style="color:#86efac;font-weight:600">✅ Correct! Great job! +3 bonus XP</span>';
            document.getElementById('next-btn').style.display = 'inline-block';
            addXP(3);
        } else {
            out.className = 'output-box error';
            out.innerHTML += '\n\n<span style="color:#f87171">❌ Not quite. Check your code and try again. Hint: <strong>' + exp + '</strong></span>';
        }
    }

    /* ── AI HINT ── */
    async function getHint() {
        const lesson = getCurrentLesson();
        const step = lesson.steps[currentStepIdx];
        const code = document.getElementById('code-editor').value;
        const hb = document.getElementById('hint-box');
        hb.style.display = 'block';
        hb.innerHTML =
            '<div class="thinking"><div class="dot-anim"></div><div class="dot-anim"></div><div class="dot-anim"></div></div> Getting a hint from AI...';

        try {
            const res = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'claude-sonnet-4-20250514',
                    max_tokens: 250,
                    messages: [{ role: 'user',
                        content: `You are a Python tutor. Give a SHORT helpful hint (2-3 sentences max) for this challenge. Do NOT give the direct solution code.\n\nChallenge: "${step.instruction}"\n\nStudent's current code:\n${code}\n\nProvide only the hint text, no markdown.` }]
                })
            });
            const data = await res.json();
            hb.innerHTML = '💡 <strong>Hint:</strong> ' + data.content[0].text;
        } catch (_) {
            hb.innerHTML =
                '💡 <strong>Hint:</strong> Think about what function or syntax the challenge is asking for. Break it down step by step — what needs to happen first?';
        }
    }

    /* ── AI TUTOR CHAT ── */
    async function sendChat() {
        const input = document.getElementById('chat-input');
        const msg = input.value.trim();
        if (!msg) return;
        input.value = '';
        const msgs = document.getElementById('chat-messages');
        msgs.innerHTML += `<div class="user-bubble">${msg}</div>`;
        const thinkId = 'think-' + Date.now();
        msgs.innerHTML +=
            `<div class="ai-bubble" id="${thinkId}"><div class="thinking"><div class="dot-anim"></div><div class="dot-anim"></div><div class="dot-anim"></div></div></div>`;
        msgs.scrollTop = msgs.scrollHeight;

        try {
            const res = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'claude-sonnet-4-20250514',
                    max_tokens: 700,
                    messages: [{ role: 'user',
                        content: `You are a friendly, encouraging Python tutor for learners of all levels. Keep answers clear and concise. Use simple examples. Format with plain text only (no markdown). Question: ${msg}` }]
                })
            });
            const data = await res.json();
            document.getElementById(thinkId).textContent = data.content[0].text;
        } catch (_) {
            document.getElementById(thinkId).textContent =
                'Oops! I had trouble connecting to the AI. Please try again in a moment.';
        }
        msgs.scrollTop = msgs.scrollHeight;
    }

    /* ── SANDBOX ── */
    async function runSandbox() {
        const out = document.getElementById('sandbox-output');
        const webPreview = document.getElementById('web-preview-container');

        // Update current file content in memory
        sandboxFiles[currentFile] = document.getElementById('sandbox-code').value;

        if (currentPath === 'python') {
            out.style.display = 'block';
            webPreview.style.display = 'none';
            out.className = 'output-box';
            out.textContent = 'Running...';
            const { output, globals } = await runPython(sandboxFiles['main.py'], sandboxFiles);
            out.innerHTML = '<span style="color:#4ade80">> ' + output.replace(/\n/g, '<br>> ') + '</span>';
            renderInspector(globals);
        } else {
            out.style.display = 'none';
            webPreview.style.display = 'block';
            renderWebPreview();
        }
    }

    function renderWebPreview() {
        const iframe = document.getElementById('web-preview');
        const html = sandboxFiles['index.html'] || sandboxFiles['main.py'] || ''; // fallback
        const css = Object.keys(sandboxFiles).filter(f => f.endsWith('.css')).map(f => `<style>${sandboxFiles[f]}</style>`).join('\n');
        const js = Object.keys(sandboxFiles).filter(f => f.endsWith('.js')).map(f => `<script>${sandboxFiles[f]}</script>`).join('\n');

        const blob = new Blob([`
            <!DOCTYPE html>
            <html>
            <head>${css}</head>
            <body>
                ${html}
                ${js}
            </body>
            </html>
        `], { type: 'text/html' });

        iframe.src = URL.createObjectURL(blob);
    }

    function renderInspector(globals) {
        const container = document.getElementById('inspector-content');
        if (!container) return;

        if (Object.keys(globals).length === 0) {
            container.innerHTML = '<div style="color:var(--text-muted);font-style:italic">No variables defined.</div>';
            return;
        }

        container.innerHTML = Object.entries(globals).map(([k, v]) => `
            <div class="var-row">
                <span class="var-name">${k}</span>
                <span class="var-val">${JSON.stringify(v)}</span>
            </div>
        `).join('');
    }

    function clearSandbox() {
        document.getElementById('sandbox-code').value = '';
        sandboxFiles[currentFile] = '';
        const out = document.getElementById('sandbox-output');
        const webPreview = document.getElementById('web-preview-container');
        out.style.display = 'none';
        webPreview.style.display = 'none';
        out.innerHTML = '';
    }

    function loadSandboxExample() {
        if (currentPath === 'python') {
            sandboxFiles = {
                'main.py': `# Multi-file example\nimport math\nfrom utils import greet\n\nprint(greet("Developer"))\nprint("Square root of 16 is:", math.sqrt(16))\n`,
                'utils.py': `def greet(name):\n    return f"Hello, {name}! Working from utils.py"\n`
            };
            currentFile = 'main.py';
        } else {
            sandboxFiles = {
                'index.html': `<h1>Hello Web!</h1>\n<p>Click the button below.</p>\n<button id="btn">Click Me</button>\n`,
                'styles.css': `body { font-family: sans-serif; text-align: center; background: #f0f4f8; }\nh1 { color: #10b981; }\n`,
                'script.js': `document.getElementById('btn').onclick = () => {\n  alert('Web Engineer path active!');\n};`
            };
            currentFile = 'index.html';
        }
        renderVFS();
        switchFile(currentFile);
        document.getElementById('sandbox-output').style.display = 'none';
        document.getElementById('web-preview-container').style.display = 'none';
    }

    function renderVFS() {
        const list = document.getElementById('vfs-list');
        if (!list) return;
        list.innerHTML = Object.keys(sandboxFiles).map(name => `
            <div class="vfs-item ${name === currentFile ? 'active' : ''}" onclick="switchFile('${name}')">
                <i class="ti ti-file-code"></i>
                <span>${name}</span>
                ${name !== 'main.py' ? `<i class="ti ti-trash" style="margin-left:auto;font-size:11px" onclick="deleteFile('${name}', event)"></i>` : ''}
            </div>
        `).join('');
    }

    function switchFile(name) {
        // Save current file content
        sandboxFiles[currentFile] = document.getElementById('sandbox-code').value;

        currentFile = name;
        document.getElementById('current-filename').textContent = name;
        document.getElementById('sandbox-code').value = sandboxFiles[name];
        renderVFS();
    }

    function updateFileContent() {
        sandboxFiles[currentFile] = document.getElementById('sandbox-code').value;
    }

    function addNewFile() {
        const name = prompt("Enter filename (e.g. data.py):");
        if (name && name.endsWith('.py') && !sandboxFiles[name]) {
            sandboxFiles[name] = '# New Python file\n';
            switchFile(name);
        } else if (name) {
            alert("Invalid filename or file already exists. Use .py extension.");
        }
    }

    function deleteFile(name, event) {
        event.stopPropagation();
        if (name === 'main.py') return;
        if (confirm(`Delete ${name}?`)) {
            delete sandboxFiles[name];
            if (currentFile === name) switchFile('main.py');
            else renderVFS();
        }
    }

    /* ==========================================
       INIT
   ========================================== */
    updateXPDisplay();
    Object.assign(window, {
        switchAuthTab,
        signup,
        login,
        logout,
        showDashTab,
        switchPath,
        toggleModule,
        startLesson,
        goBack,
        nextStep,
        selectOption,
        runLessonCode,
        getHint,
        sendChat,
        runSandbox,
        clearSandbox,
        loadSandboxExample,
        addNewFile,
        switchFile,
        updateFileContent,
        deleteFile
    });

    // Auto-open the first active module so new learners start at the correct entry point without feeling lost.
    setTimeout(() => {
        const modules = document.querySelectorAll('.module-card');
        const firstActiveModule = getFirstActiveModuleIndex();
        const targetModule = modules[firstActiveModule];
        if (targetModule && !targetModule.classList.contains('locked') && document.getElementById(
                'screen-dashboard').classList.contains('active')) {
            toggleModule(firstActiveModule);
        }
    }, 100);

    // Restore logged in user on page load
    window.onload = async function () {
        await initPyodide();
        const savedEmail = localStorage.getItem('pya_current_user');

        if (savedEmail && users[savedEmail]) {
            currentUser = {
                email: savedEmail,
                ...users[savedEmail]
            };
            restoreCourseState();
            enterCourse();
            if (currentScreen === 'lesson') {
                const mapped = GLOBAL_LESSON_MAP[currentLessonIdx];
                if (mapped) {
                    currentModuleIdx = mapped.moduleIdx;
                    document.getElementById('lesson-title-header').textContent = mapped.lesson.title;
                    showScreen('lesson');
                    renderStep();
                }
            }
        } else {
            showScreen('auth');
        }
    };

    console.log('🐍 PyAcademy ready!');
    console.log(`📚 ${MODULES.length} Modules | ${ALL_LESSONS.length} Lessons | Full Python Curriculum`);
    console.log('🤖 AI Tutor | ⚡ Sandbox | 🏆 Achievements');
    console.log('💡 Tip: Start with Module 1 and work your way through!');

