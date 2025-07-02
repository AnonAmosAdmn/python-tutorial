import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonModulesPackages() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Modules and Packages</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          📦 Python Tutorial: Modules and Packages
        </h1>

        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            As your Python programs grow in size and complexity, it's useful to organize your code into reusable files called <strong>modules</strong>, and directories of modules called <strong>packages</strong>. This helps keep code maintainable, reusable, and readable.
          </p>
        </section>

        {/* MODULES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. What is a Module?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            A <strong>module</strong> is simply a Python file (.py) that contains functions, classes, or variables. You can import and use them in other files.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-3">
            <code>{`# greetings.py

def say_hello(name):
  print(f"Hello, {name}!")`}</code>
          </pre>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`# main.py
import greetings

greetings.say_hello("Alice")`}</code>
          </pre>
        </section>

        {/* PACKAGES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. What is a Package?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            A <strong>package</strong> is a directory that contains a special <code>__init__.py</code> file (can be empty) and one or more module files.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-3">
            <code>{`
# directory structure:
my_package/
├── __init__.py
├── math_utils.py
├── string_utils.py`}</code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            You can import functions from modules inside a package:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`from my_package.math_utils import add
result = add(2, 3)`}</code>
          </pre>
        </section>

        {/* BUILT-IN MODULES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Built-in Modules</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Python comes with many useful standard modules like <code>math</code>, <code>random</code>, <code>datetime</code>, and more.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import math
print(math.sqrt(16))  # 4.0`}</code>
          </pre>
        </section>

        {/* INSTALLING THIRD PARTY PACKAGES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">4. Installing Third-Party Packages</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Use <code>pip</code> to install external packages:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-3">
            <code>{`pip install requests`}</code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Then import and use them in your script:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import requests
response = requests.get("https://api.github.com")
print(response.status_code)`}</code>
          </pre>
        </section>






        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Additional Resources & References</h2>
          <div className="space-y-6">

            {/* MODULES RESOURCES */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Modules in Python</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://realpython.com/python-modules-packages/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python: Python Modules and Packages – An Introduction
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.python.org/3/tutorial/modules.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Official Python Docs: Modules
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.geeksforgeeks.org/python-modules/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GeeksForGeeks: Python Modules
                  </a>
                </li>
              </ul>
            </div>

            {/* PACKAGES RESOURCES */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Packages & Dependency Management</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://packaging.python.org/en/latest/tutorials/packaging-projects/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Packaging Python Projects (Official Guide)
                  </a>
                </li>
                <li>
                  <a
                    href="https://pip.pypa.io/en/stable/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    pip Documentation: Python Package Installer
                  </a>
                </li>
                <li>
                  <a
                    href="https://realpython.com/what-is-pip/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python: What is pip?
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </section>








        <section className="flex justify-between items-center">
          <Link href="/learning-python/oop" className="text-blue-600 hover:underline font-semibold">
            ← Back : Object Oriented Programming
          </Link>
          <Link href="/learning-python/advanced" className="text-blue-600 hover:underline font-semibold">
            Next: Advanced →
          </Link>
        </section>
      </main>
    </>
  );
}
