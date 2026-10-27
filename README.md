Application Details

Application URL: https://www.saucedemo.com/

Language: JavaScript

Automation Tool: Playwright

Runtime: Node.js

Design Pattern: Page Object Model (POM)

Project Directory Structure

Assessment/
│
├── pages/
│   ├── LoginPage.js
│   ├── Interventory.js
│   ├── CartPage.js
│   └── Checkout.js
│
├── reporter/
│   └── custom-reporter.js
│
├── Test1.spec.js
├── Test2.spec.js
├── playwright.config.js
├── package.json
└── README.md

Exercise 1 – UI Automation

Test 1: Standard User Checkout

Purpose: Verify the end-to-end product purchase flow.

Test Flow:

Launch Application → Login → Add Two Products → Verify Cart → Checkout → Enter Customer Details → Complete Order → Verify Confirmation

Expected Result: The order is completed successfully, and the confirmation message is displayed.

Test 2: Locked-Out User Login

Purpose: Verify that a locked-out user cannot log in.

Test Flow:

Launch Application → Enter Locked-Out User Credentials → Click Login → Verify Error Message

Expected Result: Login is blocked, and the expected error message is displayed.

Execution Instructions

Install dependencies: npm install

Install browser: npx playwright install chromium

Run all tests: npx playwright test

Run Test 1: npx playwright test Test1.spec.js

Run Test 2: npx playwright test Test2.spec.js

Reporting and Failure Handling

Custom reporter displays the test name, execution status, and duration.

Screenshots are captured for failed tests.

Traces are retained for debugging failed tests.

