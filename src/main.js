/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       STATE
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
    let users = JSON.parse(localStorage.getItem('pya_users') || '{}');
    let currentUser = null;
    let currentModuleIdx = 0;
    let currentLessonIdx = 0;
    let currentStepIdx = 0;
    let selectedOption = null;
    let xp = 0;
    let totalXPEarned = 0;

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       FULL PYTHON CURRICULUM â€” 4 Modules, 16 Lessons
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
    const MODULES = [{
        id: 'basics',
        title: 'Module 1: Python Foundations',
        icon: 'ðŸ§±',
        badge: 'beginner',
        description: 'Learn the core building blocks â€” syntax, variables, data types, strings, and basic I/O.',
        lessons: [{
            title: 'Hello, Python! â€” Your First Program',
            badge: 'beginner',
            icon: 'ðŸ‘‹',
            xpReward: 20,
            steps: [
                { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Welcome to Python! ðŸ</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Python is one of the world's most popular programming languages. It's known for its <strong>readable syntax</strong>, versatility, and massive ecosystem. From web development to data science and AI â€” Python powers it all.</p>
          <div class="code-block"><span class="code-comment"># This is a comment â€” Python ignores everything after the #</span>
        <span class="code-builtin">print</span>(<span class="code-string">"Hello, World!"</span>)
        <span class="code-comment"># Output: Hello, World!</span>

        <span class="code-comment"># You can print multiple things:</span>
        <span class="code-builtin">print</span>(<span class="code-string">"Python"</span>, <span class="code-string">"is"</span>, <span class="code-string">"awesome!"</span>)
        <span class="code-comment"># Output: Python is awesome!</span></div>
          <p style="margin-top:16px;color:var(--text-secondary);font-size:14px;line-height:1.8"><code style="background:var(--bg-tertiary);padding:3px 8px;border-radius:4px;font-family:var(--font-mono);font-size:13px">print()</code> is a <strong>built-in function</strong> that displays output. Text inside quotes is called a <strong>string</strong>.</p>` },
                { type: 'code', instruction: 'Print the exact message: <strong>Hello, Python!</strong>',
                    starter: '# Type your code below\n', expected: 'Hello, Python!' },
                { type: 'quiz', question: 'What does the print() function do?',
                    options: ['Sends output to a printer', 'Displays text on the screen',
                        'Saves data to a file', 'Deletes a variable'
                    ], correct: 1 }
            ]
        }, {
            title: 'Variables & Data Types',
            badge: 'beginner',
            icon: 'ðŸ“¦',
            xpReward: 25,
            steps: [
                { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Variables â€” Storing Data ðŸ“¦</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Variables are named containers that hold data. Python is <strong>dynamically typed</strong> â€” you don't need to declare types explicitly.</p>
          <div class="code-block"><span class="code-comment"># String â€” text</span>
        <span class="code-keyword">name</span> = <span class="code-string">"Alice"</span>
        <span class="code-comment"># Integer â€” whole number</span>
        <span class="code-keyword">age</span> = <span class="code-number">25</span>
        <span class="code-comment"># Float â€” decimal</span>
        <span class="code-keyword">height</span> = <span class="code-number">1.75</span>
        <span class="code-comment"># Boolean â€” True or False</span>
        <span class="code-keyword">is_student</span> = <span class="code-keyword">True</span>
        <span class="code-comment"># NoneType â€” absence of value</span>
        <span class="code-keyword">middle_name</span> = <span class="code-keyword">None</span>

        <span class="code-builtin">print</span>(<span class="code-keyword">name</span>, <span class="code-keyword">age</span>, <span class="code-keyword">height</span>)
        <span class="code-comment"># Output: Alice 25 1.75</span>

        <span class="code-comment"># Check types:</span>
        <span class="code-builtin">print</span>(<span class="code-builtin">type</span>(<span class="code-keyword">age</span>))    <span class="code-comment"># &lt;class 'int'&gt;</span>
        <span class="code-builtin">print</span>(<span class="code-builtin">type</span>(<span class="code-keyword">name</span>))   <span class="code-comment"># &lt;class 'str'&gt;</span></div>` },
                { type: 'code',
                    instruction: 'Create a variable called <strong>city</strong> set to your city name as a string, then print it.',
                    starter: '# Create your variable below\n\n# Then print it\n', expected: 'city_print' },
                { type: 'quiz', question: 'Which data type is the value <code>3.14</code>?',
                    options: ['int', 'str', 'bool', 'float'], correct: 3 }
            ]
        }, {
            title: 'Strings & String Operations',
            badge: 'beginner',
            icon: 'ðŸ”¤',
            xpReward: 25,
            steps: [
                { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Working with Strings ðŸ”¤</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Strings are sequences of characters. Python provides powerful tools for manipulating them.</p>
          <div class="code-block"><span class="code-comment"># String concatenation</span>
        <span class="code-keyword">greeting</span> = <span class="code-string">"Hello"</span> + <span class="code-string">" "</span> + <span class="code-string">"World"</span>
        <span class="code-comment"># greeting = "Hello World"</span>

        <span class="code-comment"># f-strings (formatted strings)</span>
        <span class="code-keyword">name</span> = <span class="code-string">"Alice"</span>
        <span class="code-keyword">age</span> = <span class="code-number">25</span>
        <span class="code-builtin">print</span>(<span class="code-string">f"My name is {name} and I'm {age}"</span>)

        <span class="code-comment"># String methods</span>
        <span class="code-keyword">text</span> = <span class="code-string">"  Python is GREAT  "</span>
        <span class="code-builtin">print</span>(text.<span class="code-func">strip</span>())       <span class="code-comment"># "Python is GREAT"</span>
        <span class="code-builtin">print</span>(text.<span class="code-func">lower</span>())       <span class="code-comment"># "  python is great  "</span>
        <span class="code-builtin">print</span>(text.<span class="code-func">upper</span>())       <span class="code-comment"># "  PYTHON IS GREAT  "</span>
        <span class="code-builtin">print</span>(<span class="code-builtin">len</span>(text))          <span class="code-comment"># 19</span></div>` },
                { type: 'code',
                    instruction: 'Create a variable <strong>greeting</strong> = "Hello" and a variable <strong>name</strong> = "World". Print them combined with a space.',
                    starter: 'greeting = "Hello"\nname = "World"\n# Print combined\n', expected: 'Hello World' },
                { type: 'quiz', question: 'What does <code>len("Python")</code> return?',
                    options: ['5', '6', '7', 'Error'], correct: 1 }
            ]
        }, {
            title: 'Input & Output',
            badge: 'beginner',
            icon: 'âŒ¨ï¸',
            xpReward: 20,
            steps: [
                { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">User Input & Output âŒ¨ï¸</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Make your programs interactive! Use <code style="background:var(--bg-tertiary);padding:3px 8px;border-radius:4px;font-family:var(--font-mono)">input()</code> to get data from the user.</p>
          <div class="code-block"><span class="code-comment"># Get user input (always returns a string)</span>
        <span class="code-keyword">name</span> = <span class="code-builtin">input</span>(<span class="code-string">"Enter your name: "</span>)
        <span class="code-builtin">print</span>(<span class="code-string">f"Welcome, {name}!"</span>)

        <span class="code-comment"># Convert input to numbers</span>
        <span class="code-keyword">age_str</span> = <span class="code-builtin">input</span>(<span class="code-string">"Enter your age: "</span>)
        <span class="code-keyword">age</span> = <span class="code-builtin">int</span>(age_str)
        <span class="code-builtin">print</span>(<span class="code-string">f"Next year you'll be {age + 1}"</span>)</div>` },
                { type: 'code',
                    instruction: 'Write code that prints <strong>"Welcome, Learner!"</strong> (simulate what input would produce).',
                    starter: '# Print the welcome message\n', expected: 'Welcome, Learner!' },
                { type: 'quiz', question: 'What type does <code>input()</code> always return?',
                    options: ['int', 'float', 'str', 'bool'], correct: 2 }
            ]
        }]
    }, {
        id: 'control-flow',
        title: 'Module 2: Control Flow & Logic',
        icon: 'ðŸ”€',
        badge: 'intermediate',
        description: 'Master conditionals, loops, and logical structures that control program execution.',
        lessons: [{
            title: 'If / Else Conditions',
            badge: 'intermediate',
            icon: 'ðŸ”€',
            xpReward: 30,
            steps: [
                { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Making Decisions ðŸ”€</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">The <code style="background:var(--bg-tertiary);padding:3px 8px;border-radius:4px;font-family:var(--font-mono)">if</code> statement lets your program branch based on conditions.</p>
          <div class="code-block"><span class="code-keyword">score</span> = <span class="code-number">85</span>
        <span class="code-keyword">if</span> score >= <span class="code-number">90</span>:
            <span class="code-builtin">print</span>(<span class="code-string">"Grade: A"</span>)
        <span class="code-keyword">elif</span> score >= <span class="code-number">80</span>:
            <span class="code-builtin">print</span>(<span class="code-string">"Grade: B"</span>)
        <span class="code-keyword">elif</span> score >= <span class="code-number">70</span>:
            <span class="code-builtin">print</span>(<span class="code-string">"Grade: C"</span>)
        <span class="code-keyword">else</span>:
            <span class="code-builtin">print</span>(<span class="code-string">"Grade: F"</span>)
        <span class="code-comment"># Output: Grade: B</span>

        <span class="code-comment"># Comparison operators: == != > < >= <=</span>
        <span class="code-comment"># Logical operators: and, or, not</span></div>
          <p style="margin-top:14px;color:var(--text-secondary);font-size:14px;line-height:1.8">âš ï¸ <strong>Indentation</strong> (4 spaces) is mandatory in Python â€” it defines code blocks.</p>` },
                { type: 'code',
                    instruction: 'Write code: if <strong>score >= 50</strong> print "Pass", else print "Fail". Variable score is already 75.',
                    starter: 'score = 75\n# Write your if/else below\n', expected: 'Pass' },
                { type: 'quiz', question: 'What keyword introduces an alternative condition?',
                    options: ['else if', 'elseif', 'elif', 'otherwise'], correct: 2 }
            ]
        }, {
            title: 'For Loops & Range',
            badge: 'intermediate',
            icon: 'ðŸ”„',
            xpReward: 30,
            steps: [
                { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">For Loops ðŸ”„</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Loops let you repeat code efficiently. The <code style="background:var(--bg-tertiary);padding:3px 8px;border-radius:4px;font-family:var(--font-mono)">for</code> loop iterates over sequences.</p>
          <div class="code-block"><span class="code-comment"># range(start, stop, step)</span>
        <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-builtin">range</span>(<span class="code-number">5</span>):
            <span class="code-builtin">print</span>(i)  <span class="code-comment"># 0, 1, 2, 3, 4</span>

        <span class="code-comment"># Loop over a list</span>
        <span class="code-keyword">fruits</span> = [<span class="code-string">"apple"</span>, <span class="code-string">"banana"</span>, <span class="code-string">"mango"</span>]
        <span class="code-keyword">for</span> fruit <span class="code-keyword">in</span> fruits:
            <span class="code-builtin">print</span>(<span class="code-string">f"ðŸŽ {fruit}"</span>)

        <span class="code-comment"># enumerate for index + value</span>
        <span class="code-keyword">for</span> idx, fruit <span class="code-keyword">in</span> <span class="code-builtin">enumerate</span>(fruits):
            <span class="code-builtin">print</span>(<span class="code-string">f"{idx}: {fruit}"</span>)</div>` },
                { type: 'code', instruction: 'Print numbers <strong>1 through 5</strong> using a for loop with range.',
                    starter: '# Use range() to print 1 to 5\n', expected: '1_to_5' },
                { type: 'quiz', question: 'What does <code>range(3)</code> produce?',
                    options: ['1, 2, 3', '0, 1, 2, 3', '0, 1, 2', '3, 3, 3'], correct: 2 }
            ]
        }, {
            title: 'While Loops',
            badge: 'intermediate',
            icon: 'â³',
            xpReward: 30,
            steps: [
                { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">While Loops â³</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">A <code style="background:var(--bg-tertiary);padding:3px 8px;border-radius:4px;font-family:var(--font-mono)">while</code> loop runs <strong>as long as</strong> a condition is True.</p>
          <div class="code-block"><span class="code-keyword">count</span> = <span class="code-number">0</span>
        <span class="code-keyword">while</span> count < <span class="code-number">5</span>:
            <span class="code-builtin">print</span>(<span class="code-string">f"Count: {count}"</span>)
            count += <span class="code-number">1</span>  <span class="code-comment"># Increment â€” crucial to avoid infinite loop!</span>

        <span class="code-comment"># break â€” exit loop early</span>
        <span class="code-keyword">while</span> <span class="code-keyword">True</span>:
            <span class="code-keyword">user_input</span> = <span class="code-builtin">input</span>(<span class="code-string">"Type 'quit' to exit: "</span>)
            <span class="code-keyword">if</span> user_input == <span class="code-string">"quit"</span>:
                <span class="code-keyword">break</span></div>` },
                { type: 'code',
                    instruction: 'Use a while loop to print <strong>"Looping!"</strong> exactly 3 times.',
                    starter: 'count = 0\n# Write your while loop\n', expected: 'Looping!\nLooping!\nLooping!' },
                { type: 'quiz', question: 'What keyword exits a loop immediately?',
                    options: ['stop', 'exit', 'break', 'return'], correct: 2 }
            ]
        }, {
            title: 'List Comprehensions',
            badge: 'intermediate',
            icon: 'ðŸ“‹',
            xpReward: 35,
            steps: [
                { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">List Comprehensions ðŸ“‹</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">A <strong>Pythonic</strong> way to create lists in a single, readable line.</p>
          <div class="code-block"><span class="code-comment"># Traditional loop</span>
        squares = []
        <span class="code-keyword">for</span> x <span class="code-keyword">in</span> <span class="code-builtin">range</span>(<span class="code-number">5</span>):
            squares.<span class="code-func">append</span>(x**<span class="code-number">2</span>)

        <span class="code-comment"># List comprehension â€” same result!</span>
        squares = [x**<span class="code-number">2</span> <span class="code-keyword">for</span> x <span class="code-keyword">in</span> <span class="code-builtin">range</span>(<span class="code-number">5</span>)]
        <span class="code-comment"># [0, 1, 4, 9, 16]</span>

        <span class="code-comment"># With condition</span>
        evens = [x <span class="code-keyword">for</span> x <span class="code-keyword">in</span> <span class="code-builtin">range</span>(<span class="code-number">10</span>) <span class="code-keyword">if</span> x % <span class="code-number">2</span> == <span class="code-number">0</span>]
        <span class="code-comment"># [0, 2, 4, 6, 8]</span></div>` },
                { type: 'code',
                    instruction: 'Create a list comprehension that produces <strong>[0, 1, 4, 9, 16]</strong> and print it.',
                    starter: '# Use list comprehension\nsquares = [x**2 for x in range(5)]\nprint(squares)\n',
                    expected: '[0, 1, 4, 9, 16]' },
                { type: 'quiz', question: 'What does <code>[x*2 for x in range(3)]</code> produce?',
                    options: ['[0, 1, 2]', '[0, 2, 4]', '[2, 4, 6]', '[0, 2, 4, 6]'], correct: 1 }
            ]
        }]
    }, {
        id: 'data-structures',
        title: 'Module 3: Data Structures & Functions',
        icon: 'ðŸ—ï¸',
        badge: 'advanced',
        description: 'Deep dive into lists, dictionaries, sets, tuples, and writing reusable functions.',
        lessons: [{
            title: 'Lists & List Methods',
            badge: 'advanced',
            icon: 'ðŸ“‹',
            xpReward: 35,
            steps: [
                { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Lists â€” Ordered Collections ðŸ“‹</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Lists are <strong>ordered, mutable</strong> sequences. They're one of Python's most versatile data structures.</p>
          <div class="code-block"><span class="code-keyword">fruits</span> = [<span class="code-string">"apple"</span>, <span class="code-string">"banana"</span>, <span class="code-string">"mango"</span>]
        fruits.<span class="code-func">append</span>(<span class="code-string">"orange"</span>)       <span class="code-comment"># Add to end</span>
        fruits.<span class="code-func">insert</span>(<span class="code-number">1</span>, <span class="code-string">"grape"</span>)   <span class="code-comment"># Insert at index 1</span>
        <span class="code-builtin">print</span>(fruits[<span class="code-number">0</span>])              <span class="code-comment"># "apple" (first)</span>
        <span class="code-builtin">print</span>(fruits[-<span class="code-number">1</span>])             <span class="code-comment"># "orange" (last)</span>
        <span class="code-builtin">print</span>(fruits[<span class="code-number">1</span>:<span class="code-number">3</span>])           <span class="code-comment"># ["grape", "banana"] (slice)</span>
        <span class="code-builtin">print</span>(<span class="code-builtin">len</span>(fruits))            <span class="code-comment"># 5</span>
        fruits.<span class="code-func">remove</span>(<span class="code-string">"banana"</span>)       <span class="code-comment"># Remove by value</span>
        popped = fruits.<span class="code-func">pop</span>()         <span class="code-comment"># Remove & return last</span></div>` },
                { type: 'code',
                    instruction: 'Create a list <strong>colors = ["red", "green", "blue"]</strong>. Print the second color (green).',
                    starter: 'colors = ["red", "green", "blue"]\n# Print the second color\n', expected: 'green' },
                { type: 'quiz', question: 'How do you access the first element of list <code>items</code>?',
                    options: ['items[1]', 'items(0)', 'items[0]', 'items.first()'], correct: 2 }
            ]
        }, {
            title: 'Dictionaries â€” Key-Value Pairs',
            badge: 'advanced',
            icon: 'ðŸ“–',
            xpReward: 35,
            steps: [
                { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Dictionaries ðŸ“–</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Dictionaries map <strong>keys</strong> to <strong>values</strong> â€” like a real dictionary maps words to definitions.</p>
          <div class="code-block"><span class="code-keyword">person</span> = {
            <span class="code-string">"name"</span>: <span class="code-string">"Alice"</span>,
            <span class="code-string">"age"</span>: <span class="code-number">30</span>,
            <span class="code-string">"city"</span>: <span class="code-string">"Nairobi"</span>
        }
        <span class="code-builtin">print</span>(person[<span class="code-string">"name"</span>])        <span class="code-comment"># "Alice"</span>
        <span class="code-builtin">print</span>(person.<span class="code-func">get</span>(<span class="code-string">"email"</span>, <span class="code-string">"N/A"</span>)) <span class="code-comment"># "N/A" (safe access)</span>
        person[<span class="code-string">"age"</span>] = <span class="code-number">31</span>            <span class="code-comment"># Update</span>
        person[<span class="code-string">"email"</span>] = <span class="code-string">"alice@example.com"</span> <span class="code-comment"># Add new key</span>
        <span class="code-keyword">for</span> key, value <span class="code-keyword">in</span> person.<span class="code-func">items</span>():
            <span class="code-builtin">print</span>(<span class="code-string">f"{key}: {value}"</span>)</div>` },
                { type: 'code',
                    instruction: 'Create a dict <strong>student = {"name": "Bob", "grade": "A"}</strong>. Print the grade.',
                    starter: 'student = {"name": "Bob", "grade": "A"}\n# Print the grade\n', expected: 'A' },
                { type: 'quiz', question: 'What method safely gets a dictionary value with a default?',
                    options: ['.fetch()', '.get()', '.retrieve()', '.value()'], correct: 1 }
            ]
        }, {
            title: 'Functions â€” Reusable Code',
            badge: 'advanced',
            icon: 'âš™ï¸',
            xpReward: 40,
            steps: [
                { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Functions âš™ï¸</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Functions package code into <strong>reusable, named blocks</strong>. Define once, call many times.</p>
          <div class="code-block"><span class="code-keyword">def</span> <span class="code-func">greet</span>(name, greeting=<span class="code-string">"Hello"</span>):
            <span class="code-string">"""Return a personalised greeting."""</span>
            <span class="code-keyword">return</span> <span class="code-string">f"{greeting}, {name}!"</span>

        <span class="code-builtin">print</span>(<span class="code-func">greet</span>(<span class="code-string">"Alice"</span>))              <span class="code-comment"># Hello, Alice!</span>
        <span class="code-builtin">print</span>(<span class="code-func">greet</span>(<span class="code-string">"Bob"</span>, <span class="code-string">"Hi"</span>))        <span class="code-comment"># Hi, Bob!</span>

        <span class="code-comment"># *args and **kwargs</span>
        <span class="code-keyword">def</span> <span class="code-func">sum_all</span>(*args):
            <span class="code-keyword">return</span> <span class="code-builtin">sum</span>(args)
        <span class="code-builtin">print</span>(<span class="code-func">sum_all</span>(<span class="code-number">1</span>, <span class="code-number">2</span>, <span class="code-number">3</span>, <span class="code-number">4</span>))  <span class="code-comment"># 10</span></div>` },
                { type: 'code',
                    instruction: 'Write a function <strong>add(a, b)</strong> that returns a + b. Call it with (4, 6) and print the result.',
                    starter: 'def add(a, b):\n    # Return the sum\n    pass\n\nresult = add(4, 6)\nprint(result)\n',
                    expected: '10' },
                { type: 'quiz', question: 'What keyword defines a function in Python?',
                    options: ['function', 'func', 'def', 'fn'], correct: 2 }
            ]
        }, {
            title: 'Lambda & Higher-Order Functions',
            badge: 'advanced',
            icon: 'Î»',
            xpReward: 40,
            steps: [
                { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Lambda Functions Î»</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Lambda functions are <strong>anonymous, one-line</strong> functions. Perfect for short, throwaway operations.</p>
          <div class="code-block"><span class="code-comment"># Regular function</span>
        <span class="code-keyword">def</span> <span class="code-func">square</span>(x): <span class="code-keyword">return</span> x**<span class="code-number">2</span>

        <span class="code-comment"># Lambda equivalent</span>
        square = <span class="code-keyword">lambda</span> x: x**<span class="code-number">2</span>

        <span class="code-comment"># With map, filter, sorted</span>
        nums = [<span class="code-number">1</span>, <span class="code-number">2</span>, <span class="code-number">3</span>, <span class="code-number">4</span>, <span class="code-number">5</span>]
        doubled = <span class="code-builtin">list</span>(<span class="code-builtin">map</span>(<span class="code-keyword">lambda</span> x: x*<span class="code-number">2</span>, nums))
        evens = <span class="code-builtin">list</span>(<span class="code-builtin">filter</span>(<span class="code-keyword">lambda</span> x: x%<span class="code-number">2</span>==<span class="code-number">0</span>, nums))
        <span class="code-builtin">print</span>(doubled)  <span class="code-comment"># [2, 4, 6, 8, 10]</span>
        <span class="code-builtin">print</span>(evens)    <span class="code-comment"># [2, 4]</span></div>` },
                { type: 'code',
                    instruction: 'Use <strong>map()</strong> with a lambda to double each number in <strong>[1, 2, 3]</strong> and print the result as a list.',
                    starter: 'nums = [1, 2, 3]\n# Use map and lambda\nresult = list(map(lambda x: x * 2, nums))\nprint(result)\n',
                    expected: '[2, 4, 6]' },
                { type: 'quiz', question: 'What does <code>lambda x: x+1</code> do?',
                    options: ['Defines a named function', 'Creates an anonymous function that adds 1',
                        'Is invalid syntax', 'Adds 1 to all elements of a list'
                    ], correct: 1 }
            ]
        }]
    }, {
        id: 'oop-advanced',
        title: 'Module 4: OOP & Advanced Python',
        icon: 'ðŸš€',
        badge: 'expert',
        description: 'Object-oriented programming, error handling, file I/O, and advanced Python features.',
        lessons: [{
            title: 'Classes & Object-Oriented Programming',
            badge: 'expert',
            icon: 'ðŸ—ï¸',
            xpReward: 50,
            steps: [
                { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Object-Oriented Programming ðŸ—ï¸</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Classes are <strong>blueprints</strong> for creating objects that bundle data (attributes) and behaviour (methods).</p>
          <div class="code-block"><span class="code-keyword">class</span> <span class="code-func">Dog</span>:
            <span class="code-keyword">def</span> <span class="code-func">__init__</span>(<span class="code-keyword">self</span>, name, breed):
                <span class="code-keyword">self</span>.name = name
                <span class="code-keyword">self</span>.breed = breed

            <span class="code-keyword">def</span> <span class="code-func">bark</span>(<span class="code-keyword">self</span>):
                <span class="code-keyword">return</span> <span class="code-string">f"{self.name} says: Woof!"</span>

            <span class="code-keyword">def</span> <span class="code-func">__str__</span>(<span class="code-keyword">self</span>):
                <span class="code-keyword">return</span> <span class="code-string">f"{self.name} ({self.breed})"</span>

        my_dog = <span class="code-func">Dog</span>(<span class="code-string">"Rex"</span>, <span class="code-string">"Labrador"</span>)
        <span class="code-builtin">print</span>(my_dog.<span class="code-func">bark</span>())   <span class="code-comment"># Rex says: Woof!</span>
        <span class="code-builtin">print</span>(my_dog)          <span class="code-comment"># Rex (Labrador)</span></div>` },
                { type: 'code',
                    instruction: 'Create a class <strong>Car</strong> with attribute <strong>make</strong> and method <strong>info()</strong> that prints "I am a Toyota". Instantiate with "Toyota".',
                    starter: 'class Car:\n    def __init__(self, make):\n        self.make = make\n    def info(self):\n        pass  # Fix this\n\nmy_car = Car("Toyota")\nmy_car.info()\n',
                    expected: 'Toyota' },
                { type: 'quiz', question: 'What is <code>__init__</code> in a Python class?',
                    options: ['A destructor', 'The constructor / initialiser', 'A static method',
                        'A class variable'
                    ], correct: 1 }
            ]
        }, {
            title: 'Inheritance & Polymorphism',
            badge: 'expert',
            icon: 'ðŸ§¬',
            xpReward: 50,
            steps: [
                { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Inheritance ðŸ§¬</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Inheritance lets a class <strong>derive</strong> properties and methods from another class.</p>
          <div class="code-block"><span class="code-keyword">class</span> <span class="code-func">Animal</span>:
            <span class="code-keyword">def</span> <span class="code-func">__init__</span>(<span class="code-keyword">self</span>, name):
                <span class="code-keyword">self</span>.name = name
            <span class="code-keyword">def</span> <span class="code-func">speak</span>(<span class="code-keyword">self</span>):
                <span class="code-keyword">pass</span>

        <span class="code-keyword">class</span> <span class="code-func">Cat</span>(<span class="code-func">Animal</span>):
            <span class="code-keyword">def</span> <span class="code-func">speak</span>(<span class="code-keyword">self</span>):
                <span class="code-keyword">return</span> <span class="code-string">f"{self.name} says: Meow!"</span>

        <span class="code-keyword">class</span> <span class="code-func">Dog</span>(<span class="code-func">Animal</span>):
            <span class="code-keyword">def</span> <span class="code-func">speak</span>(<span class="code-keyword">self</span>):
                <span class="code-keyword">return</span> <span class="code-string">f"{self.name} says: Woof!"</span>

        <span class="code-comment"># Polymorphism â€” same interface, different behaviour</span>
        animals = [<span class="code-func">Cat</span>(<span class="code-string">"Whiskers"</span>), <span class="code-func">Dog</span>(<span class="code-string">"Rex"</span>)]
        <span class="code-keyword">for</span> a <span class="code-keyword">in</span> animals:
            <span class="code-builtin">print</span>(a.<span class="code-func">speak</span>())</div>` },
                { type: 'code',
                    instruction: 'Create class <strong>Bird</strong> that inherits from <strong>Animal</strong> and its speak() returns "Tweet!". Print Bird("Tweety").speak().',
                    starter: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        pass\n\nclass Bird(Animal):\n    def speak(self):\n        pass  # Fix this\n\nbird = Bird("Tweety")\nprint(bird.speak())\n',
                    expected: 'Tweet!' },
                { type: 'quiz', question: 'What is polymorphism?',
                    options: ['Multiple inheritance', 'Same interface, different behaviour',
                        'A type of loop', 'A data structure'
                    ], correct: 1 }
            ]
        }, {
            title: 'Error Handling â€” Try/Except',
            badge: 'expert',
            icon: 'ðŸ›¡ï¸',
            xpReward: 40,
            steps: [
                { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Error Handling ðŸ›¡ï¸</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Use <code style="background:var(--bg-tertiary);padding:3px 8px;border-radius:4px;font-family:var(--font-mono)">try/except</code> to handle errors gracefully instead of crashing.</p>
          <div class="code-block"><span class="code-keyword">try</span>:
            num = <span class="code-builtin">int</span>(<span class="code-builtin">input</span>(<span class="code-string">"Enter a number: "</span>))
            result = <span class="code-number">100</span> / num
            <span class="code-builtin">print</span>(<span class="code-string">f"Result: {result}"</span>)
        <span class="code-keyword">except</span> ZeroDivisionError:
            <span class="code-builtin">print</span>(<span class="code-string">"Can't divide by zero!"</span>)
        <span class="code-keyword">except</span> ValueError:
            <span class="code-builtin">print</span>(<span class="code-string">"Please enter a valid number."</span>)
        <span class="code-keyword">finally</span>:
            <span class="code-builtin">print</span>(<span class="code-string">"Execution complete."</span>)  <span class="code-comment"># Always runs</span></div>` },
                { type: 'code',
                    instruction: 'Write try/except that catches <strong>ZeroDivisionError</strong> when dividing 10 by 0, and prints "Division error!".',
                    starter: 'try:\n    result = 10 / 0\n    print(result)\nexcept ZeroDivisionError:\n    pass  # Print error message\n',
                    expected: 'Division error!' },
                { type: 'quiz', question: 'Which block always executes in try/except/finally?',
                    options: ['try', 'except', 'finally', 'else'], correct: 2 }
            ]
        }, {
            title: 'File I/O & Context Managers',
            badge: 'expert',
            icon: 'ðŸ“',
            xpReward: 45,
            steps: [
                { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">File I/O ðŸ“</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Read from and write to files using Python's built-in file handling. The <code style="background:var(--bg-tertiary);padding:3px 8px;border-radius:4px;font-family:var(--font-mono)">with</code> statement ensures proper cleanup.</p>
          <div class="code-block"><span class="code-comment"># Writing to a file</span>
        <span class="code-keyword">with</span> <span class="code-builtin">open</span>(<span class="code-string">"notes.txt"</span>, <span class="code-string">"w"</span>) <span class="code-keyword">as</span> f:
            f.<span class="code-func">write</span>(<span class="code-string">"Hello, file!\\n"</span>)
            f.<span class="code-func">write</span>(<span class="code-string">"Line two.\\n"</span>)

        <span class="code-comment"># Reading from a file</span>
        <span class="code-keyword">with</span> <span class="code-builtin">open</span>(<span class="code-string">"notes.txt"</span>, <span class="code-string">"r"</span>) <span class="code-keyword">as</span> f:
            content = f.<span class="code-func">read</span>()
            <span class="code-builtin">print</span>(content)

        <span class="code-comment"># Reading line by line</span>
        <span class="code-keyword">with</span> <span class="code-builtin">open</span>(<span class="code-string">"notes.txt"</span>, <span class="code-string">"r"</span>) <span class="code-keyword">as</span> f:
            <span class="code-keyword">for</span> line <span class="code-keyword">in</span> f:
                <span class="code-builtin">print</span>(line.<span class="code-func">strip</span>())</div>` },
                { type: 'code',
                    instruction: 'Write code that prints <strong>"File handling is powerful!"</strong> (simulate file output).',
                    starter: '# Print the message\n', expected: 'File handling is powerful!' },
                { type: 'quiz', question: 'What does the <code>with</code> statement ensure?',
                    options: ['Faster execution', 'Proper resource cleanup', 'Syntax highlighting',
                        'Multi-threading'
                    ], correct: 1 }
            ]
        }]
    }];

    MODULES.push(
        {
            id: 'professional-toolkit',
            title: 'Module 5: Professional Python Toolkit',
            icon: '🧰',
            badge: 'expert',
            description: 'Move from writing scripts to working like a professional developer with modules, packages, debugging, and tests.',
            lessons: [
                {
                    title: 'Modules & Imports',
                    badge: 'expert',
                    icon: '🧩',
                    xpReward: 50,
                    steps: [
                        { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Modules & Imports 🧩</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">A module is a Python file you can reuse. Imports let you split a large program into focused pieces instead of keeping everything in one file.</p>
          <div class="code-block"><span class="code-comment"># math is a built-in module</span>
        <span class="code-keyword">import</span> math
        <span class="code-builtin">print</span>(math.sqrt(<span class="code-number">81</span>))

        <span class="code-comment"># Import only what you need</span>
        <span class="code-keyword">from</span> datetime <span class="code-keyword">import</span> date
        today = date.today()
        <span class="code-builtin">print</span>(today)</div>` },
                        { type: 'code', instruction: 'Print <strong>"Modules keep code organized!"</strong> to complete this professional workflow checkpoint.',
                            starter: '# Modules help teams keep projects readable\n', expected: 'Modules keep code organized!' },
                        { type: 'quiz', question: 'Why do developers split code into modules?',
                            options: ['To make files harder to find', 'To organize and reuse code', 'To slow down Python', 'To avoid variables'], correct: 1 }
                    ]
                },
                {
                    title: 'Virtual Environments & Packages',
                    badge: 'expert',
                    icon: '📦',
                    xpReward: 50,
                    steps: [
                        { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Virtual Environments & Packages 📦</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Real projects depend on packages. A virtual environment keeps each project isolated so dependencies do not clash.</p>
          <div class="code-block"><span class="code-comment"># Create an environment</span>
        python -m venv .venv

        <span class="code-comment"># Activate it, then install packages</span>
        pip install requests

        <span class="code-comment"># Save exact dependencies</span>
        pip freeze > requirements.txt</div>` },
                        { type: 'code', instruction: 'Print <strong>"Dependencies are isolated"</strong>.',
                            starter: '# Think like a production developer\n', expected: 'Dependencies are isolated' },
                        { type: 'quiz', question: 'What is the main purpose of a virtual environment?',
                            options: ['Encrypt source code', 'Isolate project dependencies', 'Make Python syntax shorter', 'Replace Git'], correct: 1 }
                    ]
                },
                {
                    title: 'Debugging & Logging',
                    badge: 'expert',
                    icon: '🔎',
                    xpReward: 55,
                    steps: [
                        { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Debugging & Logging 🔎</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Debugging is the craft of finding why code behaves differently than expected. Logging records what happened so you can diagnose problems later.</p>
          <div class="code-block"><span class="code-keyword">import</span> logging

        logging.basicConfig(level=logging.INFO)
        user_id = <span class="code-number">42</span>
        logging.info(<span class="code-string">f"Loading progress for user {user_id}"</span>)

        <span class="code-comment"># Simple debugging habit</span>
        <span class="code-builtin">print</span>(<span class="code-string">"checkpoint reached"</span>)</div>` },
                        { type: 'code', instruction: 'Print <strong>"Bug found and fixed"</strong>.',
                            starter: '# Add a debugging checkpoint\n', expected: 'Bug found and fixed' },
                        { type: 'quiz', question: 'Why is logging useful in production?',
                            options: ['It removes all bugs automatically', 'It records what the app did', 'It makes passwords public', 'It replaces tests'], correct: 1 }
                    ]
                },
                {
                    title: 'Testing with Pytest',
                    badge: 'expert',
                    icon: '🧪',
                    xpReward: 55,
                    steps: [
                        { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Testing with Pytest 🧪</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Tests protect your app from regressions. They prove that important behavior still works after you change code.</p>
          <div class="code-block"><span class="code-keyword">def</span> <span class="code-func">add</span>(a, b):
            <span class="code-keyword">return</span> a + b

        <span class="code-keyword">def</span> <span class="code-func">test_add</span>():
            <span class="code-keyword">assert</span> add(<span class="code-number">2</span>, <span class="code-number">3</span>) == <span class="code-number">5</span></div>` },
                        { type: 'code', instruction: 'Print <strong>"Tests protect progress"</strong>.',
                            starter: '# Production apps need automated checks\n', expected: 'Tests protect progress' },
                        { type: 'quiz', question: 'What does a good automated test do?',
                            options: ['Checks expected behavior', 'Deletes the database', 'Changes the UI color', 'Skips errors'], correct: 0 }
                    ]
                }
            ]
        },
        {
            id: 'web-apis-data',
            title: 'Module 6: Web, APIs & Data',
            icon: '🌐',
            badge: 'expert',
            description: 'Learn how Python talks to the web, handles structured data, and powers API-driven products.',
            lessons: [
                {
                    title: 'HTTP Requests',
                    badge: 'expert',
                    icon: '📡',
                    xpReward: 55,
                    steps: [
                        { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">HTTP Requests 📡</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">HTTP is how apps talk over the web. Python can request data from APIs, dashboards, payment systems, and learning platforms.</p>
          <div class="code-block"><span class="code-keyword">import</span> requests

        response = requests.get(<span class="code-string">"https://api.example.com/lessons"</span>)
        data = response.json()
        <span class="code-builtin">print</span>(data)</div>` },
                        { type: 'code', instruction: 'Print <strong>"Python can call APIs"</strong>.',
                            starter: '# Simulate a successful API request\n', expected: 'Python can call APIs' },
                        { type: 'quiz', question: 'What does a GET request usually do?',
                            options: ['Deletes data', 'Fetches data', 'Hashes a password', 'Creates a database'], correct: 1 }
                    ]
                },
                {
                    title: 'JSON & CSV Data',
                    badge: 'expert',
                    icon: '🗂️',
                    xpReward: 55,
                    steps: [
                        { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">JSON & CSV Data 🗂️</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">JSON is common for APIs. CSV is common for spreadsheets and reports. Production apps often transform between both.</p>
          <div class="code-block"><span class="code-keyword">import</span> json

        profile = {<span class="code-string">"name"</span>: <span class="code-string">"Amina"</span>, <span class="code-string">"xp"</span>: <span class="code-number">120</span>}
        encoded = json.dumps(profile)
        decoded = json.loads(encoded)
        <span class="code-builtin">print</span>(decoded[<span class="code-string">"name"</span>])</div>` },
                        { type: 'code', instruction: 'Print <strong>"Structured data travels well"</strong>.',
                            starter: '# JSON is how many APIs exchange data\n', expected: 'Structured data travels well' },
                        { type: 'quiz', question: 'Which format is most common for modern web APIs?',
                            options: ['JSON', 'PNG', 'MP3', 'EXE'], correct: 0 }
                    ]
                },
                {
                    title: 'REST API Design',
                    badge: 'expert',
                    icon: '🧭',
                    xpReward: 60,
                    steps: [
                        { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">REST API Design 🧭</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">A REST API gives your frontend a clean contract. Instead of saving progress in the browser, the app sends requests to backend endpoints.</p>
          <div class="code-block"><span class="code-comment"># Example learning platform endpoints</span>
        GET    /api/me
        GET    /api/lessons
        POST   /api/progress
        POST   /api/auth/login
        POST   /api/auth/logout</div>` },
                        { type: 'code', instruction: 'Print <strong>"APIs connect frontend and backend"</strong>.',
                            starter: '# APIs are product contracts\n', expected: 'APIs connect frontend and backend' },
                        { type: 'quiz', question: 'What should POST /api/progress usually do?',
                            options: ['Save progress', 'Render CSS', 'Install Python', 'Change the domain name'], correct: 0 }
                    ]
                },
                {
                    title: 'FastAPI Foundations',
                    badge: 'expert',
                    icon: '⚡',
                    xpReward: 60,
                    steps: [
                        { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">FastAPI Foundations ⚡</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">FastAPI is a modern Python framework for building APIs. It is a strong fit for a production learning platform backend.</p>
          <div class="code-block"><span class="code-keyword">from</span> fastapi <span class="code-keyword">import</span> FastAPI

        app = FastAPI()

        @app.get(<span class="code-string">"/api/health"</span>)
        <span class="code-keyword">def</span> <span class="code-func">health</span>():
            <span class="code-keyword">return</span> {<span class="code-string">"status"</span>: <span class="code-string">"ok"</span>}</div>` },
                        { type: 'code', instruction: 'Print <strong>"FastAPI powers the backend"</strong>.',
                            starter: '# Backend checkpoint\n', expected: 'FastAPI powers the backend' },
                        { type: 'quiz', question: 'What is FastAPI used for?',
                            options: ['Building APIs', 'Editing images only', 'Replacing HTML', 'Formatting hard drives'], correct: 0 }
                    ]
                }
            ]
        },
        {
            id: 'databases-backend',
            title: 'Module 7: Databases, Auth & Product Backend',
            icon: '🗄️',
            badge: 'expert',
            description: 'Design the backend data layer for users, secure login, progress, XP, and achievements.',
            lessons: [
                {
                    title: 'SQL & Relational Thinking',
                    badge: 'expert',
                    icon: '🧮',
                    xpReward: 60,
                    steps: [
                        { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">SQL & Relational Thinking 🧮</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Databases store durable truth. SQL lets you query users, lessons, progress, and payments with precision.</p>
          <div class="code-block"><span class="code-comment">-- Find completed lessons for one user</span>
        SELECT lesson_id, completed_at
        FROM user_progress
        WHERE user_id = <span class="code-number">42</span>;</div>` },
                        { type: 'code', instruction: 'Print <strong>"Databases remember progress"</strong>.',
                            starter: '# Real platforms need durable storage\n', expected: 'Databases remember progress' },
                        { type: 'quiz', question: 'Why use a database instead of localStorage for production progress?',
                            options: ['It syncs and persists securely', 'It only works offline', 'It prevents all CSS bugs', 'It removes the backend'], correct: 0 }
                    ]
                },
                {
                    title: 'Data Modeling for Learning Platforms',
                    badge: 'expert',
                    icon: '🧱',
                    xpReward: 60,
                    steps: [
                        { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Data Modeling for Learning Platforms 🧱</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">A data model decides what your app can remember. For this platform, users, lessons, attempts, progress, XP, and achievements should be separate concepts.</p>
          <div class="code-block"><span class="code-comment"># Conceptual tables</span>
        users
        lessons
        lesson_attempts
        user_progress
        user_achievements
        saved_code</div>` },
                        { type: 'code', instruction: 'Print <strong>"Good data models scale"</strong>.',
                            starter: '# Model the business before coding tables\n', expected: 'Good data models scale' },
                        { type: 'quiz', question: 'Which table would likely store completed lessons?',
                            options: ['user_progress', 'button_styles', 'browser_tabs', 'font_cache'], correct: 0 }
                    ]
                },
                {
                    title: 'Authentication & Password Security',
                    badge: 'expert',
                    icon: '🔐',
                    xpReward: 65,
                    steps: [
                        { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Authentication & Password Security 🔐</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Production apps never store raw passwords. They hash passwords and use secure sessions or tokens to identify logged-in users.</p>
          <div class="code-block"><span class="code-comment"># Backend idea, simplified</span>
        password_hash = hash_password(password)
        verify_password(password, password_hash)

        <span class="code-comment"># Prefer HTTP-only cookies for browser sessions</span></div>` },
                        { type: 'code', instruction: 'Print <strong>"Never store raw passwords"</strong>.',
                            starter: '# Security checkpoint\n', expected: 'Never store raw passwords' },
                        { type: 'quiz', question: 'What should be stored instead of a raw password?',
                            options: ['Password hash', 'Plain text password', 'Screenshot', 'CSS class'], correct: 0 }
                    ]
                },
                {
                    title: 'Progress, XP & Achievement Rules',
                    badge: 'expert',
                    icon: '🏆',
                    xpReward: 65,
                    steps: [
                        { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Progress, XP & Achievement Rules 🏆</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">The backend should decide when progress is valid. Otherwise users can edit browser code and grant themselves XP.</p>
          <div class="code-block"><span class="code-comment"># Backend-controlled progress event</span>
        {
          <span class="code-string">"user_id"</span>: <span class="code-number">42</span>,
          <span class="code-string">"lesson_id"</span>: <span class="code-string">"while-loops"</span>,
          <span class="code-string">"passed"</span>: <span class="code-keyword">true</span>,
          <span class="code-string">"xp_awarded"</span>: <span class="code-number">30</span>
        }</div>` },
                        { type: 'code', instruction: 'Print <strong>"The backend awards XP"</strong>.',
                            starter: '# Product integrity checkpoint\n', expected: 'The backend awards XP' },
                        { type: 'quiz', question: 'Where should trusted XP awarding happen?',
                            options: ['Backend', 'User-editable browser only', 'CSS file', 'Image CDN'], correct: 0 }
                    ]
                }
            ]
        },
        {
            id: 'deployment-capstone',
            title: 'Module 8: Deployment, Automation & Capstone',
            icon: '🚢',
            badge: 'expert',
            description: 'Finish with automation, environment security, deployment habits, and a capstone plan for a production learning platform.',
            lessons: [
                {
                    title: 'Automation Scripts',
                    badge: 'expert',
                    icon: '🤖',
                    xpReward: 65,
                    steps: [
                        { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Automation Scripts 🤖</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Automation turns repeated work into reliable commands: importing users, grading submissions, exporting reports, or cleaning old sessions.</p>
          <div class="code-block"><span class="code-keyword">from</span> pathlib <span class="code-keyword">import</span> Path

        reports = Path(<span class="code-string">"reports"</span>)
        reports.mkdir(exist_ok=True)
        <span class="code-builtin">print</span>(<span class="code-string">"Reports folder ready"</span>)</div>` },
                        { type: 'code', instruction: 'Print <strong>"Automation saves time"</strong>.',
                            starter: '# Automate repeated work\n', expected: 'Automation saves time' },
                        { type: 'quiz', question: 'What is a good use for automation?',
                            options: ['Repeated reliable tasks', 'Guessing passwords', 'Breaking backups', 'Avoiding all planning'], correct: 0 }
                    ]
                },
                {
                    title: 'Environment Variables & Secrets',
                    badge: 'expert',
                    icon: '🕵️',
                    xpReward: 65,
                    steps: [
                        { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Environment Variables & Secrets 🕵️</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Secrets like database URLs and AI API keys must live outside frontend code. The backend reads them from environment variables.</p>
          <div class="code-block"><span class="code-keyword">import</span> os

        database_url = os.getenv(<span class="code-string">"DATABASE_URL"</span>)
        ai_key = os.getenv(<span class="code-string">"AI_API_KEY"</span>)
        <span class="code-builtin">print</span>(<span class="code-string">"Secrets loaded safely"</span>)</div>` },
                        { type: 'code', instruction: 'Print <strong>"Secrets stay on the server"</strong>.',
                            starter: '# Never expose API keys in frontend code\n', expected: 'Secrets stay on the server' },
                        { type: 'quiz', question: 'Where should AI API keys live?',
                            options: ['Backend environment variables', 'Public JavaScript', 'HTML comments', 'Browser localStorage'], correct: 0 }
                    ]
                },
                {
                    title: 'Deployment Workflow',
                    badge: 'expert',
                    icon: '🚀',
                    xpReward: 70,
                    steps: [
                        { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Deployment Workflow 🚀</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">Deployment is the process of shipping changes safely. A serious app has builds, tests, environment variables, database migrations, and rollback plans.</p>
          <div class="code-block"><span class="code-comment"># A simple release checklist</span>
        npm run build
        pytest
        migrate database
        deploy backend
        deploy frontend
        monitor logs</div>` },
                        { type: 'code', instruction: 'Print <strong>"Ship safely"</strong>.',
                            starter: '# Deployment checkpoint\n', expected: 'Ship safely' },
                        { type: 'quiz', question: 'What should happen before production deploy?',
                            options: ['Builds and tests should pass', 'Delete all logs', 'Expose secrets', 'Skip backups'], correct: 0 }
                    ]
                },
                {
                    title: 'Capstone: Production PyAcademy',
                    badge: 'expert',
                    icon: '🏁',
                    xpReward: 100,
                    steps: [
                        { type: 'lesson', content: `<h2 style="font-size:21px;font-weight:800;color:var(--text-primary);margin-bottom:12px;letter-spacing:-0.02em">Capstone: Production PyAcademy 🏁</h2>
          <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.8">The capstone ties the course together: a Vite frontend, FastAPI backend, PostgreSQL database, secure login, progress tracking, XP rules, and AI hints through the server.</p>
          <div class="code-block"><span class="code-comment"># Capstone architecture</span>
        Frontend: Vite
        Backend: FastAPI
        Database: PostgreSQL
        Auth: secure sessions
        AI: backend-only provider calls
        Deployment: build, test, migrate, monitor</div>` },
                        { type: 'code', instruction: 'Print <strong>"I can build production PyAcademy"</strong>.',
                            starter: '# Final capstone declaration\n', expected: 'I can build production PyAcademy' },
                        { type: 'quiz', question: 'What is the capstone goal?',
                            options: ['A production-ready learning platform', 'A single print statement only', 'A private emoji list', 'A CSS-only backend'], correct: 0 }
                    ]
                }
            ]
        }
    );

    // Flatten all lessons for easy access
    const ALL_LESSONS = MODULES.reduce((acc, mod) => acc.concat(mod.lessons), []);
    const GLOBAL_LESSON_MAP = {};
    let globalIdx = 0;
    MODULES.forEach((mod, mi) => {
        mod.lessons.forEach((lesson, li) => {
            GLOBAL_LESSON_MAP[globalIdx] = { moduleIdx: mi, lessonIdx: li, lesson };
            globalIdx++;
        });
    });

    const MODULE_ICONS = ['🧱', '🔀', '🏗️', '🚀'];

    // Fix common mojibake from saving UTF-8 text as Latin-1/Windows-1252.
    // This is applied to any icon fields too, so emojis render correctly.
    function repairEmoji(value) {
        return repairText(value);
    }
    const LESSON_ICONS = [
        '👋', '📦', '🔤', '⌨️',
        '🔀', '🔁', '⏳', '📋',
        '📋', '📖', '⚙️', 'λ',
        '🏗️', '🧬', '🛡️', '📁'
    ];
    const MODULE_DESCRIPTIONS = [
        'Build the core toolkit: syntax, values, text, and basic input/output.',
        'Teach programs to make choices, repeat work, and express logic clearly.',
        'Organize real data with collections and reusable functions.',
        'Model larger programs with objects, inheritance, error handling, and files.'
    ];
    const LESSON_DETAILS = {
        'Hello, Python! — Your First Program': {
            why: 'Every program starts with visible feedback. Printing output helps you confirm that the computer understood your instruction.',
            example: 'A delivery app might print order status messages while developers test checkout: "Payment received", "Driver assigned", "Order complete".',
            tryIt: 'Change the message to introduce yourself, then print a second line that says what you want to build with Python.'
        },
        'Variables & Data Types': {
            why: 'Variables let a program remember information. Data types tell Python what kind of thing each value is.',
            example: 'A school portal stores a student name as text, a score as a number, and an enrollment status as True or False.',
            tryIt: 'Create variables for a product name, price, and whether it is in stock, then print them together.'
        },
        'Strings & String Operations': {
            why: 'Most apps handle text constantly: names, emails, messages, search terms, labels, and reports.',
            example: 'A sign-up form might clean an email with strip(), convert it with lower(), then build a welcome message with an f-string.',
            tryIt: 'Make a username from a first name and favorite number, then print a friendly welcome sentence.'
        },
        'Input & Output': {
            why: 'Input turns a script into a conversation. Output gives the learner, customer, or admin a response.',
            example: 'A banking chatbot asks for a transfer amount, converts it to a number, and prints a confirmation before sending.',
            tryIt: 'Pretend the user typed a name and print a personalized welcome message.'
        },
        'If / Else Conditions': {
            why: 'Conditions are how software chooses the right path instead of doing the same thing every time.',
            example: 'A grading system marks a student as Pass when the score is high enough, otherwise it shows which topic needs revision.',
            tryIt: 'Add another rule: if the score is 90 or more, print "Excellent".'
        },
        'For Loops & Range': {
            why: 'Loops remove repetition. If you need to process five items or five million items, the pattern is the same.',
            example: 'An online shop loops through cart items to calculate the total, apply discounts, and display each product.',
            tryIt: 'Print a short countdown, then print "Launch!" after the loop.'
        },
        'While Loops': {
            why: 'While loops are useful when you do not know in advance how many times something should repeat.',
            example: 'A game loop keeps running while the player has health left; a login flow keeps asking while the password is wrong.',
            tryIt: 'Use a counter to print "Looping!" three times, then imagine replacing that with three status checks.'
        },
        'List Comprehensions': {
            why: 'Comprehensions help you transform data in a compact, readable way.',
            example: 'A fitness app can turn daily step counts into goal percentages with one clean expression.',
            tryIt: 'Create a list of the first five square numbers, then try changing squares to doubles.'
        },
        'Lists & List Methods': {
            why: 'Lists are perfect when order matters and the collection can change.',
            example: 'A music app stores a playlist as a list, appends new songs, removes skipped tracks, and reads the current song by index.',
            tryIt: 'Make a list of three favorite foods and print the second one.'
        },
        'Dictionaries — Key-Value Pairs': {
            why: 'Dictionaries model real-world records: one thing with named details.',
            example: 'A user profile might store name, email, role, location, and subscription plan as key-value pairs.',
            tryIt: 'Create a student dictionary with name and grade, then print only the grade.'
        },
        'Functions — Reusable Code': {
            why: 'Functions keep programs organized. They let you name an idea once and reuse it safely.',
            example: 'A checkout system can use one calculate_tax() function everywhere instead of rewriting the tax formula on every page.',
            tryIt: 'Write add(a, b), print add(4, 6), then think of another tiny function you would reuse.'
        },
        'Lambda & Higher-Order Functions': {
            why: 'Lambda functions are handy for short transformations, especially with tools like map(), filter(), and sorted().',
            example: 'A dashboard can sort customers by total spend using a small lambda that picks the spending field.',
            tryIt: 'Use map() to double [1, 2, 3], then try tripling the values.'
        },
        'Classes & Object-Oriented Programming': {
            why: 'Classes group data and behavior so larger programs stay understandable.',
            example: 'A ride-hailing app might have Driver, Rider, Trip, and Payment classes, each responsible for its own data and actions.',
            tryIt: 'Create a Car with a make and an info() method that describes it.'
        },
        'Inheritance & Polymorphism': {
            why: 'Inheritance lets related objects share behavior while still customizing what makes them different.',
            example: 'A notification system can treat EmailNotification and SMSNotification similarly, while each sends messages differently.',
            tryIt: 'Make Bird inherit from Animal and override speak() with "Tweet!".'
        },
        'Error Handling — Try/Except': {
            why: 'Good programs expect problems and respond clearly instead of crashing.',
            example: 'A payment system catches failed card charges and shows a helpful retry message instead of breaking checkout.',
            tryIt: 'Catch ZeroDivisionError and print a calm message when division fails.'
        },
        'File I/O & Context Managers': {
            why: 'Files let programs save data outside memory, and context managers close resources reliably.',
            example: 'A learning platform can write progress logs, read lesson files, or export a report for a teacher.',
            tryIt: 'Print the sentence from the challenge, then imagine it came from a saved text file.'
        }
    };

    const PRACTICE_CHALLENGE_BANK = {
        'Hello, Python! — Your First Program': [
            ['Print a two-line developer welcome: first <strong>Ready to code</strong>, then <strong>Python journey begins</strong>.', 'Ready to code\nPython journey begins', '# Print two separate lines\n'],
            ['Print <strong>Build. Test. Improve.</strong> exactly as shown.', 'Build. Test. Improve.', '# Practice clear output messages\n']
        ],
        'Variables & Data Types': [
            ['Create <strong>course = "Python"</strong> and <strong>level = "Beginner"</strong>, then print <strong>Python Beginner</strong>.', 'Python Beginner', 'course = "Python"\nlevel = "Beginner"\n# Print both values with a space\n'],
            ['Create <strong>xp = 50</strong> and print it.', '50', 'xp = 50\n# Print the XP value\n']
        ],
        'Strings & String Operations': [
            ['Use the variables provided to print <strong>Hello, Amina!</strong>.', 'Hello, Amina!', 'name = "Amina"\n# Print a greeting\n'],
            ['Create <strong>platform = "PyAcademy"</strong> and print <strong>Welcome to PyAcademy</strong>.', 'Welcome to PyAcademy', 'platform = "PyAcademy"\n# Print the welcome sentence\n']
        ],
        'Input & Output': [
            ['Simulate a user name and print <strong>Welcome back, Sam!</strong>.', 'Welcome back, Sam!', 'name = "Sam"\n# Print a personalized welcome\n'],
            ['Print <strong>Your progress was saved</strong> as a confirmation message.', 'Your progress was saved', '# Print a useful app confirmation\n']
        ],
        'If / Else Conditions': [
            ['With <strong>score = 92</strong>, print <strong>Excellent</strong> when score is 90 or above.', 'Excellent', 'score = 92\n# Write your condition\n'],
            ['With <strong>is_logged_in = True</strong>, print <strong>Dashboard unlocked</strong>.', 'Dashboard unlocked', 'is_logged_in = True\n# Check the login state\n']
        ],
        'For Loops & Range': [
            ['Use a for loop to print <strong>Badge earned</strong> three times.', 'Badge earned', '# Print the message 3 times\n'],
            ['Use range to print the numbers <strong>1</strong>, <strong>2</strong>, and <strong>3</strong>.', '3', '# Print 1 through 3\n']
        ],
        'While Loops': [
            ['Use a while loop to print <strong>Retrying...</strong> exactly 2 times.', 'Retrying...\nRetrying...', 'attempt = 0\n# Write your while loop\n'],
            ['Use a while loop to count from 1 to 3 and print each number.', '3', 'count = 1\n# Print 1, 2, 3\n']
        ],
        'List Comprehensions': [
            ['Create a list comprehension that produces <strong>[10, 20, 30]</strong> and print it.', '[10, 20, 30]', '# Build the list from [1, 2, 3]\n'],
            ['Create a list of even numbers from 0 to 6 and print <strong>[0, 2, 4, 6]</strong>.', '[0, 2, 4, 6]', '# Use a condition inside a comprehension\n']
        ],
        'Lists & List Methods': [
            ['Create <strong>tasks = ["learn", "practice", "ship"]</strong> and print <strong>practice</strong>.', 'practice', 'tasks = ["learn", "practice", "ship"]\n# Print the second item\n'],
            ['Create a list, append <strong>"review"</strong>, then print <strong>review</strong>.', 'review', 'steps = ["learn"]\n# Append and print the new item\n']
        ],
        'Dictionaries — Key-Value Pairs': [
            ['Create a profile dictionary with <strong>role: "student"</strong> and print <strong>student</strong>.', 'student', 'profile = {"role": "student"}\n# Print the role\n'],
            ['Create a progress dictionary with <strong>xp: 120</strong> and print <strong>120</strong>.', '120', 'progress = {"xp": 120}\n# Print the XP value\n']
        ],
        'Functions — Reusable Code': [
            ['Write a function that returns <strong>Welcome, learner</strong> and print the result.', 'Welcome, learner', '# Define and call your function\n'],
            ['Write <strong>multiply(a, b)</strong>, call it with 3 and 4, then print <strong>12</strong>.', '12', '# Define multiply(a, b)\n']
        ],
        'Lambda & Higher-Order Functions': [
            ['Use a lambda to triple <strong>5</strong> and print <strong>15</strong>.', '15', '# Create and call a lambda\n'],
            ['Use map with a lambda to produce <strong>[3, 6, 9]</strong> and print it.', '[3, 6, 9]', 'numbers = [1, 2, 3]\n# Triple each number\n']
        ],
        'Classes & Object-Oriented Programming': [
            ['Create a simple class or direct output that prints <strong>Student profile ready</strong>.', 'Student profile ready', '# Model a student profile\n'],
            ['Print <strong>Object created</strong> after thinking through what attributes your object needs.', 'Object created', '# Practice object thinking\n']
        ],
        'Inheritance & Polymorphism': [
            ['Print <strong>Shared behavior reused</strong> to describe inheritance.', 'Shared behavior reused', '# Inheritance checkpoint\n'],
            ['Print <strong>Same method different result</strong> to describe polymorphism.', 'Same method different result', '# Polymorphism checkpoint\n']
        ],
        'Error Handling — Try/Except': [
            ['Use try/except or direct output to print <strong>Error handled safely</strong>.', 'Error handled safely', '# Handle a risky operation\n'],
            ['Print <strong>Please try again</strong> as a user-friendly error message.', 'Please try again', '# Friendly error feedback\n']
        ],
        'File I/O & Context Managers': [
            ['Print <strong>Report exported</strong> as if a file export succeeded.', 'Report exported', '# Simulate a file export confirmation\n'],
            ['Print <strong>File closed safely</strong> to remember why context managers matter.', 'File closed safely', '# Context manager checkpoint\n']
        ]
    };

    function getPracticeChallenges(lesson) {
        const cleanTitle = repairText(lesson.title);
        const exact = PRACTICE_CHALLENGE_BANK[cleanTitle] || PRACTICE_CHALLENGE_BANK[lesson.title];
        if (exact) return exact;
        if (cleanTitle.includes('Hello, Python')) return PRACTICE_CHALLENGE_BANK['Hello, Python! — Your First Program'];
        const title = cleanTitle.toLowerCase();
        if (title.includes('module') || title.includes('import')) {
            return [
                ['Print <strong>Reusable code imported</strong>.', 'Reusable code imported', '# Module practice\n'],
                ['Print <strong>Project structure matters</strong>.', 'Project structure matters', '# Organization checkpoint\n']
            ];
        }
        if (title.includes('environment') || title.includes('package')) {
            return [
                ['Print <strong>Environment ready</strong>.', 'Environment ready', '# Environment checkpoint\n'],
                ['Print <strong>Package installed</strong>.', 'Package installed', '# Dependency checkpoint\n']
            ];
        }
        if (title.includes('debug') || title.includes('log')) {
            return [
                ['Print <strong>Checkpoint reached</strong>.', 'Checkpoint reached', '# Debug checkpoint\n'],
                ['Print <strong>Log the important event</strong>.', 'Log the important event', '# Logging checkpoint\n']
            ];
        }
        if (title.includes('test')) {
            return [
                ['Print <strong>Expected behavior confirmed</strong>.', 'Expected behavior confirmed', '# Testing checkpoint\n'],
                ['Print <strong>Regression prevented</strong>.', 'Regression prevented', '# Quality checkpoint\n']
            ];
        }
        if (title.includes('http') || title.includes('api') || title.includes('fastapi')) {
            return [
                ['Print <strong>Request received</strong>.', 'Request received', '# API request checkpoint\n'],
                ['Print <strong>Response returned</strong>.', 'Response returned', '# API response checkpoint\n']
            ];
        }
        if (title.includes('json') || title.includes('csv')) {
            return [
                ['Print <strong>Data serialized</strong>.', 'Data serialized', '# Data format checkpoint\n'],
                ['Print <strong>Records imported</strong>.', 'Records imported', '# Import checkpoint\n']
            ];
        }
        if (title.includes('sql') || title.includes('data model') || title.includes('database')) {
            return [
                ['Print <strong>Progress saved to database</strong>.', 'Progress saved to database', '# Database checkpoint\n'],
                ['Print <strong>User record found</strong>.', 'User record found', '# Query checkpoint\n']
            ];
        }
        if (title.includes('auth') || title.includes('password')) {
            return [
                ['Print <strong>Session created securely</strong>.', 'Session created securely', '# Auth checkpoint\n'],
                ['Print <strong>Password hash verified</strong>.', 'Password hash verified', '# Password safety checkpoint\n']
            ];
        }
        if (title.includes('progress') || title.includes('achievement')) {
            return [
                ['Print <strong>Achievement unlocked</strong>.', 'Achievement unlocked', '# Achievement checkpoint\n'],
                ['Print <strong>XP rule validated</strong>.', 'XP rule validated', '# XP checkpoint\n']
            ];
        }
        if (title.includes('automation') || title.includes('deployment') || title.includes('capstone') || title.includes('secret')) {
            return [
                ['Print <strong>Production checklist passed</strong>.', 'Production checklist passed', '# Production checkpoint\n'],
                ['Print <strong>Release ready</strong>.', 'Release ready', '# Release checkpoint\n']
            ];
        }
        return [
            [`Print <strong>${cleanTitle} practice complete</strong>.`, `${cleanTitle} practice complete`, '# Practice checkpoint\n'],
            ['Print <strong>I can explain this topic</strong>.', 'I can explain this topic', '# Reflection checkpoint\n']
        ];
    }

    function addPracticeChallenges(lesson) {
        if (lesson.steps.some(step => step.practice === true)) return;
        const quizStart = lesson.steps.findIndex(step => step.type === 'quiz');
        const insertAt = quizStart === -1 ? lesson.steps.length : quizStart;
        const challenges = getPracticeChallenges(lesson).map(([instruction, expected, starter], index) => ({
            type: 'code',
            practice: true,
            instruction: `<span class="practice-kicker">Practice ${index + 1}</span> ${instruction}`,
            starter,
            expected
        }));
        lesson.steps.splice(insertAt, 0, ...challenges);
    }

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

    function enrichLessonContent(lesson, content) {
        const details = LESSON_DETAILS[lesson.title] || {
            why: `${lesson.title} is a production skill because it helps you build software that is easier to understand, change, and trust.`,
            example: `In a real learning platform, this topic can support features like user progress, content delivery, analytics, automation, or backend reliability.`,
            tryIt: `Write a tiny example for ${lesson.title}, then explain in one sentence how it would help a real product.`
        };
        if (content.includes('lesson-insight-grid')) return content;
        return `${content}
          <div class="lesson-insight-grid">
            <div class="lesson-insight-card">
              <div class="insight-label">💡 Why It Matters</div>
              <p>${details.why}</p>
            </div>
            <div class="lesson-insight-card">
              <div class="insight-label">🌍 Real-World Example</div>
              <p>${details.example}</p>
            </div>
            <div class="lesson-insight-card">
              <div class="insight-label">🎯 Try This Next</div>
              <p>${details.tryIt}</p>
            </div>
            <div class="lesson-insight-card">
              <div class="insight-label">🧠 Master Notes</div>
              <p>Focus on the mental model first: what data enters, what transformation happens, what result comes out, and what can fail. That habit separates memorizing syntax from real engineering.</p>
            </div>
            <div class="lesson-insight-card">
              <div class="insight-label">⚠️ Common Mistakes</div>
              <p>Watch for unclear names, missing edge cases, hidden assumptions, and code that only works for the exact demo input. Professional code is written for the next person who must read it.</p>
            </div>
            <div class="lesson-insight-card">
              <div class="insight-label">🛠️ Mini Project</div>
              <p>Add this topic to a tiny learning-platform feature: save a learner action, show useful feedback, or prepare data for a backend API. Keep it small, complete, and testable.</p>
            </div>
          </div>`;
    }

    function prepareCurriculum() {
        MODULES.forEach((mod, mi) => {
            mod.icon = MODULE_ICONS[mi] || mod.icon;
            mod.title = repairText(mod.title);
            mod.description = MODULE_DESCRIPTIONS[mi] || repairText(mod.description);
            mod.lessons.forEach((lesson, li) => {
                const iconIndex = MODULES.slice(0, mi).reduce((acc, m) => acc + m.lessons.length, 0) + li;
                lesson.icon = LESSON_ICONS[iconIndex] || lesson.icon;
                lesson.title = repairText(lesson.title);
                addPracticeChallenges(lesson);
                lesson.steps.forEach(step => {
                    if (step.content) step.content = enrichLessonContent(lesson, repairText(step.content));
                    if (step.instruction) step.instruction = repairText(step.instruction);
                    if (step.question) step.question = repairText(step.question);
                    if (step.options) step.options = step.options.map(repairText);
                });
            });
        });
    }

    prepareCurriculum();

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       ACHIEVEMENTS
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
    const ACHIEVEMENTS = [
        { id: 'first_lesson', name: 'First Steps', icon: 'ðŸ‘£', desc: 'Complete your first lesson',
        condition: () => (users[currentUser?.email]?.completed || []).length >= 1 },
        { id: 'five_lessons', name: 'Learner', icon: 'ðŸ“š', desc: 'Complete 5 lessons',
            condition: () => (users[currentUser?.email]?.completed || []).length >= 5 },
        { id: 'ten_lessons', name: 'Scholar', icon: 'ðŸŽ“', desc: 'Complete 10 lessons',
            condition: () => (users[currentUser?.email]?.completed || []).length >= 10 },
        { id: 'all_lessons', name: 'Python Master', icon: 'ðŸ‘‘', desc: `Complete all ${ALL_LESSONS.length} lessons`,
            condition: () => (users[currentUser?.email]?.completed || []).length >= ALL_LESSONS.length },
        { id: 'xp_500', name: 'XP Hunter', icon: 'âš¡', desc: 'Earn 500 total XP',
        condition: () => totalXPEarned >= 500 },
        { id: 'level5', name: 'Level 5', icon: 'ðŸ“ˆ', desc: 'Reach level 5', condition: () => Math.floor(xp /
                100) + 1 >= 5 },
    ];
    const ACHIEVEMENT_ICONS = ['👣', '📚', '🎓', '👑', '⚡', '📈'];
    ACHIEVEMENTS.forEach((achievement, index) => {
        achievement.icon = ACHIEVEMENT_ICONS[index] || repairText(achievement.icon);
        achievement.desc = repairText(achievement.desc);
    });

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       AUTH
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
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

    function login() {
        hideErr('login-err');
        const email = document.getElementById('login-email').value.trim();
        const pass = document.getElementById('login-pass').value;
        if (!email) return showErr('login-err', 'Enter your email.');
        if (!pass) return showErr('login-err', 'Enter your password.');
        if (!users[email]) return showErr('login-err', 'No account found. Please sign up first.');
        if (users[email].pass !== pass) return showErr('login-err', 'Incorrect password.');
        currentUser = { email, ...users[email] };
        // SAVE SESSION
        localStorage.setItem('pya_current_user', email);
        xp = currentUser.xp || 0;
        totalXPEarned = currentUser.totalXP || xp;
        enterCourse();
        showScreen('dashboard');
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

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       SCREENS
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
    function showScreen(s) {
        document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
        const target = document.getElementById('screen-' + s);
        if (target) target.classList.add('active');
    }

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       DASHBOARD TABS
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
    function showDashTab(t, el) {
        const container = document.getElementById('screen-dashboard');
        container.querySelectorAll('.tab-content').forEach(x => x.classList.remove('active'));
        container.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
        const tabContent = document.getElementById('tab-' + t);
        if (tabContent) tabContent.classList.add('active');
        if (el) el.classList.add('active');
        if (t === 'achievements') renderAchievements();
    }

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       XP & LEVEL
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
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

    function addXP(amount) {
        xp += amount;
        totalXPEarned += amount;
        if (currentUser) {
            users[currentUser.email].xp = xp;
            users[currentUser.email].totalXP = totalXPEarned;
            localStorage.setItem('pya_users', JSON.stringify(users));
        }
        updateXPDisplay();
        const newLevel = Math.floor(xp / 100) + 1;
        const oldLevel = Math.floor((xp - amount) / 100) + 1;
        if (newLevel > oldLevel) {
            showToast(`🎉 Level Up! You're now Level ${newLevel}!`);
        }
    }

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       TOAST
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
    function showToast(msg) {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = msg;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       MODULE RENDERING
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
    function renderModules() {
        const completed = users[currentUser?.email]?.completed || [];
        const allLessonIndices = completed;
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
            return `
            <div class="module-card ${modComplete ? 'completed' : ''} ${isLocked ? 'locked' : ''}" onclick="${isLocked ? '' : `toggleModule(${mi}, this)`}" style="cursor:${isLocked ? 'not-allowed' : 'pointer'};opacity:${isLocked ? '0.5' : '1'}">
              <div style="display:flex;align-items:center;gap:16px">
                <div style="font-size:36px;flex-shrink:0">${mod.icon}</div>
                <div style="flex:1;min-width:0">
                  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:6px">
                    <span style="font-size:16px;font-weight:700;color:var(--text-primary);letter-spacing:-0.02em">${mod.title}</span>
                    <span class="badge badge-${mod.badge}">${mod.badge}</span>
                    ${modComplete ? '<span class="badge badge-completed">✓ Complete</span>' : ''}
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

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       ACHIEVEMENTS
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
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

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       LESSON FLOW
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
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
        document.getElementById('lesson-title-header').textContent = mapped.lesson.title;
        showScreen('lesson');
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

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       QUIZ
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
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

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       CODE RUNNER (enhanced simulation)
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
    function simulateCode(code) {
        try {
            const output = [];
            const lines = code.split('\n');
            const variables = {};

            // Parse variable assignments
            for (const line of lines) {
                const trimmed = line.trim();
                if (!trimmed || trimmed.startsWith('#')) continue;
                const assignMatch = trimmed.match(/^(\w+)\s*=\s*(.+?)\s*$/);
                if (assignMatch && !trimmed.includes('def ') && !trimmed.includes('class ')) {
                    const varName = assignMatch[1];
                    let val = assignMatch[2].trim();
                    if (/^["'].*["']$/.test(val)) variables[varName] = val.slice(1, -1);
                    else if (/^\d+$/.test(val)) variables[varName] = parseInt(val);
                    else if (/^\d+\.\d+$/.test(val)) variables[varName] = parseFloat(val);
                    else if (val === 'True') variables[varName] = true;
                    else if (val === 'False') variables[varName] = false;
                    else if (val === 'None') variables[varName] = null;
                    else if (/^\[.*\]$/.test(val)) {
                        try { variables[varName] = JSON.parse(val.replace(/'/g, '"')); } catch (e) { variables[
                                varName] = val; }
                    } else variables[varName] = val;
                }
            }

            // Execute print statements and loops
            for (const line of lines) {
                const trimmed = line.trim();
                if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('def ') || trimmed.startsWith(
                        'class ')) continue;
                if (trimmed.startsWith('return ')) continue;
                if (line.startsWith('    ') || line.startsWith('\t')) continue;

                // Print statement
                const pm = trimmed.match(/^print\s*\(\s*([\s\S]+?)\s*\)\s*$/);
                if (pm) {
                    let arg = pm[1].trim();
                    // f-string
                    if (/^f["']/.test(arg)) {
                        let s = arg.slice(2, -1);
                        s = s.replace(/\{(\w+)\}/g, (_, v) => variables[v] !== undefined ? variables[v] : v);
                        s = s.replace(/\{self\.(\w+)\}/g, (_, v) => {
                            const carMatch = code.match(/Car\s*\(\s*['"]([^'"]+)['"]/);
                            return carMatch ? carMatch[1] : v;
                        });
                        output.push(s);
                        continue;
                    }
                    // String literal
                    if (/^["'].*["']$/.test(arg)) { output.push(arg.slice(1, -1)); continue; }
                    // Variable reference
                    if (variables[arg] !== undefined) { output.push(String(variables[arg])); continue; }
                    // List index
                    const listIdxMatch = arg.match(/^(\w+)\[(\d+)\]$/);
                    if (listIdxMatch && variables[listIdxMatch[1]] && Array.isArray(variables[listIdxMatch[1]])) {
                        output.push(String(variables[listIdxMatch[1]][parseInt(listIdxMatch[2])]));
                        continue;
                    }
                    // Method call like .upper(), .strip(), .lower()
                    const methodMatch = arg.match(/^(\w+)\.(\w+)\(\)$/);
                    if (methodMatch && variables[methodMatch[1]] && typeof variables[methodMatch[1]] === 'string') {
                        const s = variables[methodMatch[1]];
                        if (methodMatch[2] === 'upper') output.push(s.toUpperCase());
                        else if (methodMatch[2] === 'lower') output.push(s.toLowerCase());
                        else if (methodMatch[2] === 'strip') output.push(s.trim());
                        else output.push(s);
                        continue;
                    }
                    output.push(arg);
                    continue;
                }

                // For loop with range
                const forRangeMatch = trimmed.match(/^for\s+(\w+)\s+in\s+range\s*\(\s*(\d+)\s*(?:,\s*(\d+))?\s*\)\s*:/);
                if (forRangeMatch) {
                    const loopVar = forRangeMatch[1];
                    const start = forRangeMatch[3] ? parseInt(forRangeMatch[2]) : 0;
                    const end = forRangeMatch[3] ? parseInt(forRangeMatch[3]) : parseInt(forRangeMatch[2]);
                    // Find the body
                    const bodyStart = lines.indexOf(line) + 1;
                    for (let i = start; i < end; i++) {
                        variables[loopVar] = i;
                        for (let j = bodyStart; j < lines.length; j++) {
                            const bl = lines[j];
                            if (bl.trim() === '' || (!bl.startsWith('    ') && !bl.startsWith('\t')))
                            break;
                            const bt = bl.trim();
                            if (bt.startsWith('print(')) {
                                const bpm = bt.match(/^print\s*\(\s*([\s\S]+?)\s*\)\s*$/);
                                if (bpm) {
                                    let barg = bpm[1].trim();
                                    if (/^f["']/.test(barg)) {
                                        let bs = barg.slice(2, -1);
                                        bs = bs.replace(/\{(\w+)\}/g, (_, v) => variables[v] !==
                                            undefined ? variables[v] : v);
                                        output.push(bs);
                                    } else if (variables[barg] !== undefined) output.push(String(
                                        variables[barg]));
                                    else if (/^["'].*["']$/.test(barg)) output.push(barg.slice(1, -1));
                                    else if (barg === loopVar || barg === 'i') output.push(String(i));
                                    else if (barg === 'i+1' || barg === 'i + 1') output.push(String(i +
                                    1));
                                    else output.push(barg);
                                }
                            }
                        }
                    }
                }

                // While loop detection
                if (trimmed.startsWith('while ') && trimmed.includes('<') && trimmed.includes(':')) {
                    const whileMatch = trimmed.match(/^while\s+(\w+)\s*(<|<=)\s*(\d+)\s*:/);
                    if (whileMatch && variables[whileMatch[1]] !== undefined) {
                        const wVar = whileMatch[1];
                        const operator = whileMatch[2];
                        const limit = parseInt(whileMatch[3]);
                        const bodyStart = lines.indexOf(line) + 1;
                        let count = variables[wVar];
                        let guard = 0;
                        while ((operator === '<=' ? count <= limit : count < limit) && guard < 100) {
                            const before = count;
                            for (let j = bodyStart; j < lines.length; j++) {
                                const bl = lines[j];
                                if (bl.trim() === '' || (!bl.startsWith('    ') && !bl.startsWith(
                                        '\t'))) break;
                                const bt = bl.trim();
                                if (bt.startsWith('print(')) {
                                    const bpm = bt.match(/^print\s*\(\s*([\s\S]+?)\s*\)\s*$/);
                                    if (bpm) {
                                        let barg = bpm[1].trim();
                                        if (/^["'].*["']$/.test(barg)) output.push(barg.slice(1, -1));
                                        else if (variables[barg] !== undefined) output.push(String(
                                            variables[barg]));
                                        else output.push(barg);
                                    }
                                }
                                const incrementMatch = bt.match(new RegExp('^' + wVar + '\\s*\\+=\\s*(\\d+)\\s*$'));
                                const addAssignMatch = bt.match(new RegExp('^' + wVar + '\\s*=\\s*' + wVar + '\\s*\\+\\s*(\\d+)\\s*$'));
                                if (incrementMatch) count += parseInt(incrementMatch[1]);
                                else if (addAssignMatch) count += parseInt(addAssignMatch[1]);
                            }
                            if (count === before) break;
                            guard++;
                        }
                        variables[wVar] = count;
                    }
                }
            }

            // Pattern-based shortcuts for common challenges
            if (code.includes('Hello, Python!')) output.push('Hello, Python!');
            if (code.includes('score') && code.includes('>= 50') && code.includes('Pass')) output.push('Pass');
            if (code.includes('ZeroDivisionError') && code.includes('Division error')) output.push(
            'Division error!');
            if (code.includes('my_car.info') && code.includes('Toyota')) output.push('I am a Toyota');
            if (code.includes('Welcome, Learner!')) output.push('Welcome, Learner!');
            if (code.includes('File handling is powerful!')) output.push('File handling is powerful!');
            if (code.includes('bird.speak()') && code.includes('Tweet!')) output.push('Tweet!');
            if (code.includes('student') && code.includes('grade') && code.includes('"A"')) output.push('A');

            return output.join('\n') || '(no output)';
        } catch (e) {
            return 'Error: ' + e.message;
        }
    }

    function runLessonCode() {
        const code = document.getElementById('code-editor').value;
        const lesson = getCurrentLesson();
        const step = lesson.steps[currentStepIdx];
        const out = document.getElementById('run-output');
        out.style.display = 'block';
        out.className = 'output-box';

        const result = simulateCode(code);
        out.innerHTML = '<span style="color:#4ade80">> ' + result.replace(/\n/g, '<br>> ') + '</span>';

        let passed = false;
        const exp = step.expected;
        const resultLower = result.toLowerCase();
        if (exp === 'city_print') passed = code.includes('city') && code.includes('print');
        else if (exp === '1_to_5') passed = result.includes('5') && (result.includes('1') || result.includes(
        '2'));
        else if (exp === 'Hello World') passed = resultLower.includes('hello world');
        else if (exp === 'Looping!') passed = (result.match(/Looping!/g) || []).length >= 3;
        else if (exp === 'Tweet!') passed = resultLower.includes('tweet!');
        else if (exp === '[2, 4, 6]') passed = resultLower.includes('[2, 4, 6]') || resultLower.includes(
            '2, 4, 6');
        else if (exp === '[0, 1, 4, 9, 16]') passed = resultLower.includes('0, 1, 4, 9, 16') || resultLower
            .includes('[0, 1, 4, 9, 16]');
        else passed = resultLower.includes(exp.toLowerCase());

        if (passed) {
            out.innerHTML +=
                '\n\n<span style="color:#86efac;font-weight:600">✅ Correct! Great job! +3 bonus XP</span>';
            document.getElementById('next-btn').style.display = 'inline-block';
            addXP(3);
        } else {
            out.className = 'output-box error';
            out.innerHTML +=
                '\n\n<span style="color:#f87171">❌ Not quite. Check your code and try again. Expected output should contain: <strong>' +
                exp + '</strong></span>';
        }
    }

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       AI HINT (Claude API)
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
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

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       AI TUTOR CHAT
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
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

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       SANDBOX
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
    function runSandbox() {
        const code = document.getElementById('sandbox-code').value;
        const out = document.getElementById('sandbox-output');
        out.style.display = 'block';
        out.className = 'output-box';
        const result = simulateCode(code);
        out.innerHTML = '<span style="color:#4ade80">> ' + result.replace(/\n/g, '<br>> ') + '</span>';
    }

    function clearSandbox() {
        document.getElementById('sandbox-code').value = '';
        const out = document.getElementById('sandbox-output');
        out.style.display = 'none';
        out.innerHTML = '';
    }

    function loadSandboxExample() {
        document.getElementById('sandbox-code').value = `# Python Sandbox — Experiment freely!
# Try these examples or write your own code.

# List comprehension
squares = [x**2 for x in range(10)]
print("Squares:", squares)

# Dictionary
person = {"name": "Alice", "age": 30, "city": "Nairobi"}
for key, value in person.items():
    print(f"{key}: {value}")

# Function
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b
    print()

print("\\nFibonacci(10):")
fibonacci(10)
`;
        const out = document.getElementById('sandbox-output');
        out.style.display = 'none';
        out.innerHTML = '';
    }

    /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
       INIT
    â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
    updateXPDisplay();
    Object.assign(window, {
        switchAuthTab,
        signup,
        login,
        logout,
        showDashTab,
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
        loadSandboxExample
    });

    // Auto-expand first module on dashboard if lessons exist
    setTimeout(() => {
        const firstModule = document.querySelector('.module-card');
        if (firstModule && !firstModule.classList.contains('locked') && document.getElementById(
                'screen-dashboard').classList.contains('active')) {
            // Don't auto-expand; user can click
        }
    }, 100);

    // Restore logged in user on page load
    window.onload = function () {
        const savedEmail = localStorage.getItem('pya_current_user');

        if (savedEmail && users[savedEmail]) {
            currentUser = {
                email: savedEmail,
                ...users[savedEmail]
            };
            enterCourse();
        } else {
            showScreen('auth');
        }
    };

    console.log('🐍 PyAcademy ready!');
    console.log(`📚 ${MODULES.length} Modules | ${ALL_LESSONS.length} Lessons | Full Python Curriculum`);
    console.log('🤖 AI Tutor | ⚡ Sandbox | 🏆 Achievements');
    console.log('💡 Tip: Start with Module 1 and work your way through!');

