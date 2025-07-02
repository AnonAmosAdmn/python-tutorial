import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonWebDevelopment() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Web Development with Flask and Django</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          🌐 Python Tutorial: Web Development with Flask and Django
        </h1>

        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Python is widely used for web development due to its readability and the power of its frameworks. In this tutorial, we explore two of the most popular Python web frameworks—<strong>Flask</strong> and <strong>Django</strong>. You'll learn their philosophies, how to build a basic app with each, and how to choose between them.
          </p>
        </section>

        {/* FLASK */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. Flask: A Microframework</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Flask is a lightweight WSGI web application framework. It's designed to be simple and easy to extend. Flask gives you the tools to build web apps or APIs from scratch with fine-grained control over your app’s architecture.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Here’s a minimal Flask app:
          </p>

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, Flask!'

if __name__ == '__main__':
    app.run(debug=True)`}</code>
          </pre>

          <p className="text-gray-700 dark:text-gray-300 mt-3">
            🔧 Install Flask: <code>pip install flask</code>
          </p>

          <p className="text-gray-700 dark:text-gray-300 mt-3">
            You can expand your Flask app with extensions like:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li><code>Flask-SQLAlchemy</code>: for database support</li>
            <li><code>Flask-Login</code>: for user session management</li>
            <li><code>Flask-Migrate</code>: for database migrations</li>
          </ul>
        </section>

        {/* DJANGO */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. Django: Batteries-Included Framework</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Django is a high-level web framework that encourages rapid development and clean, pragmatic design. It follows the "batteries-included" philosophy, meaning it comes with a lot of built-in features.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-3">
            With Django, you get:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Object-relational mapping (ORM)</li>
            <li>Automatic admin interface</li>
            <li>User authentication system</li>
            <li>Robust templating engine</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Example of a Django view:
          </p>

          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`# Create a new Django project:
# django-admin startproject myproject

# Inside views.py:
from django.http import HttpResponse

def hello(request):
    return HttpResponse("Hello, Django!")

# Add to urls.py:
from django.urls import path
from . import views

urlpatterns = [
    path('', views.hello),
]`}</code>
          </pre>

          <p className="text-gray-700 dark:text-gray-300 mt-3">
            🔧 Install Django: <code>pip install django</code><br />
            Start the dev server: <code>python manage.py runserver</code>
          </p>
        </section>

        {/* CHOOSING BETWEEN THEM */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Flask vs Django</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Choosing between Flask and Django depends on your project:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Flask</strong>: Excellent for custom solutions, microservices, and when you want full control.</li>
            <li><strong>Django</strong>: Best for rapid development of full-featured websites with reusable components.</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 mt-3">
            Both frameworks are powerful and widely used. Learn both to increase your flexibility as a Python web developer.
          </p>
        </section>













        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Additional Resources & References</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Flask Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://flask.palletsprojects.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Flask — Official Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://realpython.com/tutorials/flask/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python — Flask Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.miguelgrinberg.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Miguel Grinberg’s Blog — Deep Flask Insights
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Django Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://docs.djangoproject.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Django — Official Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    MDN Web Docs — Django Web Framework
                  </a>
                </li>
                <li>
                  <a
                    href="https://djangoproject.com/start/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Django — Getting Started Guide
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Comparison & Community</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://betterprogramming.pub/flask-vs-django-which-is-better-for-you-2022-2023-fd2b5f308b30"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Flask vs Django — Comparison Article
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackoverflow.com/questions/tagged/flask"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Stack Overflow — Flask Questions
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackoverflow.com/questions/tagged/django"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Stack Overflow — Django Questions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>










        <section className="flex justify-between items-center">
          <Link href="/learning-python/databases" className="text-blue-600 hover:underline font-semibold">
            ← Back : Databases
          </Link>
          <Link href="/learning-python/testing-debugging" className="text-blue-600 hover:underline font-semibold">
            Next: Testing Debugging →
          </Link>
        </section>
      </main>
    </>
  );
}
