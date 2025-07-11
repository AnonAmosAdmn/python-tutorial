import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonOOP() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Object-Oriented Programming</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">
          🐍 Python Tutorial: Object-Oriented Programming
        </h1>

        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Object-Oriented Programming (OOP) is a paradigm in Python where code is organized around <strong>objects</strong>, which are instances of <strong>classes</strong>. This allows for encapsulation, abstraction, inheritance, and polymorphism—key principles that help structure complex software systems.
          </p>
        </section>




<hr className="mb-12"/>





        {/* CLASSES AND OBJECTS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Classes and Objects</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            A class is a blueprint for creating objects. An object is an instance of a class.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`class Dog:
  def __init__(self, name):
    self.name = name

  def bark(self):
    print(f"{self.name} says woof!")

d = Dog("Buddy")
d.bark()`}</code>
          </pre>
        </section>




<hr className="mb-12"/>





        {/* INIT METHOD */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. The __init__ Method</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            The <code>__init__</code> method is a special constructor that runs when a new object is created. It initializes the object's attributes.
          </p>
        </section>




<hr className="mb-12"/>





        {/* ENCAPSULATION */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Encapsulation</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Encapsulation refers to bundling data and methods that operate on the data within a class, restricting direct access to some of the object’s components.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`class BankAccount:
  def __init__(self, balance):
    self.__balance = balance  # private attribute

  def deposit(self, amount):
    self.__balance += amount

  def get_balance(self):
    return self.__balance`}</code>
          </pre>
        </section>




<hr className="mb-12"/>





        {/* INHERITANCE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Inheritance</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Inheritance allows one class (child) to inherit attributes and methods from another class (parent).
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`class Animal:
  def speak(self):
    print("Animal speaks")

class Cat(Animal):
  def speak(self):
    print("Meow")

c = Cat()
c.speak()`}</code>
          </pre>
        </section>




<hr className="mb-12"/>





        {/* POLYMORPHISM */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Polymorphism</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables methods to behave differently based on the calling object.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`class Bird:
  def fly(self):
    print("Bird flies")

class Airplane:
  def fly(self):
    print("Airplane flies")

def lets_fly(thing):
  thing.fly()

b = Bird()
a = Airplane()
lets_fly(b)
lets_fly(a)`}</code>
          </pre>
        </section>




<hr className="mb-12"/>





        {/* CLASS VS INSTANCE ATTRIBUTES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">6. Class vs Instance Attributes</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Class attributes are shared across all instances, while instance attributes are unique to each instance.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`class Car:
  wheels = 4  # class attribute

  def __init__(self, color):
    self.color = color  # instance attribute

c1 = Car("red")
c2 = Car("blue")
print(c1.wheels, c2.color)`}</code>
          </pre>
        </section>




<hr className="mb-12"/>




        {/* RESOURCES */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Additional Resources & References</h2>
          <div className="space-y-6">
            
            {/* OOP CONCEPTS */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Python OOP Basics</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://realpython.com/python3-object-oriented-programming/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python: Python OOP Explained
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.python.org/3/tutorial/classes.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Official Python Docs: Classes
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.programiz.com/python-programming/object-oriented-programming"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Programiz: Object-Oriented Programming in Python
                  </a>
                </li>
              </ul>
            </div>

            {/* DEEPER DIVE */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Advanced OOP Patterns & Best Practices</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://refactoring.guru/design-patterns/python"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Refactoring Guru: Design Patterns in Python
                  </a>
                </li>
                <li>
                  <a
                    href="https://realpython.com/inheritance-composition-python/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python: Inheritance vs Composition
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.geeksforgeeks.org/python-oops-concepts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GeeksForGeeks: Python OOPs Concepts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>




<hr className="mb-12"/>




        {/* NAVIGATION */}
        <section className="flex justify-between items-center">
          <Link href="/learning-python/error-handling" className="text-white hover:underline font-semibold">
            ← Back : Error Handling
          </Link>
          <Link href="/learning-python/modules-packages" className="text-white hover:underline font-semibold">
            Next: Modules and Packages →
          </Link>
        </section>
      </main>
    </>
  );
}
