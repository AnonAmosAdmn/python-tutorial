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
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">
          🐍 Python Tutorial: Concurrency & Async Programming
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




<hr className="mb-12"/>





        {/* THREADING */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Threading</h2>
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




<hr className="mb-12"/>





        {/* MULTIPROCESSING */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Multiprocessing</h2>
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




<hr className="mb-12"/>





        {/* ASYNCIO */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. AsyncIO</h2>
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




<hr className="mb-12"/>





        {/* WHEN TO USE EACH */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. When to Use Each</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Threading</strong>: Ideal for I/O-bound tasks like downloading, file access</li>
            <li><strong>Multiprocessing</strong>: Use for CPU-heavy tasks like data processing or math</li>
            <li><strong>AsyncIO</strong>: Best when handling thousands of network or file operations concurrently</li>
          </ul>
        </section>




<hr className="mb-12"/>





        {/* EXAMPLE: ASYNC NETWORK CALL */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Async Example with HTTP</h2>
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




<hr className="mb-12"/>




        {/* RESOURCES */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Additional Resources & References</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Concurrency & Async Tutorials</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://docs.python.org/3/library/concurrency.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Official Python Docs: Concurrency and Parallelism
                  </a>
                </li>
                <li>
                  <a
                    href="https://realpython.com/python-concurrency/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python: Python Concurrency and Parallelism
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.python.org/3/library/asyncio.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Official Python Docs: AsyncIO Library Reference
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Related Libraries & Tools</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://pypi.org/project/aiohttp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    aiohttp — Async HTTP Client/Server
                  </a>
                </li>
                <li>
                  <a
                    href="https://pypi.org/project/requests-futures/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    requests-futures — Async Requests with ThreadPool
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/python/cpython/blob/main/Lib/threading.py"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Python threading Module Source Code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>




<hr className="mb-12"/>




        {/* NAVIGATION */}
        <section className="flex justify-between items-center">
          <Link href="/learning-python/testing-debugging" className="text-white hover:underline font-semibold">
            ← Back : Testing & Debugging
          </Link>
          <Link href="/learning-python/data-science" className="text-white hover:underline font-semibold">
            Next: Data Science →
          </Link>
        </section>
      </main>
    </>
  );
}
