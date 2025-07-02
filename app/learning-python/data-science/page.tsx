import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonDataScience() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Data Science Foundations</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">
          🐍 Python Tutorial: Data Science Foundations
        </h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Data Science with Python begins by learning how to load, manipulate, analyze, and visualize data. In this tutorial, we focus on three essential tools:
            <strong> NumPy </strong> for numerical computing, <strong>Pandas</strong> for data wrangling, and <strong>Matplotlib</strong>/<strong>Seaborn</strong> for visual storytelling with data.
          </p>
        </section>




<hr className="mb-12"/>





        {/* NUMPY */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. NumPy</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            NumPy (Numerical Python) allows you to work efficiently with large arrays and matrices of numeric data. It supports broadcasting, vectorization, and a host of statistical and algebraic operations.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import numpy as np

# Create a 1D array
arr = np.array([1, 2, 3, 4])
print(arr * 2)  # [2 4 6 8]

# 2D array and basic stats
matrix = np.array([[1, 2], [3, 4]])
print(matrix.mean())  # 2.5
print(matrix.shape)   # (2, 2)`}</code>
          </pre>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            NumPy arrays are more compact and faster than Python lists, especially for large-scale numerical computations.
          </p>
        </section>




<hr className="mb-12"/>





        {/* PANDAS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Pandas</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Pandas makes data cleaning and manipulation easy through its two core data structures: Series (1D) and DataFrame (2D, like an Excel table). It supports powerful filtering, aggregation, merging, and group operations.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import pandas as pd

data = {'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, 30, 35]}
df = pd.DataFrame(data)

# Accessing columns and filtering
print(df['Name'])
print(df[df['Age'] > 28])`}</code>
          </pre>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Pandas is perfect for working with CSV files, SQL tables, JSON, and Excel spreadsheets. It integrates smoothly with NumPy for numerical tasks.
          </p>
        </section>




<hr className="mb-12"/>





        {/* VISUALIZATION */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Data Visualization</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Visualization helps communicate insights clearly. Matplotlib gives low-level control over every element of a chart, while Seaborn simplifies complex visualizations with fewer lines of code.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import matplotlib.pyplot as plt
import seaborn as sns

# Line plot with Matplotlib
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]
plt.plot(x, y)
plt.title("Line Chart")
plt.xlabel("X Axis")
plt.ylabel("Y Axis")
plt.grid(True)
plt.show()

# Seaborn histogram
import pandas as pd

ages = pd.Series([25, 30, 22, 35, 29, 41])
sns.histplot(ages, kde=True)
plt.title("Age Distribution")
plt.show()`}</code>
          </pre>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            These visual tools are essential in Exploratory Data Analysis (EDA), helping identify patterns, outliers, and relationships between variables.
          </p>
        </section>




<hr className="mb-12"/>




        {/* RESOURCES */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Additional Resources & References</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Official Documentation</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://numpy.org/doc/stable/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    NumPy Official Docs
                  </a>
                </li>
                <li>
                  <a
                    href="https://pandas.pydata.org/docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Pandas Official Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://matplotlib.org/stable/contents.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Matplotlib Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://seaborn.pydata.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Seaborn Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Learning Platforms & Tutorials</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://realpython.com/numpy-tutorial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python: NumPy Tutorial
                  </a>
                </li>
                <li>
                  <a
                    href="https://realpython.com/pandas-python-explore-dataset/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python: Pandas for Data Analysis
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.kaggle.com/learn/pandas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Kaggle Learn: Pandas and Data Visualization
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>




<hr className="mb-12"/>




        {/* NAVIGATION */}
        <section className="flex justify-between items-center">
          <Link href="/learning-python/concurrency-async" className="text-white hover:underline font-semibold">
            ← Back : Concurrency & Async
          </Link>
          <Link href="/learning-python/automation" className="text-white hover:underline font-semibold">
            Next: Automation →
          </Link>
        </section>
      </main>
    </>
  );
}