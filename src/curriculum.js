export const PATH_DATA = {
    python: [
        {
            id: 'foundations',
            title: '1. Foundations',
            icon: '🧱',
            badge: 'Basics',
            description: 'Master the building blocks of Python: variables, types, and printing.',
            lessons: [
                {
                    title: 'Hello, Python!',
                    badge: 'Foundations',
                    icon: '🐍',
                    xpReward: 100,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Welcome to Python! 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Python is a beginner-friendly programming language that reads a lot like English. It is used for websites, apps, data science, automation, and more.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Talking Computer</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A Python program is like a robot that follows instructions. When you want it to say something, you use the <strong>print()</strong> function.</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">🌍 <strong>Real-world Context:</strong> When developers test code, they often use <strong>print()</strong> to show messages and check what a program is doing.</p>
                                <div class="code-block">
                                    <span class="code-builtin">print</span>(<span class="code-string">"Hello, Python!"</span>)
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Print the text <strong>Hello, Python!</strong> using the <strong>print()</strong> function.',
                            starter: '',
                            expected: 'Hello, Python!'
                        },
                        {
                            type: 'quiz',
                            question: 'Which function is used to display output in Python?',
                            options: ['print()', 'input()', 'type()', 'len()'],
                            correct: 0
                        },
                        {
                            type: 'quiz',
                            question: 'True or False: Python code is usually easier for beginners than many other languages.',
                            options: ['True', 'False'],
                            correct: 0
                        }
                    ]
                },
                {
                    title: 'Comment & Clean',
                    badge: 'Foundations',
                    icon: '📝',
                    xpReward: 100,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Writing Clear Python 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Comments are notes you leave in your code. They help humans understand the program without affecting how it runs.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: Labels on a Recipe</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A recipe tells you what to do step by step. Comments do the same for code: they explain the purpose without changing the final meal.</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">🌍 <strong>Real-world Context:</strong> In teams, comments make code easier for teammates to understand and maintain.</p>
                                <div class="code-block">
                                    <span class="code-comment"># This prints a welcome message</span><br>
                                    <span class="code-builtin">print</span>(<span class="code-string">"Welcome to PyAcademy!"</span>)
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Write a comment and then print the message <strong>Ready to code?</strong>.',
                            starter: '# Write a comment here\n',
                            expected: 'Ready to code?'
                        },
                        {
                            type: 'quiz',
                            question: 'What is a comment in Python used for?',
                            options: ['To make the program louder', 'To explain code to humans', 'To create variables', 'To repeat a loop'],
                            correct: 1
                        },
                        {
                            type: 'quiz',
                            question: 'Which symbol begins a single-line comment in Python?',
                            options: ['//', '#', '/*', '--'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'String Magic',
                    badge: 'Foundations',
                    icon: '🔤',
                    xpReward: 100,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Working with Text 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Strings are text values like names, messages, and labels. You can combine them and format them in a readable way.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: Building Words</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Strings are like Lego bricks made of letters. You can snap them together to build a message, a name, or a sentence.</p>
                                </div>
                                <div class="code-block">
                                    first = <span class="code-string">"Ada"</span><br>
                                    last = <span class="code-string">"Lovelace"</span><br>
                                    full = first + <span class="code-string">" "</span> + last<br>
                                    <span class="code-builtin">print</span>(full)
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Create two strings, <strong>first</strong> and <strong>last</strong>, and print them together with a space in the middle.',
                            starter: 'first = "Ada"\nlast = "Lovelace"\n',
                            expected: 'Ada Lovelace'
                        },
                        {
                            type: 'quiz',
                            question: 'Which operator is used to combine two strings in Python?',
                            options: ['*', '+', '/', '=='],
                            correct: 1
                        },
                        {
                            type: 'quiz',
                            question: 'True or False: Strings can be joined together with the + operator.',
                            options: ['True', 'False'],
                            correct: 0
                        }
                    ]
                },
                {
                    title: 'The Memory Boxes',
                    badge: 'Foundations',
                    icon: '📦',
                    xpReward: 100,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">The Magic of Variables 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Variables are the core of all programming. They allow you to store data, give it a name, and retrieve it later.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Labeled Drawer</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Imagine a dresser with drawers. You put your "socks" in one drawer and label it. When you need socks, you don't look everywhere; you just go to the drawer labeled "socks".</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">🌍 <strong>Real-world Context:</strong> Every time you log into an app, your username is stored in a variable so the app can greet you.</p>
                                <div class="code-block">
                                    <span class="code-comment"># Storing a string (text)</span><br>
                                    name = <span class="code-string">"Alice"</span><br>
                                    <span class="code-comment"># Storing an integer (number)</span><br>
                                    age = <span class="code-number">25</span><br>
                                    <span class="code-builtin">print</span>(name)
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Assign the value <strong>"Python"</strong> to a variable named <strong>language</strong> and then print it.',
                            starter: '# Define your variable here\n',
                            expected: 'Python'
                        },
                        {
                            type: 'quiz',
                            question: 'Which of the following creates a variable containing a number?',
                            options: ['x = "10"', 'x = 10', '10 = x', 'var x = 10'],
                            correct: 1
                        },
                        {
                            type: 'quiz',
                            question: 'Which choice is a valid variable name?',
                            options: ['2name', 'user_name', 'user-name', 'class'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'Type Talk',
                    badge: 'Foundations',
                    icon: '💬',
                    xpReward: 100,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Understanding Data Types 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> In Python, every piece of data has a "Type" that determines what you can do with it (like adding numbers vs. joining text).</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Kitchen Tools</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A knife is for cutting, and a whisk is for mixing. You can't whisk with a knife. Similarly, you can't subtract text from a number.</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">🌍 <strong>Context:</strong> Using the right type prevents errors, like trying to add a price (number) to a product name (string).</p>
                                <div class="code-block">
                                    price = <span class="code-number">19.99</span> <span class="code-comment"># Float</span><br>
                                    items = <span class="code-number">5</span> <span class="code-comment"># Integer</span><br>
                                    is_ready = <span class="code-keyword">True</span> <span class="code-comment"># Boolean</span>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Print the type of the number <strong>42</strong> using the <strong>type()</strong> function.',
                            starter: '',
                            expected: "<class 'int'>"
                        },
                        {
                            type: 'quiz',
                            question: 'What is the data type of the value "Hello"?',
                            options: ['int', 'float', 'str', 'bool'],
                            correct: 2
                        },
                        {
                            type: 'quiz',
                            question: 'Which of these is a Boolean value?',
                            options: ['"yes"', '12', 'True', '[1, 2]'],
                            correct: 2
                        }
                    ]
                },
                {
                    title: 'Math Magic',
                    badge: 'Foundations',
                    icon: '🔢',
                    xpReward: 100,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Numbers & Operators 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Python is an incredibly fast calculator. You can use operators like +, -, *, and / to manipulate numbers.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Digital abacus</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Think of operators as buttons on a futuristic calculator that can handle millions of operations per second.</p>
                                </div>
                                <div class="code-block">
                                    total = <span class="code-number">10</span> + <span class="code-number">5</span> * <span class="code-number">2</span><br>
                                    <span class="code-builtin">print</span>(total) <span class="code-comment"># Output is 20</span>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Calculate <strong>100</strong> divided by <strong>4</strong> and print the result.',
                            starter: '',
                            expected: '25.0'
                        },
                        {
                            type: 'quiz',
                            question: 'Which operator is used for exponentiation (power) in Python?',
                            options: ['^', '**', 'exp', 'pow'],
                            correct: 1
                        },
                        {
                            type: 'quiz',
                            question: 'True or False: 10 / 2 in Python gives an integer result.',
                            options: ['True', 'False'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'Ask the User',
                    badge: 'Foundations',
                    icon: '🧑‍💻',
                    xpReward: 100,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Getting Input from Users 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> The <code>input()</code> function lets your program ask a user for information while it is running.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: A Friendly Question</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A program can ask, “What is your name?” and then respond with a message using the answer.</p>
                                </div>
                                <div class="code-block">
                                    name = <span class="code-builtin">input</span>(<span class="code-string">"What is your name? "</span>)<br>
                                    <span class="code-builtin">print</span>(<span class="code-string">"Hello, "</span> + name)
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Ask the user for their name and print <strong>Hello, NAME!</strong> using the value they type.',
                            starter: 'name = input("What is your name? ")\n',
                            expected: 'Hello, '
                        },
                        {
                            type: 'quiz',
                            question: 'What does the input() function do?',
                            options: ['Creates a file', 'Reads text from the user', 'Adds numbers', 'Prints a list'],
                            correct: 1
                        },
                        {
                            type: 'quiz',
                            question: 'Which statement asks a user for a name?',
                            options: ['print("name")', 'input("Name? ")', 'name = "Sam"', 'len(name)'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'List of Things',
                    badge: 'Foundations',
                    icon: '📚',
                    xpReward: 100,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Python Lists 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> A list stores several values in one variable. This helps you organize related data like names, scores, or items.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: A Backpack</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A list is like a backpack with pockets. Each item has its own position, and you can grab it by number.</p>
                                </div>
                                <div class="code-block">
                                    fruits = [<span class="code-string">"apple"</span>, <span class="code-string">"banana"</span>, <span class="code-string">"grape"</span>]<br>
                                    <span class="code-builtin">print</span>(fruits[<span class="code-number">0</span>])
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Create a list called <strong>colors</strong> with three values and print the first one.',
                            starter: 'colors = ["red", "green", "blue"]\n',
                            expected: 'red'
                        },
                        {
                            type: 'quiz',
                            question: 'What is the index of the first item in a list?',
                            options: ['1', '0', '-1', 'last'],
                            correct: 1
                        },
                        {
                            type: 'quiz',
                            question: 'Which list item would be selected by colors[2]?',
                            options: ['First item', 'Second item', 'Third item', 'Last item'],
                            correct: 2
                        }
                    ]
                },
                {
                    title: 'Function Forge',
                    badge: 'Foundations',
                    icon: '⚙️',
                    xpReward: 110,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Making Reusable Code 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Functions let you package code into a reusable block. This saves time and keeps programs organized.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: A Recipe Card</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Instead of rewriting the same steps every time, you save them as a recipe and call it whenever you need it.</p>
                                </div>
                                <div class="code-block">
                                    <span class="code-keyword">def</span> greet(name):<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">"Hello, "</span> + name<br><br>
                                    <span class="code-builtin">print</span>(greet(<span class="code-string">"Sam"</span>))
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Write a function named <strong>greet</strong> that returns <strong>Hello, Sam</strong> when called with the name <strong>Sam</strong>.',
                            starter: 'def greet(name):\n    return "Hello, " + name\n\n',
                            expected: 'Hello, Sam'
                        },
                        {
                            type: 'quiz',
                            question: 'Why are functions helpful in Python?',
                            options: ['They make code reusable', 'They delete variables', 'They slow programs down', 'They only work with numbers'],
                            correct: 0
                        },
                        {
                            type: 'quiz',
                            question: 'True or False: A function can return a value to the caller.',
                            options: ['True', 'False'],
                            correct: 0
                        }
                    ]
                },
                {
                    title: 'True or False',
                    badge: 'Foundations',
                    icon: '✅',
                    xpReward: 110,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Boolean Logic 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Booleans are only two values: <code>True</code> and <code>False</code>. They are used in decisions and comparisons.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: Yes or No</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A boolean is like a simple yes/no answer. Is the light green? Is the score high enough? That answer is either true or false.</p>
                                </div>
                                <div class="code-block">
                                    is_ready = <span class="code-keyword">True</span><br>
                                    score = <span class="code-number">12</span><br>
                                    <span class="code-builtin">print</span>(score >= <span class="code-number">10</span>)
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Create a variable <strong>is_pass</strong> and set it to <strong>True</strong> if a score of <strong>10</strong> is greater than or equal to <strong>10</strong>, then print it.',
                            starter: 'score = 10\nis_pass = score >= 10\n',
                            expected: 'True'
                        },
                        {
                            type: 'quiz',
                            question: 'Which operator checks if two values are equal?',
                            options: ['=', '==', '!=', '>='],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'Phone Book',
                    badge: 'Foundations',
                    icon: '📖',
                    xpReward: 110,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Dictionaries 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Dictionaries hold data as key-value pairs, making it easy to store and look up information by name.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: A Phonebook</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A dictionary is like a phonebook: you look up a name to find the matching number. The name is the key, and the value is what you find.</p>
                                </div>
                                <div class="code-block">
                                    student = {<span class="code-string">"name"</span>: <span class="code-string">"Ava"</span>, <span class="code-string">"age"</span>: <span class="code-number">20</span>}<br>
                                    <span class="code-builtin">print</span>(student[<span class="code-string">"name"</span>])
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Create a dictionary called <strong>student</strong> with a <strong>name</strong> and an <strong>age</strong>, then print the name.',
                            starter: 'student = {"name": "Ava", "age": 20}\n',
                            expected: 'Ava'
                        },
                        {
                            type: 'quiz',
                            question: 'What is a dictionary used for?',
                            options: ['A list of numbers only', 'Key-value data lookup', 'A loop counter', 'A function name'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'Mini Project: Profile Card',
                    badge: 'Foundations',
                    icon: '🎯',
                    xpReward: 120,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Build a Small Python Project 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Small projects help you connect many beginner concepts together: variables, text, numbers, and formatting.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: Building a Profile</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Think of this as creating a simple profile card: it stores a name, age, and skill, then prints a neat introduction.</p>
                                </div>
                                <div class="code-block">
                                    name = <span class="code-string">"Maya"</span><br>
                                    age = <span class="code-number">18</span><br>
                                    skill = <span class="code-string">"Python"</span><br>
                                    <span class="code-builtin">print</span>(<span class="code-string">f"Hello, I am {name}. I am {age} and learning {skill}."</span>)
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Create a name, age, and skill, then print a full sentence using an <strong>f-string</strong>.',
                            starter: 'name = "Maya"\nage = 18\nskill = "Python"\n',
                            expected: 'Hello, I am Maya. I am 18 and learning Python.'
                        },
                        {
                            type: 'quiz',
                            question: 'What is an f-string used for?',
                            options: ['To check logic', 'To insert values into text', 'To create a list', 'To store numbers'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'Module 1 Capstone',
                    badge: 'Foundations',
                    icon: '🏁',
                    xpReward: 150,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Final Capstone: Your Intro Card 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> A capstone brings together everything you’ve learned so far: output, variables, strings, input, and formatting.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: Your Personal Profile</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Imagine you are creating a tiny profile for a coding app. It introduces you, says what you like, and prints a friendly message.</p>
                                </div>
                                <div class="code-block">
                                    name = <span class="code-string">"Sam"</span><br>
                                    language = <span class="code-string">"Python"</span><br>
                                    <span class="code-builtin">print</span>(<span class="code-string">f"Hi {name}! Your favorite language is {language}."</span>)
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Create variables for a <strong>name</strong> and a <strong>language</strong>, then print <strong>Hi NAME! Your favorite language is LANGUAGE.</strong> using an f-string.',
                            starter: 'name = "Sam"\nlanguage = "Python"\n',
                            expected: 'Hi Sam! Your favorite language is Python.'
                        },
                        {
                            type: 'quiz',
                            question: 'Which option is a valid Python comment?',
                            options: ['# This is a comment', '// This is a comment', '<!-- This is a comment -->', '/* This is a comment */'],
                            correct: 0
                        }
                    ]
                }
            ]
        },
        {
            id: 'control-flow',
            title: '2. Control Flow',
            icon: '🔀',
            badge: 'Logic',
            description: 'Learn to steer your programs with decisions, repetition, and safe error handling.',
            lessons: [
                {
                    title: 'The Crossroads',
                    badge: 'Logic',
                    icon: '🛤️',
                    xpReward: 120,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Making Decisions 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Code does not always run in one straight line. With <code>if</code>, <code>elif</code>, and <code>else</code>, your program can choose different paths depending on conditions.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Fork in the Road</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A program is like a traveler at a fork in the road. The condition tells it which road to take: one path for "yes" and another for "no".</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">🌍 <strong>Real-world use:</strong> Websites check whether a password is valid, games check whether a player has enough points, and apps decide whether to show a login page or a dashboard.</p>
                                <div class="code-block">
                                    age = <span class="code-number">18</span><br>
                                    <span class="code-keyword">if</span> age >= <span class="code-number">18</span>:<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-builtin">print</span>(<span class="code-string">"Adult"</span>)<br>
                                    <span class="code-keyword">else</span>:<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-builtin">print</span>(<span class="code-string">"Minor"</span>)
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Create an <strong>if</strong> statement that prints <strong>"Go"</strong> if a variable <strong>light</strong> is equal to <strong>"green"</strong>.',
                            starter: 'light = "green"\n',
                            expected: 'Go'
                        },
                        {
                            type: 'quiz',
                            question: 'What does the "==" operator do?',
                            options: ['Assigns a value', 'Checks for equality', 'Multiplies two values', 'Defines a function'],
                            correct: 1
                        },
                        {
                            type: 'quiz',
                            question: 'Which keyword runs when the condition is false?',
                            options: ['if', 'elif', 'else', 'while'],
                            correct: 2
                        }
                    ]
                },
                {
                    title: 'Truth Tests',
                    badge: 'Logic',
                    icon: '✅',
                    xpReward: 120,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Comparisons & Boolean Logic 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Conditions are based on comparisons like <code>==</code>, <code>!=</code>, <code>&gt;</code>, and <code>&lt;</code>. When a comparison is true, the program follows one path.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Judge</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A condition acts like a judge asking, "Is this statement true?" If the answer is yes, the program continues one route. If no, it goes another route.</p>
                                </div>
                                <div class="code-block">
                                    score = <span class="code-number">90</span><br>
                                    <span class="code-keyword">if</span> score >= <span class="code-number">70</span> <span class="code-keyword">and</span> score < <span class="code-number">100</span>:<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-builtin">print</span>(<span class="code-string">"Passing"</span>)
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Write a condition that checks if <strong>score</strong> is greater than or equal to <strong>80</strong> and prints <strong>"Great"</strong>.',
                            starter: 'score = 85\n',
                            expected: 'Great'
                        },
                        {
                            type: 'quiz',
                            question: 'Which comparison means "not equal to"?',
                            options: ['==', '!=', '>=', '<='],
                            correct: 1
                        },
                        {
                            type: 'quiz',
                            question: 'True or False: Conditions can be combined using and and or.',
                            options: ['True', 'False'],
                            correct: 0
                        }
                    ]
                },
                {
                    title: 'The Loop-de-Loop',
                    badge: 'Logic',
                    icon: '🔁',
                    xpReward: 120,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Repeating Actions 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Loops let you repeat code without rewriting it. They are incredibly useful for lists, patterns, animations, and tasks that repeat a fixed number of times.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Ferris Wheel</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A loop is like a ride that keeps moving until it has completed the right number of turns or until a condition says stop.</p>
                                </div>
                                <h3 style="font-size:18px;font-weight:700;margin-bottom:8px">🚀 Walkthrough</h3>
                                <div class="code-block" style="margin-bottom:12px">
                                    <span class="code-comment"># FOR Loop (Fixed number of turns)</span><br>
                                    <span class="code-keyword">for</span> turn <span class="code-keyword">in</span> <span class="code-builtin">range</span>(<span class="code-number">3</span>):<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-builtin">print</span>(<span class="code-string">"Wheee!"</span>)<br>
                                </div>
                                <div class="code-block">
                                    <span class="code-comment"># WHILE Loop (Until a condition changes)</span><br>
                                    ride_active = <span class="code-keyword">True</span><br>
                                    <span class="code-keyword">while</span> ride_active:<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-builtin">print</span>(<span class="code-string">"Spinning..."</span>)<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;ride_active = <span class="code-keyword">False</span> <span class="code-comment"># Stop the wheel</span>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Write a <strong>for</strong> loop that prints the numbers <strong>0, 1, 2</strong> using <strong>range(3)</strong>.',
                            starter: '',
                            expected: '0\n1\n2'
                        },
                        {
                            type: 'quiz',
                            question: 'Which keyword is used to stop a loop early?',
                            options: ['stop', 'end', 'break', 'quit'],
                            correct: 2
                        },
                        {
                            type: 'quiz',
                            question: 'Which loop is best when you know exactly how many times to repeat?',
                            options: ['for', 'while', 'if', 'try'],
                            correct: 0
                        }
                    ]
                },
                {
                    title: 'Break, Continue, Repeat',
                    badge: 'Logic',
                    icon: '⏭️',
                    xpReward: 130,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Controlling Loop Flow 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Sometimes a loop should end early or skip a value. The keywords <code>break</code> and <code>continue</code> help you control that flow.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: Traffic Lights</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A <code>break</code> is like stopping the car at the red light, and <code>continue</code> is like skipping a road sign and moving on to the next turn.</p>
                                </div>
                                <div class="code-block">
                                    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-builtin">range</span>(<span class="code-number">5</span>):<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> i == <span class="code-number">3</span>:<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">continue</span><br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-builtin">print</span>(i)
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Use a loop to print numbers <strong>0</strong> through <strong>4</strong> but skip <strong>2</strong> using <strong>continue</strong>.',
                            starter: 'for i in range(5):\n    if i == 2:\n        continue\n    print(i)\n',
                            expected: '0\n1\n3\n4'
                        },
                        {
                            type: 'quiz',
                            question: 'What does continue do inside a loop?',
                            options: ['Stops the program', 'Skips the rest of this iteration', 'Deletes the loop', 'Creates a new variable'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'Catch the Error',
                    badge: 'Logic',
                    icon: '🛡️',
                    xpReward: 120,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Handling Exceptions 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Use <code>try</code> and <code>except</code> to prevent your program from crashing when something unexpected happens. A good program handles mistakes gracefully instead of stopping completely.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Safety Net</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">When something goes wrong, the safety net catches the fall. In code, the <code>except</code> block catches the error and tells the user what happened.</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">🌍 <strong>Real-world use:</strong> Apps often handle missing files, invalid input, and network errors without crashing. That is why error handling is a core beginner skill.</p>
                                <div class="code-block">
                                    <span class="code-keyword">try</span>:<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;result = <span class="code-number">10</span> / <span class="code-number">0</span><br>
                                    <span class="code-keyword">except</span> ZeroDivisionError:<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-builtin">print</span>(<span class="code-string">"Can't divide by zero!"</span>)
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Write a try/except block that tries to print an undefined variable <strong>x</strong> and catches the <strong>NameError</strong>, printing <strong>"Error"</strong>.',
                            starter: 'try:\n    print(x)\n',
                            expected: 'Error'
                        },
                        {
                            type: 'quiz',
                            question: 'Which block runs whether an error occurred or not?',
                            options: ['catch', 'finally', 'else', 'always'],
                            correct: 1
                        },
                        {
                            type: 'quiz',
                            question: 'Why is exception handling useful?',
                            options: ['It makes programs crash more often', 'It allows programs to recover from mistakes', 'It deletes code slowly', 'It assigns values automatically'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'Module 2 Capstone',
                    badge: 'Logic',
                    icon: '🏁',
                    xpReward: 150,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Final Capstone: Smart Daily Check 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Module 2 is all about control — making decisions, repeating tasks, and handling mistakes. This capstone combines all three into one small real-world program.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Smart Assistant</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Your program acts like a smart assistant: it checks whether someone is ready to start, loops through tasks, and handles invalid input without crashing.</p>
                                </div>
                                <div class="code-block">
                                    tasks = [<span class="code-string">"Study"</span>, <span class="code-string">"Code"</span>, <span class="code-string">"Exercise"</span>]<br>
                                    ready = <span class="code-keyword">True</span><br>
                                    <span class="code-keyword">if</span> ready:<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">for</span> task <span class="code-keyword">in</span> tasks:<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-builtin">print</span>(<span class="code-string">f"Today I will: {task}"</span>)
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Create a list of tasks, check if <strong>ready</strong> is <strong>True</strong>, and loop over the tasks printing <strong>Today I will: TASK</strong> for each item.',
                            starter: 'tasks = ["Study", "Code", "Exercise"]\nready = True\n',
                            expected: 'Today I will: Study\nToday I will: Code\nToday I will: Exercise'
                        },
                        {
                            type: 'quiz',
                            question: 'What is the main idea of Module 2?',
                            options: ['How to store data forever', 'How to control the flow of a program', 'How to make websites pretty', 'How to write markdown'],
                            correct: 1
                        }
                    ]
                }
            ]
        },
        {
            id: 'data-structures',
            title: '3. Data Structures',
            icon: '📚',
            badge: 'Organization',
            description: 'Organize information with lists, dictionaries, sets, and tuples so your programs can model real-world data cleanly.',
            lessons: [
                {
                    title: 'The Shopping List',
                    badge: 'Structures',
                    icon: '🛒',
                    xpReward: 150,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Python Lists 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> A list is an ordered collection of items. It is one of the most common data structures in Python because it lets you keep many values together and work with them in sequence.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Train Cars</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A list is like a train with cars in a fixed order. You can add a car, remove a car, or pick a specific car by position.</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">🌍 <strong>Real-world use:</strong> Lists are used for shopping carts, task lists, scores, game inventory, and any ordered information.</p>
                                <div class="code-block">
                                    groceries = [<span class="code-string">"milk"</span>, <span class="code-string">"eggs"</span>, <span class="code-string">"bread"</span>]<br>
                                    <span class="code-builtin">print</span>(groceries[<span class="code-number">0</span>])<br>
                                    groceries.append(<span class="code-string">"bananas"</span>)
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Create a list <strong>items</strong> with "Milk" and "Eggs", then <strong>append</strong> "Bread" and print the list.',
                            starter: 'items = ["Milk", "Eggs"]\n',
                            expected: "['Milk', 'Eggs', 'Bread']"
                        },
                        {
                            type: 'quiz',
                            question: 'How do you access the first element of a list "L"?',
                            options: ['L(0)', 'L[1]', 'L[0]', 'L.first()'],
                            correct: 2
                        },
                        {
                            type: 'quiz',
                            question: 'True or False: Lists keep items in order.',
                            options: ['True', 'False'],
                            correct: 0
                        }
                    ]
                },
                {
                    title: 'The Phone Book',
                    badge: 'Structures',
                    icon: '📖',
                    xpReward: 150,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Dictionaries 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> A dictionary stores data as key-value pairs. This makes it easy to look up a value by name instead of by position.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Labeled Locker</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A dictionary is like a locker system: the key is the locker number, and the value is what's inside it. You don't need to search through everything.</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">🌍 <strong>Real-world use:</strong> Dictionaries are used for user profiles, settings, server responses, and mapping names to values.</p>
                                <div class="code-block">
                                    user = {<span class="code-string">"name"</span>: <span class="code-string">"Bob"</span>, <span class="code-string">"id"</span>: <span class="code-number">42</span>}<br>
                                    <span class="code-builtin">print</span>(user[<span class="code-string">"name"</span>])
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Create a dictionary <strong>d</strong> with key <strong>"a"</strong> and value <strong>1</strong>. Then print <strong>d["a"]</strong>.',
                            starter: '',
                            expected: '1'
                        },
                        {
                            type: 'quiz',
                            question: 'Which method returns all the keys in a dictionary?',
                            options: ['.all()', '.keys()', '.names()', '.list()'],
                            correct: 1
                        },
                        {
                            type: 'quiz',
                            question: 'What is a dictionary made of?',
                            options: ['Keys and values', 'Classes and methods', 'Loops and conditions', 'Numbers only'],
                            correct: 0
                        }
                    ]
                },
                {
                    title: 'Unique Collections',
                    badge: 'Structures',
                    icon: '💎',
                    xpReward: 150,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Sets and Tuples 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> <code>Tuples</code> are fixed collections that cannot be changed after creation, while <code>Sets</code> are unordered collections with unique values only. They help solve different problems from lists and dictionaries.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Marble Bag (Set)</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A set is like a bag of marbles where you can only keep one of each color. A tuple is like a fixed recipe card: the order is important, but you cannot rewrite it.</p>
                                </div>
                                <div class="code-block">
                                    numbers = (<span class="code-number">1</span>, <span class="code-number">2</span>, <span class="code-number">3</span>)<br>
                                    unique = {<span class="code-number">1</span>, <span class="code-number">1</span>, <span class="code-number">2</span>}<br>
                                    <span class="code-builtin">print</span>(unique)
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Create a <strong>set</strong> from the list <strong>[1, 1, 2]</strong> and print it. (Notice the duplicate disappears).',
                            starter: 'L = [1, 1, 2]\n',
                            expected: '{1, 2}'
                        },
                        {
                            type: 'quiz',
                            question: 'Which of these is a Tuple?',
                            options: ['[1, 2]', '{1, 2}', '(1, 2)', '<1, 2>'],
                            correct: 2
                        },
                        {
                            type: 'quiz',
                            question: 'What makes a set different from a list?',
                            options: ['A set keeps duplicates', 'A set removes duplicates automatically', 'A set can never hold numbers', 'A set is ordered'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'Data Structures Capstone',
                    badge: 'Structures',
                    icon: '🏁',
                    xpReward: 180,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Final Capstone: Student Profile Builder 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Real programs often mix data structures together. Lists store multiple values, dictionaries store named information, and sets help remove duplicates.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Student Dashboard</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A student profile has a name, a level, active courses, and badges. Each of those can be stored in a different structure for different purposes.</p>
                                </div>
                                <div class="code-block">
                                    student = {<span class="code-string">"name"</span>: <span class="code-string">"Ava"</span>, <span class="code-string">"courses"</span>: [<span class="code-string">"Math"</span>, <span class="code-string">"Python"</span>]}<br>
                                    <span class="code-builtin">print</span>(student[<span class="code-string">"name"</span>])
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Create a dictionary <strong>student</strong> with keys <strong>"name"</strong> and <strong>"courses"</strong>, where "courses" is a list containing <strong>"Python"</strong> and <strong>"Math"</strong>. Then print the student name.',
                            starter: 'student = {"name": "Ava", "courses": ["Python", "Math"]}\n',
                            expected: 'Ava'
                        },
                        {
                            type: 'quiz',
                            question: 'What is the main takeaway from the Data Structures module?',
                            options: ['Programs only use one type of data', 'Different data structures solve different problems', 'Sets are the same as dictionaries', 'Lists cannot store multiple items'],
                            correct: 1
                        }
                    ]
                }
            ]
        },
        {
            id: 'oop',
            title: '4. OOP',
            icon: '🏗️',
            badge: 'Architect',
            description: 'Scale your thinking from scripts to systems by modeling real-world ideas with classes, objects, and inheritance.',
            lessons: [
                {
                    title: 'The Blueprint',
                    badge: 'Architect',
                    icon: '🏛️',
                    xpReward: 200,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Classes & Objects 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> A class is a blueprint, and an object is a concrete instance created from that blueprint. This idea is how Python models real-world entities like cars, users, and students in a structured way.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Cookie Cutter</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">The class is the cutter. The objects are the individual cookies. They all have the same shape, but can have different toppings, sizes, or flavors.</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">💡 In OOP, we usually separate data (attributes) from behavior (methods). A <code>Car</code> has attributes like color and speed, and methods like drive() or brake().</p>
                                <div class="code-block">
                                    <span class="code-keyword">class</span> <span class="code-builtin">Car</span>:<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-builtin">__init__</span>(self, color):<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.color = color
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Define a class <strong>Car</strong> with an <strong>__init__</strong> method that sets <strong>self.color</strong>. Instantiate it with "Red" and print the color.',
                            starter: 'class Car:\n    def __init__(self, color):\n        self.color = color\n\nmy_car = Car("Red")\nprint(my_car.color)\n',
                            expected: 'Red'
                        },
                        {
                            type: 'quiz',
                            question: 'What is the purpose of the "__init__" method?',
                            options: ['To delete an object', 'To initialize an object\'s attributes', 'To hide the class', 'To speed up the code'],
                            correct: 1
                        },
                        {
                            type: 'quiz',
                            question: 'True or False: A class is a blueprint, while an instance is a real object built from that blueprint.',
                            options: ['True', 'False'],
                            correct: 0
                        }
                    ]
                },
                {
                    title: 'Family Trees',
                    badge: 'Architect',
                    icon: '🌳',
                    xpReward: 200,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Inheritance 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Inheritance allows one class to reuse code from another class. This is useful when multiple things share the same behavior but also need their own custom features.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: Biology</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A child inherits traits from their parents but can also have their own unique characteristics. The same idea works in classes.</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">🏗️ A base class defines shared behavior. A subclass adds or changes that behavior without rewriting everything from scratch.</p>
                                <div class="code-block">
                                    <span class="code-keyword">class</span> <span class="code-builtin">Animal</span>:<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-builtin">talk</span>(self):<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-builtin">print</span>(<span class="code-string">"Hello"</span>)<br><br>
                                    <span class="code-keyword">class</span> <span class="code-builtin">Dog</span>(Animal):<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;pass
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Create a class <strong>ElectricCar</strong> that inherits from <strong>Car</strong>. Just use <strong>pass</strong> inside.',
                            starter: 'class Car:\n    pass\n\nclass ElectricCar(Car):\n    pass\n',
                            expected: ''
                        },
                        {
                            type: 'quiz',
                            question: 'What do we call the class being inherited from?',
                            options: ['Subclass', 'Parent/Base Class', 'Child Class', 'Derivative Class'],
                            correct: 1
                        },
                        {
                            type: 'quiz',
                            question: 'Why is inheritance useful?',
                            options: ['It reduces repeated code', 'It makes code run faster', 'It turns all methods into variables', 'It removes all classes'],
                            correct: 0
                        }
                    ]
                },
                {
                    title: 'Super Powers',
                    badge: 'Architect',
                    icon: '⚡',
                    xpReward: 200,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Encapsulation & Polymorphism 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Encapsulation hides internal details while exposing a clean interface, and polymorphism allows objects of different classes to share the same method name but behave differently.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Universal Remote</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">You press "Power". Whether it's a TV, a DVD player, or an AC, they all react to the same command, but each object defines its own behavior.</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">📌 Real-world example: a <code>Person</code> class and a <code>Robot</code> class might both have a <code>talk()</code> method, but each one says something different.</p>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Print the string "Hello World" using a method <strong>greet</strong> inside a class <strong>A</strong>.',
                            starter: 'class A:\n    def greet(self):\n        print("Hello World")\n\na = A()\na.greet()',
                            expected: 'Hello World'
                        },
                        {
                            type: 'quiz',
                            question: 'Which concept refers to hiding internal data and requiring interaction via methods?',
                            options: ['Inheritance', 'Encapsulation', 'Polymorphism', 'Abstraction'],
                            correct: 1
                        },
                        {
                            type: 'quiz',
                            question: 'What is polymorphism about?',
                            options: ['Different classes doing the same action in different ways', 'Creating objects without classes', 'Packing data into lists', 'Preventing any method from existing'],
                            correct: 0
                        }
                    ]
                }
            ]
        },
        {
            id: 'toolkit',
            title: '5. Prof Toolkit',
            icon: '🛠️',
            badge: 'Pro',
            description: 'Build like a real developer by learning environments, packages, testing, and the habits that keep Python projects reliable.',
            lessons: [
                {
                    title: 'The Virtual Bubble',
                    badge: 'Pro',
                    icon: '🫧',
                    xpReward: 180,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Virtual Environments 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> A virtual environment keeps project dependencies isolated so one project's library versions do not break another project.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Lab Room</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Each project is a different experiment. You would never mix chemicals from one lab into another. Virtual environments keep experiments separate.</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">🧠 If you work on multiple Python projects, the packages installed globally may conflict. A venv gives each project its own clean environment.</p>
                                <div class="code-block">
                                    python -m venv .venv<br>
                                    source .venv/bin/activate
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Print the shell command to create a virtual environment named <strong>.venv</strong>.',
                            starter: '# python -m ...\n',
                            expected: 'python -m venv .venv'
                        },
                        {
                            type: 'quiz',
                            question: 'Why do we use virtual environments?',
                            options: ['To make code faster', 'To isolate project dependencies', 'To encrypt source code', 'To share code on GitHub'],
                            correct: 1
                        },
                        {
                            type: 'quiz',
                            question: 'True or False: Global Python packages are usually the safest choice for every project.',
                            options: ['True', 'False'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'Package Palace',
                    badge: 'Pro',
                    icon: '📦',
                    xpReward: 180,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Managing Packages with Pip 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> <code>pip</code> installs third-party libraries from PyPI so you can add features without writing everything yourself.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The App Store</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">You need a specialized tool (like a map). Instead of building it yourself, you download it from the store.</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">📦 <code>pip install requests</code> adds a library. <code>pip freeze &gt; requirements.txt</code> records dependencies so anyone can reproduce the environment.</p>
                                <div class="code-block">
                                    pip install requests<br>
                                    pip freeze &gt; requirements.txt
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Print the command used to save all your project\'s dependencies to a file.',
                            starter: '# Hint: pip freeze ...\n',
                            expected: 'pip freeze > requirements.txt'
                        },
                        {
                            type: 'quiz',
                            question: 'What is "PyPI"?',
                            options: ['A Python interpreter', 'The Python Package Index', 'A testing framework', 'A database engine'],
                            correct: 1
                        },
                        {
                            type: 'quiz',
                            question: 'What is the purpose of a requirements file?',
                            options: ['To store the project story', 'To list dependencies for setup', 'To test the code', 'To hide files from Git'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'The Evidence Log',
                    badge: 'Pro',
                    icon: '📋',
                    xpReward: 180,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Testing & Logging 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Logging shows what happened while your code ran, and tests check whether the behavior matches the expected outcome. Both are essential in professional development.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Flight Data Recorder</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Logging is the "Black Box". If the plane crashes, you check the box to see what happened right before the failure.</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">✅ A small <code>assert</code> can quickly catch a bug in a function, while logging helps developers spot issues in real-world usage.</p>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Use <strong>assert</strong> to check if <strong>2 * 2</strong> is <strong>4</strong>.',
                            starter: 'assert 2 * 2 == 4\nprint("ok")\n',
                            expected: 'ok'
                        },
                        {
                            type: 'quiz',
                            question: 'Which module is built into Python for tracking events?',
                            options: ['tracker', 'logging', 'history', 'eventlib'],
                            correct: 1
                        },
                        {
                            type: 'quiz',
                            question: 'What does a test generally do?',
                            options: ['Changes the program permanently', 'Confirms expected behavior', 'Deletes old files', 'Runs only in production'],
                            correct: 1
                        }
                    ]
                }
            ]
        },
        {
            id: 'web-api',
            title: '6. Web & APIs',
            icon: '🌐',
            badge: 'Network',
            description: 'Connect your Python skills to the outside world by working with HTTP, JSON, and data from real services.',
            lessons: [
                {
                    title: 'The Digital Handshake',
                    badge: 'Web',
                    icon: '🤝',
                    xpReward: 220,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">HTTP Requests 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Apps talk via HTTP. Your script sends a Request, and a remote server sends a Response. This is how websites, APIs, and services communicate.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: Ordering Pizza</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">You call (Request). You give details (Payload). The shop says "OK" (Status Code 200) and brings the pizza (Data).</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">📡 Common HTTP methods include GET, POST, PUT, and DELETE. GET asks for information; POST creates it; PUT updates it; DELETE removes it.</p>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Print the name of the most popular Python library for making HTTP requests.',
                            starter: '',
                            expected: 'requests'
                        },
                        {
                            type: 'quiz',
                            question: 'What does a 404 Status Code mean?',
                            options: ['Success', 'Unauthorized', 'Not Found', 'Server Error'],
                            correct: 2
                        },
                        {
                            type: 'quiz',
                            question: 'Which method is most often used to fetch a resource?',
                            options: ['POST', 'GET', 'DELETE', 'PATCH'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'Data DNA',
                    badge: 'Web',
                    icon: '🧬',
                    xpReward: 220,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Parsing JSON 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> JSON is a lightweight format for exchanging structured data. It looks a lot like a Python dictionary and is used everywhere on the web.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Universal Adapter</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Whether you use Java, Python, or JS, everyone understands JSON. It\'s the common language for data.</p>
                                </div>
                                <div class="code-block">
                                    data = {<span class="code-string">"id"</span>: <span class="code-number">1</span>, <span class="code-string">"name"</span>: <span class="code-string">"Ada"</span>}<br>
                                    <span class="code-builtin">print</span>(data[<span class="code-string">"name"</span>])
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Use <strong>json.loads()</strong> to parse <strong>\'{"id": 1}\'</strong> and print the value of "id".',
                            starter: 'import json\ns = \'{"id": 1}\'\nobj = json.loads(s)\nprint(obj["id"])\n',
                            expected: '1'
                        },
                        {
                            type: 'quiz',
                            question: 'What is the Python equivalent of a JSON object?',
                            options: ['List', 'Tuple', 'Dictionary', 'Set'],
                            correct: 2
                        },
                        {
                            type: 'quiz',
                            question: 'True or False: JSON is mostly for storage on disk only.',
                            options: ['True', 'False'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'Web Scraping',
                    badge: 'Web',
                    icon: '🕷️',
                    xpReward: 220,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Extracting Data 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> When there is no API, you can scrape HTML to extract information. This means reading the structure of a webpage and selecting the data you want.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Gold Panner</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">The website is a river of mud (HTML). Scraping is the process of sifting through the mud to find the gold nuggets (Data).</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">⚠️ Always respect a site's terms, robots.txt, and rate limits. Web scraping should be ethical and intentional.</p>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Print the name of the popular library used for parsing HTML in Python.',
                            starter: '',
                            expected: 'BeautifulSoup'
                        },
                        {
                            type: 'quiz',
                            question: 'Which HTML tag usually contains the main title of a page?',
                            options: ['<p>', '<div>', '<h1>', '<span>'],
                            correct: 2
                        },
                        {
                            type: 'quiz',
                            question: 'When is scraping usually a bad idea?',
                            options: ['When it ignores a site\'s rules or overloads it', 'When you are using HTML', 'When the page has a title', 'When you need data from a website'],
                            correct: 0
                        }
                    ]
                }
            ]
        },
        {
            id: 'databases',
            title: '7. Backend & DB',
            icon: '💾',
            badge: 'Data',
            description: 'Learn how software stores information persistently so apps can remember users, data, and state over time.',
            lessons: [
                {
                    title: 'The Server Waiter',
                    badge: 'Backend',
                    icon: '🤵',
                    xpReward: 250,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Building APIs 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Frameworks like FastAPI or Flask let you build your own web servers that respond to requests.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Restaurant Waiter</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">The waiter takes your order, goes to the kitchen (your code), and brings back the food (Response).</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Print the decorator used in FastAPI to handle a GET request at the root path "/".',
                            starter: '# @app. ...\n',
                            expected: '@app.get("/")'
                        },
                        {
                            type: 'quiz',
                            question: 'Which library is known for being extremely fast and using Type Hints?',
                            options: ['Flask', 'Django', 'FastAPI', 'Bottle'],
                            correct: 2
                        }
                    ]
                },
                {
                    title: 'Persistent Storage',
                    badge: 'Backend',
                    icon: '🗄️',
                    xpReward: 250,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">SQL Databases 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Databases store data in tables. SQL (Structured Query Language) is how we talk to them.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Excel Spreadsheet</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A database table is like a sheet. Rows are entries, and columns are attributes (Name, Age, Email).</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Write a SQL query to select all users where <strong>age</strong> is greater than <strong>21</strong>.',
                            starter: '',
                            expected: 'SELECT * FROM users WHERE age > 21;'
                        },
                        {
                            type: 'quiz',
                            question: 'Which SQL keyword is used to sort results?',
                            options: ['SORT', 'GROUP BY', 'ORDER BY', 'ARRANGE'],
                            correct: 2
                        }
                    ]
                },
                {
                    title: 'Object Relational Magic',
                    badge: 'Backend',
                    icon: '🪄',
                    xpReward: 250,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Using an ORM 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> An ORM (like SQLAlchemy) lets you interact with a database using Python objects instead of raw SQL.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Universal Translator</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">You speak Python. The database speaks SQL. The ORM translates your Python "User" object into a SQL table row automatically.</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Print the name of the most popular ORM for Python.',
                            starter: '',
                            expected: 'SQLAlchemy'
                        },
                        {
                            type: 'quiz',
                            question: 'What does ORM stand for?',
                            options: ['Online Resource Manager', 'Object-Relational Mapping', 'Ordered Result Method', 'Only Real Magic'],
                            correct: 1
                        }
                    ]
                }
            ]
        },
        {
            id: 'deployment',
            title: '8. Deployment',
            icon: '🚀',
            badge: 'Ops',
            description: 'Ship your work beyond your machine and learn how code moves from development into the real world.',
            lessons: [
                {
                    title: 'The Shipping Container',
                    badge: 'Ops',
                    icon: '📦',
                    xpReward: 300,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Docker Basics 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Docker packages your code and all its dependencies into a "Container" that runs the same on every machine.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Cargo Ship</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Before containers, loading ships was chaos. Now, every box is a standard size. Docker makes your app a standard "box".</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Print the filename usually used to define a Docker image.',
                            starter: '',
                            expected: 'Dockerfile'
                        },
                        {
                            type: 'quiz',
                            question: 'What problem does Docker primarily solve?',
                            options: ['Slow code', 'Security bugs', '"It works on my machine" syndrome', 'Lack of RAM'],
                            correct: 2
                        }
                    ]
                },
                {
                    title: 'The Robot Builder',
                    badge: 'Ops',
                    icon: '🤖',
                    xpReward: 300,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">CI/CD Pipelines 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Continuous Integration and Deployment (CI/CD) automatically tests and deploys your code every time you make a change.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Automatic Assembly Line</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">You drop your code at the start. Robots test it, paint it, and put it on a truck to the customer without you lifting a finger.</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Print the name of a popular tool for CI/CD that integrates with GitHub.',
                            starter: '',
                            expected: 'GitHub Actions'
                        },
                        {
                            type: 'quiz',
                            question: 'What does the "CD" in CI/CD stand for?',
                            options: ['Code Design', 'Continuous Deployment', 'Central Database', 'Cloud Delivery'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'Sky High',
                    badge: 'Ops',
                    icon: '☁️',
                    xpReward: 300,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Cloud Hosting 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Cloud providers like AWS, GCP, or Heroku host your app so anyone in the world can access it.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: Renting an Apartment</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">You don\'t build the building. You rent a room (server) that has water and electricity (internet and power) already set up.</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Print the name of the cloud service from Amazon.',
                            starter: '',
                            expected: 'AWS'
                        },
                        {
                            type: 'quiz',
                            question: 'What is a "PaaS"?',
                            options: ['Program as a Service', 'Platform as a Service', 'Personal and Secure System', 'Private API Service'],
                            correct: 1
                        }
                    ]
                }
            ]
        },
        {
            id: 'advanced',
            title: '9. Advanced Idioms',
            icon: '🪄',
            badge: 'Expert',
            description: 'Move beyond the basics and learn the Python patterns that make experienced engineers write cleaner, more powerful code.',
            lessons: [
                {
                    title: 'Function Wrappers',
                    badge: 'Expert',
                    icon: '🎁',
                    xpReward: 400,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Decorators 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Decorators wrap a function to add functionality (like logging or timing) without changing the function's code.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Holiday Gift Wrap</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">The gift inside is the same, but the wrapper makes it look different and adds a "Do not open until Christmas" tag.</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Print the symbol used before a decorator name in Python.',
                            starter: '',
                            expected: '@'
                        },
                        {
                            type: 'quiz',
                            question: 'What is a decorator actually?',
                            options: ['A class', 'A variable', 'A function that returns another function', 'A special comment'],
                            correct: 2
                        }
                    ]
                },
                {
                    title: 'Infinite Fountains',
                    badge: 'Expert',
                    icon: '⛲',
                    xpReward: 400,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Generators 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Generators produce values one at a time using <code>yield</code>, saving memory when dealing with large datasets.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Pez Dispenser</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">You don't get all the candy at once. You click it once, get one candy, and the rest stay inside until you need them.</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Create a function <strong>g()</strong> that <strong>yields 1</strong>. Call it and print the result of <strong>next()</strong> on the generator object.',
                            starter: 'def g():\n    yield 1\n\ngen = g()\n',
                            expected: '1'
                        },
                        {
                            type: 'quiz',
                            question: 'What happens to a generator after it yields a value?',
                            options: ['It terminates', 'It pauses its state', 'It resets to the beginning', 'It deletes itself'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'Multitasking',
                    badge: 'Expert',
                    icon: '⚡',
                    xpReward: 400,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">AsyncIO 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Asynchronous programming allows your code to wait for things (like web responses) without blocking the entire program.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Chef</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A chef doesn't stand still waiting for water to boil. They chop onions while the water heats up. That's "Async".</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Print the two keywords used to define and wait for an asynchronous function.',
                            starter: '',
                            expected: 'async await'
                        },
                        {
                            type: 'quiz',
                            question: 'What is the "Event Loop"?',
                            options: ['A circuit board', 'The manager that schedules async tasks', 'A type of for-loop', 'A crash recovery system'],
                            correct: 1
                        }
                    ]
                }
            ]
        },
        {
            id: 'final-project',
            title: '10. Final Project',
            icon: '🚀',
            badge: 'Portfolio',
            description: 'Bring the whole journey together in a polished project that demonstrates how your Python skills fit as one complete story.',
            lessons: [
                {
                    title: 'Design the App',
                    badge: 'Portfolio',
                    icon: '🧭',
                    xpReward: 500,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Project Planning 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Real developers do not code randomly. They define the problem, sketch the features, and plan data flow before writing the first line of code.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Blueprint</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Before building a house, you design the rooms, the doors, and the flow. The same should happen with your app.</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">🎯 A strong final project might be a study planner, a quiz app, a budget tracker, or a small command-line assistant. The goal is not complexity — it is clarity and usefulness.</p>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Print the name of a good beginner final project idea that tracks tasks and goals.',
                            starter: '',
                            expected: 'study planner'
                        },
                        {
                            type: 'quiz',
                            question: 'What should you do before writing a final project?',
                            options: ['Skip planning and code fast', 'Define features and outline the flow', 'Only use one file', 'Delete all tests'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'Build the Core',
                    badge: 'Portfolio',
                    icon: '💻',
                    xpReward: 500,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Core Development 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> A final project should combine variables, conditions, loops, functions, and data structures into one coherent workflow.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Engine Room</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">The app is an engine: functions are components, data structures are fuel, and control flow is how the whole system moves.</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">✅ Good projects often include a menu, repeated actions, simple storage, and clear user feedback such as print statements or status messages.</p>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Write a function <strong>hello(name)</strong> that returns <strong>"Hi, name!"</strong>. Then call it with <strong>"Ava"</strong> and print the result.',
                            starter: 'def hello(name):\n    return f"Hi, {name}!"\n\nprint(hello("Ava"))\n',
                            expected: 'Hi, Ava!'
                        },
                        {
                            type: 'quiz',
                            question: 'What is the value of combining loops, functions, and data structures in a final project?',
                            options: ['It makes the code more realistic and useful', 'It makes the project impossible to run', 'It removes all user input', 'It is only for advanced developers'],
                            correct: 0
                        }
                    ]
                },
                {
                    title: 'Polish & Present',
                    badge: 'Portfolio',
                    icon: '✨',
                    xpReward: 500,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Presentation & Polish 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> A finished project is not only functional; it is clear, tested, and understandable. Great developers polish the user experience and explain their thinking.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Showcase Stage</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">The code is the backstage work. The presentation is the bright lights that let people understand what your app does and why it matters.</p>
                                </div>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7">📌 Good project reflections include what the app does, what problem it solves, and what you learned while building it.</p>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Print a short project description that includes the words <strong>Python</strong> and <strong>portfolio</strong>.',
                            starter: '',
                            expected: 'Python portfolio'
                        },
                        {
                            type: 'quiz',
                            question: 'Why is polishing a project important?',
                            options: ['It makes it easier to explain and share', 'It is unnecessary', 'It removes all functions', 'It changes Python into JavaScript'],
                            correct: 0
                        }
                    ]
                }
            ]
        }
    ],
    web: [
        {
            id: 'html-foundations',
            title: '1. HTML Foundations',
            icon: '🏷️',
            badge: 'Structure',
            description: 'Learn the semantic structure of the web.',
            lessons: [
                {
                    title: 'Skeleton & Skin',
                    badge: 'HTML',
                    icon: '🦴',
                    xpReward: 100,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Semantic Tags 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Semantic HTML gives meaning to your content, helping screen readers and search engines understand your site.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Blueprint</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Don\'t just label every room "Box". Label them "Kitchen", "Bedroom", and "Hallway". Semantic tags are labels for your code.</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Create an <strong>&lt;article&gt;</strong> tag with the text <strong>"News"</strong>.',
                            starter: '',
                            expected: '<article>News</article>'
                        },
                        {
                            type: 'quiz',
                            question: 'Which tag represents the primary navigation links?',
                            options: ['<menu>', '<nav>', '<links>', '<header>'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'Data Portals',
                    badge: 'HTML',
                    icon: '📨',
                    xpReward: 100,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Forms and Inputs 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Forms are how users send data to your server. They use <code>input</code>, <code>label</code>, and <code>button</code> tags.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Customs Form</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">When you enter a country, you fill out a form with your name and purpose. The website form does the exact same thing for the digital world.</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Create an <strong>&lt;input&gt;</strong> of type <strong>"email"</strong>.',
                            starter: '',
                            expected: '<input type="email">'
                        },
                        {
                            type: 'quiz',
                            question: 'Which attribute connects a <label> to an <input>?',
                            options: ['for', 'id', 'name', 'connect'],
                            correct: 0
                        }
                    ]
                },
                {
                    title: 'Access for All',
                    badge: 'HTML',
                    icon: '♿',
                    xpReward: 100,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Accessibility (a11y) 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Web accessibility ensures that people with disabilities can use your website through screen readers and keyboard navigation.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Wheelchair Ramp</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A ramp doesn't hurt people who can walk, but it is ESSENTIAL for people in wheelchairs. Accessible code is the digital ramp.</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Add an <strong>alt</strong> attribute with the text <strong>"Logo"</strong> to an <strong>&lt;img&gt;</strong> tag.',
                            starter: '<img src="logo.png">\n',
                            expected: '<img src="logo.png" alt="Logo">'
                        },
                        {
                            type: 'quiz',
                            question: 'What does "ARIA" stand for?',
                            options: ['Advanced Resource Internet Access', 'Accessible Rich Internet Applications', 'Auto Responsive Interface Area', 'Always Ready Interactive App'],
                            correct: 1
                        }
                    ]
                }
            ]
        },
        {
            id: 'css-styling',
            title: '2. CSS Styling',
            icon: '🎨',
            badge: 'Design',
            description: 'Make your websites beautiful with colors, fonts, and layouts.',
            lessons: [
                {
                    title: 'The Layout Grid',
                    badge: 'CSS',
                    icon: '📐',
                    xpReward: 120,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Flexbox & Grid 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Flexbox is for 1D layouts (rows OR columns), and Grid is for 2D layouts (rows AND columns).</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Bento Box (Grid)</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A Bento box has pre-defined compartments of different sizes. You just drop the food into the right slot.</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Set the <strong>display</strong> property to <strong>grid</strong> in a CSS rule.',
                            starter: '.container {\n\n}\n',
                            expected: 'display: grid;'
                        },
                        {
                            type: 'quiz',
                            question: 'Which property centers items along the main axis in Flexbox?',
                            options: ['align-items', 'justify-content', 'center-content', 'distribute'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'The Chameleon Site',
                    badge: 'CSS',
                    icon: '🦎',
                    xpReward: 120,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Responsive Design 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Media queries allow your website to change its layout depending on the screen size (Mobile, Tablet, Desktop).</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: Water</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Be like water. If you put water into a cup, it becomes the cup. If you put it into a bottle, it becomes the bottle. Your site should flow into the device.</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Write the start of a media query for screens with a maximum width of <strong>600px</strong>.',
                            starter: '',
                            expected: '@media (max-width: 600px)'
                        },
                        {
                            type: 'quiz',
                            question: 'What is a "breakpoint"?',
                            options: ['When the site crashes', 'A specific screen width where the layout changes', 'The end of a CSS file', 'A type of button'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'The Smooth Operator',
                    badge: 'CSS',
                    icon: '✨',
                    xpReward: 120,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Transitions & Animations 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> CSS can animate properties over time, making your site feel alive and premium.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Slow Motion Replay</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Instead of a button snapping to a new color instantly, a transition lets you see the color "travel" from red to blue smoothly.</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Set a <strong>transition</strong> for the <strong>opacity</strong> property over <strong>0.5s</strong>.',
                            starter: 'button {\n\n}\n',
                            expected: 'transition: opacity 0.5s;'
                        },
                        {
                            type: 'quiz',
                            question: 'Which property is used to define the keyframes of an animation?',
                            options: ['@keyframes', '@animate', '@motion', '@frames'],
                            correct: 0
                        }
                    ]
                }
            ]
        },
        {
            id: 'js-interaction',
            title: '3. JavaScript Interaction',
            icon: '⚡',
            badge: 'Dynamic',
            description: 'Bring your sites to life with interactivity and data fetching.',
            lessons: [
                {
                    title: 'The Puppet Master',
                    badge: 'JS',
                    icon: '🎭',
                    xpReward: 150,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">DOM Manipulation 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> JavaScript treats your HTML like a tree of objects (the DOM). You can change text, styles, and elements on the fly.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Puppet Strings</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">The HTML is the puppet. JavaScript is the puppeteer. By pulling the right strings (DOM methods), you can make the puppet dance.</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Use <strong>document.querySelector</strong> to select a class named <strong>"btn"</strong>.',
                            starter: '',
                            expected: 'document.querySelector(".btn")'
                        },
                        {
                            type: 'quiz',
                            question: 'What does "DOM" stand for?',
                            options: ['Data Object Model', 'Document Object Model', 'Digital Online Method', 'Distributed Object Mode'],
                            correct: 1
                        }
                    ]
                },
                {
                    title: 'The Messenger',
                    badge: 'JS',
                    icon: '📬',
                    xpReward: 150,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Fetch & Promises 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> JavaScript uses <code>fetch</code> to get data from servers without reloading the page. This is handled by "Promises".</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The I.O.U.</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A Promise is like a note saying: "I will give you the data eventually." You can keep doing other things while you wait for the note to be fulfilled.</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Write a basic <strong>fetch()</strong> call to <strong>"/api/data"</strong>.',
                            starter: '',
                            expected: 'fetch("/api/data")'
                        },
                        {
                            type: 'quiz',
                            question: 'Which keyword is used to wait for a Promise to resolve in an async function?',
                            options: ['hold', 'wait', 'await', 'pause'],
                            correct: 2
                        }
                    ]
                },
                {
                    title: 'The Event Orchestra',
                    badge: 'JS',
                    icon: '🎻',
                    xpReward: 150,
                    steps: [
                        {
                            type: 'lesson',
                            content: `
                                <h2 style="font-size:22px;font-weight:800;color:var(--text-primary);margin-bottom:12px">Event Listeners 💡</h2>
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Events are things that happen (clicks, typing, scrolling). Listeners are functions that wait for these events to occur.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Mouse Trap</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">The trap sits silently (Listening). When the mouse touches the trigger (The Event), the trap snaps shut (The Action).</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Add a <strong>"click"</strong> event listener to a button variable <strong>b</strong>.',
                            starter: 'const b = document.querySelector("button");\n',
                            expected: 'b.addEventListener("click", () => {})'
                        },
                        {
                            type: 'quiz',
                            question: 'Which method is used to attach an event handler?',
                            options: ['.on()', '.listen()', '.addEventListener()', '.trigger()'],
                            correct: 2
                        }
                    ]
                }
            ]
        }
    ]
};
