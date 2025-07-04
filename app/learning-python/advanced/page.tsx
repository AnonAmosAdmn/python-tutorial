import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonAdvancedTopics() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Advanced Topics</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">
          🐍 Python Tutorial: Advanced Topics
        </h1>


        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            
          </p>
        </section>



<hr className="mb-12"/>




        {/* LIST COMPREHENSIONS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. List Comprehensions</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            List comprehensions provide a concise, Pythonic way to create lists in a single line of code. They are faster and cleaner than using a traditional <code>for</code> loop.
          </p>

          <h3 className="mb-8text-xl font-semibold mt-4 mb-2 text-white">✅ Basic Syntax</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            <code>[expression for item in iterable]</code>
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`squares = [x * x for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-white">⚡ With Conditionals</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            You can filter items with an <code>if</code> clause at the end.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`evens = [x for x in range(20) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-white">🔁 Nested Loops</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            You can even use nested loops inside a list comprehension.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`pairs = [(x, y) for x in range(3) for y in range(3)]
print(pairs)  # [(0, 0), (0, 1), ..., (2, 2)]`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-white">🧠 Conditional Expressions</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Use a conditional expression to assign values based on logic.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]
print(labels)  # ['even', 'odd', 'even', 'odd', 'even']`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-white">📦 Real-World Example</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Extract the domain names from a list of emails:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`emails = ["alice@example.com", "bob@gmail.com"]
domains = [email.split("@")[1] for email in emails]
print(domains)  # ['example.com', 'gmail.com']`}</code>
          </pre>
        </section>





<hr className="mb-12"/>



        {/* GENERATORS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Generators</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Generators allow you to iterate over data lazily, yielding items one by one only as needed. They are memory efficient and perfect for working with large datasets or infinite sequences.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-white">⚙️ Basic Generator Function</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            A generator function uses the <code>yield</code> keyword instead of <code>return</code>. Each call to <code>next()</code> resumes execution where it last left off.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`def countdown(n):
  while n > 0:
    yield n
    n -= 1

for i in countdown(5):
  print(i)  # 5, 4, 3, 2, 1`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-white">💡 Why Use Generators?</h3>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 mb-3">
            <li>They don't store the entire sequence in memory.</li>
            <li>They pause execution between <code>yield</code> calls.</li>
            <li>Great for streaming data or large file processing.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-white">⚡ Generator Expressions</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Similar to list comprehensions but with parentheses instead of square brackets.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`squares = (x * x for x in range(5))
print(next(squares))  # 0
print(next(squares))  # 1`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-white">🧠 Real-World Example</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Reading large files line by line:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`def read_large_file(file_path):
  with open(file_path) as file:
    for line in file:
      yield line.strip()

# for line in read_large_file("data.txt"):
#   process(line)`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-white">📌 Notes</h3>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
            <li>Use <code>next(gen)</code> to manually get the next item.</li>
            <li>Generators raise <code>StopIteration</code> when done.</li>
            <li>They can be converted to lists using <code>list(gen)</code> if needed.</li>
          </ul>
        </section>




<hr className="mb-12"/>




        {/* DECORATORS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Decorators</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Decorators are higher-order functions that take another function and extend or modify its behavior without changing the original function’s code. They are widely used for logging, timing, access control, and more.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-white">🎯 Basic Decorator Example</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`def my_decorator(func):
  def wrapper():
    print("Before function call")
    func()
    print("After function call")
  return wrapper

@my_decorator
def greet():
  print("Hello!")

greet()
# Output:
# Before function call
# Hello!
# After function call`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-white">⚙️ How It Works</h3>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 mb-3">
            <li>The <code>@my_decorator</code> syntax is shorthand for <code>greet = my_decorator(greet)</code>.</li>
            <li>The decorator returns a new function that wraps the original one.</li>
            <li>This allows pre- and post-processing around the target function.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-white">📦 Decorators with Arguments</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            If your function takes arguments, the decorator's inner <code>wrapper</code> must accept them too.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`def debug(func):
  def wrapper(*args, **kwargs):
    print(f"Calling {func.__name__} with {args} {kwargs}")
    result = func(*args, **kwargs)
    print(f"{func.__name__} returned {result}")
    return result
  return wrapper

@debug
def add(a, b):
  return a + b

add(3, 4)
# Output:
# Calling add with (3, 4) {}
# add returned 7`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-white">🔁 Reusable & Composable</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Decorators can be stacked, reused across functions, and even parameterized for flexible behavior.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`def shout(func):
  def wrapper():
    result = func()
    return result.upper()
  return wrapper

@shout
def say():
  return "hi there"

print(say())  # HI THERE`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-white">🧠 Real Use Case: Timing</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import time

def timer(func):
  def wrapper(*args, **kwargs):
    start = time.time()
    result = func(*args, **kwargs)
    end = time.time()
    print(f"{func.__name__} took {end - start:.4f}s")
    return result
  return wrapper

@timer
def slow_function():
  time.sleep(1)

slow_function()`}</code>
          </pre>
        </section>





<hr className="mb-12"/>




        {/* PYTHONIC CODE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Writing Pythonic Code</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Writing clean, idiomatic Python—also known as “Pythonic” code—means using the language’s features and best practices in a way that is readable, elegant, and efficient.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-white">✅ List Comprehensions</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Instead of:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`result = []
for x in range(5):
  result.append(x * x)`}</code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300 mb-3">Do this:</p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`result = [x * x for x in range(5)]`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-white">📁 Use <code>with</code> for File I/O</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">This ensures proper closing of the file:</p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`with open("data.txt") as file:
  content = file.read()`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-white">🔁 Multiple Assignment</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Swap values without a temporary variable:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`a, b = 1, 2
a, b = b, a  # Now a is 2, b is 1`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-white">🔢 Use <code>enumerate()</code> and <code>zip()</code></h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">Instead of using manual counters:</p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`for i in range(len(items)):
          print(i, items[i])`}</code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300 mb-3">Do this:</p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`for i, item in enumerate(items):
  print(i, item)`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-white">🎨 Follow PEP8 Guidelines</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            PEP 8 is Python's official style guide, designed to promote readability and consistency across Python codebases. Adhering to PEP 8 helps your code look clean, professional, and easy for others (and your future self) to maintain.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            You can use tools like <code>black</code> (for automatic formatting) and <code>flake8</code> (for linting and style checks) to ensure your code follows these conventions.
          </p>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Indentation:</strong> Use <code>4 spaces</code> per indentation level — never tabs.</li>
            <li><strong>Line Length:</strong> Limit all lines to a maximum of <code>79 characters</code>. This makes code more readable on smaller screens and side-by-side diffs.</li>
            <li><strong>Blank Lines:</strong> Use blank lines to separate:
              <ul className="list-disc ml-6 mt-1">
                <li>Functions and class definitions</li>
                <li>Logical sections inside functions</li>
              </ul>
            </li>
            <li><strong>Naming Conventions:</strong>
              <ul className="list-disc ml-6 mt-1">
                <li><code>snake_case</code> for functions, variables, and methods (e.g., <code>calculate_total</code>)</li>
                <li><code>CapWords</code> (also known as PascalCase) for class names (e.g., <code>OrderProcessor</code>)</li>
                <li><code>UPPER_CASE</code> for constants</li>
              </ul>
            </li>
            <li><strong>Imports:</strong> Should be on separate lines and grouped as:
              <ul className="list-disc ml-6 mt-1">
                <li>Standard library imports</li>
                <li>Third-party imports</li>
                <li>Local application imports</li>
              </ul>
              Each group should be separated by a blank line.
            </li>
            <li><strong>Whitespace:</strong> Avoid unnecessary spaces:
              <ul className="list-disc ml-6 mt-1">
                <li>Before commas, colons, or semicolons: <code>wrong(1 ,2)</code> ❌ → <code>right(1, 2)</code> ✅</li>
                <li>Around the equals sign in keyword arguments: <code>foo(bar = 1)</code> ❌ → <code>foo(bar=1)</code> ✅</li>
                <li>Use a single space around binary operators: <code>x=1+2</code> ❌ → <code>x = 1 + 2</code> ✅</li>
              </ul>
            </li>
            <li><strong>Docstrings:</strong> Use triple double quotes <code>"""like this"""</code> to describe modules, classes, and functions.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            💡 <strong>Tip:</strong> Run <code>black your_file.py</code> or set it up in your editor to auto-format on save. Combine it with <code>flake8</code> to catch style violations, complexity issues, and unused imports.
          </p>


        </section>





<hr className="mb-12"/>




        {/* RESOURCES */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Additional Resources & References</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Advanced Python Concepts</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Official Python Docs: List Comprehensions
                  </a>
                </li>
                <li>
                  <a
                    href="https://realpython.com/introduction-to-python-generators/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python: Introduction to Generators
                  </a>
                </li>
                <li>
                  <a
                    href="https://realpython.com/primer-on-python-decorators/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python: Primer on Python Decorators
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Pythonic Style & Best Practices</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://peps.python.org/pep-0008/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    PEP 8 — Style Guide for Python Code
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.python.org/3/glossary.html#term-pythonic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Python Glossary: Pythonic
                  </a>
                </li>
                <li>
                  <a
                    href="https://realpython.com/python-pep8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python: Python Style Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>




<hr className="mb-12"/>




        {/* NAVIGATION */}
        <section className="flex justify-between items-center">
          <Link href="/learning-python/modules-packages" className="text-white hover:underline font-semibold">
            ← Back : Modules & Packages
          </Link>
          <Link href="/learning-python/standard-library" className="text-white hover:underline font-semibold">
            Next: Python Standard Library →
          </Link>
        </section>
      </main>
    </>
  );
}
