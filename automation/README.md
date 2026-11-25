# SauceDemo Automation

Automated regression tests for https://www.saucedemo.com, written with [Playwright](https://playwright.dev) and TypeScript using the Page Object Model.

Each test is named after the manual test case it automates (see [test-cases.xlsx](../docs/test-cases.xlsx)), e.g. `TC-LGN-01 Login with a valid username and password`.

## Structure

```
automation/
├── fixtures/
│   ├── fixtures.ts       # Custom fixtures: page objects and a logged-in session
│   └── test-data.ts      # Users, products, customer data, error messages
├── pages/                # Page objects
│   ├── Header.ts         # Cart icon, badge and side menu (shared)
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── ProductDetailPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts   # Your Information, Overview and Complete steps
├── tests/                # Test specs, one per module
└── playwright.config.ts
```

## Running the tests

Requirements: Node.js 22 or later.

```bash
cd automation
npm install
npx playwright install chromium

npm test                 # run all tests (headless)
npm run test:headed      # run with a visible browser
npm run test:ui          # interactive UI mode
npm run report           # open the last HTML report
npm run typecheck        # TypeScript type check
```

Run a single module or test case:

```bash
npx playwright test tests/login.spec.ts
npx playwright test -g "TC-CHK-01"
```

On failure, a screenshot, video and trace are saved in `test-results/`. Open a trace with `npx playwright show-trace <path>/trace.zip`.

## Continuous integration

The [Playwright Tests](../.github/workflows/playwright.yml) workflow runs the suite on Chromium on every push and pull request to `main`. The HTML report is uploaded as a build artifact.
