import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonBasicsSyntax() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Basics & Syntax</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">🐍 Python Tutorial: Basics & Syntax</h1>

        <section className="mb-12">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Now that your environment is set up, it's time to begin writing actual Python code. This page introduces
            Python's basic syntax and common elements like variables, printing to the screen, comments, and indentation.
          </p>
        </section>




<hr className="mb-12"/>




        {/* HELLO WORLD */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Hello, World!</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Let's start with the most famous first program — printing "Hello, World!" to the screen. This simple example introduces how to display output in Python using the <code>print()</code> function.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-3">
            <code>print("Hello, World!")</code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300">
            When you run this code, it will show:
          </p>
          <pre className="bg-gray-900 text-white p-3 rounded mt-2">
            Hello, World!
          </pre>
        </section>




<hr className="mb-12"/>




        {/* VARIABLES AND DATA TYPES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Variables and Data Types</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            A <strong>variable</strong> is like a container that stores a value. In Python, you don't need to declare the type of a variable — Python figures it out for you automatically.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-3">
            <code>
{`name = "Alice"       # A string (text)
age = 30              # An integer (whole number)
height = 5.7          # A float (decimal number)
is_student = True     # A boolean (True or False)`}
            </code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300">
            Python is dynamically typed, which means you can assign any type of value to a variable without specifying it explicitly. You can also change the type later:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mt-3">
            <code>
{`x = 10      # x is an integer
x = "hello"  # now x is a string`}
            </code>
          </pre>
        </section>




<hr className="mb-12"/>




        {/* INDENTATION */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Indentation</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Python uses **indentation** (spaces or tabs at the beginning of a line) to define blocks of code. This is
            different from many other languages that use brackets (<code>{`{}`}</code>) for code blocks.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            For example, in the next lesson, you'll use indentation to define what happens in an <code>if</code> statement or loop.
            Here’s what it looks like:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>
{`# (Don't worry about 'if' yet — this is just to show indentation)
if True:
    print("Indented correctly")
print("This is outside the block")`}
            </code>
          </pre>
        </section>




<hr className="mb-12"/>




        {/* COMMENTS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Comments</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Comments are lines of text that are ignored by Python. They’re used to explain what your code does and help make it easier to understand.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-3">
            <code>
{`# This is a comment
# The next line prints a greeting
print("Hi there!")`}
            </code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300">
            Comments begin with the <code>#</code> symbol. Python will ignore anything on the line after the <code>#</code>.
          </p>
        </section>




<hr className="mb-12"/>




        {/* INPUT & OUTPUT */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Input & Output</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            In addition to printing output, Python can also take input from the user using the <code>input()</code> function.
            This is useful when you want your program to interact with people.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-3">
            <code>
{`name = input("What is your name? ")
print("Nice to meet you, " + name + "!")`}
            </code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300">
            When run, the program will pause and wait for the user to type something. After they press enter, the input is stored in the <code>name</code> variable and used in the greeting.
          </p>
        </section>




<hr className="mb-12"/>



        {/* RESOURCES */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Additional Resources & References</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Python Basics & Syntax</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://docs.python.org/3/tutorial/introduction.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Official Python Tutorial: Introduction
                  </a>
                </li>
                <li>
                  <a
                    href="https://realpython.com/python-basics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python: Python Basics
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.learnpython.org/en/Variables_and_Types"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    LearnPython.org: Variables and Types
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Syntax & Style Guides</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://peps.python.org/pep-0008/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    PEP 8 — Python Style Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://realpython.com/python-comments-guide/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python: Guide to Python Comments
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.python.org/3/tutorial/controlflow.html#defining-functions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Official Python Docs: Control Flow and Functions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>




<hr className="mb-12"/>




        {/* NAVIGATION */}
        <section className="flex justify-between items-center">
          <Link href="/learning-python/introduction-setup" className="text-white hover:underline font-semibold">
            ← Back : Introduction & Setup
          </Link>
          <Link href="/learning-python/control-flow" className="text-white hover:underline font-semibold">
            Next: Control Flow →
          </Link>
        </section>
      </main>
    </>
  );
}
