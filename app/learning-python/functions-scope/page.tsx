import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonFunctionsAndScope() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Functions & Scope</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">
          🐍  Python Tutorial: Functions & Scope
        </h1>

        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Functions help you organize code into reusable blocks. They allow you to group related code, avoid repetition, and create modular programs. Understanding scope ensures variables behave the way you expect inside and outside functions.
          </p>
        </section>




<hr className="mb-12"/>




        {/* DEFINING FUNCTIONS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Defining Functions</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Define a function using the <code>def</code> keyword, followed by a name and parentheses:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-3">
            <code>
{`def greet():
    print("Hello, world!")

greet()`}
            </code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300">
            The function <code>greet()</code> can be called multiple times without rewriting its code.
          </p>
        </section>




<hr className="mb-12"/>




        {/* FUNCTION PARAMETERS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Parameters and Arguments</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            You can pass values to functions through parameters:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>
{`def greet(name):
    print(f"Hello, {name}!")

greet("Alice")`}
            </code>
          </pre>
        </section>




<hr className="mb-12"/>




        {/* RETURN VALUES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Return Values</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Use the <code>return</code> statement to send data back from a function:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>
{`def add(a, b):
    return a + b

result = add(3, 5)
print(result)`}
            </code>
          </pre>
        </section>




<hr className="mb-12"/>




        {/* SCOPE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Variable Scope</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Variables created inside a function are <strong>local</strong> and can’t be accessed outside. Variables outside are <strong>global</strong>:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-3">
            <code>
{`x = 10  # global

def modify():
    x = 5  # local to function
    print("Inside:", x)

modify()
print("Outside:", x)`}
            </code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300">
            Use <code>global x</code> inside a function if you really need to modify a global variable (not recommended unless necessary).
          </p>
        </section>




<hr className="mb-12"/>




        {/* RESOURCES */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Additional Resources & References</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Python Functions & Scope Tutorials</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://docs.python.org/3/tutorial/controlflow.html#defining-functions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Official Python Docs — Defining Functions
                  </a>
                </li>
                <li>
                  <a
                    href="https://realpython.com/defining-your-own-python-function/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python — Defining Your Own Python Functions
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.programiz.com/python-programming/function"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Programiz — Python Functions and Scope Explained
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Helpful Python Tools & References</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://realpython.com/python-scope-legb-rule/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python — Understanding Python's LEGB Scope Rule
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.python.org/3/reference/executionmodel.html#naming-and-binding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Python Language Reference — Naming and Binding
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackoverflow.com/questions/11908230/what-does-the-global-keyword-do-in-python"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Stack Overflow — How does the <code>global</code> keyword work?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>




<hr className="mb-12"/>




        {/* NAVIGATION */}
        <section className="flex justify-between items-center">
          <Link href="/learning-python/control-flow" className="text-white hover:underline font-semibold">
            ← Back : Control Flow
          </Link>
          <Link href="/learning-python/data-structures" className="text-white hover:underline font-semibold">
            Next: Data Structures →
          </Link>
        </section>
      </main>
    </>
  );
}
