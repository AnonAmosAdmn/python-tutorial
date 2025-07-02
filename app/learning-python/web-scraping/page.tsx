import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonWebScraping() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Web Scraping</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          🕸️ Python Tutorial: Web Scraping
        </h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Web scraping is the process of extracting data from websites. With Python, libraries like <code>requests</code> and <code>BeautifulSoup</code> make it easy to download HTML content and parse it to extract useful information.
          </p>
        </section>

        {/* BASIC SCRAPING */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. Basic HTML Scraping with requests and BeautifulSoup</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Let's fetch a page and parse its contents:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import requests
from bs4 import BeautifulSoup

url = "https://example.com"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

print(soup.title.text)`}</code>
          </pre>
        </section>

        {/* EXTRACTING ELEMENTS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. Extracting Elements</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            You can extract elements by tag name, class, ID, or CSS selectors:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`# Find all paragraphs
paragraphs = soup.find_all('p')

# Find element by class name
headline = soup.find('h1', class_='headline')

# Find element using CSS selector
link = soup.select_one('a[href^="http"]')
print(link['href'])`}</code>
          </pre>
        </section>

        {/* HANDLING HEADERS AND ROBOTS.TXT */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Handling Headers and robots.txt</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Always respect <code>robots.txt</code> and add user-agent headers to avoid being blocked:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`headers = {'User-Agent': 'Mozilla/5.0'}
url = "https://example.com"
response = requests.get(url, headers=headers)`}</code>
          </pre>
        </section>

        {/* ADVANCED: PAGINATION AND DATA STORAGE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">4. Pagination and Saving Data</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            For scraping multiple pages and saving the data:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import csv

with open('data.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['Title', 'Link'])

    for page in range(1, 4):
        url = f"https://example.com/page/{page}"
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')

        for article in soup.select('.article'):
            title = article.find('h2').text
            link = article.find('a')['href']
            writer.writerow([title, link])`}</code>
          </pre>
        </section>










        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Additional Resources & References</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Learning Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://realpython.com/beautiful-soup-web-scraper-python/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python — Web Scraping With BeautifulSoup
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    BeautifulSoup — Official Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Glossary/Robots.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    MDN — Understanding robots.txt
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Tools & Practice Sites</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://httpbin.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    httpbin — Testing HTTP Requests
                  </a>
                </li>
                <li>
                  <a
                    href="https://quotes.toscrape.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    quotes.toscrape.com — Web Scraping Practice Site
                  </a>
                </li>
                <li>
                  <a
                    href="https://scrapy.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Scrapy — Advanced Python Scraping Framework
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>









        <section className="flex justify-between items-center">
          <Link href="/learning-python/working-apis" className="text-blue-600 hover:underline font-semibold">
            ← Back : Working with APIs
          </Link>
          <Link href="/learning-python/deployment" className="text-blue-600 hover:underline font-semibold">
            Next: Deployment and Distribution →
          </Link>
        </section>
      </main>
    </>
  );
}
