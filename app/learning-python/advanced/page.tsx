import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonAdvancedTopics() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Advanced Topics</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          🧠 Python Tutorial: Advanced Topics
        </h1>

        {/* LIST COMPREHENSIONS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. List Comprehensions</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            List comprehensions offer a concise way to create lists using a single line of code.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`squares = [x * x for x in range(10)]
print(squares)`}</code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            They can also include conditional logic:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`evens = [x for x in range(20) if x % 2 == 0]
print(evens)`}</code>
          </pre>
        </section>

        {/* GENERATORS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. Generators</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Generators allow you to iterate over data lazily, yielding items one by one as needed.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`def countdown(n):
  while n > 0:
    yield n
    n -= 1

for i in countdown(5):
  print(i)`}</code>
          </pre>
        </section>

        {/* DECORATORS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Decorators</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Decorators are functions that modify the behavior of other functions. They are useful for logging, access control, caching, and more.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`def my_decorator(func):
  def wrapper():
    print("Before function call")
    func()
    print("After function call")
  return wrapper

@my_decorator
def greet():
  print("Hello!")

greet()`}</code>
          </pre>
        </section>

        {/* PYTHONIC CODE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">4. Writing Pythonic Code</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Writing clean, idiomatic Python—"Pythonic" code—involves using conventions and features of the language effectively.
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Use list comprehensions instead of manual loops when appropriate.</li>
            <li>Prefer <code>with</code> for file operations to ensure cleanup.</li>
            <li>Utilize unpacking and multiple assignment: <code>a, b = b, a</code></li>
            <li>Use <code>enumerate()</code> and <code>zip()</code> for elegant loops.</li>
            <li>Adopt PEP8 style guidelines for consistent code formatting.</li>
          </ul>
        </section>


        <section className="flex justify-between items-center">
          <Link href="/learning-python/modules-packages" className="text-blue-600 hover:underline font-semibold">
            ← Back : Modules & Packages
          </Link>
          <Link href="/learning-python/standard-library" className="text-blue-600 hover:underline font-semibold">
            Next: Python Standard Library →
          </Link>
        </section>
      </main>
    </>
  );
}
