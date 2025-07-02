import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonMachineLearning() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Machine Learning</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          🤖 Python Tutorial: Machine Learning
        </h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Machine learning in Python can be approached using several powerful libraries. This tutorial introduces you to three of the most commonly used: <strong>scikit-learn</strong> for traditional ML, <strong>TensorFlow</strong> and <strong>Keras</strong> for deep learning. We will walk through their roles, use cases, and example usage.
          </p>
        </section>

        {/* SCIKIT-LEARN */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. scikit-learn</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            scikit-learn is a simple and efficient tool for data mining and data analysis. It supports classification, regression, clustering, dimensionality reduction, and more:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.3)

clf = RandomForestClassifier()
clf.fit(X_train, y_train)
print(clf.score(X_test, y_test))`}</code>
          </pre>
        </section>

        {/* TENSORFLOW */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. TensorFlow</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            TensorFlow is an end-to-end open-source platform for machine learning developed by Google. It provides tools for building and training neural networks at scale:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import tensorflow as tf

# Build a simple model
model = tf.keras.Sequential([
  tf.keras.layers.Dense(10, activation='relu'),
  tf.keras.layers.Dense(3, activation='softmax')
])

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])`}</code>
          </pre>
        </section>

        {/* KERAS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Keras</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Keras is a high-level neural networks API, written in Python and capable of running on top of TensorFlow. It is user-friendly and fast to prototype with:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`from tensorflow import keras
from tensorflow.keras import layers

model = keras.Sequential([
    layers.Dense(64, activation='relu'),
    layers.Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
# model.fit(X_train, y_train, epochs=10)`}</code>
          </pre>
        </section>


        <section className="flex justify-between items-center">
          <Link href="/learning-python/deployment" className="text-blue-600 hover:underline font-semibold">
            ← Back : Development & Deployment
          </Link>
          <Link href="/learning-python/python-ai" className="text-blue-600 hover:underline font-semibold">
            Next: Python and Ai →
          </Link>
        </section>
      </main>
    </>
  );
}