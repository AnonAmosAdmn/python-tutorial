import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonErrorHandling() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Error Handling</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">
          ⚠️ Python Tutorial: Error Handling
        </h1>

        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            In Python, errors (also known as exceptions) can interrupt the normal flow of a program. Proper error handling allows your program to respond to unexpected events gracefully rather than crashing.
          </p>
        </section>

        {/* EXCEPTIONS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. What Are Exceptions?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Exceptions are raised when Python encounters an error during execution. Common examples include:
          </p>
          <ul className="list-disc list-inside ml-5 text-gray-700 dark:text-gray-300">
            <li><code>ZeroDivisionError</code></li>
            <li><code>FileNotFoundError</code></li>
            <li><code>TypeError</code></li>
            <li><code>ValueError</code></li>
          </ul>
        </section>

        {/* TRY-EXCEPT */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. Try-Except Blocks</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Use <code>try</code> and <code>except</code> blocks to catch and handle exceptions.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`try:
  x = 10 / 0
except ZeroDivisionError:
  print("You can't divide by zero!")`}</code>
          </pre>
        </section>

        {/* MULTIPLE EXCEPTIONS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Handling Multiple Exceptions</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            You can catch different types of exceptions using multiple <code>except</code> blocks:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`try:
  value = int("abc")
except ValueError:
  print("Invalid input")
except TypeError:
  print("Wrong type")`}</code>
          </pre>
        </section>

        {/* ELSE and FINALLY */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">4. Else and Finally</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            <code>else</code> runs if no exceptions are raised, and <code>finally</code> always runs (useful for cleanup):
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`try:
  f = open("myfile.txt")
except FileNotFoundError:
  print("File not found")
else:
  print("File opened successfully")
  f.close()
finally:
  print("Done")`}</code>
          </pre>
        </section>

        {/* RAISING EXCEPTIONS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">5. Raising Your Own Exceptions</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            You can raise exceptions manually using the <code>raise</code> keyword:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`age = -1
if age < 0:
  raise ValueError("Age cannot be negative")`}</code>
          </pre>
        </section>


        <section className="flex justify-between items-center">
          <Link href="/learning-python/file-handling" className="text-blue-600 hover:underline font-semibold">
            ← Back : File Handling
          </Link>
          <Link href="/learning-python/oop" className="text-blue-600 hover:underline font-semibold">
            Next: Object Oriented Programming →
          </Link>
        </section>
      </main>
    </>
  );
}
