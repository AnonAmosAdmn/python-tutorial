import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonStandardLibrary() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Standard Library</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">
          🐍 Python Tutorial: Standard Library
        </h1>

        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Python ships with a powerful and extensive standard library. It provides
            modules and functions for file I/O, system operations, regular
            expressions, data persistence, math, networking, and more—no need to
            install third-party packages for many common tasks.
          </p>
        </section>




<hr className="mb-12"/>





        {/* OS MODULE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. os</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Provides functions for interacting with the operating system:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import os

print(os.name)
print(os.getcwd())
os.mkdir("new_folder")`}</code>
          </pre>
        </section>




<hr className="mb-12"/>





        {/* SYS MODULE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. sys</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Provides access to interpreter-specific variables and functions:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import sys

print(sys.version)
print(sys.argv)`}</code>
          </pre>
        </section>




<hr className="mb-12"/>





        {/* MATH MODULE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. math</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Offers access to mathematical functions and constants:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import math

print(math.sqrt(16))
print(math.pi)`}</code>
          </pre>
        </section>




<hr className="mb-12"/>





        {/* DATETIME MODULE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. datetime</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Supports working with dates and times:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`from datetime import datetime

now = datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))`}</code>
          </pre>
        </section>




<hr className="mb-12"/>





        {/* RANDOM MODULE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">5. random</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Used for generating pseudo-random numbers:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import random

print(random.randint(1, 10))
print(random.choice(["apple", "banana", "cherry"]))`}</code>
          </pre>
        </section>




<hr className="mb-12"/>





        {/* RE MODULE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">6. re</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Provides tools for working with regular expressions:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import re

pattern = r"\d+"
result = re.findall(pattern, "There are 24 apples and 17 bananas.")
print(result)`}</code>
          </pre>
        </section>




<hr className="mb-12"/>





        {/* JSON MODULE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">7. json</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Allows you to encode and decode data in JSON format:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import json

data = {"name": "Alice", "age": 30}
json_str = json.dumps(data)
print(json_str)

parsed = json.loads(json_str)
print(parsed["name"])`}</code>
          </pre>
        </section>




<hr className="mb-12"/>




        {/* RESOURCES */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Additional Resources & References</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Official Python Documentation</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://docs.python.org/3/library/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Python 3 Standard Library Index
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.python.org/3/tutorial/stdlib.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Python Official Tutorial: Standard Library Overview
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Learning & Practice</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://realpython.com/python-modules-packages/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python – Python Modules and Standard Library Explained
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.python-guide.org/standard-library/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Hitchhiker’s Guide to Python – Standard Library Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://pymotw.com/3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    PyMOTW (Python Module of the Week) – Standard Library Deep Dive
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Interactive References</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://devdocs.io/python~3.10/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    DevDocs – Python 3.x Standard Library (Searchable Docs)
                  </a>
                </li>
                <li>
                  <a
                    href="https://pythoncheatsheet.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Python 3 Cheat Sheet – Quick Reference for Standard Modules
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>




<hr className="mb-12"/>




        {/* NAVIGATION */}
        <section className="flex justify-between items-center">
          <Link href="/learning-python/advanced" className="text-white hover:underline font-semibold">
            ← Back : Advanced
          </Link>
          <Link href="/learning-python/databases" className="text-white hover:underline font-semibold">
            Next: Databases
          </Link>
        </section>
      </main>
    </>
  );
}
