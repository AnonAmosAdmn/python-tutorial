import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonConcurrencyAsync() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Concurrency & Async Programming</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          ⚙️ Python Tutorial: Concurrency & Async Programming
        </h1>

        <section className="mb-8">
          <span className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Concurrency allows your program to do multiple things at once. Python supports several approaches:
            <ul className="list-disc list-inside mt-2">
              <li><strong>Threading</strong> – lightweight, shared-memory tasks</li>
              <li><strong>Multiprocessing</strong> – separate processes, ideal for CPU-bound work</li>
              <li><strong>AsyncIO</strong> – cooperative multitasking for I/O-bound tasks</li>
            </ul>
          </span>
        </section>

        {/* THREADING */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. Threading</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Threads share memory and are great for I/O-bound operations (like file reading or network calls).
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import threading

def greet():
    print("Hello from thread!")

thread = threading.Thread(target=greet)
thread.start()
thread.join()`}</code>
          </pre>
        </section>

        {/* MULTIPROCESSING */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. Multiprocessing</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Use this for CPU-bound tasks. It bypasses Python's GIL (Global Interpreter Lock) by creating new processes.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`from multiprocessing import Process

def compute():
    print("Heavy computation in a separate process.")

process = Process(target=compute)
process.start()
process.join()`}</code>
          </pre>
        </section>

        {/* ASYNCIO */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. AsyncIO</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            AsyncIO uses cooperative multitasking and is excellent for managing many concurrent I/O tasks.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import asyncio

async def say_hello():
    print("Hello")
    await asyncio.sleep(1)
    print("World")

asyncio.run(say_hello())`}</code>
          </pre>
        </section>

        {/* WHEN TO USE EACH */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">4. When to Use Each</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Threading</strong>: Ideal for I/O-bound tasks like downloading, file access</li>
            <li><strong>Multiprocessing</strong>: Use for CPU-heavy tasks like data processing or math</li>
            <li><strong>AsyncIO</strong>: Best when handling thousands of network or file operations concurrently</li>
          </ul>
        </section>

        {/* EXAMPLE: ASYNC NETWORK CALL */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">5. Async Example with HTTP</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Here's an example of asynchronous HTTP requests using <code>aiohttp</code>:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import asyncio
import aiohttp

async def fetch(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

async def main():
    html = await fetch("https://example.com")
    print(html)

asyncio.run(main())`}</code>
          </pre>
        </section>

        <section className="flex justify-between items-center">
          <Link href="/learning-python/testing-debugging" className="text-blue-600 hover:underline font-semibold">
            ← Back : Testing & Debugging
          </Link>
          <Link href="/learning-python/data-science" className="text-blue-600 hover:underline font-semibold">
            Next: Data Science →
          </Link>
        </section>
      </main>
    </>
  );
}
