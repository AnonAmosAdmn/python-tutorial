import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonWorkingWithAPIs() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Working with APIs</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          🌐 Python Tutorial: Working with APIs
        </h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            APIs (Application Programming Interfaces) allow Python programs to interact with web services. Common use cases include retrieving weather data, stock prices, or sending data to cloud services. This tutorial covers how to consume APIs using the <code>requests</code> library.
          </p>
        </section>

        {/* INTRO TO REQUESTS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. Getting Started with requests</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            The <code>requests</code> library makes HTTP requests easy. You can send GET, POST, PUT, DELETE, and other types of requests to interact with APIs.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import requests

response = requests.get("https://api.github.com")
print(response.status_code)
print(response.json())`}</code>
          </pre>
        </section>

        {/* PASSING PARAMETERS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. Passing Parameters</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            APIs often require query parameters. These can be passed using the <code>params</code> argument:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`params = {'q': 'python', 'sort': 'stars'}
url = "https://api.github.com/search/repositories"
response = requests.get(url, params=params)
print(response.json())`}</code>
          </pre>
        </section>

        {/* SENDING DATA WITH POST */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Sending Data with POST</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            When sending data to an API (e.g., submitting a form), use the POST method and pass data using the <code>json</code> or <code>data</code> keyword.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`url = "https://httpbin.org/post"
data = {"name": "Alice", "email": "alice@example.com"}
response = requests.post(url, json=data)
print(response.json())`}</code>
          </pre>
        </section>

        {/* HEADERS AND AUTHENTICATION */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">4. Headers and Authentication</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Some APIs require authentication via API keys or tokens. These are usually passed in the headers:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`headers = {"Authorization": "Bearer YOUR_TOKEN"}
url = "https://api.example.com/data"
response = requests.get(url, headers=headers)
print(response.status_code)`}</code>
          </pre>
        </section>


        <section className="flex justify-between items-center">
          <Link href="/learning-python/automation" className="text-blue-600 hover:underline font-semibold">
            ← Back : Automation
          </Link>
          <Link href="/learning-python/web-scraping" className="text-blue-600 hover:underline font-semibold">
            Next: Web Scraping →
          </Link>
        </section>
      </main>
    </>
  );
}