# Playwright Portfolio

![CI](https://github.com/DanielKuka/playwright-portfolio/actions/workflows/playwright.yml/badge.svg)

A test automation portfolio project built with Playwright and TypeScript.  
Covers API and UI testing with a clean architecture designed for scalability and maintainability.

---

## ⭐ Highlights

- Full E2E flow coverage (login → purchase → logout)
- API + UI testing in a single project
- Clean architecture with Page Object Model
- CI/CD integration with GitHub Actions
- Ready-to-run test suite

---

## 🔗 Live Repository

https://github.com/DanielKuka/playwright-portfolio

---

## 🎯 Purpose

This project demonstrates my QA Automation skills using Playwright, including:

- UI testing (E2E flows)

- API testing

- Page Object Model architecture

- CI/CD integration with GitHub Actions

---

## 🛠 Tech Stack

- [Playwright](https://playwright.dev/) — test framework
- TypeScript — strongly typed test code
- GitHub Actions — CI/CD pipeline
- dotenv — environment variable management

---

## 📁 Project Structure

playwright-portfolio/
├── tests/
│   ├── api/          # API tests (reqres.in)
│   └── ui/           # UI & E2E tests (saucedemo.com)
├── pages/            # Page Object Models
├── fixtures/         # Custom Playwright fixtures
├── helpers/          # Reusable utility functions
├── types/            # TypeScript interfaces
├── test-data/        # Test data and credentials
└── .github/
└── workflows/    # GitHub Actions CI

---

## ✅ What's Covered

### API Tests — [reqres.in](https://reqres.in)
- `GET /api/users` — validate list of users and email format
- `GET /api/users/:id` — validate single user response
- `GET /api/users/999` — validate 404 for non-existing user

### UI Tests — [saucedemo.com](https://www.saucedemo.com)
- Login page renders correctly
- Successful login with valid credentials
- Error message on invalid credentials
- All inventory items are visible after login

### E2E Flow
- Full purchase flow: login → add item to cart → checkout → complete order → logout

---

## 🏗 Architecture Decisions

**Page Object Model (POM)**  
Each page is represented as a separate class with locators and actions.  
Tests contain only assertions and high-level steps — no raw locators in test files.

**Base Page Object**  
All page classes extend `BasePageObject` which provides shared `goto()` method and `baseUrl`.  
This avoids duplication and makes navigation consistent across pages.

**Site Aggregator (`SauceDemoSite`)**  
A single `SauceDemoSite` class aggregates all page objects.  
Tests access pages via `sauceDemoSite.login`, `sauceDemoSite.products` etc.  
This makes tests readable and reduces imports.

**Custom Fixtures**  
`auth.fixture.ts` provides `sauceDemoSite` as a Playwright fixture.  
This removes boilerplate setup from every test file.

**Environment Variables**  
Sensitive data (API keys, credentials) are stored in `.env` and never committed to the repository.  
GitHub Actions uses repository secrets to inject them in CI.

**Typed Test Data**  
User credentials are stored in `test-data/` as typed constants.  
Tests reference `USERS.standard` instead of hardcoded strings.

---

## 🚀 How to Run Tests

### Install dependencies

```bash
npm ci
npx playwright install
```

### Run all tests
```bash
npx playwright test
```

### Run only API tests
```bash
npx playwright test --project=api
```

### Run only UI tests
```bash
npx playwright test --project=ui
```

### View HTML report
```bash
npx playwright show-report
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

REQRES_API_KEY=your_api_key_here
SAUCEDEMO_BASE_URL=https://www.saucedemo.com

---

## 🔄 CI/CD

Tests run automatically on every push and pull request to `main` via GitHub Actions.  
HTML report is uploaded as an artifact after each run.
