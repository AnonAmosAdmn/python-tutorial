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
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          📚 Python Tutorial: Standard Library
        </h1>

        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Python ships with a powerful and extensive standard library. It provides
            modules and functions for file I/O, system operations, regular
            expressions, data persistence, math, networking, and more—no need to
            install third-party packages for many common tasks.
          </p>
        </section>

        {/* OS MODULE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. os</h2>
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

        {/* SYS MODULE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. sys</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Provides access to interpreter-specific variables and functions:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import sys

print(sys.version)
print(sys.argv)`}</code>
          </pre>
        </section>

        {/* MATH MODULE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. math</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Offers access to mathematical functions and constants:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import math

print(math.sqrt(16))
print(math.pi)`}</code>
          </pre>
        </section>

        {/* DATETIME MODULE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">4. datetime</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Supports working with dates and times:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`from datetime import datetime

now = datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))`}</code>
          </pre>
        </section>

        {/* RANDOM MODULE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">5. random</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Used for generating pseudo-random numbers:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import random

print(random.randint(1, 10))
print(random.choice(["apple", "banana", "cherry"]))`}</code>
          </pre>
        </section>

        {/* RE MODULE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">6. re</h2>
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

        {/* JSON MODULE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">7. json</h2>
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


        <section className="flex justify-between items-center">
          <Link href="/learning-python/advanced" className="text-blue-600 hover:underline font-semibold">
            ← Back : Advanced
          </Link>
          <Link href="/learning-python/databases" className="text-blue-600 hover:underline font-semibold">
            Next: Databases
          </Link>
        </section>
      </main>
    </>
  );
}
