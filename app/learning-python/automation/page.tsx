import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonAutomationScripting() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Automation and Scripting</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          🤖 Python Tutorial: Automation and Scripting
        </h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Python is a powerful language for automating repetitive tasks and building useful scripts to simplify your workflow. In this section, you'll learn how to automate file operations, interact with web pages, schedule tasks, and more.
          </p>
        </section>

        {/* FILE AUTOMATION */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. Automating File Operations</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            You can use Python to rename files, move them between folders, or even parse and modify their contents:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import os

for filename in os.listdir("./docs"):
    if filename.endswith(".txt"):
        new_name = "processed_" + filename
        os.rename(f"./docs/{filename}", f"./processed/{new_name}")`}</code>
          </pre>
        </section>

        {/* WEB AUTOMATION */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. Web Automation with Selenium</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Selenium allows you to control a web browser using Python. It's great for scraping data or automating form submissions:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`from selenium import webdriver
from selenium.webdriver.common.by import By

browser = webdriver.Chrome()
browser.get("https://example.com")
search_box = browser.find_element(By.NAME, "q")
search_box.send_keys("Python automation")
search_box.submit()`}</code>
          </pre>
        </section>

        {/* TASK SCHEDULING */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Task Scheduling</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            You can schedule your scripts to run periodically using Python with external tools or libraries like <code>schedule</code>:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import schedule
import time

def job():
    print("Running scheduled task")

schedule.every().day.at("10:00").do(job)

while True:
    schedule.run_pending()
    time.sleep(1)`}</code>
          </pre>
        </section>

        {/* EMAIL AUTOMATION */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">4. Email Automation</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Automate sending emails using the built-in <code>smtplib</code> module:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import smtplib

server = smtplib.SMTP("smtp.example.com", 587)
server.starttls()
server.login("you@example.com", "password")

message = "Subject: Hello!\n\nThis is an automated email."
server.sendmail("you@example.com", "recipient@example.com", message)
server.quit()`}</code>
          </pre>
        </section>





        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Additional Resources & References</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Python Automation Tutorials</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://realpython.com/automation-with-python/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python: Automate the Boring Stuff with Python
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.python.org/3/library/smtplib.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Python Docs: smtplib — SMTP protocol client
                  </a>
                </li>
                <li>
                  <a
                    href="https://selenium-python.readthedocs.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Selenium with Python — Official Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Useful Libraries & Tools</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://pypi.org/project/schedule/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    schedule — Job Scheduling for Humans
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.python.org/3/library/os.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Python os Module — File and Directory Management
                  </a>
                </li>
                <li>
                  <a
                    href="https://pypi.org/project/selenium/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    selenium — Browser Automation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>







        <section className="flex justify-between items-center">
          <Link href="/learning-python/data-science" className="text-blue-600 hover:underline font-semibold">
            ← Back : Data Science
          </Link>
          <Link href="/learning-python/working-apis" className="text-blue-600 hover:underline font-semibold">
            Next: Working with APIs →
          </Link>
        </section>
      </main>
    </>
  );
}
