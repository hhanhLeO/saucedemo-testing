# Test Scenarios – SauceDemo Web Application

| Item                       | Detail                                                                                 |
| -------------------------- | -------------------------------------------------------------------------------------- |
| **Project**                | SauceDemo Testing (Portfolio Project)                                                  |
| **Application under test** | https://www.saucedemo.com                                                              |
| **Related documents**      | [Test Plan](test-plan.md) · [Test Cases](test-cases.xlsx) ([CSV view](test-cases.csv)) |
| **Author**                 | Hanh Le                                                                                |
| **Version / Date**         | 1.0 / 30/10/2026                                                                       |

Test scenarios are the **test conditions** derived during **test analysis** ("what to test"). Each scenario traces back to a derived requirement (REQ-xx) in the [Test Plan](test-plan.md#31-derived-requirements) and is elaborated into one or more test cases ("how to test").

**Priority:** High = core purchase flow, login and access control · Medium = important, non-blocking features · Low = cosmetic or minor features.

**Test accounts:** `standard_user` is the reference account. Scenarios in the _User Accounts_ module repeat core flows with the other accounts. All accounts use the password `secret_sauce`.

---

## Summary

| Module                   | Prefix | Scenarios | High   | Medium | Low   |
| ------------------------ | ------ | --------- | ------ | ------ | ----- |
| Login & Access Control   | LGN    | 7         | 5      | 1      | 1     |
| Inventory (Product List) | INV    | 4         | 2      | 2      | 0     |
| Product Detail           | PDP    | 3         | 1      | 1      | 1     |
| Cart                     | CRT    | 5         | 3      | 2      | 0     |
| Checkout                 | CHK    | 6         | 4      | 2      | 0     |
| Menu & Session           | MNU    | 6         | 2      | 1      | 3     |
| User Accounts            | ACC    | 4         | 2      | 2      | 0     |
| Non-functional           | NFT    | 4         | 1      | 3      | 0     |
| **Total**                |        | **39**    | **20** | **14** | **5** |

---

## 1. Login & Access Control (LGN)

| ID        | Requirement    | Scenario                                                                               | Technique                                | Priority |
| --------- | -------------- | -------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| TS-LGN-01 | REQ-01         | Log in with a valid username and password                                              | Decision table                           | High     |
| TS-LGN-02 | REQ-02         | Log in with an empty username and/or empty password                                    | Decision table                           | High     |
| TS-LGN-03 | REQ-02         | Log in with an invalid username or invalid password                                    | Decision table                           | High     |
| TS-LGN-04 | REQ-02         | Log in with a locked-out account                                                       | Decision table                           | High     |
| TS-LGN-05 | REQ-01, REQ-02 | Credential input handling: case sensitivity, leading/trailing spaces, password masking | Equivalence partitioning, Error guessing | Medium   |
| TS-LGN-06 | REQ-02         | Dismiss the login error message                                                        | Error guessing                           | Low      |
| TS-LGN-07 | REQ-13         | Access protected pages directly by URL without logging in                              | Equivalence partitioning                 | High     |

## 2. Inventory – Product List (INV)

| ID        | Requirement    | Scenario                                                                | Technique                | Priority |
| --------- | -------------- | ----------------------------------------------------------------------- | ------------------------ | -------- |
| TS-INV-01 | REQ-03         | Product list shows all products with name, description, price and image | Checklist-based          | High     |
| TS-INV-02 | REQ-04         | Sort products by each sort option                                       | Equivalence partitioning | Medium   |
| TS-INV-03 | REQ-06, REQ-07 | Add and remove products from the product list                           | State transition         | High     |
| TS-INV-04 | REQ-05         | Open a product detail page from the product list (name and image)       | Equivalence partitioning | Medium   |

## 3. Product Detail (PDP)

| ID        | Requirement    | Scenario                                                                         | Technique        | Priority |
| --------- | -------------- | -------------------------------------------------------------------------------- | ---------------- | -------- |
| TS-PDP-01 | REQ-05         | Product detail page shows the same information as the product list               | Checklist-based  | Medium   |
| TS-PDP-02 | REQ-06, REQ-07 | Add and remove a product from the detail page; state stays in sync with the list | State transition | High     |
| TS-PDP-03 | REQ-05         | Return to the product list from the detail page                                  | Use case         | Low      |

## 4. Cart (CRT)

| ID        | Requirement | Scenario                                                          | Technique               | Priority |
| --------- | ----------- | ----------------------------------------------------------------- | ----------------------- | -------- |
| TS-CRT-01 | REQ-07      | Cart badge shows the correct number of items (0, 1, all products) | Boundary value analysis | High     |
| TS-CRT-02 | REQ-08      | Cart page lists the added items with correct details              | Checklist-based         | High     |
| TS-CRT-03 | REQ-06      | Remove items from the cart page                                   | State transition        | High     |
| TS-CRT-04 | REQ-08      | Continue shopping and proceed to checkout from the cart           | Use case                | Medium   |
| TS-CRT-05 | REQ-08      | Proceed to checkout with an empty cart                            | Error guessing          | Medium   |

## 5. Checkout (CHK)

| ID        | Requirement    | Scenario                                                                                            | Technique                                         | Priority |
| --------- | -------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------- | -------- |
| TS-CHK-01 | REQ-09, REQ-11 | Complete checkout end-to-end with valid information                                                 | Use case                                          | High     |
| TS-CHK-02 | REQ-09         | Required field validation for First Name, Last Name and Postal Code                                 | Decision table                                    | High     |
| TS-CHK-03 | REQ-09         | Input values in checkout fields: whitespace, special characters, long input, letters in Postal Code | Equivalence partitioning, Boundary value analysis | Medium   |
| TS-CHK-04 | REQ-10         | Item total, tax and total are calculated and displayed correctly                                    | Equivalence partitioning, Error guessing          | High     |
| TS-CHK-05 | REQ-08, REQ-11 | Cancel from each checkout step                                                                      | State transition                                  | Medium   |
| TS-CHK-06 | REQ-11         | After the order is completed, the cart is empty and "Back Home" works                               | State transition                                  | High     |

## 6. Menu & Session (MNU)

| ID        | Requirement    | Scenario                                                                  | Technique        | Priority |
| --------- | -------------- | ------------------------------------------------------------------------- | ---------------- | -------- |
| TS-MNU-01 | REQ-12         | Open and close the side menu                                              | Use case         | Low      |
| TS-MNU-02 | REQ-12         | "All Items" navigates to the product list                                 | Use case         | Low      |
| TS-MNU-03 | REQ-12         | "About" opens the Sauce Labs website                                      | Use case         | Low      |
| TS-MNU-04 | REQ-14         | Log out from the side menu                                                | State transition | High     |
| TS-MNU-05 | REQ-12         | "Reset App State" clears the cart and resets product buttons              | State transition | Medium   |
| TS-MNU-06 | REQ-13, REQ-14 | Protected pages cannot be reached after logout (browser Back, direct URL) | Error guessing   | High     |

## 7. User Accounts (ACC)

| ID        | Requirement     | Scenario                                                   | Technique                              | Priority |
| --------- | --------------- | ---------------------------------------------------------- | -------------------------------------- | -------- |
| TS-ACC-01 | REQ-03 – REQ-11 | Core flows with `problem_user` behave like `standard_user` | Exploratory, Comparison with reference | High     |
| TS-ACC-02 | REQ-04 – REQ-11 | Core flows with `error_user` behave like `standard_user`   | Exploratory, Comparison with reference | High     |
| TS-ACC-03 | REQ-03          | Layout of `visual_user` matches `standard_user`            | Checklist-based (visual comparison)    | Medium   |
| TS-ACC-04 | REQ-01, REQ-03  | Page response times for `performance_glitch_user`          | Experience-based                       | Medium   |

## 8. Non-functional (NFT)

| ID        | Requirement     | Scenario                                                       | Technique                                           | Priority |
| --------- | --------------- | -------------------------------------------------------------- | --------------------------------------------------- | -------- |
| TS-NFT-01 | REQ-01 – REQ-11 | Core purchase flow works on Chrome                             | Re-execution of high-priority cases                 | High     |
| TS-NFT-02 | REQ-03, REQ-08  | Layout is usable on a mobile viewport                          | Checklist-based                                     | Medium   |
| TS-NFT-03 | REQ-01, REQ-09  | Login and checkout can be completed with the keyboard only     | Checklist-based (accessibility)                     | Medium   |
| TS-NFT-04 | REQ-01, REQ-03  | Lighthouse performance and accessibility scores for main pages | Tool-supported measurement                          | Medium   |

---

## Requirements Coverage

| Requirement                         | Covered by scenarios                                             |
| ----------------------------------- | ---------------------------------------------------------------- |
| REQ-01 Login with valid credentials | TS-LGN-01, TS-LGN-05, TS-ACC-04, TS-NFT-01, TS-NFT-03, TS-NFT-04 |
| REQ-02 Login error messages         | TS-LGN-02, TS-LGN-03, TS-LGN-04, TS-LGN-05, TS-LGN-06            |
| REQ-03 Product list display         | TS-INV-01, TS-ACC-01, TS-ACC-03, TS-ACC-04, TS-NFT-02, TS-NFT-04 |
| REQ-04 Product sorting              | TS-INV-02, TS-ACC-01, TS-ACC-02                                  |
| REQ-05 Product detail               | TS-INV-04, TS-PDP-01, TS-PDP-03                                  |
| REQ-06 Add/remove products          | TS-INV-03, TS-PDP-02, TS-CRT-03                                  |
| REQ-07 Cart badge                   | TS-INV-03, TS-PDP-02, TS-CRT-01                                  |
| REQ-08 Cart page                    | TS-CRT-02, TS-CRT-04, TS-CRT-05, TS-CHK-05, TS-NFT-02            |
| REQ-09 Checkout information         | TS-CHK-01, TS-CHK-02, TS-CHK-03, TS-NFT-03                       |
| REQ-10 Price calculation            | TS-CHK-04                                                        |
| REQ-11 Order completion             | TS-CHK-01, TS-CHK-05, TS-CHK-06                                  |
| REQ-12 Side menu                    | TS-MNU-01, TS-MNU-02, TS-MNU-03, TS-MNU-05                       |
| REQ-13 Access control               | TS-LGN-07, TS-MNU-06                                             |
| REQ-14 Logout                       | TS-MNU-04, TS-MNU-06                                             |

All 14 derived requirements are covered by at least one scenario (**100% requirements coverage**).
