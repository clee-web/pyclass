// UPDATE NEEDED: Replace the signup() function in main.js with this version
// This replaces the localStorage-only approach with Supabase integration

// FIND THIS:
    function signup() {
        hideErr('signup-err');
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const pass = document.getElementById('signup-pass').value;
        if (!name) return showErr('signup-err', 'Please enter your name.');
        if (!email.includes('@')) return showErr('signup-err', 'Enter a valid email address.');
        if (pass.length < 6) return showErr('signup-err', 'Password must be at least 6 characters.');
        if (users[email]) return showErr('signup-err', 'An account with this email already exists.');
        users[email] = { name, pass, xp: 0, completed: [], totalXP: 0 };
        localStorage.setItem('pya_users', JSON.stringify(users));
        currentUser = { email, ...users[email] };
        // SAVE SESSION
        localStorage.setItem('pya_current_user', email);
        xp = 0;
        totalXPEarned = 0;
        enterCourse();
        showScreen('dashboard');
    }

// REPLACE WITH THIS:
    async function signup() {
        hideErr('signup-err');
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const pass = document.getElementById('signup-pass').value;
        
        if (!name) return showErr('signup-err', 'Please enter your name.');
        if (!email.includes('@')) return showErr('signup-err', 'Enter a valid email address.');
        if (pass.length < 6) return showErr('signup-err', 'Password must be at least 6 characters.');
        
        // Try Supabase first
        try {
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email,
                password: pass,
            });
            
            if (authError) throw authError;
            if (!authData.user) throw new Error('Signup failed');
            
            // Save to users table
            const { error: dbError } = await supabase.from('users').insert([
                {
                    id: authData.user.id,
                    email,
                    full_name: name,
                    role: 'student',
                }
            ]);
            
            if (dbError) throw dbError;
            
            // Also save to localStorage as backup
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

