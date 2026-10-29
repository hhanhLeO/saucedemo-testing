# Test Plan – SauceDemo Web Application

| Item                       | Detail                                |
| -------------------------- | ------------------------------------- |
| **Project**                | SauceDemo Testing                     |
| **Application under test** | SauceDemo – https://www.saucedemo.com |
| **Document version**       | 1.0                                   |
| **Author**                 | Hanh Le                               |
| **Date**                   | 30/10/2026                            |
| **Status**                 | Draft                                 |

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Test Objectives](#2-test-objectives)
3. [Test Basis](#3-test-basis)
4. [Scope](#4-scope)
5. [Test Approach](#5-test-approach)
6. [Test Environment](#6-test-environment)
7. [Test Data](#7-test-data)
8. [Entry and Exit Criteria](#8-entry-and-exit-criteria)
9. [Defect Management](#9-defect-management)
10. [Risks and Mitigation](#10-risks-and-mitigation)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Schedule](#12-schedule)
13. [Test Deliverables](#13-test-deliverables)
14. [Metrics and Reporting](#14-metrics-and-reporting)
15. [Assumptions and Constraints](#15-assumptions-and-constraints)

---

## 1. Introduction

SauceDemo is a demo e-commerce web application provided by Sauce Labs for practicing software testing. Users can log in, browse products, add products to a cart and complete a checkout flow.

This document describes the plan for testing SauceDemo, covering **manual functional testing, UI/visual testing, cross-browser testing, basic non-functional checks (performance, accessibility, usability) and UI test automation**. It defines the scope, approach, resources, schedule and criteria for the test activities.

---

## 2. Test Objectives

- Verify that the core user flows (login, product browsing, cart, checkout, logout) work as expected.
- Detect, document and report defects with clear reproduction steps and evidence.
- Evaluate the behavior of the application for each provided test account, including accounts with intentionally injected defects.
- Verify consistent behavior across the supported browsers.
- Perform basic checks on page performance, accessibility and usability.
- Build an automated regression suite for the critical flows and run it in a CI pipeline.
- Provide information about product quality through a Test Summary (Completion) Report.

---

## 3. Test Basis

SauceDemo does not provide an official requirements specification. The test basis therefore consists of:

- Observed behavior of the application with `standard_user` (treated as the reference behavior).
- Common expectations for e-commerce applications (heuristics, e.g. a cart total must equal the sum of item prices).
- The derived requirements listed below, which are used for traceability.

### 3.1 Derived Requirements

| ID     | Requirement                                                                                          |
| ------ | ---------------------------------------------------------------------------------------------------- |
| REQ-01 | Users can log in with a valid username and password.                                                 |
| REQ-02 | The system shows a specific error message for empty fields, invalid credentials and locked accounts. |
| REQ-03 | Logged-in users can view the product list with name, description, price and image.                   |
| REQ-04 | Users can sort products by name (A–Z, Z–A) and by price (low–high, high–low).                        |
| REQ-05 | Users can open a product detail page from the product list.                                          |
| REQ-06 | Users can add products to and remove products from the cart, from both the list and detail pages.    |
| REQ-07 | The cart badge shows the correct number of items in the cart.                                        |
| REQ-08 | Users can view the cart, continue shopping or proceed to checkout.                                   |
| REQ-09 | Checkout requires First Name, Last Name and Postal Code.                                             |
| REQ-10 | The checkout overview shows correct item total, tax and total amount.                                |
| REQ-11 | Users can complete an order and see a confirmation page.                                             |
| REQ-12 | The side menu provides All Items, About, Logout and Reset App State.                                 |
| REQ-13 | Protected pages cannot be accessed without logging in.                                               |
| REQ-14 | Logout ends the session and returns the user to the login page.                                      |

---

## 4. Scope

### 4.1 In Scope

| Module                       | Features                                                                                             |
| ---------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Login**                    | Valid/invalid login, empty fields, locked account, error messages, access control to protected pages |
| **Inventory (Product List)** | Product display, sorting, navigation to product details, add/remove from list                        |
| **Product Detail**           | Product information, add/remove, back to products                                                    |
| **Cart**                     | Items in cart, cart badge, remove item, continue shopping, checkout                                  |
| **Checkout**                 | Information form (step one), overview and price calculation (step two), order completion             |
| **Side Menu**                | All Items, About, Logout, Reset App State                                                            |
| **Cross-browser**            | Chrome                                                                                               |
| **Non-functional (basic)**   | Page load observation, accessibility checks, usability observations                                  |
| **Automation**               | Automated regression tests for critical flows, executed in CI                                        |

### 4.2 Out of Scope

| Item                                                     | Reason                                                                |
| -------------------------------------------------------- | --------------------------------------------------------------------- |
| Load, stress and performance testing under heavy traffic | SauceDemo is a shared public site; generating load is not appropriate |
| Security testing (penetration, vulnerability scanning)   | Not permitted on a third-party public site                            |
| API testing                                              | SauceDemo has no public backend API; data is handled in the browser   |
| Native mobile app testing                                | No native app is provided                                             |
| Payment processing with real payment data                | Checkout does not process real payments                               |
| Content of external pages (e.g. the "About" link target) | Owned by a third party; only the link itself is tested                |

---

## 5. Test Approach

### 5.1 Test Levels

| Test Level                   | Description                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------------ |
| **System testing**           | Main focus: end-to-end testing of the complete application through the UI                              |
| **Acceptance-style testing** | Validation of complete user journeys (e.g. "a customer buys two products") from the user's perspective |

Component and integration testing are not applicable because the source code is not available.

### 5.2 Test Types

| Test Type                           | Approach                                                                                                           |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Functional testing**              | Black-box testing of all in-scope features against the derived requirements                                        |
| **UI / visual testing**             | Check layout, images, labels and alignment; compare `visual_user` with `standard_user`                             |
| **Cross-browser testing**           | Execute a selected set of high-priority test cases on all supported browsers                                       |
| **Usability testing (heuristic)**   | Evaluate clarity of messages, navigation and form behavior                                                         |
| **Accessibility testing (basic)**   | Run automated accessibility checks (e.g. Lighthouse, axe) and keyboard-only navigation                             |
| **Performance observation (basic)** | Measure page load with Lighthouse and observe `performance_glitch_user` delays (single user, no load generation)   |
| **Regression testing**              | Re-run the automated suite and high-priority manual tests after any change in test scripts or observed app changes |
| **Confirmation testing**            | Re-test defects if the application behavior changes                                                                |

### 5.3 Test Techniques

| Feature              | Technique                    | Example                                                                                  |
| -------------------- | ---------------------------- | ---------------------------------------------------------------------------------------- |
| Login credentials    | **Decision table**           | Combinations of username (valid/invalid/empty/locked) and password (valid/invalid/empty) |
| Checkout form fields | **Equivalence partitioning** | Empty vs. filled fields; letters, numbers and special characters in Postal Code          |
| Checkout form fields | **Boundary value analysis**  | Field length of 0, 1 and very long input                                                 |
| Cart quantity        | **Boundary value analysis**  | 0, 1, all 6 products in the cart                                                         |
| Cart and session     | **State transition testing** | Cart empty → has items → checkout → order complete; logged out → logged in → logged out  |
| Product sorting      | **Equivalence partitioning** | One test per sort option                                                                 |
| Price calculation    | **Error guessing**           | Rounding of tax, total after removing items                                              |
| Whole application    | **Exploratory testing**      | Time-boxed sessions guided by test charters                                              |
| UI and usability     | **Checklist-based testing**  | UI and accessibility checklists                                                          |

### 5.4 Test Accounts Strategy

All accounts use the password `secret_sauce`.

| Username                  | Expected Behavior               | Test Focus                                      |
| ------------------------- | ------------------------------- | ----------------------------------------------- |
| `standard_user`           | Works normally                  | Reference behavior; full functional coverage    |
| `locked_out_user`         | Login is blocked                | Error message for locked account                |
| `problem_user`            | Known functional and UI defects | Full functional run to find and report defects  |
| `performance_glitch_user` | Delayed responses               | Performance observation, timeouts in automation |
| `error_user`              | Errors in some actions          | Error handling, functional defects              |
| `visual_user`             | Visual differences              | UI/visual comparison with `standard_user`       |

### 5.5 Manual Testing Approach

1. Derive **test scenarios** (test conditions) from the requirements in section 3.1.
2. Design **test cases** using the techniques in section 5.3, each linked to a requirement.
3. Execute test cases with `standard_user`, then repeat the relevant cases with the other accounts.
4. Run **exploratory testing sessions** (60 minutes each) with written test charters to complement scripted tests.
5. Log defects as described in section 9 and capture evidence (screenshots or videos).

### 5.6 Automation Approach

| Item                    | Detail                                                                                                                           |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Tool**                | Playwright with TypeScript (alternative: Selenium WebDriver)                                                                     |
| **Design pattern**      | Page Object Model (POM)                                                                                                          |
| **Scope of automation** | Critical regression flows: login (valid, invalid, locked), sorting, add/remove cart, checkout end-to-end, logout, access control |
| **Browsers**            | Chromium                                                                                                                         |
| **Test data**           | Stored in fixture files, separated from test code                                                                                |
| **Reporting**           | Playwright HTML report; screenshots and traces on failure                                                                        |
| **CI/CD**               | GitHub Actions runs the suite on every push and pull request                                                                     |
| **Selection criteria**  | Automate stable, repeatable, high-priority test cases. Exploratory, visual and usability checks remain manual                    |

Automation follows the **test pyramid** principle: since only the UI is accessible, the suite is kept small and focused on the most valuable end-to-end flows.

### 5.7 Test Prioritization

Test cases are prioritized using **risk-based prioritization**:

| Priority   | Description                         | Examples                                        |
| ---------- | ----------------------------------- | ----------------------------------------------- |
| **High**   | Core purchase flow and login        | Login, add to cart, checkout, price calculation |
| **Medium** | Important but non-blocking features | Sorting, product details, side menu             |
| **Low**    | Cosmetic and minor features         | Footer links, layout details                    |

---

## 6. Test Environment

| Item                     | Detail                                                      |
| ------------------------ | ----------------------------------------------------------- |
| **Application URL**      | https://www.saucedemo.com                                   |
| **Operating system**     | Windows 11                                                  |
| **Browsers**             | Google Chrome                                               |
| **Screen resolutions**   | 1920×1080 (desktop)                                         |
| **Test management**      | Excel / Google Sheets (test scenarios and test cases)       |
| **Defect tracking**      | Jira (free plan) and Markdown bug reports in the repository |
| **Automation**           | Node.js (LTS), Playwright, TypeScript, VS Code              |
| **CI**                   | GitHub Actions                                              |
| **Non-functional tools** | Chrome DevTools, Lighthouse, axe DevTools                   |
| **Evidence capture**     | Screenshot tool, screen recorder (short videos or GIFs)     |

---

## 7. Test Data

| Data                      | Values                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| Usernames                 | See section 5.4                                                                            |
| Password                  | `secret_sauce` (valid), `wrong_password` (invalid), empty                                  |
| Checkout – valid          | First Name: `Hanh`, Last Name: `Le`, Postal Code: `70000`                                  |
| Checkout – invalid / edge | Empty fields, whitespace only, special characters, very long strings (e.g. 255 characters) |
| Products                  | All 6 products listed on the inventory page                                                |

No real personal or payment data is used.

---

## 8. Entry and Exit Criteria

### 8.1 Entry Criteria

- The application is accessible at the test URL.
- All test accounts can be used as described in section 5.4.
- The test plan has been reviewed.
- Test scenarios and test cases for the module are written and reviewed.
- The test environment and tools are set up.

### 8.2 Exit Criteria

- 100% of planned high- and medium-priority test cases have been executed.
- At least 95% of all planned test cases have been executed.
- All defects found have been logged with evidence.
- Every derived requirement is covered by at least one test case (100% requirements coverage).
- The automated regression suite passes for `standard_user` on all configured browsers.
- The Test Summary (Completion) Report has been written.

### 8.3 Suspension and Resumption Criteria

| Suspension                                                                | Resumption                                    |
| ------------------------------------------------------------------------- | --------------------------------------------- |
| The application is unavailable or login is impossible for `standard_user` | The application is available again            |
| A blocking defect prevents more than 50% of remaining tests               | The behavior changes or a workaround is found |

---

## 9. Defect Management

### 9.1 Defect Workflow

```
New → Open → (In Progress → Fixed → Retest) → Closed
                ↘ Rejected / Duplicate / Deferred
```

> Note: as the application is not under the tester's control, most defects will remain in the **Open** state. The workflow above reflects how defects would be handled in a real project.

### 9.2 Defect Report Content

Each defect report contains: ID, title, module, environment, test case reference, preconditions, steps to reproduce, expected result, actual result, severity, priority, status and evidence.

### 9.3 Severity Levels

| Severity     | Definition                                   | Example                             |
| ------------ | -------------------------------------------- | ----------------------------------- |
| **Critical** | Blocks a core flow, no workaround            | Checkout cannot be completed        |
| **High**     | Major feature fails, workaround is difficult | Product cannot be removed from cart |
| **Medium**   | Feature works incorrectly, workaround exists | Sorting gives wrong order           |
| **Low**      | Cosmetic issue, no functional impact         | Misaligned button, typo             |

### 9.4 Priority Levels

| Priority        | Definition                     |
| --------------- | ------------------------------ |
| **P1 – Urgent** | Must be fixed immediately      |
| **P2 – High**   | Must be fixed before release   |
| **P3 – Medium** | Should be fixed if time allows |
| **P4 – Low**    | Can be deferred                |

---

## 10. Risks and Mitigation

| #   | Risk                                                                 | Type    | Likelihood | Impact | Mitigation                                                                               |
| --- | -------------------------------------------------------------------- | ------- | ---------- | ------ | ---------------------------------------------------------------------------------------- |
| R1  | The public application changes or becomes unavailable during testing | Project | Medium     | High   | Record the test date and app behavior; capture evidence for every result                 |
| R2  | Limited time for a single tester to cover all test types             | Project | High       | Medium | Risk-based prioritization; automate repetitive regression tests                          |
| R3  | No official requirements, leading to wrong expected results          | Project | High       | Medium | Use `standard_user` as reference behavior; document derived requirements and assumptions |
| R4  | Incorrect price or tax calculation at checkout                       | Product | Medium     | High   | Test price calculation with multiple product combinations                                |
| R5  | Cart items added or removed incorrectly                              | Product | Medium     | High   | State transition testing of the cart; test with all accounts                             |
| R6  | Inconsistent behavior across browsers                                | Product | Low        | Medium | Cross-browser execution of high-priority tests                                           |
| R7  | Flaky automated tests due to delays (`performance_glitch_user`)      | Project | Medium     | Medium | Use Playwright auto-waiting; avoid fixed waits; isolate slow-user tests                  |
| R8  | Protected pages accessible without login                             | Product | Low        | High   | Access control test cases for all protected URLs                                         |

---

## 11. Roles and Responsibilities

| Role                    | Responsibility                                                | Person  |
| ----------------------- | ------------------------------------------------------------- | ------- |
| **Test Lead**           | Test planning, monitoring and control, test completion report | Hanh Le |
| **Test Analyst**        | Test analysis and design, test scenarios and test cases       | Hanh Le |
| **Tester**              | Test execution, defect reporting, evidence collection         | Hanh Le |
| **Automation Engineer** | Automation framework, scripts and CI pipeline                 | Hanh Le |

---

## 12. Schedule

| Phase                               | Activities                                                 | Duration  | Output                                   |
| ----------------------------------- | ---------------------------------------------------------- | --------- | ---------------------------------------- |
| 1. Planning                         | Write and review the test plan                             | Week 1    | `test-plan.md`                           |
| 2. Analysis                         | Derive requirements and test scenarios                     | Week 1    | `test-scenarios.md`                      |
| 3. Design                           | Write test cases using test techniques                     | Week 2    | `test-cases.xlsx`                        |
| 4. Manual execution                 | Execute test cases with all accounts; exploratory sessions | Week 3    | Execution results, bug reports, evidence |
| 5. Cross-browser and non-functional | Cross-browser runs, Lighthouse and accessibility checks    | Week 3    | Results and findings                     |
| 6. Automation                       | Build Playwright framework and regression suite; set up CI | Weeks 4–5 | Automation code, CI workflow             |
| 7. Completion                       | Analyze results, write summary report and lessons learned  | Week 6    | `test-summary-report.md`                 |

---

## 13. Test Deliverables

| Deliverable                                    | Location                      |
| ---------------------------------------------- | ----------------------------- |
| Test Plan                                      | `docs/test-plan.md`           |
| Test Scenarios                                 | `docs/test-scenarios.md`      |
| Test Cases (with traceability to requirements) | `docs/test-cases.xlsx`        |
| Bug Reports                                    | `bug-reports/`                |
| Evidence (screenshots, videos)                 | `evidence/`                   |
| Automation Code                                | `automation/`                 |
| CI Workflow                                    | `.github/workflows/`          |
| Test Summary (Completion) Report               | `docs/test-summary-report.md` |

---

## 14. Metrics and Reporting

### 14.1 Metrics Collected

| Category       | Metric                                                                |
| -------------- | --------------------------------------------------------------------- |
| Test progress  | Number of test cases planned / executed / passed / failed / blocked   |
| Coverage       | Requirements coverage (% of requirements with at least one test case) |
| Defects        | Number of defects by severity, module and test account                |
| Automation     | Number of automated tests, pass rate, execution time per run          |
| Non-functional | Lighthouse performance and accessibility scores per page              |

### 14.2 Reporting

- **Progress tracking:** updated execution status in the test case file after each test session.
- **Test Summary (Completion) Report:** written at the end of testing, including results, defect summary, coverage, open risks, deviations from this plan and lessons learned.

---

## 15. Assumptions and Constraints

### Assumptions

- The behavior of `standard_user` represents the intended behavior of the application.
- The test accounts and password remain available during the testing period.
- Product data (names, prices) remain stable during testing.

### Constraints

- No access to source code, database or backend; only black-box testing through the UI is possible.
- The application is a shared public site; tests must not generate heavy load or attempt security attacks.
- Defects cannot be fixed by the development team, so confirmation testing is limited to observing changes in application behavior.
- The project is performed by a single tester with limited time.
