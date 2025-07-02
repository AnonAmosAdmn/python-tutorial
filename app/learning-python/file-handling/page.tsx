import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonFileHandling() {
  return (
    <>
      <Head>
        <title>Python Tutorial: File Handling</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          📁 Python Tutorial: File Handling
        </h1>

        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            File handling in Python allows you to work with files to read, write, and modify data stored in them. Python provides simple yet powerful functions to manage files effectively.
          </p>
        </section>

        {/* OPENING & READING FILES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. Reading Files</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Use the <code>open()</code> function to read from a file. Make sure the file exists:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`file = open("example.txt", "r")
content = file.read()
print(content)
file.close()`}</code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300 mt-3">
            You can also read line by line:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())`}</code>
          </pre>
        </section>

        {/* WRITING FILES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. Writing to Files</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Use mode <code>"w"</code> to overwrite a file or <code>"a"</code> to append to it:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`with open("example.txt", "w") as file:
    file.write("Hello, world!\n")
    file.write("Writing to a file in Python.")`}</code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300 mt-3">
            Appending:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`with open("example.txt", "a") as file:
    file.write("\nAppending this line.")`}</code>
          </pre>
        </section>

        {/* FILE MODES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. File Modes</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Common modes used with <code>open()</code>:
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
            <li><code>"r"</code>: Read (default, file must exist)</li>
            <li><code>"w"</code>: Write (creates or truncates file)</li>
            <li><code>"a"</code>: Append (creates file if it doesn't exist)</li>
            <li><code>"b"</code>: Binary mode</li>
            <li><code>"+"</code>: Read and write</li>
          </ul>
        </section>

        {/* ERROR HANDLING */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">4. Handling Errors</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Always handle errors when working with files to prevent crashes:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`try:
    with open("nonexistent.txt", "r") as file:
        print(file.read())
except FileNotFoundError:
    print("The file was not found.")`}</code>
          </pre>
        </section>


        <section className="flex justify-between items-center">
          <Link href="/learning-python/data-structures" className="text-blue-600 hover:underline font-semibold">
            ← Back : Data Structures
          </Link>
          <Link href="/learning-python/error-handling" className="text-blue-600 hover:underline font-semibold">
            Next: Error Handling →
          </Link>
        </section>
      </main>
    </>
  );
}
