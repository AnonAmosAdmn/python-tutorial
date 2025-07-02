import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function PythonSecurityBestPractices() {
  return (
    <>
      <Head>
        <title>Python Tutorial: Security Best Practices</title>
      </Head>
      <main className="p-8 max-w-4xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">
          🐍 Python Tutorial: Security Best Practices
        </h1>

        <section className="mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Writing secure Python code is crucial to protect your applications and data. This tutorial covers best practices for secure coding, handling secrets, validating inputs, managing dependencies, and protecting against common vulnerabilities.
          </p>
        </section>




<hr className="mb-12"/>





        {/* SAFE CODING PRACTICES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Write Safe and Readable Code</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Clear and readable code reduces the chance of bugs and security flaws. Follow Python’s PEP 8 style guide and keep functions small and focused.
          </p>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Avoid using <code>eval()</code>, <code>exec()</code>, or dynamic code execution with untrusted input—they can lead to code injection vulnerabilities.
          </p>
        </section>




<hr className="mb-12"/>





        {/* HANDLING SECRETS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Handle Secrets Securely</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Never hardcode secrets like API keys, passwords, or tokens in your source code. Use environment variables or secret managers.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            <code>{`import os

api_key = os.getenv("API_KEY")
if not api_key:
    raise ValueError("API_KEY not set in environment variables")`}</code>
          </pre>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Use libraries like <code>python-dotenv</code> during development to load environment variables from a <code>.env</code> file.
          </p>
        </section>




<hr className="mb-12"/>





        {/* INPUT VALIDATION */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Validate and Sanitize Inputs</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Always validate user inputs to prevent injection attacks and ensure data integrity.
          </p>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            For example, use regular expressions or specialized libraries to validate email addresses or phone numbers before processing them.
          </p>
        </section>




<hr className="mb-12"/>





        {/* DEPENDENCY MANAGEMENT */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Manage Dependencies Carefully</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Use virtual environments to isolate your project dependencies and keep them up to date.
          </p>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Regularly audit dependencies for known vulnerabilities using tools like <code>pip-audit</code> or <code>safety</code>.
          </p>
        </section>




<hr className="mb-12"/>





        {/* PROTECT AGAINST COMMON VULNERABILITIES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Protect Against Common Vulnerabilities</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-3">
            <li><strong>SQL Injection:</strong> Use parameterized queries or ORM libraries instead of string formatting for database queries.</li>
            <li><strong>Cross-Site Scripting (XSS):</strong> When building web apps, always escape user input in HTML templates.</li>
            <li><strong>Cross-Site Request Forgery (CSRF):</strong> Use CSRF tokens to protect state-changing endpoints.</li>
            <li><strong>Authentication:</strong> Use strong password hashing algorithms like bcrypt, and implement multi-factor authentication when possible.</li>
          </ul>
        </section>




<hr className="mb-12"/>





        {/* LOGGING AND ERROR HANDLING */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">6. Logging and Error Handling</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Avoid exposing sensitive information in logs or error messages. Use proper logging levels and redact secrets.
          </p>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Handle exceptions gracefully and provide meaningful error responses without revealing internal details.
          </p>
        </section>




<hr className="mb-12"/>



        {/* RESOURCES */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Additional Resources & References</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Python Security Best Practices</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://realpython.com/python-security/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Real Python: Security Best Practices in Python
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.python-guide.org/writing/security/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    The Hitchhiker’s Guide to Python: Security
                  </a>
                </li>
                <li>
                  <a
                    href="https://owasp.org/www-project-top-ten/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    OWASP Top 10 — Common Security Vulnerabilities
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Security Tools & Libraries</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://pypi.org/project/python-dotenv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    python-dotenv — Manage environment variables securely
                  </a>
                </li>
                <li>
                  <a
                    href="https://pypi.org/project/bcrypt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    bcrypt — Password hashing library
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/pyupio/safety"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Safety — Dependency vulnerability checker
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>




<hr className="mb-12"/>



        {/* NAVIGATION */}
        <section className="flex justify-between items-center">
          <Link href="/learning-python/python-ai" className="text-white hover:underline font-semibold">
            ← Back : Python & Ai
          </Link>
          <Link href="/" className="text-white hover:underline font-semibold">
            Next: HOME →
          </Link>
        </section>
      </main>
    </>
  );
}
