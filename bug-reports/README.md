# Bug Reports – SauceDemo

All bugs were found during manual testing of https://www.saucedemo.com. Status stays **Open** because the application is not under the tester's control.

**Severity** = impact on the user · **Priority** = urgency of fixing.

## Summary

| Severity  | Count  |
| --------- | ------ |
| Critical  | 2      |
| High      | 6      |
| Medium    | 7      |
| Low       | 2      |
| **Total** | **17** |

## Bug List

| ID                    | Title                                                                                                                                            | Account                   | Severity | Priority | Test case(s)                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- | -------- | -------- | ------------------------------- |
| [BUG-001](BUG-001.md) | [Cart] Checkout is allowed with an empty cart                                                                                                    | `standard_user`           | Medium   | Medium   | TC-CRT-10                       |
| [BUG-002](BUG-002.md) | [Checkout] Checkout information fields accept invalid input (whitespace-only, special characters, letters in Postal Code)                        | `standard_user`           | Low      | Low      | TC-CHK-09, TC-CHK-10, TC-CHK-11 |
| [BUG-003](BUG-003.md) | [Accessibility] Cart icon cannot be reached with the keyboard; purchase cannot be completed without a mouse                                      | `standard_user`           | High     | High     | TC-NFT-05                       |
| [BUG-004](BUG-004.md) | [Accessibility] No visible focus indicator on interactive elements                                                                               | `standard_user`           | Medium   | Medium   | TC-NFT-05, TC-NFT-04            |
| [BUG-005](BUG-005.md) | [Inventory] problem_user: all products show the same wrong image                                                                                 | `problem_user`            | Medium   | Medium   | TC-ACC-01                       |
| [BUG-006](BUG-006.md) | [Inventory] problem_user: product links open the wrong product detail page                                                                       | `problem_user`            | High     | High     | TC-ACC-04                       |
| [BUG-007](BUG-007.md) | [Product Detail] problem_user: 'Sauce Labs Fleece Jacket' link shows 'ITEM NOT FOUND'                                                            | `problem_user`            | High     | High     | TC-ACC-04                       |
| [BUG-008](BUG-008.md) | [Checkout] problem_user: typing in Last Name updates First Name; checkout cannot be completed                                                    | `problem_user`            | Critical | High     | TC-ACC-05                       |
| [BUG-009](BUG-009.md) | [Inventory] error_user: Z-A and price sort options show 'Sorting is broken!' alert and products are not sorted                                   | `error_user`              | Medium   | Medium   | TC-ACC-06                       |
| [BUG-010](BUG-010.md) | [Inventory] error_user: some products cannot be added to the cart                                                                                | `error_user`              | High     | High     | TC-ACC-07                       |
| [BUG-011](BUG-011.md) | [Inventory] error_user: some products cannot be removed from the cart                                                                            | `error_user`              | High     | High     | TC-ACC-07                       |
| [BUG-012](BUG-012.md) | [Checkout] error_user: Last Name field does not accept input and 'Finish' does nothing; order cannot be completed                                | `error_user`              | Critical | High     | TC-ACC-08                       |
| [BUG-013](BUG-013.md) | [Checkout] error_user: checkout continues with an empty Last Name (required-field validation skipped)                                            | `error_user`              | Medium   | Medium   | TC-ACC-08                       |
| [BUG-014](BUG-014.md) | [Inventory] visual_user: product prices differ from cart/checkout prices and change when sorting                                                 | `visual_user`             | High     | High     | TC-ACC-09, TC-ACC-10            |
| [BUG-015](BUG-015.md) | [Inventory] visual_user: top-left product shows a dog image instead of its product image                                                         | `visual_user`             | Medium   | Low      | TC-ACC-09                       |
| [BUG-016](BUG-016.md) | [UI] visual_user: layout defects on Products and Cart pages (button overflow, tilted/misaligned icons, indented names, Checkout button position) | `visual_user`             | Low      | Low      | TC-ACC-09, TC-ACC-10            |
| [BUG-017](BUG-017.md) | [Performance] performance_glitch_user: Products page takes about 5 s to load after login (target: 3 s)                                           | `performance_glitch_user` | Medium   | Medium   | TC-ACC-11                       |
