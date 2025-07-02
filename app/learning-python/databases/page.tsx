import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonDatabases() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Working with Databases</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          🗃️ Python Tutorial: Working with Databases
        </h1>

        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Python offers excellent support for interacting with databases. The most common database you'll start with is <strong>SQLite</strong>, but Python can also connect to PostgreSQL, MySQL, and many others using libraries.
          </p>
        </section>

        {/* SQLITE BASICS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. Using SQLite with sqlite3</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            SQLite is a lightweight, file-based database that's built into Python via the <code>sqlite3</code> module.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import sqlite3

# Connect to a database (or create one)
conn = sqlite3.connect('example.db')
c = conn.cursor()

# Create a table
c.execute('''CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)''')

# Insert data
c.execute("INSERT INTO users (name) VALUES (?)", ("Alice",))

# Commit and close
conn.commit()
conn.close()`}</code>
          </pre>
        </section>

        {/* FETCHING DATA */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. Fetching Data</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            After inserting data, you can retrieve it using <code>SELECT</code> queries:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`conn = sqlite3.connect('example.db')
c = conn.cursor()

c.execute("SELECT * FROM users")
rows = c.fetchall()

for row in rows:
    print(row)

conn.close()`}</code>
          </pre>
        </section>

        {/* PARAMETERIZED QUERIES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Preventing SQL Injection</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Always use parameterized queries instead of string concatenation to avoid SQL injection attacks.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`username = "Bob"
c.execute("SELECT * FROM users WHERE name = ?", (username,))`}</code>
          </pre>
        </section>

        {/* OTHER DATABASES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">4. Other Database Libraries</h2>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
            <li><strong>psycopg2</strong> — PostgreSQL driver</li>
            <li><strong>mysql-connector-python</strong> — MySQL connector</li>
            <li><strong>SQLAlchemy</strong> — ORM for working with multiple databases</li>
          </ul>
        </section>


        <section className="flex justify-between items-center">
          <Link href="/learning-python/standard-library" className="text-blue-600 hover:underline font-semibold">
            ← Back : Standard Python Library
          </Link>
          <Link href="/learning-python/web-development" className="text-blue-600 hover:underline font-semibold">
            Next: Web Development →
          </Link>
        </section>
      </main>
    </>
  );
}
