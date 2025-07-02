import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonAIAndDeepLearning() {
  return (
    <>
      <Head>
        <title>Python Tutorial: AI & Deep Learning</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          🤖 Python Tutorial: Introduction to AI & Deep Learning
        </h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Artificial Intelligence (AI) is the broader concept of machines being able to perform tasks that typically require human intelligence. Deep learning is a subset of machine learning that uses neural networks with many layers (deep neural networks) to learn from large amounts of data. Python offers powerful libraries like <strong>PyTorch</strong> and <strong>Keras</strong> (built on TensorFlow) to build and train deep learning models efficiently.
          </p>
        </section>

        {/* PYTORCH */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. PyTorch</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            PyTorch is a popular open-source deep learning framework developed by Facebook's AI Research lab. It’s known for its dynamic computation graph, ease of debugging, and strong Python integration.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import torch
import torch.nn as nn
import torch.optim as optim

# Define a simple neural network
class SimpleNN(nn.Module):
    def __init__(self):
        super(SimpleNN, self).__init__()
        self.fc1 = nn.Linear(10, 50)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(50, 2)

    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x

# Create the model, loss function and optimizer
model = SimpleNN()
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Dummy input and target
inputs = torch.randn(5, 10)
targets = torch.tensor([0, 1, 0, 1, 0])

# Forward pass
outputs = model(inputs)
loss = criterion(outputs, targets)

# Backward pass and optimization step
loss.backward()
optimizer.step()

print('Loss:', loss.item())`}</code>
          </pre>
        </section>

        {/* KERAS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. Keras</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Keras is a high-level deep learning API, running on top of TensorFlow. It is user-friendly, modular, and easy to extend, making it ideal for beginners and rapid prototyping.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`from tensorflow import keras
from tensorflow.keras import layers

# Define a simple sequential model
model = keras.Sequential([
    layers.Dense(50, activation='relu', input_shape=(10,)),
    layers.Dense(2)
])

# Compile the model with loss function and optimizer
model.compile(optimizer='adam',
              loss=keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

# Dummy data
import numpy as np
x_train = np.random.random((5, 10))
y_train = np.array([0, 1, 0, 1, 0])

# Train the model
model.fit(x_train, y_train, epochs=5)

# Evaluate
loss, accuracy = model.evaluate(x_train, y_train)
print('Loss:', loss)
print('Accuracy:', accuracy)`}</code>
          </pre>
        </section>





        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Additional Resources & References</h2>
          <div className="space-y-6">
            
            {/* PYTORCH RESOURCES */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">PyTorch</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://pytorch.org/tutorials/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    PyTorch Tutorials (Official)
                  </a>
                </li>
                <li>
                  <a
                    href="https://pytorch.org/docs/stable/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    PyTorch Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/pytorch/examples"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    PyTorch Examples GitHub Repo
                  </a>
                </li>
              </ul>
            </div>

            {/* KERAS / TENSORFLOW RESOURCES */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Keras / TensorFlow</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://keras.io/examples/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Keras Example Models
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tensorflow.org/guide/keras"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    TensorFlow Guide to Keras
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tensorflow.org/tutorials"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    TensorFlow Tutorials (Beginner to Expert)
                  </a>
                </li>
              </ul>
            </div>

            {/* GENERAL AI / DL LEARNING */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Deep Learning & AI Foundations</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://developers.google.com/machine-learning/crash-course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Google Machine Learning Crash Course
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.deeplearning.ai/short-courses/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    DeepLearning.AI Short Courses
                  </a>
                </li>
                <li>
                  <a
                    href="https://course.fast.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Fast.ai – Practical Deep Learning for Coders
                  </a>
                </li>
                <li>
                  <a
                    href="https://paperswithcode.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Papers with Code – Latest Research + Implementations
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>







        <section className="flex justify-between items-center">
          <Link href="/learning-python/machine-learning" className="text-blue-600 hover:underline font-semibold">
            ← Back : Machine Learning
          </Link>
          <Link href="/learning-python/best-practices" className="text-blue-600 hover:underline font-semibold">
            Next: Security Best Practicces
          </Link>
        </section>
      </main>
    </>
  );
}
