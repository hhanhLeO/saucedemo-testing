# Test Summary Report – SauceDemo Web Application

| Item                       | Detail                                                                                                     |
| -------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Project**                | SauceDemo Testing                                                                                          |
| **Application under test** | SauceDemo – https://www.saucedemo.com                                                                      |
| **Document version**       | 1.1 (updated with the results of the automated regression suite)                                           |
| **Author**                 | Hanh Le                                                                                                    |
| **Date**                   | 25/11/2026 (v1.0: 10/11/2026)                                                                              |
| **Test execution period**  | 05/11/2026 – 09/11/2026 (manual); 25/11/2026 (automated)                                                   |
| **Related documents**      | [Test Plan](test-plan.md) · [Test Scenarios](test-scenarios.md) · [Test Cases](test-cases.xlsx) · [Bug Reports](../bug-reports/README.md) |

---

## Table of Contents

1. [Summary](#1-summary)
2. [Test Scope and Environment](#2-test-scope-and-environment)
3. [Test Execution Results](#3-test-execution-results)
4. [Defect Summary](#4-defect-summary)
5. [Requirements Coverage](#5-requirements-coverage)
6. [Evaluation of Exit Criteria](#6-evaluation-of-exit-criteria)
7. [Deviations from the Test Plan](#7-deviations-from-the-test-plan)
8. [Risks and Open Issues](#8-risks-and-open-issues)
9. [Quality Assessment and Recommendations](#9-quality-assessment-and-recommendations)
10. [Lessons Learned](#10-lessons-learned)

---

## 1. Summary

Manual testing of SauceDemo was completed as described in the [Test Plan](test-plan.md). An automated regression suite was built afterwards; it found one more defect (BUG-018), so TC-CHK-16 was changed from Pass to Fail.

| Metric                 | Result                                         |
| ---------------------- | ---------------------------------------------- |
| Test cases executed    | **95 / 95** (100%)                             |
| Passed / Failed        | **79 / 16** (pass rate 83.2%)                  |
| Defects reported       | **18** (2 Critical, 6 High, 7 Medium, 3 Low)   |
| Requirements coverage  | **14 / 14** derived requirements (100%)        |
| Exit criteria met      | **6 of 6**                                     |

**Main findings:**

- With the reference account `standard_user`, all core flows (login, product list, cart, checkout, logout) work as expected. The 7 failed test cases for this account concern input validation, the empty-cart checkout, keyboard accessibility and the display of the item total (BUG-018).
- The most severe defects are in the checkout flow: with `problem_user` (BUG-008) and `error_user` (BUG-012) **an order cannot be completed**.
- The cart icon cannot be reached with the keyboard (BUG-003), so **a keyboard-only user cannot complete a purchase**, even with `standard_user`.
- `visual_user` shows prices on the Products page that differ from the prices in the cart and at checkout (BUG-014).

---

## 2. Test Scope and Environment

### 2.1 Scope

All modules in scope of the test plan (section 4.1) were tested: Login, Inventory, Product Detail, Cart, Checkout, Side Menu, UI/visual, accessibility, performance and usability (basic). All 6 test accounts were used.

Automation and CI (test plan, phase 6) were built after the manual cycle: a Playwright + TypeScript suite of 50 automated tests (high-priority test cases) runs in GitHub Actions on every push. See the 'Automation' column in [test-cases.xlsx](test-cases.xlsx).

### 2.2 Environment

| Item             | Detail                                 |
| ---------------- | -------------------------------------- |
| Application URL  | https://www.saucedemo.com              |
| Browser          | Google Chrome 156.0.8078.74            |
| Operating system | Windows 11 Home 25H2                   |
| Screen           | 1920×1080 (desktop); 390×844 (mobile viewport in DevTools) |
| Tools            | Chrome DevTools, Lighthouse 13.5.0     |
| Automation       | Playwright with Chromium 158.0.8127.18; GitHub Actions |

---

## 3. Test Execution Results

### 3.1 Results by Module

| Module             | Total  | Pass   | Fail   | Pass Rate |
| ------------------ | ------ | ------ | ------ | --------- |
| Login              | 17     | 17     | 0      | 100%      |
| Inventory          | 12     | 12     | 0      | 100%      |
| Product Detail     | 6      | 6      | 0      | 100%      |
| Cart               | 10     | 9      | 1      | 90.0%     |
| Checkout           | 23     | 19     | 4      | 82.6%     |
| Menu & Session     | 8      | 8      | 0      | 100%      |
| User Accounts      | 12     | 3      | 9      | 25.0%     |
| Non-functional     | 7      | 5      | 2      | 71.4%     |
| **Total**          | **95** | **79** | **16** | **83.2%** |

No test case was blocked or left unexecuted.

### 3.2 Results by Priority

| Priority  | Total  | Pass   | Fail   |
| --------- | ------ | ------ | ------ |
| High      | 50     | 43     | 7      |
| Medium    | 37     | 28     | 9      |
| Low       | 8      | 8      | 0      |
| **Total** | **95** | **79** | **16** |

### 3.3 Results by Test Account

| Test account              | Total | Pass | Fail | Comment                                                      |
| ------------------------- | ----- | ---- | ---- | ------------------------------------------------------------ |
| `standard_user`           | 73    | 66   | 7    | Reference account; failures in validation, accessibility and item-total display |
| (no account – login page) | 9     | 9    | 0    | Login error messages and access control                       |
| `locked_out_user`         | 1     | 1    | 0    | Login is blocked with the correct message                     |
| `problem_user`            | 5     | 2    | 3    | Wrong images, wrong product links, checkout blocked           |
| `error_user`              | 3     | 0    | 3    | Sorting, add/remove and checkout fail                         |
| `visual_user`             | 2     | 0    | 2    | Wrong prices, wrong image, layout defects                     |
| `performance_glitch_user` | 2     | 1    | 1    | Login takes ~5 s (target 3 s); checkout within target          |

### 3.4 Failed Test Cases

| Test case                   | Priority | Title                                                       | Defect(s)                 |
| --------------------------- | -------- | ----------------------------------------------------------- | ------------------------- |
| TC-CRT-10                   | Medium   | Checkout with an empty cart                                 | BUG-001                   |
| TC-CHK-09, TC-CHK-10, TC-CHK-11 | Medium | Invalid input in checkout fields                           | BUG-002                   |
| TC-CHK-16                   | High     | Price calculation – Four products (rounding case)           | BUG-018                   |
| TC-ACC-01                   | High     | problem_user – product images match product names           | BUG-005                   |
| TC-ACC-04                   | High     | problem_user – product links open the correct detail page   | BUG-006, BUG-007          |
| TC-ACC-05                   | High     | problem_user – complete checkout                            | BUG-008                   |
| TC-ACC-06                   | High     | error_user – sorting                                        | BUG-009                   |
| TC-ACC-07                   | High     | error_user – add and remove all products                    | BUG-010, BUG-011          |
| TC-ACC-08                   | High     | error_user – complete checkout                              | BUG-012, BUG-013          |
| TC-ACC-09                   | Medium   | visual_user – Products page layout                          | BUG-014, BUG-015, BUG-016 |
| TC-ACC-10                   | Medium   | visual_user – cart and checkout layout                      | BUG-014, BUG-016          |
| TC-ACC-11                   | Medium   | performance_glitch_user – login response time               | BUG-017                   |
| TC-NFT-04                   | Medium   | Keyboard-only login                                         | BUG-004                   |
| TC-NFT-05                   | Medium   | Keyboard-only purchase                                      | BUG-003, BUG-004          |

---

## 4. Defect Summary

All defects are documented in [bug-reports/](../bug-reports/README.md) with steps to reproduce and evidence. All defects remain **Open** because the application is not under the tester's control.

### 4.1 Defects by Severity

| Severity  | Count  | Defects                                                     |
| --------- | ------ | ----------------------------------------------------------- |
| Critical  | 2      | BUG-008, BUG-012                                            |
| High      | 6      | BUG-003, BUG-006, BUG-007, BUG-010, BUG-011, BUG-014        |
| Medium    | 7      | BUG-001, BUG-004, BUG-005, BUG-009, BUG-013, BUG-015, BUG-017 |
| Low       | 3      | BUG-002, BUG-016, BUG-018                                   |
| **Total** | **18** |                                                             |

### 4.2 Defects by Test Account and Severity

| Test account              | Critical | High  | Medium | Low   | Total  |
| ------------------------- | -------- | ----- | ------ | ----- | ------ |
| `standard_user`           | 0        | 1     | 2      | 2     | 5      |
| `problem_user`            | 1        | 2     | 1      | 0     | 4      |
| `error_user`              | 1        | 2     | 2      | 0     | 5      |
| `visual_user`             | 0        | 1     | 1      | 1     | 3      |
| `performance_glitch_user` | 0        | 0     | 1      | 0     | 1      |
| **Total**                 | **2**    | **6** | **7**  | **3** | **18** |

### 4.3 Defects by Module

| Module         | Count | Defects                                                     |
| -------------- | ----- | ----------------------------------------------------------- |
| Inventory      | 7     | BUG-005, BUG-006, BUG-009, BUG-010, BUG-011, BUG-014, BUG-015 |
| Checkout       | 5     | BUG-002, BUG-008, BUG-012, BUG-013, BUG-018                 |
| Accessibility  | 2     | BUG-003, BUG-004                                            |
| Cart           | 1     | BUG-001                                                     |
| Product Detail | 1     | BUG-007                                                     |
| UI             | 1     | BUG-016                                                     |
| Performance    | 1     | BUG-017                                                     |

### 4.4 Most Important Defects

| Defect  | Severity | Impact                                                                                              |
| ------- | -------- | --------------------------------------------------------------------------------------------------- |
| BUG-008 | Critical | `problem_user`: text typed in Last Name appears in First Name; the order cannot be completed.       |
| BUG-012 | Critical | `error_user`: Last Name does not accept input and 'Finish' does nothing; the order cannot be completed. |
| BUG-003 | High     | The cart icon cannot be reached with the keyboard; keyboard-only users cannot buy anything. Also affects `standard_user`. |
| BUG-014 | High     | `visual_user`: prices on the Products page differ from cart/checkout prices and change on every sort. |
| BUG-010 | High     | `error_user`: 3 products cannot be added to the cart and therefore cannot be bought.                |

---

## 5. Requirements Coverage

Every derived requirement is covered by at least one executed test case.

| Requirement                         | Test cases | Failed | Related defects                                   |
| ----------------------------------- | ---------- | ------ | ------------------------------------------------- |
| REQ-01 Login with valid credentials | 7          | 2      | BUG-004, BUG-017                                  |
| REQ-02 Login error messages         | 11         | 0      | –                                                 |
| REQ-03 Product list display         | 9          | 3      | BUG-005, BUG-014, BUG-015, BUG-016, BUG-017       |
| REQ-04 Product sorting              | 7          | 1      | BUG-009                                           |
| REQ-05 Product detail               | 7          | 1      | BUG-006, BUG-007                                  |
| REQ-06 Add/remove products          | 13         | 2      | BUG-003, BUG-004, BUG-010, BUG-011                |
| REQ-07 Cart badge                   | 12         | 1      | BUG-010, BUG-011                                  |
| REQ-08 Cart page                    | 11         | 2      | BUG-001, BUG-014, BUG-016                         |
| REQ-09 Checkout information         | 18         | 6      | BUG-002, BUG-003, BUG-004, BUG-008, BUG-012, BUG-013 |
| REQ-10 Price calculation            | 7          | 1      | BUG-014 (displayed prices), BUG-018 (item-total format) |
| REQ-11 Order completion             | 10         | 2      | BUG-008, BUG-012, BUG-013                         |
| REQ-12 Side menu                    | 5          | 0      | –                                                 |
| REQ-13 Access control               | 6          | 0      | –                                                 |
| REQ-14 Logout                       | 3          | 0      | –                                                 |

Requirements without failures: REQ-02, REQ-12, REQ-13 and REQ-14. Login, access control, the side menu and logout work correctly for all accounts tested.

---

## 6. Evaluation of Exit Criteria

| Exit criterion (test plan, section 8.2)                                     | Result                     | Status      |
| --------------------------------------------------------------------------- | -------------------------- | ----------- |
| 100% of planned high- and medium-priority test cases executed               | 87 / 87 executed           | Met         |
| At least 95% of all planned test cases executed                             | 95 / 95 executed (100%)    | Met         |
| All defects found have been logged with evidence                           | 18 bug reports with evidence | Met       |
| Every derived requirement covered by at least one test case                | 14 / 14 (100%)             | Met         |
| Automated regression suite passes for `standard_user`                       | 50 / 50 automated tests pass (TC-CHK-16 marked as expected failure, BUG-018) | Met |
| Test Summary (Completion) Report written                                    | This document              | Met         |

The manual test phase and the automated regression suite (test plan, phase 6) are complete. The suite can be extended with the remaining automation candidates (P2/P3 in test-cases.xlsx).

---

## 7. Deviations from the Test Plan

| Area            | Planned                                             | Actual                                                                                    | Reason                                                       |
| --------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Browsers        | Cross-browser execution (original plan)             | Google Chrome only; test cases for Firefox, Edge and Safari were removed                 | Scope reduced to Chrome; test plan updated accordingly       |
| Automation / CI | Playwright suite and GitHub Actions (weeks 4–5)     | Built after the manual cycle; covers the high-priority test cases (50 automated tests)   | Done as a separate phase after manual testing                |
| Exploratory testing | Time-boxed sessions with written charters       | No session charters or session notes were recorded                                        | To be added                                                  |
| Defect tracking | Jira and Markdown bug reports                       | Markdown bug reports only                                                                 | Bug reports are kept in the repository                       |

---

## 8. Risks and Open Issues

| #   | Risk / issue                                                                 | Status / comment                                                                                       |
| --- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| R1  | The public application changes or becomes unavailable                        | Evidence (screenshots, videos, traces) was captured for every failed test case.                        |
| R3  | No official requirements, so expected results may be wrong                   | Expected results for BUG-001, BUG-002 and the 3-second target (BUG-017) are based on common practice; this is stated in the reports. |
| R4  | Incorrect price or tax calculation                                           | Tax (8%) and Total are correct for all tested combinations. The item total is shown with floating-point digits for one combination (BUG-018). Displayed prices for `visual_user` are wrong (BUG-014). |
| R6  | Defects specific to other browsers are not found                             | **Open.** Only Chrome was tested.                                                                      |
| R7  | Flaky automated tests due to delays (`performance_glitch_user`)               | Still relevant for the automation phase: login takes ~5 s for this account.                            |
| –   | No automated regression suite                                                | **Closed.** The Playwright suite runs in GitHub Actions on every push and pull request.                |

---

## 9. Quality Assessment and Recommendations

### 9.1 Assessment

- **Reference behavior (`standard_user`):** the core purchase flow is stable. Login, product list, sorting, cart, checkout, price calculation, side menu, logout and access control all pass. The remaining issues are missing input validation (BUG-001, BUG-002), keyboard accessibility (BUG-003, BUG-004) and the item-total format (BUG-018).
- **Other accounts:** `problem_user`, `error_user`, `visual_user` and `performance_glitch_user` show serious functional, visual and performance defects. Two of them block the purchase completely (BUG-008, BUG-012).
- **Accessibility** is the weakest non-functional area: the purchase cannot be completed with the keyboard and the focus is not visible. Lighthouse accessibility scores (100) did not detect these issues, which shows that automated checks alone are not sufficient.

If SauceDemo were a real product, it would **not be ready for release** while the Critical defects and BUG-003 remain open.

### 9.2 Recommendations

| Priority | Recommendation                                                                                       | Defects                    |
| -------- | ---------------------------------------------------------------------------------------------------- | -------------------------- |
| 1        | Fix the checkout form so that every field keeps its own value and 'Finish' completes the order       | BUG-008, BUG-012, BUG-013  |
| 2        | Make the cart icon keyboard-accessible and add a visible focus indicator                              | BUG-003, BUG-004           |
| 3        | Use one price source for the Products page, cart and checkout                                         | BUG-014                    |
| 4        | Fix add/remove and product links so that every product can be viewed and bought                       | BUG-006, BUG-007, BUG-010, BUG-011 |
| 5        | Prevent checkout with an empty cart and add input validation to the checkout form                    | BUG-001, BUG-002           |
| 6        | Fix sorting, product images, layout, login performance and the item-total format                     | BUG-005, BUG-009, BUG-015, BUG-016, BUG-017, BUG-018 |

**Next testing steps:**

1. Extend the Playwright regression suite with the remaining automation candidates (P2, then P3 in test-cases.xlsx).
2. Add exploratory session charters to the repository.
3. If time allows, execute the core flow on Firefox and Edge to close risk R6.

---

## 10. Lessons Learned

| What worked well                                                                                                    | What to improve                                                                                       |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Using `standard_user` as the reference made it easy to decide the expected result when no specification exists.    | Agree on naming conventions (evidence files, IDs) before execution to avoid renaming afterwards.     |
| Side-by-side comparison of two windows found visual and price defects quickly.                                      | Record execution date and environment directly when a test case is executed, not afterwards.        |
| Recording videos (GIF/MP4) made defects that depend on user interaction easy to understand.                          | Define measurable targets (e.g. page load time) in the test plan before testing.                      |
| Logging the focus order with a small console script made keyboard accessibility defects visible and reproducible.  | Do not rely on automated accessibility scores alone; always add manual keyboard checks.              |
| Grouping defects with the same cause (BUG-002, BUG-016) kept the bug list short and clear.                          | Keep test plan, test cases and bug reports in sync whenever the scope changes (e.g. browsers).       |
| Exact-text assertions in the automated tests found a display defect (BUG-018) that was missed manually.            | Compare the full displayed value with the expected result, not only the leading digits.              |
