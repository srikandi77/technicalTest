# TechnicalTest
Latihan Technical Test (ini nanti di hapus)

````markdown
# OLX Technical Test - Playwright

This project contains automated end-to-end tests written in **Playwright** for the OLX Technical Test.

---

## 🧰 Tech Stack
- [Playwright](https://playwright.dev/) - End-to-end testing framework
- [Node.js](https://nodejs.org/) - Runtime environment
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [VS Code](https://code.visualstudio.com/) - Recommended IDE

---

## 📦 Installation

### 1. Clone this repository
```bash
git clone https://github.com/srikandi77/technicalTest.git
cd technicalTest
````

### 2. Install dependencies

```bash
npm install
```

---

## 🚀 Run Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode (with browser UI)

```bash
npx playwright test --headed (ini perlu di update nanti diakhir test)
```

### Run a specific test file

```bash
npx playwright test tests/example.spec.ts (perlu update file yang relevan)
```

### Run with HTML report

```bash
npx playwright test --reporter=html
```

After the test run, open the report with:

```bash
npx playwright show-report
```
---

## ⚙️ Recommended VS Code Extensions

* Prettier – Code Formatter

---

## 🧠 Notes

* Make sure you have **Node.js v18+** installed.
* Folders `playwright-report` and `test-results` are ignored in Git (`.gitignore`).
* To clean up results before rerunning:

  ```bash
  npx playwright test --clean
  ```

---

## 👩‍💻 Author

**Ery Kurniasih**
Manual QA / Software Tester
📧 [sri3kandi@yahoo.com|https://www.linkedin.com/in/erykurniasih/]

```
---




