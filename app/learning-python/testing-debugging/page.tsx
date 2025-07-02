import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonTestingDebugging() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Testing and Debugging</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          🧪 Python Tutorial: Testing and Debugging
        </h1>

        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Writing error-free and reliable Python code requires strong testing and debugging practices. In this tutorial, we cover core debugging techniques, how to write effective unit tests using Python's built-in <code>unittest</code> module, and explore tools to help you develop clean, bug-free programs.
          </p>
        </section>

        {/* DEBUGGING */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. Debugging Python Code</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Debugging involves identifying and fixing issues in your code. Common debugging techniques include:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Print Statements:</strong> Add <code>print()</code> to trace values and logic.</li>
            <li><strong>Using <code>pdb</code>:</strong> Python's built-in debugger allows you to set breakpoints and inspect variables interactively.</li>
          </ul>

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mt-3">
            <code>{`import pdb

def divide(a, b):
    pdb.set_trace()
    return a / b

print(divide(10, 2))`}</code>
          </pre>
        </section>

        {/* UNIT TESTING */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. Unit Testing with unittest</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Python's <code>unittest</code> framework helps you write tests for individual units of your code (functions, classes). A simple test looks like this:
          </p>

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import unittest

def add(a, b):
    return a + b

class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)

if __name__ == '__main__':
    unittest.main()`}</code>
          </pre>

          <p className="text-gray-700 dark:text-gray-300 mt-3">
            🔧 Run the test with: <code>python test_file.py</code>
          </p>
        </section>

        {/* OTHER TESTING TOOLS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Popular Testing Tools</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            While <code>unittest</code> is built-in, Python has a rich ecosystem of third-party testing tools:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li><code>pytest</code> – simple, powerful, and widely used</li>
            <li><code>doctest</code> – test your docstrings as documentation + tests</li>
            <li><code>coverage</code> – measure how much of your code is tested</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 mt-3">
            Example with <code>pytest</code>:
          </p>

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`# test_math.py

def add(x, y):
    return x + y

def test_add():
    assert add(2, 3) == 5`}</code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Run with <code>pytest test_math.py</code>
          </p>
        </section>


        <section className="flex justify-between items-center">
          <Link href="/learning-python/web-development" className="text-blue-600 hover:underline font-semibold">
            ← Back : Web Development
          </Link>
          <Link href="/learning-python/concurrency-async" className="text-blue-600 hover:underline font-semibold">
            Next: Concurrency and Async →
          </Link>
        </section>
      </main>
    </>
  );
}
