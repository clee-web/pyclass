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
            description: 'Teach your programs how to make decisions and repeat actions.',
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
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Use <code>if</code>, <code>elif</code>, and <code>else</code> to let your code branch off in different directions based on conditions.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Fork in the Road</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">You reach a fork. If the sign says "Sunny", you go left to the beach. Otherwise, you go right to the cinema.</p>
                                </div>
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
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Loops (<code>for</code> and <code>while</code>) allow you to run the same block of code multiple times without rewriting it.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Ferris Wheel</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">The wheel goes around and around for a set number of rotations (for loop) or until the operator hits the stop button (while loop).</p>
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
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Use <code>try</code> and <code>except</code> to prevent your program from crashing when something unexpected happens.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Safety Net</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">If a trapeze artist falls, the net catches them. If your code "falls" (errors), the <code>except</code> block catches it.</p>
                                </div>
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
            description: 'Learn to manage collections of data using Lists, Dictionaries, and Sets.',
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
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Lists are ordered collections that can hold multiple items. You can add, remove, and change items easily.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Train Cars</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Each item is a train car. They are connected in a specific order. You can add a car to the end or remove one from the middle.</p>
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
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Dictionaries store data in Key-Value pairs. They are perfect for looking up information quickly.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Labeled Locker</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">You don't search every locker for your bag; you just go to locker "101". The key is the number, the value is your bag.</p>
                                </div>
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
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> <code>Tuples</code> are lists that cannot be changed (immutable), and <code>Sets</code> are collections of unique items with no duplicates.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Marble Bag (Set)</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">In a set, you can't have two identical red marbles. If you try to add another, the bag just ignores it.</p>
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
            description: 'Build robust systems using Classes, Objects, and Inheritance.',
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
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> A Class is a blueprint for creating objects. It defines what data they hold and what they can do.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Cookie Cutter</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">The class is the cutter. The objects are the individual cookies. They all have the same shape, but can have different toppings.</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Define a class <strong>Car</strong> with an <strong>__init__</strong> method that sets <strong>self.color</strong>. Instantiate it with "Red" and print the color.',
                            starter: 'class Car:\n    def __init__(self, color):\n        self.color = color\n\n',
                            expected: 'Red'
                        },
                        {
                            type: 'quiz',
                            question: 'What is the purpose of the "__init__" method?',
                            options: ['To delete an object', 'To initialize an object\'s attributes', 'To hide the class', 'To speed up the code'],
                            correct: 1
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
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Inheritance allows one class to take the attributes and methods of another class, reducing code duplication.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: Biology</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">A child inherits traits from their parents but can also have their own unique characteristics.</p>
                                </div>
                                <div class="code-block">
                                    <span class="code-keyword">class</span> <span class="code-builtin">Animal</span>:<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;pass<br><br>
                                    <span class="code-keyword">class</span> <span class="code-builtin">Dog</span>(Animal):<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;pass
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Create a class <strong>ElectricCar</strong> that inherits from <strong>Car</strong>. Just use <strong>pass</strong> inside.',
                            starter: 'class Car:\n    pass\n\n',
                            expected: ''
                        },
                        {
                            type: 'quiz',
                            question: 'What do we call the class being inherited from?',
                            options: ['Subclass', 'Parent/Base Class', 'Child Class', 'Derivative Class'],
                            correct: 1
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
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Polymorphism lets different classes be treated as the same type through a common interface.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Universal Remote</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">You press "Power". Whether it's a TV, DVD player, or AC, they all "Power on", but in their own way.</p>
                                </div>
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
            description: 'Learn industry standards: Pip, Virtual Environments, and Testing.',
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
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> A virtual environment (venv) is an isolated space for your project\'s dependencies, preventing version conflicts.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Lab Room</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Each project is a different experiment. You wouldn't want chemicals from one experiment leaking into another. The lab room keeps them separate.</p>
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
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> <code>pip</code> is the package manager for Python. It allows you to install libraries written by other developers.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The App Store</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">You need a specialized tool (like a map). Instead of building it yourself, you download it from the store.</p>
                                </div>
                                <div class="code-block">
                                    pip install requests
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
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Logging tracks what happens while your code runs, and Testing ensures your code produces the right results.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Flight Data Recorder</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Logging is the "Black Box". If the plane crashes, you check the box to see what happened right before the failure.</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Use <strong>assert</strong> to check if <strong>2 * 2</strong> is <strong>4</strong>.',
                            starter: '',
                            expected: ''
                        },
                        {
                            type: 'quiz',
                            question: 'Which module is built into Python for tracking events?',
                            options: ['tracker', 'logging', 'history', 'eventlib'],
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
            description: 'Connect your Python scripts to the world using HTTP and JSON.',
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
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> Apps talk via HTTP. Your script (the Client) sends a Request, and the Server sends back a Response.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: Ordering Pizza</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">You call (Request). You give details (Payload). The shop says "OK" (Status Code 200) and brings the pizza (Data).</p>
                                </div>
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
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> JSON is the universal language of data on the web. It looks like a Python dictionary.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Universal Adapter</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">Whether you use Java, Python, or JS, everyone understands JSON. It\'s like the metric system for data.</p>
                                </div>
                            `
                        },
                        {
                            type: 'code',
                            instruction: 'Use <strong>json.loads()</strong> to parse <strong>\'{"id": 1}\'</strong> and print the value of "id".',
                            starter: 'import json\ns = \'{"id": 1}\'\n',
                            expected: '1'
                        },
                        {
                            type: 'quiz',
                            question: 'What is the Python equivalent of a JSON object?',
                            options: ['List', 'Tuple', 'Dictionary', 'Set'],
                            correct: 2
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
                                <p style="color:var(--text-secondary);margin-bottom:16px;line-height:1.7"><strong>Big Idea:</strong> When there is no API, you can "scrape" data directly from HTML using tools like BeautifulSoup.</p>
                                <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:16px;border:1px solid var(--border-subtle)">
                                    <p style="font-weight:700;margin-bottom:6px">🖼️ Visual Metaphor: The Gold Panner</p>
                                    <p style="font-size:14px;color:var(--text-secondary)">The website is a river of mud (HTML). Scraping is the process of sifting through the mud to find the gold nuggets (Data).</p>
                                </div>
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
            description: 'Store data permanently using SQL and relational databases.',
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
            description: 'Take your code from your machine to the world with Git and CI/CD.',
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
            description: 'Master powerful Python features: Decorators, Generators, and Regex.',
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
