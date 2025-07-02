import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonIntroductionSetup() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Introduction & Setup</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">🐍 Python Tutorial: Introduction & Setup</h1>

        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Welcome to the Python tutorial! This section will guide you through installing Python, setting up your development environment properly, and getting everything ready for writing real Python code.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. What is Python?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Python is a versatile, high-level programming language known for its readability and ease of use. It’s widely used in web development, data science, automation, scripting, and more.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. Installing Python</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Visit the official Python website to download the latest version:{" "}
            <a
              href="https://www.python.org/downloads/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              python.org/downloads
            </a>
            .
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Follow the installer instructions.
            Check the box <strong>"Add Python to PATH"</strong> during the installation (Windows).            
          </p>
          <p className="mt-10 text-gray-700 dark:text-gray-300">
            For macOS, you can install Python using Homebrew:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-3 overflow-x-auto">
            <code>brew install python</code>
          </pre>
          <p className="mt-10 text-gray-700 dark:text-gray-300">
            On Linux, use your package manager, for example on Ubuntu/Debian:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>sudo apt update && sudo apt install python3 python3-pip</code>
          </pre>
          <p className="mt-8">
            <strong>Verify Setup:</strong> 
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mt-1 mb-1 overflow-x-auto">
            <code>python --version && pip --version</code>
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Setting Up Your Development Environment</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            After installing Python, it's important to set up a comfortable development environment:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-3 space-y-2">
            <li className="mt-8">
              <strong>Download an editor or IDE:</strong> Popular options include:
              <ul className="list-disc list-inside ml-5 mt-1">
                <li>
                  <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
                    Visual Studio Code (VS Code)
                  </a>{" "}
                  – lightweight, customizable, with great Python extensions
                </li>
                <li>
                  <a href="https://www.jetbrains.com/pycharm/download/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
                    PyCharm Community Edition
                  </a>{" "}
                  – full-featured IDE designed specifically for Python
                </li>
                <li>
                  <a href="https://www.sublimetext.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
                    Sublime Text
                  </a>{" "}
                  or{" "}
                  <a href="https://atom.io/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 ">
                    Atom
                  </a>{" "}
                  – flexible text editors with Python support
                </li>
              </ul>
            </li>

            <li className="mt-8">
              <strong>Configure Python Interpreter:</strong> 
              In your editor, set the Python interpreter path to the Python installation you just completed. This allows your editor to run, lint, and debug Python code correctly.
            </li>
            <li className="mt-8">
              <strong>Install Python Extensions:</strong> 
              For VS Code, install the official "Python" extension by Microsoft. It provides linting, debugging, code completion, and more.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">4. Virtual Environments</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4">
            <li>
              <strong>Use Virtual Environments:</strong> Python virtual environments isolate project dependencies so they don't conflict with other projects or system Python.
            </li>
            <li>
              Create one with:
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mt-1 mb-1 overflow-x-auto">
                <code>python -m venv myenv</code>
              </pre>
            </li>
            <li>
              Activate on <strong>Windows</strong>:
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mt-1 mb-1 overflow-x-auto">
                <code>myenv\Scripts\activate</code>
              </pre>
            </li>
            <li>
              Activate on <strong>macOS/Linux</strong>:
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mt-1 mb-1 overflow-x-auto">
                <code>source myenv/bin/activate</code>
              </pre>
            </li>
            <li>
              Deactivate with:
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mt-1 mb-1 overflow-x-auto">
                <code>deactivate</code>
              </pre>
            </li>
          </ul>
        </section>
        <section className="flex justify-between items-center">
          <Link href="/" className="text-blue-600 hover:underline font-semibold">
            ← Back : Python Home
          </Link>
          <Link href="/learning-python/basics-syntax" className="text-blue-600 hover:underline font-semibold">
            Next: Python Basics & Syntax →
          </Link>
        </section>
      </main>
    </>
  );
}
