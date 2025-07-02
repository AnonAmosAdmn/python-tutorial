import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonDataStructures() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Data Structures</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          🧱 Python Tutorial: Data Structures
        </h1>

        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Python provides powerful built-in data structures that allow you to store, access, and manipulate collections of data efficiently. The most commonly used are <strong>lists</strong>, <strong>tuples</strong>, <strong>dictionaries</strong>, and <strong>sets</strong>.
          </p>
        </section>

        {/* LISTS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. Lists</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Lists are ordered, mutable collections of items. They can store any data type and even a mix of types. Lists are ideal when you need to maintain the order of items and allow changes.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`fruits = ["apple", "banana", "cherry"]
print(fruits[1])       # banana
fruits.append("orange")
print(fruits)          # ['apple', 'banana', 'cherry', 'orange']
fruits[0] = "grape"     # Modify element
print(fruits)
fruits.remove("banana")  # Remove element
print(fruits)`}</code>
          </pre>
        </section>

        {/* TUPLES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. Tuples</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Tuples are ordered and immutable collections. Once created, their contents can't be changed. They are often used for fixed data, like coordinates or RGB values.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`coordinates = (10, 20)
print(coordinates[0])
# coordinates[0] = 15  # This would raise an error`}</code>
          </pre>
        </section>

        {/* DICTIONARIES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Dictionaries</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Dictionaries are collections of key-value pairs. Keys must be unique and are used to access their corresponding values. They are very useful for structured data.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`person = {"name": "Alice", "age": 30}
print(person["name"])
person["city"] = "New York"  # Add new key-value pair
print(person)
person["age"] = 31           # Modify existing value
del person["city"]           # Delete a key-value pair
print(person)`}</code>
          </pre>
        </section>

        {/* SETS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">4. Sets</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Sets are unordered collections of unique elements. They are great for removing duplicates and performing set operations like union, intersection, and difference.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`unique_numbers = {1, 2, 3, 2, 1}
print(unique_numbers)  # {1, 2, 3}
unique_numbers.add(4)
print(unique_numbers)
unique_numbers.discard(2)
print(unique_numbers)`}</code>
          </pre>
        </section>

        {/* COMMON OPERATIONS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">5. Common Operations</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Each data structure comes with helpful built-in functions and methods to manipulate and query data. Here are some examples:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-3">
            <code>{`# List operations
nums = [4, 2, 7, 1]
nums.sort()
print(nums)            # [1, 2, 4, 7]
nums.reverse()
print(nums)            # [7, 4, 2, 1]

# Dictionary operations
person = {"name": "Bob", "age": 25}
print(person.get("age"))         # 25
print(person.keys())             # dict_keys(['name', 'age'])
print(person.values())           # dict_values(['Bob', 25])

# Set operations
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1.union(set2))          # {1, 2, 3, 4, 5}
print(set1.intersection(set2))   # {3}`}</code>
          </pre>
        </section>


        <section className="flex justify-between items-center">
          <Link href="/learning-python/functions-scope" className="text-blue-600 hover:underline font-semibold">
            ← Back : Functions & Scope
          </Link>
          <Link href="/learning-python/file-handling" className="text-blue-600 hover:underline font-semibold">
            Next: File Handling →
          </Link>
        </section>
      </main>
    </>
  );
}
