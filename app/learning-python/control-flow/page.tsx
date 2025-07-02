import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonControlFlow() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Control Flow</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">🐍 Python Tutorial: Control Flow</h1>

        <section className="mb-12">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Control flow allows your program to make decisions and repeat actions. In this section, you’ll learn how to
            use <code>if</code> statements, <code>for</code> loops, and <code>while</code> loops to control what your program does and when.
          </p>
        </section>




<hr className="mb-12"/>




        {/* IF STATEMENT */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Conditional Statements (if, elif, else)</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Python uses <code>if</code> statements to run code only if a condition is true.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-3">
            <code>
{`age = 18

if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")`}
            </code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            You can use <code>elif</code> (short for "else if") to test multiple conditions:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>
{`score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
else:
    print("Keep studying!")`}
            </code>
          </pre>
        </section>




<hr className="mb-12"/>




        {/* FOR LOOP */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. For Loops</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            A <code>for</code> loop repeats a block of code a specific number of times. Use it to iterate over a sequence like a list or range of numbers:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-3">
            <code>
{`# Print numbers from 0 to 4
for i in range(5):
    print(i)`}
            </code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            You can also use a <code>for</code> loop to iterate over items in a list:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>
{`fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print("I like", fruit)`}
            </code>
          </pre>
        </section>




<hr className="mb-12"/>




        {/* WHILE LOOP */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. While Loops</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            A <code>while</code> loop keeps running as long as a condition is <code>True</code>. Use it when you don't know ahead of time how many times to repeat.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>
{`count = 0

while count < 3:
    print("Count is", count)
    count += 1`}
            </code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300">
            Be careful not to create an infinite loop — always make sure your loop has a way to end!
          </p>
        </section>




<hr className="mb-12"/>




        {/* RESOURCES */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Additional Resources & References</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Python Control Flow Tutorials</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://docs.python.org/3/tutorial/controlflow.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Official Python Docs: Control Flow Tools
                  </a>
                </li>
                <li>
                  <a href="https://realpython.com/python-conditional-statements/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Real Python: Python Conditional Statements
                  </a>
                </li>
                <li>
                  <a href="https://www.programiz.com/python-programming/if-elif-else" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Programiz: Python If...Else Statements
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Looping & Iteration Guides</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://realpython.com/python-for-loop/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Real Python: For Loops in Python
                  </a>
                </li>
                <li>
                  <a href="https://docs.python.org/3/tutorial/controlflow.html#while-statements" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Official Python Docs: While Loops
                  </a>
                </li>
                <li>
                  <a href="https://www.learnpython.org/en/Loops" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    LearnPython.org: Loops Tutorial
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>




<hr className="mb-12"/>




        {/* NAVIGATION */}
        <section className="flex justify-between items-center">
          <Link href="/learning-python/basics-syntax" className="text-white hover:underline font-semibold">
            ← Back : Basics & Syntax
          </Link>
          <Link href="/learning-python/functions-scope" className="text-white hover:underline font-semibold">
            Next: Functions →
          </Link>
        </section>
      </main>
    </>
  );
}
