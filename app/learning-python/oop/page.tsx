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
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          🧱 Python Tutorial: Object-Oriented Programming (OOP)
        </h1>

        <section className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Object-Oriented Programming (OOP) is a paradigm in Python where code is organized around <strong>objects</strong>, which are instances of <strong>classes</strong>. This allows for encapsulation, abstraction, inheritance, and polymorphism—key principles that help structure complex software systems.
          </p>
        </section>

        {/* CLASSES AND OBJECTS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. Classes and Objects</h2>
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

        {/* INIT METHOD */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. The __init__ Method</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            The <code>__init__</code> method is a special constructor that runs when a new object is created. It initializes the object's attributes.
          </p>
        </section>

        {/* ENCAPSULATION */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Encapsulation</h2>
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

        {/* INHERITANCE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">4. Inheritance</h2>
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

        {/* POLYMORPHISM */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">5. Polymorphism</h2>
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

        {/* CLASS VS INSTANCE ATTRIBUTES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">6. Class vs Instance Attributes</h2>
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


        <section className="flex justify-between items-center">
          <Link href="/learning-python/error-handling" className="text-blue-600 hover:underline font-semibold">
            ← Back : Error Handling
          </Link>
          <Link href="/learning-python/modules-packages" className="text-blue-600 hover:underline font-semibold">
            Next: Modules and Packages →
          </Link>
        </section>
      </main>
    </>
  );
}
