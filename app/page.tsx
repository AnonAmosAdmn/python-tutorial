import Head from "next/head";
import Link from "next/link";
import React from "react";

const pythonTutorialSections = [

  {
    number: 1,
    name: "Introduction & Setup",
    description:
      "Get started with installing Python, setting up your development environment, and writing your first program.",
    path: "/learning-python/introduction-setup",
  },
  {
    number: 2,
    name: "Python Basics & Syntax",
    description:
      "Learn Python's syntax rules, variables, data types, and how to write simple programs.",
    path: "/learning-python/basics-syntax",
  },
  {
    number: 3,
    name: "Control Flow (if, for, while)",
    description:
      "Master conditionals, loops, and flow control to make your programs dynamic and interactive.",
    path: "/learning-python/control-flow",
  },
  {
    number: 4,
    name: "Functions & Scope",
    description:
      "Define reusable functions, understand variable scope, parameters, and return values.",
    path: "/learning-python/functions-scope",
  },
  {
    number: 5,
    name: "Data Structures",
    description:
      "Explore lists, tuples, dictionaries, sets, and how to manipulate them.",
    path: "/learning-python/data-structures",
  },
  {
    number: 6,
    name: "File Handling",
    description:
      "Learn to read from and write to files, and manage file operations safely.",
    path: "/learning-python/file-handling",
  },
  {
    number: 7,
    name: "Error Handling",
    description:
      "Catch and handle errors gracefully using try-except blocks.",
    path: "/learning-python/error-handling",
  },
  {
    number: 8,
    name: "Object-Oriented Programming (OOP)",
    description:
      "Learn classes, objects, inheritance, encapsulation, and polymorphism in Python.",
    path: "/learning-python/oop",
  },
  {
    number: 9,
    name: "Modules & Packages",
    description:
      "Understand how to organize code using modules and packages, and explore Python’s standard library.",
    path: "/learning-python/modules-packages",
  },
  {
    number: 10,
    name: "Advanced Topics",
    description:
      "Explore list comprehensions, decorators, generators, and writing clean, pythonic code.",
    path: "/learning-python/advanced",
  },
  {
    number: 11,
    name: "Python Standard Library Deep Dive",
    description:
      "Explore popular built-in modules like datetime, collections, itertools, os, sys, and regex.",
    path: "/learning-python/standard-library",
  },
  {
    number: 12,
    name: "Working with Databases",
    description:
      "Learn how to connect and query databases using SQLite and ORMs like SQLAlchemy.",
    path: "/learning-python/databases",
  },
  {
    number: 13,
    name: "Web Development with Flask/Django",
    description:
      "Build your first web apps using popular Python web frameworks like Flask and Django.",
    path: "/learning-python/web-development",
  },
  {
    number: 14,
    name: "Testing & Debugging",
    description:
      "Write unit tests using unittest and pytest, and learn debugging techniques.",
    path: "/learning-python/testing-debugging",
  },
  {
    number: 15,
    name: "Concurrency & Async Programming",
    description:
      "Explore threading, multiprocessing, and async programming with asyncio.",
    path: "/learning-python/concurrency-async",
  },
  {
    number: 16,
    name: "Data Science Foundations",
    description:
      "Introduction to numpy, pandas, and basic data visualization libraries.",
    path: "/learning-python/data-science",
  },
  {
    number: 17,
    name: "Python for Automation & Scripting",
    description:
      "Automate file system tasks, web scraping, and other repetitive jobs.",
    path: "/learning-python/automation",
  },
  {
    number: 18,
    name: "Working with APIs",
    description:
      "Consume and build REST APIs using requests and Flask/Django REST Framework.",
    path: "/learning-python/working-apis",
  },
  {
    number: 19,
    name: "Scraping",
    description:
      "Learn how to scrape websites with python.",
    path: "/learning-python/web-scraping",
  },
  {
    number: 20,
    name: "Deployment & Distribution",
    description:
      "Learn how to create Python packages and publish them to PyPI.",
    path: "/learning-python/deployment",
  },
  {
    number: 21,
    name: "Python and Machine Learning",
    description:
      "Introduction to scikit-learn, TensorFlow, and Keras for machine learning.",
    path: "/learning-python/machine-learning",
  },
  {
    number: 22,
    name: "Python and Ai",
    description:
      "Introduction to AI and deep learning with PyTorch and Keras.",
    path: "/learning-python/python-ai",
  },
  {
    number: 23,
    name: "Security Best Practices",
    description:
      "Understand secure coding practices, input validation, and secrets management.",
    path: "/learning-python/best-practices",
  },
];



export default function LearningPythonTutorial() {
  return (
    <>
      <Head>
        <title>Python Tutorial</title>
        <meta
          name="description"
          content="A modern, step-by-step Python tutorial for beginners and intermediates. Learn Python programming interactively!"
        />
      </Head>
      <main className="p-0 min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        {/* Hero Section */}
        <section className="py-16 px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-600 dark:text-yellow-300 drop-shadow-lg">
            🐍 Python Tutorial 2025
          </h1>
        </section>


        {/* Tutorial Sections */}
        <section id="sections" className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pythonTutorialSections.map((section) => (
              <Link href={section.path} key={section.path} className="group focus:outline-none">
                <div
                  tabIndex={0}
                  role="link"
                  className="bg-white hover:bg-yellow-50 dark:bg-gray-900 dark:hover:bg-gray-800 transition rounded-2xl shadow-lg p-6 flex flex-col items-center text-left cursor-pointer border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-400"
                >
                  <span className="text-2xl font-bold text-blue-500 group-hover:text-yellow-400 mb-2">
                    {section.number < 10 ? `0${section.number}` : section.number}
                  </span>
                  <h3 className="text-lg font-semibold text-blue-500 group-hover:underline text-center">
                    {section.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 text-center">{section.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Python Tutorial 2025 &mdash; Built with Next.js & Tailwind CSS
        </footer>
      </main>
    </>
  );
}