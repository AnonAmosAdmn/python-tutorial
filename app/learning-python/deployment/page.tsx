import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonDeploymentDistribution() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Deployment and Distribution</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          🚀 Python Tutorial: Deployment and Distribution
        </h1>

        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Deploying and distributing your Python application means making it available to others to run or install. This includes creating packages, uploading to PyPI, containerizing with Docker, and deploying to the cloud.
          </p>
        </section>

        {/* PACKAGING */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. Packaging Your Code</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Python uses the <code>setuptools</code> package to create installable packages.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`# setup.py
from setuptools import setup, find_packages

setup(
    name="myapp",
    version="0.1",
    packages=find_packages(),
    install_requires=["requests"]
)`}</code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300 mt-3">
            Then build the package with:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>python setup.py sdist bdist_wheel</code>
          </pre>
        </section>

        {/* UPLOADING TO PYPI */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. Uploading to PyPI</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Use <code>twine</code> to securely upload your package to the Python Package Index:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`pip install twine
twine upload dist/*`}</code>
          </pre>
        </section>

        {/* CREATING EXECUTABLES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Creating Executables</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            You can create standalone executables using <code>pyinstaller</code>:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`pip install pyinstaller
pyinstaller my_script.py`}</code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300">
            This will create a <code>dist/</code> folder containing the executable.
          </p>
        </section>

        {/* DOCKER */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">4. Docker for Distribution</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Use Docker to containerize your application, making it easy to deploy anywhere.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`# Dockerfile
FROM python:3.11
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "app.py"]`}</code>
          </pre>
          <p className="text-gray-700 dark:text-gray-300">
            Then build and run your image:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`docker build -t myapp .
docker run -p 5000:5000 myapp`}</code>
          </pre>
        </section>

        {/* DEPLOYING TO CLOUD */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">5. Cloud Deployment</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Common platforms for Python app deployment:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Heroku</strong>: Easy deployment from Git, integrates with Flask and Django</li>
            <li><strong>Render</strong>: Simpler alternative to Heroku</li>
            <li><strong>AWS</strong>: For scalable apps using EC2, Lambda, or Elastic Beanstalk</li>
            <li><strong>Google Cloud</strong>: Includes App Engine for Python apps</li>
          </ul>
        </section>


        <section className="flex justify-between items-center">
          <Link href="/learning-python/web-scraping" className="text-blue-600 hover:underline font-semibold">
            ← Back : Web Scraping
          </Link>
          <Link href="/learning-python/machine-learning" className="text-blue-600 hover:underline font-semibold">
            Next: Machine Learning →
          </Link>
        </section>
      </main>
    </>
  );
}
