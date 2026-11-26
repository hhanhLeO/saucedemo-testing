# Test Cases – SauceDemo

> **Generated file – do not edit.** Source: [test-cases.xlsx](test-cases.xlsx). Regenerate with `python scripts/export_test_cases.py` after changing the workbook.

Related documents: [Test Plan](test-plan.md) · [Test Scenarios](test-scenarios.md) · [Test Summary Report](test-summary-report.md) · [Bug Reports](../bug-reports/README.md)

## Contents

- [Summary](#summary)
- [Bug List](#bug-list)
- [Login](#login)
- [Inventory](#inventory)
- [Product Detail](#product-detail)
- [Cart](#cart)
- [Checkout](#checkout)
- [Menu and Session](#menu-and-session)
- [User Accounts](#user-accounts)
- [Non-functional](#non-functional)

## Summary

| Module | Total | High | Medium | Low | Pass | Fail | Blocked | Not Run | Pass Rate | Automated |
| ------ | ----: | ---: | -----: | --: | ---: | ---: | ------: | ------: | --------: | --------: |
| [Login](#login) | 17 | 10 | 6 | 1 | 17 | 0 | 0 | 0 | 100.0% | 14 |
| [Inventory](#inventory) | 12 | 6 | 6 | 0 | 12 | 0 | 0 | 0 | 100.0% | 10 |
| [Product Detail](#product-detail) | 6 | 4 | 1 | 1 | 6 | 0 | 0 | 0 | 100.0% | 4 |
| [Cart](#cart) | 10 | 7 | 2 | 1 | 9 | 1 | 0 | 0 | 90.0% | 7 |
| [Checkout](#checkout) | 23 | 12 | 10 | 1 | 19 | 4 | 0 | 0 | 82.6% | 12 |
| [Menu and Session](#menu-and-session) | 8 | 3 | 1 | 4 | 8 | 0 | 0 | 0 | 100.0% | 3 |
| [User Accounts](#user-accounts) | 12 | 7 | 5 | 0 | 3 | 9 | 0 | 0 | 25.0% | 0 |
| [Non-functional](#non-functional) | 7 | 1 | 6 | 0 | 5 | 2 | 0 | 0 | 71.4% | 0 |
| **Total** | **95** | **50** | **37** | **8** | **79** | **16** | **0** | **0** | **83.2%** | **50** |

Pass Rate = Pass / Executed, where Executed = Pass + Fail + Blocked. Automated = test cases with Automation status "Done".

**Automation status**

| Value | Meaning |
| ----- | ------- |
| Done | Scripted in [`automation/`](../automation/README.md) |
| P1 / P2 / P3 | Automation candidate, by priority |
| Known bug | Fails because of a known bug; kept out of the regression suite or marked `test.fail()` |
| Manual | Needs human judgement or a separate tool |
| Covered | Covered indirectly by the automated suite |

## Bug List

| Bug ID | Title | Account | Severity | Priority | Test cases |
| ------ | ----- | ------- | -------- | -------- | ---------- |
| [BUG-001](../bug-reports/BUG-001.md) | [Cart] Checkout is allowed with an empty cart | `standard_user` | Medium | Medium | [TC-CRT-10](#tc-crt-10) |
| [BUG-002](../bug-reports/BUG-002.md) | [Checkout] Checkout information fields accept invalid input (whitespace-only, special characters, letters in Postal Code) | `standard_user` | Low | Low | [TC-CHK-09](#tc-chk-09), [TC-CHK-10](#tc-chk-10), [TC-CHK-11](#tc-chk-11) |
| [BUG-003](../bug-reports/BUG-003.md) | [Accessibility] Cart icon cannot be reached with the keyboard; purchase cannot be completed without a mouse | `standard_user` | High | High | [TC-NFT-05](#tc-nft-05) |
| [BUG-004](../bug-reports/BUG-004.md) | [Accessibility] No visible focus indicator on interactive elements | `standard_user` | Medium | Medium | [TC-NFT-05](#tc-nft-05), [TC-NFT-04](#tc-nft-04) |
| [BUG-005](../bug-reports/BUG-005.md) | [Inventory] problem_user: all products show the same wrong image | `problem_user` | Medium | Medium | [TC-ACC-01](#tc-acc-01) |
| [BUG-006](../bug-reports/BUG-006.md) | [Inventory] problem_user: product links open the wrong product detail page | `problem_user` | High | High | [TC-ACC-04](#tc-acc-04) |
| [BUG-007](../bug-reports/BUG-007.md) | [Product Detail] problem_user: 'Sauce Labs Fleece Jacket' link shows 'ITEM NOT FOUND' | `problem_user` | High | High | [TC-ACC-04](#tc-acc-04) |
| [BUG-008](../bug-reports/BUG-008.md) | [Checkout] problem_user: typing in Last Name updates First Name; checkout cannot be completed | `problem_user` | Critical | High | [TC-ACC-05](#tc-acc-05) |
| [BUG-009](../bug-reports/BUG-009.md) | [Inventory] error_user: Z-A and price sort options show 'Sorting is broken!' alert and products are not sorted | `error_user` | Medium | Medium | [TC-ACC-06](#tc-acc-06) |
| [BUG-010](../bug-reports/BUG-010.md) | [Inventory] error_user: some products cannot be added to the cart | `error_user` | High | High | [TC-ACC-07](#tc-acc-07) |
| [BUG-011](../bug-reports/BUG-011.md) | [Inventory] error_user: some products cannot be removed from the cart | `error_user` | High | High | [TC-ACC-07](#tc-acc-07) |
| [BUG-012](../bug-reports/BUG-012.md) | [Checkout] error_user: Last Name field does not accept input and 'Finish' does nothing; order cannot be completed | `error_user` | Critical | High | [TC-ACC-08](#tc-acc-08) |
| [BUG-013](../bug-reports/BUG-013.md) | [Checkout] error_user: checkout continues with an empty Last Name (required-field validation skipped) | `error_user` | Medium | Medium | [TC-ACC-08](#tc-acc-08) |
| [BUG-014](../bug-reports/BUG-014.md) | [Inventory] visual_user: product prices differ from cart/checkout prices and change when sorting | `visual_user` | High | High | [TC-ACC-09](#tc-acc-09), [TC-ACC-10](#tc-acc-10) |
| [BUG-015](../bug-reports/BUG-015.md) | [Inventory] visual_user: top-left product shows a dog image instead of its product image | `visual_user` | Medium | Low | [TC-ACC-09](#tc-acc-09) |
| [BUG-016](../bug-reports/BUG-016.md) | [UI] visual_user: layout defects on Products and Cart pages (button overflow, tilted/misaligned icons, indented names, Checkout button position) | `visual_user` | Low | Low | [TC-ACC-09](#tc-acc-09), [TC-ACC-10](#tc-acc-10) |
| [BUG-017](../bug-reports/BUG-017.md) | [Performance] performance_glitch_user: Products page takes about 5 s to load after login (target: 3 s) | `performance_glitch_user` | Medium | Medium | [TC-ACC-11](#tc-acc-11) |
| [BUG-018](../bug-reports/BUG-018.md) | [Checkout] Item total is shown with floating-point digits ($103.96000000000001) for some product combinations | `standard_user` | Low | Medium | [TC-CHK-16](#tc-chk-16) |

## Login

| ID | Title | Priority | Account | Status | Bugs | Automation |
| -- | ----- | -------- | ------- | ------ | ---- | ---------- |
| [TC-LGN-01](#tc-lgn-01) | Login with a valid username and password | High | `standard_user` | ✅ Pass |  | Done |
| [TC-LGN-02](#tc-lgn-02) | Login with both fields empty | High | `-` | ✅ Pass |  | Done |
| [TC-LGN-03](#tc-lgn-03) | Login with empty username and valid password | High | `-` | ✅ Pass |  | Done |
| [TC-LGN-04](#tc-lgn-04) | Login with valid username and empty password | High | `standard_user` | ✅ Pass |  | Done |
| [TC-LGN-05](#tc-lgn-05) | Login with valid username and wrong password | High | `standard_user` | ✅ Pass |  | Done |
| [TC-LGN-06](#tc-lgn-06) | Login with unregistered username and valid password | High | `-` | ✅ Pass |  | Done |
| [TC-LGN-07](#tc-lgn-07) | Login with unregistered username and wrong password | Medium | `-` | ✅ Pass |  | Done |
| [TC-LGN-08](#tc-lgn-08) | Login with a locked-out account | High | `locked_out_user` | ✅ Pass |  | Done |
| [TC-LGN-09](#tc-lgn-09) | Username is case-sensitive | Medium | `standard_user` | ✅ Pass |  | Done |
| [TC-LGN-10](#tc-lgn-10) | Username with a trailing space | Medium | `standard_user` | ✅ Pass |  | Done |
| [TC-LGN-11](#tc-lgn-11) | Password input is masked | Medium | `standard_user` | ✅ Pass |  | P2 |
| [TC-LGN-12](#tc-lgn-12) | Login by pressing Enter | Medium | `standard_user` | ✅ Pass |  | P2 |
| [TC-LGN-13](#tc-lgn-13) | Dismiss the login error message | Low | `-` | ✅ Pass |  | P3 |
| [TC-LGN-14](#tc-lgn-14) | Access /inventory.html without logging in | High | `-` | ✅ Pass |  | Done |
| [TC-LGN-15](#tc-lgn-15) | Access /cart.html without logging in | High | `-` | ✅ Pass |  | Done |
| [TC-LGN-16](#tc-lgn-16) | Access /checkout-step-one.html without logging in | High | `-` | ✅ Pass |  | Done |
| [TC-LGN-17](#tc-lgn-17) | Access /inventory-item.html without logging in | Medium | `-` | ✅ Pass |  | Done |

<details>
<summary><b>Test case details – Login</b></summary>

<a id="tc-lgn-01"></a>

#### TC-LGN-01 – Login with a valid username and password

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-LGN-01 |
| Requirement | REQ-01 |
| Technique | Decision table |
| Test account | standard_user |
| Preconditions | Browser opened at https://www.saucedemo.com (login page); user is not logged in. |
| Test steps | 1. Enter the username.<br>2. Enter the password.<br>3. Click 'Login'. |
| Test data | Username: standard_user<br>Password: secret_sauce |
| Expected result | User is redirected to /inventory.html.<br>Page title 'Products' and the product list are displayed. |
| Actual result | User is redirected to /inventory.html.<br>Page title 'Products' and the product list are displayed. |
| Automation | login.spec.ts |

<a id="tc-lgn-02"></a>

#### TC-LGN-02 – Login with both fields empty

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-LGN-02 |
| Requirement | REQ-02 |
| Technique | Decision table |
| Test account | - |
| Preconditions | Browser opened at https://www.saucedemo.com (login page); user is not logged in. |
| Test steps | 1. Leave the username and password empty.<br>2. Click 'Login'. |
| Test data | Username: (empty)<br>Password: (empty) |
| Expected result | Error 'Epic sadface: Username is required' is displayed.<br>User stays on the login page. |
| Actual result | Error 'Epic sadface: Username is required' is displayed.<br>User stays on the login page. |
| Automation | login.spec.ts (data-driven: invalidLogins) |

<a id="tc-lgn-03"></a>

#### TC-LGN-03 – Login with empty username and valid password

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-LGN-02 |
| Requirement | REQ-02 |
| Technique | Decision table |
| Test account | - |
| Preconditions | Browser opened at https://www.saucedemo.com (login page); user is not logged in. |
| Test steps | 1. Leave the username empty.<br>2. Enter the password.<br>3. Click 'Login'. |
| Test data | Username: (empty)<br>Password: secret_sauce |
| Expected result | Error 'Epic sadface: Username is required' is displayed.<br>User stays on the login page. |
| Actual result | Error 'Epic sadface: Username is required' is displayed.<br>User stays on the login page. |
| Automation | login.spec.ts (data-driven: invalidLogins) |

<a id="tc-lgn-04"></a>

#### TC-LGN-04 – Login with valid username and empty password

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-LGN-02 |
| Requirement | REQ-02 |
| Technique | Decision table |
| Test account | standard_user |
| Preconditions | Browser opened at https://www.saucedemo.com (login page); user is not logged in. |
| Test steps | 1. Enter the username.<br>2. Leave the password empty.<br>3. Click 'Login'. |
| Test data | Username: standard_user<br>Password: (empty) |
| Expected result | Error 'Epic sadface: Password is required' is displayed.<br>User stays on the login page. |
| Actual result | Error 'Epic sadface: Password is required' is displayed.<br>User stays on the login page. |
| Automation | login.spec.ts (data-driven: invalidLogins) |

<a id="tc-lgn-05"></a>

#### TC-LGN-05 – Login with valid username and wrong password

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-LGN-03 |
| Requirement | REQ-02 |
| Technique | Decision table |
| Test account | standard_user |
| Preconditions | Browser opened at https://www.saucedemo.com (login page); user is not logged in. |
| Test steps | 1. Enter the username.<br>2. Enter the password.<br>3. Click 'Login'. |
| Test data | Username: standard_user<br>Password: wrong_password |
| Expected result | Error 'Epic sadface: Username and password do not match any user in this service' is displayed.<br>User stays on the login page. |
| Actual result | Error 'Epic sadface: Username and password do not match any user in this service' is displayed.<br>User stays on the login page. |
| Automation | login.spec.ts (data-driven: invalidLogins) |

<a id="tc-lgn-06"></a>

#### TC-LGN-06 – Login with unregistered username and valid password

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-LGN-03 |
| Requirement | REQ-02 |
| Technique | Decision table |
| Test account | - |
| Preconditions | Browser opened at https://www.saucedemo.com (login page); user is not logged in. |
| Test steps | 1. Enter the username.<br>2. Enter the password.<br>3. Click 'Login'. |
| Test data | Username: unknown_user<br>Password: secret_sauce |
| Expected result | Error 'Epic sadface: Username and password do not match any user in this service' is displayed.<br>User stays on the login page. |
| Actual result | Error 'Epic sadface: Username and password do not match any user in this service' is displayed.<br>User stays on the login page. |
| Automation | login.spec.ts (data-driven: invalidLogins) |

<a id="tc-lgn-07"></a>

#### TC-LGN-07 – Login with unregistered username and wrong password

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-LGN-03 |
| Requirement | REQ-02 |
| Technique | Decision table |
| Test account | - |
| Preconditions | Browser opened at https://www.saucedemo.com (login page); user is not logged in. |
| Test steps | 1. Enter the username.<br>2. Enter the password.<br>3. Click 'Login'. |
| Test data | Username: unknown_user<br>Password: wrong_password |
| Expected result | Error 'Epic sadface: Username and password do not match any user in this service' is displayed.<br>User stays on the login page. |
| Actual result | Error 'Epic sadface: Username and password do not match any user in this service' is displayed.<br>User stays on the login page. |
| Automation | login.spec.ts (data-driven: invalidLogins) |

<a id="tc-lgn-08"></a>

#### TC-LGN-08 – Login with a locked-out account

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-LGN-04 |
| Requirement | REQ-02 |
| Technique | Decision table |
| Test account | locked_out_user |
| Preconditions | Browser opened at https://www.saucedemo.com (login page); user is not logged in. |
| Test steps | 1. Enter the username.<br>2. Enter the password.<br>3. Click 'Login'. |
| Test data | Username: locked_out_user<br>Password: secret_sauce |
| Expected result | Error 'Epic sadface: Sorry, this user has been locked out.' is displayed.<br>User stays on the login page. |
| Actual result | Error 'Epic sadface: Sorry, this user has been locked out.' is displayed.<br>User stays on the login page. |
| Automation | login.spec.ts (data-driven: invalidLogins) |

<a id="tc-lgn-09"></a>

#### TC-LGN-09 – Username is case-sensitive

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-LGN-05 |
| Requirement | REQ-02 |
| Technique | Equivalence partitioning |
| Test account | standard_user |
| Preconditions | Browser opened at https://www.saucedemo.com (login page); user is not logged in. |
| Test steps | 1. Enter the username.<br>2. Enter the password.<br>3. Click 'Login'. |
| Test data | Username: Standard_User<br>Password: secret_sauce |
| Expected result | Login is rejected with 'Epic sadface: Username and password do not match any user in this service'. |
| Actual result | Login is rejected with 'Epic sadface: Username and password do not match any user in this service'. |
| Automation | login.spec.ts (data-driven: invalidLogins) |

<a id="tc-lgn-10"></a>

#### TC-LGN-10 – Username with a trailing space

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-LGN-05 |
| Requirement | REQ-02 |
| Technique | Error guessing |
| Test account | standard_user |
| Preconditions | Browser opened at https://www.saucedemo.com (login page); user is not logged in. |
| Test steps | 1. Enter the username.<br>2. Enter the password.<br>3. Click 'Login'. |
| Test data | Username: 'standard_user ' (trailing space)<br>Password: secret_sauce |
| Expected result | Login is rejected with 'Epic sadface: Username and password do not match any user in this service'. |
| Actual result | Login is rejected with 'Epic sadface: Username and password do not match any user in this service'. |
| Automation | login.spec.ts (data-driven: invalidLogins) |

<a id="tc-lgn-11"></a>

#### TC-LGN-11 – Password input is masked

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-LGN-05 |
| Requirement | REQ-01 |
| Technique | Checklist-based |
| Test account | standard_user |
| Preconditions | Browser opened at https://www.saucedemo.com (login page); user is not logged in. |
| Test steps | 1. Click the password field.<br>2. Type the password. |
| Test data | Password: secret_sauce |
| Expected result | Typed characters are masked (shown as dots), not as plain text. |
| Actual result | Typed characters are masked (shown as dots), not as plain text. |
| Automation | One assertion: password input has type='password'. |

<a id="tc-lgn-12"></a>

#### TC-LGN-12 – Login by pressing Enter

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-LGN-05 |
| Requirement | REQ-01 |
| Technique | Error guessing |
| Test account | standard_user |
| Preconditions | Browser opened at https://www.saucedemo.com (login page); user is not logged in. |
| Test steps | 1. Enter the username.<br>2. Enter the password.<br>3. Press the Enter key (do not click 'Login'). |
| Test data | Username: standard_user<br>Password: secret_sauce |
| Expected result | User is logged in and redirected to the Products page, same as clicking 'Login'. |
| Actual result | User is logged in and redirected to the Products page, same as clicking 'Login'. |
| Automation | Same flow as TC-LGN-01, submitted with press('Enter'). |

<a id="tc-lgn-13"></a>

#### TC-LGN-13 – Dismiss the login error message

| Field | Value |
| ----- | ----- |
| Priority | Low |
| Status | ✅ Pass |
| Scenario | TS-LGN-06 |
| Requirement | REQ-02 |
| Technique | Error guessing |
| Test account | - |
| Preconditions | Browser opened at https://www.saucedemo.com (login page); user is not logged in. |
| Test steps | 1. Click 'Login' with both fields empty.<br>2. Click the 'X' button on the error message. |
| Test data | Username: (empty)<br>Password: (empty) |
| Expected result | The error message disappears.<br>The red error icons on the input fields are removed. |
| Actual result | The error message disappears.<br>The red error icons on the input fields are removed. |
| Automation | Low priority; quick to script. |

<a id="tc-lgn-14"></a>

#### TC-LGN-14 – Access /inventory.html without logging in

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-LGN-07 |
| Requirement | REQ-13 |
| Technique | Equivalence partitioning |
| Test account | - |
| Preconditions | New private/incognito browser window; user is not logged in. |
| Test steps | 1. Enter https://www.saucedemo.com/inventory.html in the address bar.<br>2. Press Enter. |
| Test data | URL: https://www.saucedemo.com/inventory.html |
| Expected result | The protected page is NOT displayed.<br>User is on the login page with error 'Epic sadface: You can only access '/inventory.html' when you are logged in.' |
| Actual result | The protected page is NOT displayed.<br>User is on the login page with error 'Epic sadface: You can only access '/inventory.html' when you are logged in.' |
| Automation | login.spec.ts (data-driven: protectedPages) |

<a id="tc-lgn-15"></a>

#### TC-LGN-15 – Access /cart.html without logging in

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-LGN-07 |
| Requirement | REQ-13 |
| Technique | Equivalence partitioning |
| Test account | - |
| Preconditions | New private/incognito browser window; user is not logged in. |
| Test steps | 1. Enter https://www.saucedemo.com/cart.html in the address bar.<br>2. Press Enter. |
| Test data | URL: https://www.saucedemo.com/cart.html |
| Expected result | The protected page is NOT displayed.<br>User is on the login page with error 'Epic sadface: You can only access '/cart.html' when you are logged in.' |
| Actual result | The protected page is NOT displayed.<br>User is on the login page with error 'Epic sadface: You can only access '/cart.html' when you are logged in.' |
| Automation | login.spec.ts (data-driven: protectedPages) |

<a id="tc-lgn-16"></a>

#### TC-LGN-16 – Access /checkout-step-one.html without logging in

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-LGN-07 |
| Requirement | REQ-13 |
| Technique | Equivalence partitioning |
| Test account | - |
| Preconditions | New private/incognito browser window; user is not logged in. |
| Test steps | 1. Enter https://www.saucedemo.com/checkout-step-one.html in the address bar.<br>2. Press Enter. |
| Test data | URL: https://www.saucedemo.com/checkout-step-one.html |
| Expected result | The protected page is NOT displayed.<br>User is on the login page with error 'Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.' |
| Actual result | The protected page is NOT displayed.<br>User is on the login page with error 'Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.' |
| Automation | login.spec.ts (data-driven: protectedPages) |

<a id="tc-lgn-17"></a>

#### TC-LGN-17 – Access /inventory-item.html without logging in

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-LGN-07 |
| Requirement | REQ-13 |
| Technique | Equivalence partitioning |
| Test account | - |
| Preconditions | New private/incognito browser window; user is not logged in. |
| Test steps | 1. Enter https://www.saucedemo.com/inventory-item.html?id=4 in the address bar.<br>2. Press Enter. |
| Test data | URL: https://www.saucedemo.com/inventory-item.html?id=4 |
| Expected result | The protected page is NOT displayed.<br>User is on the login page with error 'Epic sadface: You can only access '/inventory-item.html' when you are logged in.' |
| Actual result | The protected page is NOT displayed.<br>User is on the login page with error 'Epic sadface: You can only access '/inventory-item.html' when you are logged in.' |
| Automation | login.spec.ts (data-driven: protectedPages) |

</details>

## Inventory

| ID | Title | Priority | Account | Status | Bugs | Automation |
| -- | ----- | -------- | ------- | ------ | ---- | ---------- |
| [TC-INV-01](#tc-inv-01) | All products are displayed | High | `standard_user` | ✅ Pass |  | Done |
| [TC-INV-02](#tc-inv-02) | Each product shows complete information | High | `standard_user` | ✅ Pass |  | Done |
| [TC-INV-03](#tc-inv-03) | Product prices are displayed correctly | High | `standard_user` | ✅ Pass |  | Done |
| [TC-INV-04](#tc-inv-04) | Default sort is Name (A to Z) | Medium | `standard_user` | ✅ Pass |  | Done |
| [TC-INV-05](#tc-inv-05) | Sort by Name (Z to A) | Medium | `standard_user` | ✅ Pass |  | Done |
| [TC-INV-06](#tc-inv-06) | Sort by Price (low to high) | Medium | `standard_user` | ✅ Pass |  | Done |
| [TC-INV-07](#tc-inv-07) | Sort by Price (high to low) | Medium | `standard_user` | ✅ Pass |  | Done |
| [TC-INV-08](#tc-inv-08) | Add one product from the product list | High | `standard_user` | ✅ Pass |  | Done |
| [TC-INV-09](#tc-inv-09) | Remove a product from the product list | High | `standard_user` | ✅ Pass |  | Done |
| [TC-INV-10](#tc-inv-10) | Add all products from the product list | High | `standard_user` | ✅ Pass |  | Done |
| [TC-INV-11](#tc-inv-11) | Open product detail by clicking the product name | Medium | `standard_user` | ✅ Pass |  | P2 |
| [TC-INV-12](#tc-inv-12) | Open product detail by clicking the product image | Medium | `standard_user` | ✅ Pass |  | P2 |

<details>
<summary><b>Test case details – Inventory</b></summary>

<a id="tc-inv-01"></a>

#### TC-INV-01 – All products are displayed

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-INV-01 |
| Requirement | REQ-03 |
| Technique | Checklist-based |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Observe the product list. |
| Test data | - |
| Expected result | Exactly 6 products are displayed:<br>Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red). |
| Actual result | Exactly 6 products are displayed:<br>Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red). |
| Automation | inventory.spec.ts |

<a id="tc-inv-02"></a>

#### TC-INV-02 – Each product shows complete information

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-INV-01 |
| Requirement | REQ-03 |
| Technique | Checklist-based |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. For each product, check image, name, description, price and 'Add to cart' button. |
| Test data | - |
| Expected result | Every product shows an image, name, description, price and an 'Add to cart' button.<br>Each image matches its product name. |
| Actual result | Every product shows an image, name, description, price and an 'Add to cart' button.<br>Each image matches its product name. |
| Automation | inventory.spec.ts |

<a id="tc-inv-03"></a>

#### TC-INV-03 – Product prices are displayed correctly

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-INV-01 |
| Requirement | REQ-03 |
| Technique | Checklist-based |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Check the price of each product. |
| Test data | - |
| Expected result | Backpack $29.99 · Bike Light $9.99 · Bolt T-Shirt $15.99 · Fleece Jacket $49.99 · Onesie $7.99 · Test.allTheThings() T-Shirt (Red) $15.99.<br>All prices use the format $x.xx. |
| Actual result | Backpack $29.99 · Bike Light $9.99 · Bolt T-Shirt $15.99 · Fleece Jacket $49.99 · Onesie $7.99 · Test.allTheThings() T-Shirt (Red) $15.99.<br>All prices use the format $x.xx. |
| Automation | inventory.spec.ts |

<a id="tc-inv-04"></a>

#### TC-INV-04 – Default sort is Name (A to Z)

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-INV-02 |
| Requirement | REQ-04 |
| Technique | Equivalence partitioning |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Observe the sort dropdown and product order. |
| Test data | - |
| Expected result | Sort dropdown shows 'Name (A to Z)'.<br>Products are in alphabetical order; first: Sauce Labs Backpack. |
| Actual result | Sort dropdown shows 'Name (A to Z)'.<br>Products are in alphabetical order; first: Sauce Labs Backpack. |
| Automation | inventory.spec.ts |

<a id="tc-inv-05"></a>

#### TC-INV-05 – Sort by Name (Z to A)

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-INV-02 |
| Requirement | REQ-04 |
| Technique | Equivalence partitioning |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Select 'Name (Z to A)' in the sort dropdown. |
| Test data | Sort option: Name (Z to A) |
| Expected result | Products are in reverse alphabetical order.<br>First: Test.allTheThings() T-Shirt (Red); last: Sauce Labs Backpack. |
| Actual result | Products are in reverse alphabetical order.<br>First: Test.allTheThings() T-Shirt (Red); last: Sauce Labs Backpack. |
| Automation | inventory.spec.ts (data-driven sort) |

<a id="tc-inv-06"></a>

#### TC-INV-06 – Sort by Price (low to high)

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-INV-02 |
| Requirement | REQ-04 |
| Technique | Equivalence partitioning |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Select 'Price (low to high)' in the sort dropdown. |
| Test data | Sort option: Price (low to high) |
| Expected result | Products are in ascending price order.<br>First: Sauce Labs Onesie ($7.99); last: Sauce Labs Fleece Jacket ($49.99). |
| Actual result | Products are in ascending price order.<br>First: Sauce Labs Onesie ($7.99); last: Sauce Labs Fleece Jacket ($49.99). |
| Automation | inventory.spec.ts (data-driven sort) |

<a id="tc-inv-07"></a>

#### TC-INV-07 – Sort by Price (high to low)

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-INV-02 |
| Requirement | REQ-04 |
| Technique | Equivalence partitioning |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Select 'Price (high to low)' in the sort dropdown. |
| Test data | Sort option: Price (high to low) |
| Expected result | Products are in descending price order.<br>First: Sauce Labs Fleece Jacket ($49.99); last: Sauce Labs Onesie ($7.99). |
| Actual result | Products are in descending price order.<br>First: Sauce Labs Fleece Jacket ($49.99); last: Sauce Labs Onesie ($7.99). |
| Automation | inventory.spec.ts (data-driven sort) |

<a id="tc-inv-08"></a>

#### TC-INV-08 – Add one product from the product list

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-INV-03 |
| Requirement | REQ-06, REQ-07 |
| Technique | State transition |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Click 'Add to cart' for Sauce Labs Backpack. |
| Test data | Product: Sauce Labs Backpack |
| Expected result | The button changes to 'Remove'.<br>The cart badge shows '1'. |
| Actual result | The button changes to 'Remove'.<br>The cart badge shows '1'. |
| Automation | inventory.spec.ts |

<a id="tc-inv-09"></a>

#### TC-INV-09 – Remove a product from the product list

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-INV-03 |
| Requirement | REQ-06, REQ-07 |
| Technique | State transition |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Click 'Add to cart' for Sauce Labs Backpack.<br>2. Click 'Remove' for the same product. |
| Test data | Product: Sauce Labs Backpack |
| Expected result | The button changes back to 'Add to cart'.<br>The cart badge disappears. |
| Actual result | The button changes back to 'Add to cart'.<br>The cart badge disappears. |
| Automation | inventory.spec.ts |

<a id="tc-inv-10"></a>

#### TC-INV-10 – Add all products from the product list

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-INV-03 |
| Requirement | REQ-06, REQ-07 |
| Technique | Boundary value analysis |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Click 'Add to cart' for all 6 products. |
| Test data | All 6 products |
| Expected result | All 6 buttons show 'Remove'.<br>The cart badge shows '6'. |
| Actual result | All 6 buttons show 'Remove'.<br>The cart badge shows '6'. |
| Automation | inventory.spec.ts |

<a id="tc-inv-11"></a>

#### TC-INV-11 – Open product detail by clicking the product name

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-INV-04 |
| Requirement | REQ-05 |
| Technique | Equivalence partitioning |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Click the name 'Sauce Labs Bike Light'. |
| Test data | Product: Sauce Labs Bike Light |
| Expected result | The detail page (/inventory-item.html?id=...) of Sauce Labs Bike Light is displayed. |
| Actual result | The detail page (/inventory-item.html?id=0) of Sauce Labs Bike Light is displayed. |
| Automation | Navigation; can be parameterized with TC-INV-12. |

<a id="tc-inv-12"></a>

#### TC-INV-12 – Open product detail by clicking the product image

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-INV-04 |
| Requirement | REQ-05 |
| Technique | Equivalence partitioning |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Click the image of 'Sauce Labs Fleece Jacket'. |
| Test data | Product: Sauce Labs Fleece Jacket |
| Expected result | The detail page of Sauce Labs Fleece Jacket is displayed. |
| Actual result | The detail page of Sauce Labs Fleece Jacket is displayed. |
| Automation | Navigation; can be parameterized with TC-INV-11. |

</details>

## Product Detail

| ID | Title | Priority | Account | Status | Bugs | Automation |
| -- | ----- | -------- | ------- | ------ | ---- | ---------- |
| [TC-PDP-01](#tc-pdp-01) | Detail page shows the same information as the list | Medium | `standard_user` | ✅ Pass |  | P2 |
| [TC-PDP-02](#tc-pdp-02) | Add a product from the detail page | High | `standard_user` | ✅ Pass |  | Done |
| [TC-PDP-03](#tc-pdp-03) | Remove a product from the detail page | High | `standard_user` | ✅ Pass |  | Done |
| [TC-PDP-04](#tc-pdp-04) | Cart state added on detail page is shown in the list | High | `standard_user` | ✅ Pass |  | Done |
| [TC-PDP-05](#tc-pdp-05) | Cart state added on the list is shown on the detail page | High | `standard_user` | ✅ Pass |  | Done |
| [TC-PDP-06](#tc-pdp-06) | Return to the product list | Low | `standard_user` | ✅ Pass |  | P3 |

<details>
<summary><b>Test case details – Product Detail</b></summary>

<a id="tc-pdp-01"></a>

#### TC-PDP-01 – Detail page shows the same information as the list

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-PDP-01 |
| Requirement | REQ-05 |
| Technique | Checklist-based |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Note the name, description, price and image of Sauce Labs Backpack in the list.<br>2. Open its detail page.<br>3. Compare the information. |
| Test data | Product: Sauce Labs Backpack |
| Expected result | Name, description, price ($29.99) and image on the detail page match the product list. |
| Actual result | Name, description, price ($29.99) and image on the detail page match the product list. |
| Notes | Repeat for all 6 products during execution. |
| Automation | Repeat for all 6 products - a loop in code. |

<a id="tc-pdp-02"></a>

#### TC-PDP-02 – Add a product from the detail page

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-PDP-02 |
| Requirement | REQ-06, REQ-07 |
| Technique | State transition |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Open the detail page of Sauce Labs Backpack.<br>2. Click 'Add to cart'. |
| Test data | Product: Sauce Labs Backpack |
| Expected result | The button changes to 'Remove'.<br>The cart badge shows '1'. |
| Actual result | The button changes to 'Remove'.<br>The cart badge shows '1'. |
| Automation | product-detail.spec.ts |

<a id="tc-pdp-03"></a>

#### TC-PDP-03 – Remove a product from the detail page

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-PDP-02 |
| Requirement | REQ-06, REQ-07 |
| Technique | State transition |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Open the detail page of Sauce Labs Backpack.<br>2. Click 'Add to cart'.<br>3. Click 'Remove'. |
| Test data | Product: Sauce Labs Backpack |
| Expected result | The button changes back to 'Add to cart'.<br>The cart badge disappears. |
| Actual result | The button changes back to 'Add to cart'.<br>The cart badge disappears. |
| Automation | product-detail.spec.ts |

<a id="tc-pdp-04"></a>

#### TC-PDP-04 – Cart state added on detail page is shown in the list

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-PDP-02 |
| Requirement | REQ-06 |
| Technique | State transition |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Open the detail page of Sauce Labs Onesie.<br>2. Click 'Add to cart'.<br>3. Click 'Back to products'. |
| Test data | Product: Sauce Labs Onesie |
| Expected result | In the product list, Sauce Labs Onesie shows 'Remove'.<br>The cart badge shows '1'. |
| Actual result | In the product list, Sauce Labs Onesie shows 'Remove'.<br>The cart badge shows '1'. |
| Automation | product-detail.spec.ts |

<a id="tc-pdp-05"></a>

#### TC-PDP-05 – Cart state added on the list is shown on the detail page

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-PDP-02 |
| Requirement | REQ-06 |
| Technique | State transition |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Click 'Add to cart' for Sauce Labs Onesie in the list.<br>2. Open the detail page of Sauce Labs Onesie. |
| Test data | Product: Sauce Labs Onesie |
| Expected result | The detail page shows the 'Remove' button. |
| Actual result | The detail page shows the 'Remove' button. |
| Automation | product-detail.spec.ts |

<a id="tc-pdp-06"></a>

#### TC-PDP-06 – Return to the product list

| Field | Value |
| ----- | ----- |
| Priority | Low |
| Status | ✅ Pass |
| Scenario | TS-PDP-03 |
| Requirement | REQ-05 |
| Technique | Use case |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Open any product detail page.<br>2. Click 'Back to products'. |
| Test data | - |
| Expected result | The Products page (/inventory.html) is displayed. |
| Actual result | The Products page (/inventory.html) is displayed. |
| Automation | Low priority navigation. |

</details>

## Cart

| ID | Title | Priority | Account | Status | Bugs | Automation |
| -- | ----- | -------- | ------- | ------ | ---- | ---------- |
| [TC-CRT-01](#tc-crt-01) | Empty cart shows no badge and no items | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CRT-02](#tc-crt-02) | Badge updates when items are added and removed | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CRT-03](#tc-crt-03) | Cart page shows correct item details | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CRT-04](#tc-crt-04) | Cart page lists all products | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CRT-05](#tc-crt-05) | Open product detail from the cart | Low | `standard_user` | ✅ Pass |  | P3 |
| [TC-CRT-06](#tc-crt-06) | Remove one item on the cart page | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CRT-07](#tc-crt-07) | Remove all items on the cart page | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CRT-08](#tc-crt-08) | Continue Shopping keeps the cart | Medium | `standard_user` | ✅ Pass |  | P2 |
| [TC-CRT-09](#tc-crt-09) | Proceed to checkout from the cart | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CRT-10](#tc-crt-10) | Checkout with an empty cart | Medium | `standard_user` | ❌ Fail | [BUG-001](../bug-reports/BUG-001.md) | Known bug |

<details>
<summary><b>Test case details – Cart</b></summary>

<a id="tc-crt-01"></a>

#### TC-CRT-01 – Empty cart shows no badge and no items

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CRT-01 |
| Requirement | REQ-07, REQ-08 |
| Technique | Boundary value analysis |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Observe the cart icon.<br>2. Click the cart icon. |
| Test data | Cart items: 0 |
| Expected result | No badge is displayed on the cart icon.<br>'Your Cart' page is displayed with no items. |
| Actual result | No badge is displayed on the cart icon.<br>'Your Cart' page is displayed with no items. |
| Automation | cart.spec.ts |

<a id="tc-crt-02"></a>

#### TC-CRT-02 – Badge updates when items are added and removed

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CRT-01 |
| Requirement | REQ-07 |
| Technique | Boundary value analysis |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add Sauce Labs Backpack and Sauce Labs Bike Light.<br>2. Remove Sauce Labs Bike Light. |
| Test data | Products: Backpack, Bike Light |
| Expected result | After step 1 the badge shows '2'.<br>After step 2 the badge shows '1'. |
| Actual result | After step 1 the badge shows '2'.<br>After step 2 the badge shows '1'. |
| Automation | cart.spec.ts |

<a id="tc-crt-03"></a>

#### TC-CRT-03 – Cart page shows correct item details

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CRT-02 |
| Requirement | REQ-08 |
| Technique | Checklist-based |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add Sauce Labs Backpack.<br>2. Click the cart icon. |
| Test data | Product: Sauce Labs Backpack |
| Expected result | 'Your Cart' page shows Sauce Labs Backpack with QTY 1, its description, price $29.99 and a 'Remove' button. |
| Actual result | 'Your Cart' page shows Sauce Labs Backpack with QTY 1, its description, price $29.99 and a 'Remove' button. |
| Automation | cart.spec.ts |

<a id="tc-crt-04"></a>

#### TC-CRT-04 – Cart page lists all products

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CRT-02 |
| Requirement | REQ-08 |
| Technique | Boundary value analysis |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add all 6 products.<br>2. Click the cart icon. |
| Test data | All 6 products |
| Expected result | All 6 products are listed, each with QTY 1 and the correct price. |
| Actual result | All 6 products are listed, each with QTY 1 and the correct price. |
| Automation | cart.spec.ts |

<a id="tc-crt-05"></a>

#### TC-CRT-05 – Open product detail from the cart

| Field | Value |
| ----- | ----- |
| Priority | Low |
| Status | ✅ Pass |
| Scenario | TS-CRT-02 |
| Requirement | REQ-05, REQ-08 |
| Technique | Use case |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add Sauce Labs Backpack.<br>2. Open the cart.<br>3. Click the product name. |
| Test data | Product: Sauce Labs Backpack |
| Expected result | The detail page of Sauce Labs Backpack is displayed. |
| Actual result | The detail page of Sauce Labs Backpack is displayed. |
| Automation | Low priority navigation. |

<a id="tc-crt-06"></a>

#### TC-CRT-06 – Remove one item on the cart page

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CRT-03 |
| Requirement | REQ-06, REQ-07 |
| Technique | State transition |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add Backpack and Bike Light.<br>2. Open the cart.<br>3. Click 'Remove' for Bike Light. |
| Test data | Products: Backpack, Bike Light |
| Expected result | Bike Light is removed from the cart list.<br>The badge shows '1'. |
| Actual result | Bike Light is removed from the cart list.<br>The badge shows '1'. |
| Automation | cart.spec.ts |

<a id="tc-crt-07"></a>

#### TC-CRT-07 – Remove all items on the cart page

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CRT-03 |
| Requirement | REQ-06, REQ-07 |
| Technique | State transition |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add Backpack and Bike Light.<br>2. Open the cart.<br>3. Remove both items.<br>4. Click 'Continue Shopping'. |
| Test data | Products: Backpack, Bike Light |
| Expected result | The cart is empty and the badge disappears.<br>On the Products page, both products show 'Add to cart'. |
| Actual result | The cart is empty and the badge disappears.<br>On the Products page, both products show 'Add to cart'. |
| Automation | cart.spec.ts |

<a id="tc-crt-08"></a>

#### TC-CRT-08 – Continue Shopping keeps the cart

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-CRT-04 |
| Requirement | REQ-08 |
| Technique | Use case |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add Sauce Labs Backpack.<br>2. Open the cart.<br>3. Click 'Continue Shopping'. |
| Test data | Product: Sauce Labs Backpack |
| Expected result | The Products page is displayed.<br>The badge still shows '1' and Backpack shows 'Remove'. |
| Actual result | The Products page is displayed.<br>The badge still shows '1' and Backpack shows 'Remove'. |
| Automation | Medium priority; simple flow. |

<a id="tc-crt-09"></a>

#### TC-CRT-09 – Proceed to checkout from the cart

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CRT-04 |
| Requirement | REQ-08 |
| Technique | Use case |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add Sauce Labs Backpack.<br>2. Open the cart.<br>3. Click 'Checkout'. |
| Test data | Product: Sauce Labs Backpack |
| Expected result | 'Checkout: Your Information' page (/checkout-step-one.html) is displayed. |
| Actual result | 'Checkout: Your Information' page (/checkout-step-one.html) is displayed. |
| Automation | cart.spec.ts |

<a id="tc-crt-10"></a>

#### TC-CRT-10 – Checkout with an empty cart

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ❌ Fail |
| Scenario | TS-CRT-05 |
| Requirement | REQ-08 |
| Technique | Error guessing |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Open the cart with no items.<br>2. Click 'Checkout'. |
| Test data | Cart items: 0 |
| Expected result | Checkout is not allowed (button disabled or a message asks the user to add items). |
| Actual result | Checkout button is enabled with an empty cart. Clicking it opens 'Checkout: Your Information' (/checkout-step-one.html). No message asks the user to add items. |
| Notes | [BUG-001](../bug-reports/BUG-001.md). Expected result based on common practice (no official spec). Executed 07/11/2026, Chrome 156.0.8078.74, Windows 11 Home 25H2. Evidence: evidence/screenshots/BUG-001_1-empty-cart.png, BUG-001_2-checkout-info.png |
| Automation | BUG-001; expected result has no official spec. If scripted, mark with test.fail(). |

</details>

## Checkout

| ID | Title | Priority | Account | Status | Bugs | Automation |
| -- | ----- | -------- | ------- | ------ | ---- | ---------- |
| [TC-CHK-01](#tc-chk-01) | Complete an order end-to-end | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CHK-02](#tc-chk-02) | Overview page shows complete order information | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CHK-03](#tc-chk-03) | Continue with all fields empty | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CHK-04](#tc-chk-04) | First Name empty | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CHK-05](#tc-chk-05) | Last Name empty | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CHK-06](#tc-chk-06) | Postal Code empty | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CHK-07](#tc-chk-07) | Only First Name filled | Medium | `standard_user` | ✅ Pass |  | P2 |
| [TC-CHK-08](#tc-chk-08) | Dismiss the checkout error message | Low | `standard_user` | ✅ Pass |  | P3 |
| [TC-CHK-09](#tc-chk-09) | Whitespace-only First Name | Medium | `standard_user` | ❌ Fail | [BUG-002](../bug-reports/BUG-002.md) | Known bug |
| [TC-CHK-10](#tc-chk-10) | Special characters in name fields | Medium | `standard_user` | ❌ Fail | [BUG-002](../bug-reports/BUG-002.md) | Known bug |
| [TC-CHK-11](#tc-chk-11) | Letters in Postal Code | Medium | `standard_user` | ❌ Fail | [BUG-002](../bug-reports/BUG-002.md) | Known bug |
| [TC-CHK-12](#tc-chk-12) | Minimum length input (1 character) | Medium | `standard_user` | ✅ Pass |  | P2 |
| [TC-CHK-13](#tc-chk-13) | Very long input (255 characters) | Medium | `standard_user` | ✅ Pass |  | P2 |
| [TC-CHK-14](#tc-chk-14) | Price calculation – One product | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CHK-15](#tc-chk-15) | Price calculation – Two products | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CHK-16](#tc-chk-16) | Price calculation – Four products (rounding case) | High | `standard_user` | ❌ Fail | [BUG-018](../bug-reports/BUG-018.md) | Done |
| [TC-CHK-17](#tc-chk-17) | Price calculation – All six products | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CHK-18](#tc-chk-18) | Overview reflects items removed before checkout | Medium | `standard_user` | ✅ Pass |  | P2 |
| [TC-CHK-19](#tc-chk-19) | Cancel on 'Your Information' | Medium | `standard_user` | ✅ Pass |  | P2 |
| [TC-CHK-20](#tc-chk-20) | Cancel on 'Overview' | Medium | `standard_user` | ✅ Pass |  | P2 |
| [TC-CHK-21](#tc-chk-21) | Cart is empty after the order is completed | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CHK-22](#tc-chk-22) | Back Home after order completion | High | `standard_user` | ✅ Pass |  | Done |
| [TC-CHK-23](#tc-chk-23) | Browser Back after order completion | Medium | `standard_user` | ✅ Pass |  | P2 |

<details>
<summary><b>Test case details – Checkout</b></summary>

<a id="tc-chk-01"></a>

#### TC-CHK-01 – Complete an order end-to-end

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CHK-01 |
| Requirement | REQ-09, REQ-11 |
| Technique | Use case |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add Sauce Labs Backpack.<br>2. Open the cart and click 'Checkout'.<br>3. Enter First Name, Last Name and Postal Code.<br>4. Click 'Continue'.<br>5. Click 'Finish'. |
| Test data | First Name: John<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | After step 4, 'Checkout: Overview' is displayed.<br>After step 5, 'Checkout: Complete!' is displayed with the message 'Thank you for your order!'. |
| Actual result | After step 4, 'Checkout: Overview' is displayed.<br>After step 5, 'Checkout: Complete!' is displayed with the message 'Thank you for your order!'. |
| Automation | checkout.spec.ts |

<a id="tc-chk-02"></a>

#### TC-CHK-02 – Overview page shows complete order information

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CHK-01 |
| Requirement | REQ-10, REQ-11 |
| Technique | Checklist-based |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; 'Sauce Labs Backpack' is in the cart; on 'Checkout: Your Information' (/checkout-step-one.html). |
| Test steps | 1. Enter First Name.<br>2. Enter Last Name.<br>3. Enter Postal Code.<br>4. Click 'Continue'. |
| Test data | First Name: John<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | Overview lists the item (name, QTY, price), Payment Information, Shipping Information, Item total, Tax, Total, and 'Cancel' / 'Finish' buttons. |
| Actual result | Overview lists the item (name, QTY, price), Payment Information, Shipping Information, Item total, Tax, Total, and 'Cancel' / 'Finish' buttons. |
| Automation | checkout.spec.ts |

<a id="tc-chk-03"></a>

#### TC-CHK-03 – Continue with all fields empty

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CHK-02 |
| Requirement | REQ-09 |
| Technique | Decision table |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; 'Sauce Labs Backpack' is in the cart; on 'Checkout: Your Information' (/checkout-step-one.html). |
| Test steps | 1. Leave all fields empty.<br>2. Click 'Continue'. |
| Test data | All fields: (empty) |
| Expected result | Error 'Error: First Name is required' is displayed.<br>User stays on the information page. |
| Actual result | Error 'Error: First Name is required' is displayed.<br>User stays on the information page. |
| Automation | checkout.spec.ts (data-driven form validation) |

<a id="tc-chk-04"></a>

#### TC-CHK-04 – First Name empty

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CHK-02 |
| Requirement | REQ-09 |
| Technique | Decision table |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; 'Sauce Labs Backpack' is in the cart; on 'Checkout: Your Information' (/checkout-step-one.html). |
| Test steps | 1. Enter First Name.<br>2. Enter Last Name.<br>3. Enter Postal Code.<br>4. Click 'Continue'. |
| Test data | First Name: (empty)<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | Error 'Error: First Name is required' is displayed. |
| Actual result | Error 'Error: First Name is required' is displayed. |
| Automation | checkout.spec.ts (data-driven form validation) |

<a id="tc-chk-05"></a>

#### TC-CHK-05 – Last Name empty

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CHK-02 |
| Requirement | REQ-09 |
| Technique | Decision table |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; 'Sauce Labs Backpack' is in the cart; on 'Checkout: Your Information' (/checkout-step-one.html). |
| Test steps | 1. Enter First Name.<br>2. Enter Last Name.<br>3. Enter Postal Code.<br>4. Click 'Continue'. |
| Test data | First Name: John<br>Last Name: (empty)<br>Postal Code: 70000 |
| Expected result | Error 'Error: Last Name is required' is displayed. |
| Actual result | Error 'Error: Last Name is required' is displayed. |
| Automation | checkout.spec.ts (data-driven form validation) |

<a id="tc-chk-06"></a>

#### TC-CHK-06 – Postal Code empty

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CHK-02 |
| Requirement | REQ-09 |
| Technique | Decision table |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; 'Sauce Labs Backpack' is in the cart; on 'Checkout: Your Information' (/checkout-step-one.html). |
| Test steps | 1. Enter First Name.<br>2. Enter Last Name.<br>3. Enter Postal Code.<br>4. Click 'Continue'. |
| Test data | First Name: John<br>Last Name: Doe<br>Postal Code: (empty) |
| Expected result | Error 'Error: Postal Code is required' is displayed. |
| Actual result | Error 'Error: Postal Code is required' is displayed. |
| Automation | checkout.spec.ts (data-driven form validation) |

<a id="tc-chk-07"></a>

#### TC-CHK-07 – Only First Name filled

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-CHK-02 |
| Requirement | REQ-09 |
| Technique | Decision table |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; 'Sauce Labs Backpack' is in the cart; on 'Checkout: Your Information' (/checkout-step-one.html). |
| Test steps | 1. Enter First Name.<br>2. Enter Last Name.<br>3. Enter Postal Code.<br>4. Click 'Continue'. |
| Test data | First Name: John<br>Last Name: (empty)<br>Postal Code: (empty) |
| Expected result | Error 'Error: Last Name is required' is displayed. |
| Actual result | Error 'Error: Last Name is required' is displayed. |
| Automation | Add one row to the form validation data. |

<a id="tc-chk-08"></a>

#### TC-CHK-08 – Dismiss the checkout error message

| Field | Value |
| ----- | ----- |
| Priority | Low |
| Status | ✅ Pass |
| Scenario | TS-CHK-02 |
| Requirement | REQ-09 |
| Technique | Error guessing |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; 'Sauce Labs Backpack' is in the cart; on 'Checkout: Your Information' (/checkout-step-one.html). |
| Test steps | 1. Click 'Continue' with all fields empty.<br>2. Click the 'X' button on the error. |
| Test data | All fields: (empty) |
| Expected result | The error message and the field error icons disappear. |
| Actual result | The error message and the field error icons disappear. |
| Automation | Low priority; quick to script. |

<a id="tc-chk-09"></a>

#### TC-CHK-09 – Whitespace-only First Name

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ❌ Fail |
| Scenario | TS-CHK-03 |
| Requirement | REQ-09 |
| Technique | Equivalence partitioning |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; 'Sauce Labs Backpack' is in the cart; on 'Checkout: Your Information' (/checkout-step-one.html). |
| Test steps | 1. Enter First Name.<br>2. Enter Last Name.<br>3. Enter Postal Code.<br>4. Click 'Continue'. |
| Test data | First Name: '   ' (3 spaces)<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | Error 'Error: First Name is required' is displayed (whitespace is treated as empty). |
| Actual result | No error message is displayed. The whitespace-only First Name is accepted, and 'Checkout: Overview' (/checkout-step-two.html) is displayed after clicking 'Continue'. |
| Notes | [BUG-002](../bug-reports/BUG-002.md). Expected result based on common practice (no official spec). Executed 07/11/2026, Chrome 156.0.8078.74, Windows 11 Home 25H2. Evidence: evidence/screenshots/BUG-002_1a-whitespace-input.png, BUG-002_1b-whitespace-overview.png |
| Automation | BUG-002; expected result based on common practice. If scripted, mark with test.fail(). |

<a id="tc-chk-10"></a>

#### TC-CHK-10 – Special characters in name fields

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ❌ Fail |
| Scenario | TS-CHK-03 |
| Requirement | REQ-09 |
| Technique | Equivalence partitioning |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; 'Sauce Labs Backpack' is in the cart; on 'Checkout: Your Information' (/checkout-step-one.html). |
| Test steps | 1. Enter First Name.<br>2. Enter Last Name.<br>3. Enter Postal Code.<br>4. Click 'Continue'. |
| Test data | First Name: @#$%<br>Last Name: !&amp;*()<br>Postal Code: 70000 |
| Expected result | A validation error is displayed for invalid name characters. |
| Actual result | No error message is displayed. All the fields with special characters are accepted, and 'Checkout: Overview' (/checkout-step-two.html) is displayed after clicking 'Continue'. |
| Notes | [BUG-002](../bug-reports/BUG-002.md). Expected result based on common practice (no official spec). Executed 07/11/2026, Chrome 156.0.8078.74, Windows 11 Home 25H2. Evidence: evidence/screenshots/BUG-002_2a-special-chars-input.png, BUG-002_2b-special-chars-overview.png |
| Automation | BUG-002; expected result based on common practice. If scripted, mark with test.fail(). |

<a id="tc-chk-11"></a>

#### TC-CHK-11 – Letters in Postal Code

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ❌ Fail |
| Scenario | TS-CHK-03 |
| Requirement | REQ-09 |
| Technique | Equivalence partitioning |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; 'Sauce Labs Backpack' is in the cart; on 'Checkout: Your Information' (/checkout-step-one.html). |
| Test steps | 1. Enter First Name.<br>2. Enter Last Name.<br>3. Enter Postal Code.<br>4. Click 'Continue'. |
| Test data | First Name: John<br>Last Name: Doe<br>Postal Code: ABCDE |
| Expected result | A validation error is displayed for an invalid postal code. |
| Actual result | No error message is displayed. The postal code with letters is accepted, and 'Checkout: Overview' (/checkout-step-two.html) is displayed after clicking 'Continue'. |
| Notes | [BUG-002](../bug-reports/BUG-002.md). Expected result based on common practice (no official spec). Executed 07/11/2026, Chrome 156.0.8078.74, Windows 11 Home 25H2. Evidence: evidence/screenshots/BUG-002_3a-postal-letters-input.png, BUG-002_3b-postal-letters-overview.png |
| Automation | BUG-002; expected result based on common practice. If scripted, mark with test.fail(). |

<a id="tc-chk-12"></a>

#### TC-CHK-12 – Minimum length input (1 character)

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-CHK-03 |
| Requirement | REQ-09 |
| Technique | Boundary value analysis |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; 'Sauce Labs Backpack' is in the cart; on 'Checkout: Your Information' (/checkout-step-one.html). |
| Test steps | 1. Enter First Name.<br>2. Enter Last Name.<br>3. Enter Postal Code.<br>4. Click 'Continue'. |
| Test data | First Name: A<br>Last Name: B<br>Postal Code: 1 |
| Expected result | Input is accepted; 'Checkout: Overview' is displayed. |
| Actual result | Input is accepted; 'Checkout: Overview' is displayed. |
| Automation | Boundary value; data-driven. |

<a id="tc-chk-13"></a>

#### TC-CHK-13 – Very long input (255 characters)

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-CHK-03 |
| Requirement | REQ-09 |
| Technique | Boundary value analysis |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; 'Sauce Labs Backpack' is in the cart; on 'Checkout: Your Information' (/checkout-step-one.html). |
| Test steps | 1. Enter First Name.<br>2. Enter Last Name.<br>3. Enter Postal Code.<br>4. Click 'Continue'. |
| Test data | Each field: 255 characters (e.g. 'a' x 255; digits for Postal Code) |
| Expected result | Input is accepted or limited to a maximum length.<br>The page layout does not break; the user can continue. |
| Actual result | Input is accepted; 'Checkout: Overview' is displayed. |
| Notes | Expected result is an assumption (no official spec). Record actual behavior; report a defect if it differs. |
| Automation | Boundary value; agree on the expected result first (currently an assumption). |

<a id="tc-chk-14"></a>

#### TC-CHK-14 – Price calculation – One product

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CHK-04 |
| Requirement | REQ-10 |
| Technique | Equivalence partitioning |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add: Sauce Labs Backpack.<br>2. Open the cart and click 'Checkout'.<br>3. Enter valid information and click 'Continue'.<br>4. Check Item total, Tax and Total on the overview. |
| Test data | Products: Sauce Labs Backpack<br>First Name: John<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | Item total: $29.99<br>Tax: $2.40<br>Total: $32.39<br>Total = Item total + Tax. |
| Actual result | Item total: $29.99<br>Tax: $2.40<br>Total: $32.39<br>Total = Item total + Tax. |
| Notes | Prices and 8% tax are an observed baseline, not a documented requirement. |
| Automation | checkout.spec.ts (data-driven price calculation) |

<a id="tc-chk-15"></a>

#### TC-CHK-15 – Price calculation – Two products

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CHK-04 |
| Requirement | REQ-10 |
| Technique | Equivalence partitioning |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add: Sauce Labs Backpack, Sauce Labs Bolt T-Shirt.<br>2. Open the cart and click 'Checkout'.<br>3. Enter valid information and click 'Continue'.<br>4. Check Item total, Tax and Total on the overview. |
| Test data | Products: Sauce Labs Backpack, Sauce Labs Bolt T-Shirt<br>First Name: John<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | Item total: $45.98<br>Tax: $3.68<br>Total: $49.66<br>Total = Item total + Tax. |
| Actual result | Item total: $45.98<br>Tax: $3.68<br>Total: $49.66<br>Total = Item total + Tax. |
| Notes | Prices and 8% tax are an observed baseline, not a documented requirement. |
| Automation | checkout.spec.ts (data-driven price calculation) |

<a id="tc-chk-16"></a>

#### TC-CHK-16 – Price calculation – Four products (rounding case)

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ❌ Fail |
| Scenario | TS-CHK-04 |
| Requirement | REQ-10 |
| Technique | Equivalence partitioning |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add: Backpack, Bolt T-Shirt, Onesie, Fleece Jacket.<br>2. Open the cart and click 'Checkout'.<br>3. Enter valid information and click 'Continue'.<br>4. Check Item total, Tax and Total on the overview. |
| Test data | Products: Backpack, Bolt T-Shirt, Onesie, Fleece Jacket<br>First Name: John<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | Item total: $103.96<br>Tax: $8.32<br>Total: $112.28<br>All amounts are shown with exactly 2 decimals.<br>Total = Item total + Tax. |
| Actual result | Item total: $103.96000000000001<br>Tax: $8.32<br>Total: $112.28<br>Item total is not shown with 2 decimals; Tax and Total are correct. |
| Notes | [BUG-018](../bug-reports/BUG-018.md). Prices and 8% tax are an observed baseline, not a documented requirement. Executed 25/11/2026, Chromium 158.0.8127.18 (Playwright), Windows 11 Home 25H2. Evidence: evidence/screenshots/BUG-018_item-total-decimals.png |
| Automation | checkout.spec.ts (data-driven price calculation); marked test.fail(true, 'BUG-018') |

<a id="tc-chk-17"></a>

#### TC-CHK-17 – Price calculation – All six products

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CHK-04 |
| Requirement | REQ-10 |
| Technique | Equivalence partitioning |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add: All 6 products.<br>2. Open the cart and click 'Checkout'.<br>3. Enter valid information and click 'Continue'.<br>4. Check Item total, Tax and Total on the overview. |
| Test data | Products: All 6 products<br>First Name: John<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | Item total: $129.94<br>Tax: $10.40<br>Total: $140.34<br>Total = Item total + Tax. |
| Actual result | Item total: $129.94<br>Tax: $10.40<br>Total: $140.34<br>Total = Item total + Tax. |
| Notes | Prices and 8% tax are an observed baseline, not a documented requirement. |
| Automation | checkout.spec.ts (data-driven price calculation) |

<a id="tc-chk-18"></a>

#### TC-CHK-18 – Overview reflects items removed before checkout

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-CHK-04 |
| Requirement | REQ-10 |
| Technique | Error guessing |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add Backpack and Bike Light.<br>2. Open the cart and remove Bike Light.<br>3. Click 'Checkout', enter valid information, click 'Continue'. |
| Test data | Products: Backpack, Bike Light (removed)<br>First Name: John<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | Overview shows only Sauce Labs Backpack.<br>Item total: $29.99 · Tax: $2.40 · Total: $32.39. |
| Actual result | Overview shows only Sauce Labs Backpack.<br>Item total: $29.99 · Tax: $2.40 · Total: $32.39. |
| Notes | Prices and 8% tax are an observed baseline, not a documented requirement. |
| Automation | State transition; medium priority. |

<a id="tc-chk-19"></a>

#### TC-CHK-19 – Cancel on 'Your Information'

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-CHK-05 |
| Requirement | REQ-08 |
| Technique | State transition |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; 'Sauce Labs Backpack' is in the cart; on 'Checkout: Your Information' (/checkout-step-one.html). |
| Test steps | 1. Click 'Cancel'. |
| Test data | - |
| Expected result | 'Your Cart' page is displayed.<br>Sauce Labs Backpack is still in the cart. |
| Actual result | 'Your Cart' page is displayed.<br>Sauce Labs Backpack is still in the cart. |
| Automation | State transition; medium priority. |

<a id="tc-chk-20"></a>

#### TC-CHK-20 – Cancel on 'Overview'

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-CHK-05 |
| Requirement | REQ-11 |
| Technique | State transition |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; 'Sauce Labs Backpack' is in the cart; on 'Checkout: Your Information' (/checkout-step-one.html). |
| Test steps | 1. Enter First Name.<br>2. Enter Last Name.<br>3. Enter Postal Code.<br>4. Click 'Continue'.<br>5. On the overview, click 'Cancel'. |
| Test data | First Name: John<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | The order is not placed.<br>User returns to the Products page; the badge still shows '1'. |
| Actual result | The order is not placed.<br>User returns to the Products page; the badge still shows '1'. |
| Automation | State transition; medium priority. |

<a id="tc-chk-21"></a>

#### TC-CHK-21 – Cart is empty after the order is completed

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CHK-06 |
| Requirement | REQ-11 |
| Technique | State transition |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; 'Sauce Labs Backpack' is in the cart; on 'Checkout: Your Information' (/checkout-step-one.html). |
| Test steps | 1. Enter First Name.<br>2. Enter Last Name.<br>3. Enter Postal Code.<br>4. Click 'Continue'.<br>5. Click 'Finish'.<br>6. Click the cart icon. |
| Test data | First Name: John<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | After 'Finish', the cart badge disappears.<br>The cart page shows no items. |
| Actual result | After 'Finish', the cart badge disappears.<br>The cart page shows no items. |
| Automation | checkout.spec.ts |

<a id="tc-chk-22"></a>

#### TC-CHK-22 – Back Home after order completion

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-CHK-06 |
| Requirement | REQ-11 |
| Technique | State transition |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; 'Sauce Labs Backpack' is in the cart; on 'Checkout: Your Information' (/checkout-step-one.html). |
| Test steps | 1. Enter First Name.<br>2. Enter Last Name.<br>3. Enter Postal Code.<br>4. Click 'Continue'.<br>5. Click 'Finish'.<br>6. Click 'Back Home'. |
| Test data | First Name: John<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | The Products page is displayed.<br>All products show 'Add to cart'. |
| Actual result | The Products page is displayed.<br>All products show 'Add to cart'. |
| Automation | checkout.spec.ts |

<a id="tc-chk-23"></a>

#### TC-CHK-23 – Browser Back after order completion

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-CHK-06 |
| Requirement | REQ-11 |
| Technique | Error guessing |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; 'Sauce Labs Backpack' is in the cart; on 'Checkout: Your Information' (/checkout-step-one.html). |
| Test steps | 1. Enter First Name.<br>2. Enter Last Name.<br>3. Enter Postal Code.<br>4. Click 'Continue'.<br>5. Click 'Finish'.<br>6. Press the browser Back button. |
| Test data | First Name: John<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | The same order cannot be submitted again; the overview does not show the old items as a payable order. |
| Actual result | The same order cannot be submitted again; the overview does not show the old items as a payable order. |
| Automation | page.goBack() after order completion. |

</details>

## Menu and Session

| ID | Title | Priority | Account | Status | Bugs | Automation |
| -- | ----- | -------- | ------- | ------ | ---- | ---------- |
| [TC-MNU-01](#tc-mnu-01) | Open the side menu | Low | `standard_user` | ✅ Pass |  | P3 |
| [TC-MNU-02](#tc-mnu-02) | Close the side menu | Low | `standard_user` | ✅ Pass |  | P3 |
| [TC-MNU-03](#tc-mnu-03) | All Items navigates to the product list | Low | `standard_user` | ✅ Pass |  | P3 |
| [TC-MNU-04](#tc-mnu-04) | About opens the Sauce Labs website | Low | `standard_user` | ✅ Pass |  | P3 |
| [TC-MNU-05](#tc-mnu-05) | Log out from the side menu | High | `standard_user` | ✅ Pass |  | Done |
| [TC-MNU-06](#tc-mnu-06) | Reset App State clears the cart | Medium | `standard_user` | ✅ Pass |  | P2 |
| [TC-MNU-07](#tc-mnu-07) | Browser Back after logout | High | `standard_user` | ✅ Pass |  | Done |
| [TC-MNU-08](#tc-mnu-08) | Open a protected URL after logout | High | `standard_user` | ✅ Pass |  | Done |

<details>
<summary><b>Test case details – Menu and Session</b></summary>

<a id="tc-mnu-01"></a>

#### TC-MNU-01 – Open the side menu

| Field | Value |
| ----- | ----- |
| Priority | Low |
| Status | ✅ Pass |
| Scenario | TS-MNU-01 |
| Requirement | REQ-12 |
| Technique | Use case |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Click the menu (hamburger) icon. |
| Test data | - |
| Expected result | The menu opens and shows: All Items, Dynamic Catalog, About, Logout, Reset App State. |
| Actual result | The menu opens and shows: All Items, Dynamic Catalog, About, Logout, Reset App State. |
| Automation | Already exercised by TC-MNU-05 (menu is opened). |

<a id="tc-mnu-02"></a>

#### TC-MNU-02 – Close the side menu

| Field | Value |
| ----- | ----- |
| Priority | Low |
| Status | ✅ Pass |
| Scenario | TS-MNU-01 |
| Requirement | REQ-12 |
| Technique | Use case |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Open the menu.<br>2. Click the 'X' button. |
| Test data | - |
| Expected result | The menu closes. |
| Actual result | The menu closes. |
| Automation | Low priority. |

<a id="tc-mnu-03"></a>

#### TC-MNU-03 – All Items navigates to the product list

| Field | Value |
| ----- | ----- |
| Priority | Low |
| Status | ✅ Pass |
| Scenario | TS-MNU-02 |
| Requirement | REQ-12 |
| Technique | Use case |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Open the cart page.<br>2. Open the menu and click 'All Items'. |
| Test data | - |
| Expected result | The Products page is displayed. |
| Actual result | The Products page is displayed. |
| Automation | Low priority. |

<a id="tc-mnu-04"></a>

#### TC-MNU-04 – About opens the Sauce Labs website

| Field | Value |
| ----- | ----- |
| Priority | Low |
| Status | ✅ Pass |
| Scenario | TS-MNU-03 |
| Requirement | REQ-12 |
| Technique | Use case |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Open the menu and click 'About'. |
| Test data | - |
| Expected result | The Sauce Labs website (saucelabs.com) is opened. |
| Actual result | The Sauce Labs website (saucelabs.com) is opened. |
| Automation | Check the href only; do not open the external site (flaky). |

<a id="tc-mnu-05"></a>

#### TC-MNU-05 – Log out from the side menu

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-MNU-04 |
| Requirement | REQ-14 |
| Technique | State transition |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Open the menu and click 'Logout'. |
| Test data | - |
| Expected result | The login page is displayed with empty username and password fields. |
| Actual result | The login page is displayed with empty username and password fields. |
| Automation | menu.spec.ts |

<a id="tc-mnu-06"></a>

#### TC-MNU-06 – Reset App State clears the cart

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-MNU-05 |
| Requirement | REQ-12 |
| Technique | State transition |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add Backpack and Bike Light.<br>2. Open the menu and click 'Reset App State'.<br>3. Observe the badge and product buttons (do not refresh). |
| Test data | Products: Backpack, Bike Light |
| Expected result | The cart badge disappears and the cart is empty.<br>All product buttons show 'Add to cart'. |
| Actual result | The cart badge disappears and the cart is empty.<br>All product buttons show 'Add to cart'. |
| Automation | Medium priority state transition. |

<a id="tc-mnu-07"></a>

#### TC-MNU-07 – Browser Back after logout

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-MNU-06 |
| Requirement | REQ-13, REQ-14 |
| Technique | Error guessing |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Log out from the menu.<br>2. Press the browser Back button. |
| Test data | - |
| Expected result | The Products page is NOT accessible; the user stays on (or is redirected to) the login page. |
| Actual result | The Products page is NOT accessible; the user stays on the login page with error "Epic sadface: You can only access '/inventory.html' when you are logged in". |
| Automation | menu.spec.ts |

<a id="tc-mnu-08"></a>

#### TC-MNU-08 – Open a protected URL after logout

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-MNU-06 |
| Requirement | REQ-13, REQ-14 |
| Technique | Error guessing |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Log out from the menu.<br>2. Enter https://www.saucedemo.com/inventory.html in the address bar. |
| Test data | URL: /inventory.html |
| Expected result | The login page is displayed with error 'Epic sadface: You can only access '/inventory.html' when you are logged in.' |
| Actual result | The login page is displayed with error 'Epic sadface: You can only access '/inventory.html' when you are logged in.' |
| Automation | menu.spec.ts |

</details>

## User Accounts

| ID | Title | Priority | Account | Status | Bugs | Automation |
| -- | ----- | -------- | ------- | ------ | ---- | ---------- |
| [TC-ACC-01](#tc-acc-01) | problem_user – product images match product names | High | `problem_user` | ❌ Fail | [BUG-005](../bug-reports/BUG-005.md) | Known bug |
| [TC-ACC-02](#tc-acc-02) | problem_user – add and remove all products | High | `problem_user` | ✅ Pass |  | P2 |
| [TC-ACC-03](#tc-acc-03) | problem_user – sorting | Medium | `problem_user` | ✅ Pass |  | P2 |
| [TC-ACC-04](#tc-acc-04) | problem_user – product links open the correct detail page | High | `problem_user` | ❌ Fail | [BUG-006](../bug-reports/BUG-006.md), [BUG-007](../bug-reports/BUG-007.md) | Known bug |
| [TC-ACC-05](#tc-acc-05) | problem_user – complete checkout | High | `problem_user` | ❌ Fail | [BUG-008](../bug-reports/BUG-008.md) | Known bug |
| [TC-ACC-06](#tc-acc-06) | error_user – sorting | High | `error_user` | ❌ Fail | [BUG-009](../bug-reports/BUG-009.md) | Known bug |
| [TC-ACC-07](#tc-acc-07) | error_user – add and remove all products | High | `error_user` | ❌ Fail | [BUG-010](../bug-reports/BUG-010.md), [BUG-011](../bug-reports/BUG-011.md) | Known bug |
| [TC-ACC-08](#tc-acc-08) | error_user – complete checkout | High | `error_user` | ❌ Fail | [BUG-012](../bug-reports/BUG-012.md), [BUG-013](../bug-reports/BUG-013.md) | Known bug |
| [TC-ACC-09](#tc-acc-09) | visual_user – Products page layout | Medium | `visual_user` | ❌ Fail | [BUG-014](../bug-reports/BUG-014.md), [BUG-015](../bug-reports/BUG-015.md), [BUG-016](../bug-reports/BUG-016.md) | Manual |
| [TC-ACC-10](#tc-acc-10) | visual_user – cart and checkout layout | Medium | `visual_user` | ❌ Fail | [BUG-014](../bug-reports/BUG-014.md), [BUG-016](../bug-reports/BUG-016.md) | Manual |
| [TC-ACC-11](#tc-acc-11) | performance_glitch_user – login response time | Medium | `performance_glitch_user` | ❌ Fail | [BUG-017](../bug-reports/BUG-017.md) | Manual |
| [TC-ACC-12](#tc-acc-12) | performance_glitch_user – checkout response time | Medium | `performance_glitch_user` | ✅ Pass |  | Manual |

<details>
<summary><b>Test case details – User Accounts</b></summary>

<a id="tc-acc-01"></a>

#### TC-ACC-01 – problem_user – product images match product names

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ❌ Fail |
| Scenario | TS-ACC-01 |
| Requirement | REQ-03 |
| Technique | Comparison with reference |
| Test account | problem_user |
| Preconditions | Logged in as problem_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Observe the image of each product. |
| Test data | Username: problem_user / secret_sauce |
| Expected result | Each product shows its own correct image, same as for standard_user. |
| Actual result | All the products show the same image which is not a product image. |
| Notes | [BUG-005](../bug-reports/BUG-005.md). With standard_user the same steps work correctly. Executed 07/11/2026, Chrome 156.0.8078.74, Windows 11 Home 25H2. Evidence: evidence/screenshots/BUG-005_same-wrong-image.png |
| Automation | BUG-005; problem_user bugs are intentional and permanent - would always fail in CI. |

<a id="tc-acc-02"></a>

#### TC-ACC-02 – problem_user – add and remove all products

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-ACC-01 |
| Requirement | REQ-06, REQ-07 |
| Technique | Comparison with reference |
| Test account | problem_user |
| Preconditions | Logged in as problem_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Click 'Add to cart' for all 6 products.<br>2. Click 'Remove' for all 6 products. |
| Test data | Username: problem_user / secret_sauce |
| Expected result | All 6 products can be added (badge '6') and removed (badge disappears). |
| Actual result | All 6 products can be added (badge '6') and removed (badge disappears). |
| Notes | Reference: same steps with standard_user. |
| Automation | Passes today; reuse standard_user tests with problem_user. |

<a id="tc-acc-03"></a>

#### TC-ACC-03 – problem_user – sorting

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-ACC-01 |
| Requirement | REQ-04 |
| Technique | Comparison with reference |
| Test account | problem_user |
| Preconditions | Logged in as problem_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Select each of the 4 sort options. |
| Test data | Username: problem_user / secret_sauce |
| Expected result | Products are sorted correctly for every option. |
| Actual result | Products are sorted correctly for every option. |
| Notes | Reference: same steps with standard_user. |
| Automation | Passes today; reuse standard_user tests with problem_user. |

<a id="tc-acc-04"></a>

#### TC-ACC-04 – problem_user – product links open the correct detail page

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ❌ Fail |
| Scenario | TS-ACC-01 |
| Requirement | REQ-05 |
| Technique | Comparison with reference |
| Test account | problem_user |
| Preconditions | Logged in as problem_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Click the name of each product. |
| Test data | Username: problem_user / secret_sauce |
| Expected result | Each click opens the detail page of the same product. |
| Actual result | Result per product:<br>1. Sauce Labs Backpack, opens Sauce Labs Fleece Jacket (wrong product)<br>2. Sauce Labs Bike Light, opens Sauce Labs Bolt T-Shirt (wrong product)<br>3. Sauce Labs Bolt T-Shirt, opens Sauce Labs Onesie (wrong product)<br>4. Sauce Labs Fleece Jacket, shows "ITEM NOT FOUND"<br>5. Sauce Labs Onesie, opens Test.allTheThings() T-Shirt (Red) (wrong product)<br>6. Test.allTheThings() T-Shirt (Red), opens Sauce Labs Backpack (wrong product) |
| Notes | [BUG-006](../bug-reports/BUG-006.md) (wrong product opened: 5 products), [BUG-007](../bug-reports/BUG-007.md) (Fleece Jacket shows 'ITEM NOT FOUND'). With standard_user the same steps work correctly. Executed 07/11/2026, Chrome 156.0.8078.74, Windows 11 Home 25H2. Evidence: evidence/videos/BUG-006_wrong-product-links.mp4, evidence/videos/BUG-007_item-not-found.mp4, evidence/screenshots/BUG-007_item-not-found.png |
| Automation | BUG-006, BUG-007; intentional problem_user bugs. |

<a id="tc-acc-05"></a>

#### TC-ACC-05 – problem_user – complete checkout

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ❌ Fail |
| Scenario | TS-ACC-01 |
| Requirement | REQ-09, REQ-11 |
| Technique | Comparison with reference |
| Test account | problem_user |
| Preconditions | Logged in as problem_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add Sauce Labs Backpack.<br>2. Open the cart and click 'Checkout'.<br>3. Enter First Name, Last Name, Postal Code; click 'Continue'.<br>4. Click 'Finish'. |
| Test data | Username: problem_user / secret_sauce<br>First Name: John<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | All fields keep the entered values.<br>The order is completed with 'Thank you for your order!'. |
| Actual result | 1. First name 'John' entered correctly<br>2. When typing 'Doe' in the Last Name field, text appears in the First Name field instead. The Last Name field stays empty.<br>3. After clicking 'Continue', 'Error: Last Name is required' is displayed<br>4. Checkout cannot be completed, the Finish step is never reached |
| Notes | [BUG-008](../bug-reports/BUG-008.md). With standard_user the same steps work correctly. Executed 09/11/2026, Chrome 156.0.8078.74, Windows 11 Home 25H2. Evidence: evidence/videos/BUG-008_last-name-overwrites-first-name.mp4 |
| Automation | BUG-008; intentional problem_user bug. |

<a id="tc-acc-06"></a>

#### TC-ACC-06 – error_user – sorting

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ❌ Fail |
| Scenario | TS-ACC-02 |
| Requirement | REQ-04 |
| Technique | Comparison with reference |
| Test account | error_user |
| Preconditions | Logged in as error_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Select each of the 4 sort options. |
| Test data | Username: error_user / secret_sauce |
| Expected result | Products are sorted correctly with no error alert. |
| Actual result | Result per sort option:<br>1. Name (A to Z): worked normally<br>2. Name (Z to A): alert 'Sorting is broken! This error has been reported to Backtrace.'. After clicking OK, product order is unchanged (still A to Z)<br>3. Price (low to high): same alert, order unchanged<br>4. Price (high to low): same alert, order unchanged |
| Notes | [BUG-009](../bug-reports/BUG-009.md). With standard_user the same steps work correctly. Executed 09/11/2026, Chrome 156.0.8078.74, Windows 11 Home 25H2. Evidence: evidence/screenshots/BUG-009_sorting-broken-alert.png |
| Automation | BUG-009; intentional error_user bug. |

<a id="tc-acc-07"></a>

#### TC-ACC-07 – error_user – add and remove all products

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ❌ Fail |
| Scenario | TS-ACC-02 |
| Requirement | REQ-06, REQ-07 |
| Technique | Comparison with reference |
| Test account | error_user |
| Preconditions | Logged in as error_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Click 'Add to cart' for all 6 products.<br>2. Click 'Remove' for all 6 products. |
| Test data | Username: error_user / secret_sauce |
| Expected result | All 6 products can be added (badge '6') and removed (badge disappears). |
| Actual result | Result per product:<br>1. Can be added with correct updated badge, cannot be removed: Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Onesie<br>2. Cannot be added with unchanged badge: Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket, Test.allTheThings() T-Shirt (Red) |
| Notes | [BUG-010](../bug-reports/BUG-010.md) (cannot add: 3 products), [BUG-011](../bug-reports/BUG-011.md) (cannot remove: 3 products). With standard_user the same steps work correctly. Executed 09/11/2026, Chrome 156.0.8078.74, Windows 11 Home 25H2. Evidence: evidence/videos/BUG-010_add-remove-products.mp4 |
| Automation | BUG-010, BUG-011; intentional error_user bugs. |

<a id="tc-acc-08"></a>

#### TC-ACC-08 – error_user – complete checkout

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ❌ Fail |
| Scenario | TS-ACC-02 |
| Requirement | REQ-09, REQ-11 |
| Technique | Comparison with reference |
| Test account | error_user |
| Preconditions | Logged in as error_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add Sauce Labs Backpack.<br>2. Open the cart and click 'Checkout'.<br>3. Enter First Name, Last Name, Postal Code; click 'Continue'.<br>4. Click 'Finish'. |
| Test data | Username: error_user / secret_sauce<br>First Name: John<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | All fields keep the entered values.<br>The order is completed with 'Thank you for your order!'. |
| Actual result | 1. When typing 'Doe' in the Last Name field, no text appears; the field stays empty.<br>2. After clicking 'Continue', no 'Last Name is required' error is shown and 'Checkout: Overview' is displayed (with standard_user, the error is shown).<br>3. Clicking 'Finish' does nothing; the order cannot be completed. |
| Notes | [BUG-012](../bug-reports/BUG-012.md) (Last Name does not accept input, Finish does nothing), [BUG-013](../bug-reports/BUG-013.md) (empty Last Name not validated). With standard_user the same steps work correctly. Executed 09/11/2026, Chrome 156.0.8078.74, Windows 11 Home 25H2. Evidence: evidence/videos/BUG-012_last-name-finish-fail.mp4, BUG-013_empty-last-name-accepted.mp4 |
| Automation | BUG-012, BUG-013; intentional error_user bugs. |

<a id="tc-acc-09"></a>

#### TC-ACC-09 – visual_user – Products page layout

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ❌ Fail |
| Scenario | TS-ACC-03 |
| Requirement | REQ-03 |
| Technique | Checklist-based |
| Test account | visual_user |
| Preconditions | Logged in as visual_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Open the Products page as visual_user and as standard_user (two windows).<br>2. Compare images, prices, buttons, cart icon and alignment. |
| Test data | Username: visual_user / secret_sauce |
| Expected result | Layout, images, prices and button positions are identical to standard_user. |
| Actual result | 1. The top-left product always shows a dog image instead of its product image.<br>2. The 'Add to cart' button of the bottom-right product overflows the product card.<br>3. The cart icon is tilted and misaligned (shifted lower and to the left).<br>4. The hamburger menu icon is tilted to the right.<br>5. The product names in the second row are indented compared with the other rows.<br>6. All prices differ from standard_user.<br>7. All prices change every time a different sort option is selected. |
| Notes | [BUG-014](../bug-reports/BUG-014.md) (items 6-7: prices), [BUG-015](../bug-reports/BUG-015.md) (item 1: wrong image), [BUG-016](../bug-reports/BUG-016.md) (items 2, 3, 4, 5: layout). Compared side by side with standard_user. Executed 09/11/2026, Chrome 156.0.8078.74, Windows 11 Home 25H2. Evidence: evidence/screenshots/BUG-014_1-price-side-by-side.png, BUG-015_dog-image.png, BUG-016_1-products-layout.png; evidence/videos/BUG-014_2-prices-change-on-sort.mp4 |
| Automation | Visual defects need human review (visual regression possible later). |

<a id="tc-acc-10"></a>

#### TC-ACC-10 – visual_user – cart and checkout layout

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ❌ Fail |
| Scenario | TS-ACC-03 |
| Requirement | REQ-08 |
| Technique | Checklist-based |
| Test account | visual_user |
| Preconditions | Logged in as visual_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add Sauce Labs Backpack and open the cart.<br>2. Go through checkout to the overview.<br>3. Compare each page with standard_user. |
| Test data | Username: visual_user / secret_sauce<br>First Name: John<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | Cart and checkout pages look identical to standard_user. |
| Actual result | 1. Cart page (/cart.html): the 'Checkout' button is displayed at the top-right of the page instead of the bottom-right next to 'Continue Shopping'.<br>2. Cart page: item prices differ from the prices shown on the Products page for visual_user, but are the same as standard_user prices (e.g. Sauce Labs Backpack: $48.09 on the Products page in one run, $29.99 in the cart).<br>3. Checkout: Your Information and Checkout: Overview: no visual differences found.<br>4. Overview totals use standard_user prices: Item total $29.99, Tax $2.40, Total $32.39. |
| Notes | [BUG-014](../bug-reports/BUG-014.md) (item 2: cart price differs from Products page), [BUG-016](../bug-reports/BUG-016.md) (item 1: Checkout button position). Items 3-4 are as expected. Executed 09/11/2026, Chrome 156.0.8078.74, Windows 11 Home 25H2. Evidence: evidence/screenshots/BUG-016_2-cart-checkout-button.png; evidence/videos/BUG-014_3-cart-price.mp4 |
| Automation | Visual defects need human review (visual regression possible later). |

<a id="tc-acc-11"></a>

#### TC-ACC-11 – performance_glitch_user – login response time

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ❌ Fail |
| Scenario | TS-ACC-04 |
| Requirement | REQ-01, REQ-03 |
| Technique | Experience-based |
| Test account | performance_glitch_user |
| Preconditions | Browser opened at https://www.saucedemo.com (login page); user is not logged in. |
| Test steps | 1. Open DevTools &gt; Performance and start a recording.<br>2. Log in as performance_glitch_user.<br>3. Stop the recording when the Products page is fully displayed and read the elapsed time.<br>4. Repeat 3 times, then repeat with standard_user for comparison. |
| Test data | Username: performance_glitch_user / secret_sauce |
| Expected result | The Products page is displayed within 3 seconds after clicking 'Login'. |
| Actual result | Time until the Products page is displayed (DevTools Performance, 3 runs):<br>performance_glitch_user: 5.21 s, 5.03 s, 5.04 s (average ~5.09 s)<br>standard_user: 0.04 s, 0.03 s, 0.14 s (average ~0.07 s)<br>Exceeds the 3-second target by about 2 seconds. |
| Notes | [BUG-017](../bug-reports/BUG-017.md). 3-second target is an assumption defined in the test plan. Executed 09/11/2026, Chrome 156.0.8078.74, Windows 11 Home 25H2. Evidence: evidence/screenshots/BUG-017_1-performance-glitch-user.png, BUG-017_2-standard-user.png; evidence/performance/BUG-017_*.json.gz |
| Automation | Response times vary on CI; 3-second target is an assumption. |

<a id="tc-acc-12"></a>

#### TC-ACC-12 – performance_glitch_user – checkout response time

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-ACC-04 |
| Requirement | REQ-09, REQ-11 |
| Technique | Experience-based |
| Test account | performance_glitch_user |
| Preconditions | Logged in as performance_glitch_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Add Sauce Labs Backpack.<br>2. Complete the checkout flow.<br>3. Measure the response time of each step. |
| Test data | Username: performance_glitch_user / secret_sauce<br>First Name: John<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | Every step responds within 3 seconds; the order is completed. |
| Actual result | Every step responds within 3 seconds; the order is completed. |
| Notes | 3-second target is an assumption defined in the test plan. |
| Automation | Response times vary on CI; 3-second target is an assumption. |

</details>

## Non-functional

| ID | Title | Priority | Account | Status | Bugs | Automation |
| -- | ----- | -------- | ------- | ------ | ---- | ---------- |
| [TC-NFT-01](#tc-nft-01) | Core flow on Google Chrome | High | `standard_user` | ✅ Pass |  | Covered |
| [TC-NFT-02](#tc-nft-02) | Products page on a mobile viewport | Medium | `standard_user` | ✅ Pass |  | P2 |
| [TC-NFT-03](#tc-nft-03) | Checkout on a mobile viewport | Medium | `standard_user` | ✅ Pass |  | P2 |
| [TC-NFT-04](#tc-nft-04) | Keyboard-only login | Medium | `standard_user` | ❌ Fail | [BUG-004](../bug-reports/BUG-004.md) | Manual |
| [TC-NFT-05](#tc-nft-05) | Keyboard-only purchase | Medium | `standard_user` | ❌ Fail | [BUG-003](../bug-reports/BUG-003.md), [BUG-004](../bug-reports/BUG-004.md) | Manual |
| [TC-NFT-06](#tc-nft-06) | Lighthouse audit – Login page | Medium | `standard_user` | ✅ Pass |  | Manual |
| [TC-NFT-07](#tc-nft-07) | Lighthouse audit – Products page | Medium | `standard_user` | ✅ Pass |  | Manual |

<details>
<summary><b>Test case details – Non-functional</b></summary>

<a id="tc-nft-01"></a>

#### TC-NFT-01 – Core flow on Google Chrome

| Field | Value |
| ----- | ----- |
| Priority | High |
| Status | ✅ Pass |
| Scenario | TS-NFT-01 |
| Requirement | REQ-01 – REQ-11 |
| Technique | Re-execution of high-priority cases |
| Test account | standard_user |
| Preconditions | Browser opened at https://www.saucedemo.com (login page); user is not logged in. |
| Test steps | 1. Open the site in Google Chrome.<br>2. Execute TC-LGN-01, TC-INV-08, TC-CRT-09, TC-CHK-01, TC-CHK-14 and TC-MNU-05. |
| Test data | Browser: Google Chrome 156.0.8078.74 |
| Expected result | All listed test cases pass. |
| Actual result | All listed test cases passed (see their results in the module sheets). |
| Notes | Only Google Chrome is in scope (test plan, section 4.1). |
| Automation | Covered by the Playwright suite running on Chromium in CI. |

<a id="tc-nft-02"></a>

#### TC-NFT-02 – Products page on a mobile viewport

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-NFT-02 |
| Requirement | REQ-03 |
| Technique | Checklist-based |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Open DevTools device mode, viewport 390x844.<br>2. Scroll the product list and open the menu. |
| Test data | Viewport: 390x844 |
| Expected result | No horizontal scrolling; text is readable; buttons and the menu are usable. |
| Actual result | No horizontal scrolling; text is readable; buttons and the menu are usable. |
| Automation | Functional check via a mobile project (devices['Pixel 5']); layout still reviewed manually. |

<a id="tc-nft-03"></a>

#### TC-NFT-03 – Checkout on a mobile viewport

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-NFT-02 |
| Requirement | REQ-08, REQ-09 |
| Technique | Checklist-based |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Use viewport 390x844.<br>2. Add a product and complete checkout. |
| Test data | Viewport: 390x844<br>First Name: John<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | All pages fit the screen and the order can be completed. |
| Actual result | All pages fit the screen and the order can be completed. |
| Automation | Functional check via a mobile project (devices['Pixel 5']); layout still reviewed manually. |

<a id="tc-nft-04"></a>

#### TC-NFT-04 – Keyboard-only login

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ❌ Fail |
| Scenario | TS-NFT-03 |
| Requirement | REQ-01 |
| Technique | Checklist-based |
| Test account | standard_user |
| Preconditions | Browser opened at https://www.saucedemo.com (login page); user is not logged in. |
| Test steps | 1. Use only Tab, Shift+Tab and Enter.<br>2. Move focus to username, password and the Login button.<br>3. Log in. |
| Test data | Username: standard_user / secret_sauce |
| Expected result | Focus order is username &gt; password &gt; Login.<br>The focused element is visibly highlighted.<br>Login succeeds without a mouse. |
| Actual result | Focus order is username &gt; password; pressing Enter in the password field logs in.<br>The focused element is not visibly highlighted.<br>Login succeeds without a mouse. |
| Notes | [BUG-004](../bug-reports/BUG-004.md) (no visible focus indicator). Executed 07/11/2026, Chrome 156.0.8078.74, Windows 11 Home 25H2. Evidence: evidence/screenshots/BUG-004_no-focus-indicator.png |
| Automation | Tab order can be scripted, but the focus indicator (BUG-004) is visual. |

<a id="tc-nft-05"></a>

#### TC-NFT-05 – Keyboard-only purchase

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ❌ Fail |
| Scenario | TS-NFT-03 |
| Requirement | REQ-06, REQ-09 |
| Technique | Checklist-based |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Use only the keyboard.<br>2. Add a product, open the cart, check out and finish. |
| Test data | First Name: John<br>Last Name: Doe<br>Postal Code: 70000 |
| Expected result | All buttons and fields are reachable with Tab and can be activated with Enter/Space.<br>The order can be completed without a mouse. |
| Actual result | 1. Focus order on the Products page: hamburger menu → sort dropdown → for each product: image → title → 'Add to cart' button → social links. The cycle repeats with the same order.<br>2. The cart icon never receives keyboard focus, so the cart page cannot be opened without a mouse. No other keyboard path to the cart was found (menu, product detail page).<br>3. The order cannot be completed using the keyboard only.<br>4. No visible focus indicator is shown on any element. |
| Notes | [BUG-003](../bug-reports/BUG-003.md) (cart icon not keyboard-accessible), [BUG-004](../bug-reports/BUG-004.md) (no visible focus indicator). Focus order logged in the DevTools console. Executed 07/11/2026, Chrome 156.0.8078.74, Windows 11 Home 25H2. Evidence: evidence/screenshots/BUG-003_1-focus-order-console.png, BUG-003_2-cart-not-focusable.png, BUG-004_no-focus-indicator.png |
| Automation | Tab order can be scripted, but the focus indicator (BUG-003, BUG-004) needs human review. |

<a id="tc-nft-06"></a>

#### TC-NFT-06 – Lighthouse audit – Login page

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-NFT-04 |
| Requirement | REQ-01 |
| Technique | Tool-supported measurement |
| Test account | standard_user |
| Preconditions | Browser opened at https://www.saucedemo.com (login page); user is not logged in. |
| Test steps | 1. Open the page in a Chrome incognito window.<br>2. Run Lighthouse (Desktop mode; Performance and Accessibility).<br>3. Record the scores and main findings. |
| Test data | Page: Login page |
| Expected result | Performance score &gt;= 90 and Accessibility score &gt;= 90. |
| Actual result | Performance score = 95 and Accessibility score = 100 |
| Notes | Score targets are assumptions. Executed 05/11/2026, Chrome 156.0.8078.74, Windows 11 Home 25H2 (Lighthouse 13.5.0, desktop mode). Evidence: evidence/lighthouse/TC-NFT-06_lighthouse-login.html |
| Automation | Lighthouse is a separate tool (Lighthouse CI), not part of the Playwright suite. |

<a id="tc-nft-07"></a>

#### TC-NFT-07 – Lighthouse audit – Products page

| Field | Value |
| ----- | ----- |
| Priority | Medium |
| Status | ✅ Pass |
| Scenario | TS-NFT-04 |
| Requirement | REQ-03 |
| Technique | Tool-supported measurement |
| Test account | standard_user |
| Preconditions | Logged in as standard_user; on the Products page (/inventory.html); cart is empty (use 'Reset App State' if needed). |
| Test steps | 1. Open the page in a Chrome incognito window.<br>2. Run Lighthouse (Desktop mode; Performance and Accessibility).<br>3. Record the scores and main findings. |
| Test data | Page: Products page |
| Expected result | Performance score &gt;= 90 and Accessibility score &gt;= 90. |
| Actual result | Performance score = 99 and Accessibility score = 100 |
| Notes | Score targets are assumptions. Executed 05/11/2026, Chrome 156.0.8078.74, Windows 11 Home 25H2 (Lighthouse 13.5.0, desktop mode). Evidence: evidence/lighthouse/TC-NFT-07_lighthouse-products.html |
| Automation | Lighthouse is a separate tool (Lighthouse CI), not part of the Playwright suite. |

</details>
