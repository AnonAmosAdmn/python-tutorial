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
        <h1 className="text-4xl font-bold mb-6 text-blue-500">🐍 Python Tutorial: Basics & Syntax</h1>

        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Now that your environment is set up, it's time to begin writing actual Python code. This page introduces
            Python's basic syntax and common elements like variables, printing to the screen, comments, and indentation.
          </p>
        </section>

        {/* Hello World */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. Hello, World!</h2>
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

        {/* Variables & Data Types */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. Variables and Data Types</h2>
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

        {/* Indentation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Indentation</h2>
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

        {/* Comments */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">4. Comments</h2>
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

        {/* Input/Output */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">5. Input & Output</h2>
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

        <section className="flex justify-between items-center">
          <Link href="/learning-python/introduction-setup" className="text-blue-600 hover:underline font-semibold">
            ← Back : Introduction & Setup
          </Link>
          <Link href="/learning-python/control-flow" className="text-blue-600 hover:underline font-semibold">
            Next: Control Flow →
          </Link>
        </section>
      </main>
    </>
  );
}
