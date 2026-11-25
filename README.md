# SauceDemo Testing

Manual testing project for the demo e-commerce web application [SauceDemo](https://www.saucedemo.com), covering functional, UI/visual and basic non-functional (accessibility, performance) testing.

| Item                       | Detail                                     |
| -------------------------- | ------------------------------------------ |
| **Application under test** | https://www.saucedemo.com                  |
| **Author**                 | Hanh Le                                    |
| **Environment**            | Google Chrome 156.0.8078.74, Windows 11    |
| **Test accounts**          | All 6 SauceDemo accounts (`secret_sauce`)  |

## Documents

| Document                                 | Description                                                       |
| ---------------------------------------- | ----------------------------------------------------------------- |
| [Test Plan](docs/test-plan.md)           | Scope, approach, derived requirements, entry/exit criteria, risks |
| [Test Scenarios](docs/test-scenarios.md) | 39 test scenarios traced to 14 derived requirements               |
| [Test Cases](docs/test-cases.xlsx)       | 95 test cases with execution results ([CSV view](docs/test-cases.csv)) |
| [Bug Reports](bug-reports/README.md)     | 18 bug reports with steps to reproduce and evidence               |
| [Test Summary Report](docs/test-summary-report.md) | Results, defect analysis, exit criteria and recommendations |

## Results Summary

95 test cases were executed: **79 passed** and **16 failed**. 18 defects were found and reported (17 during manual testing, BUG-018 by the automated tests).

| Severity  | Count  |
| --------- | ------ |
| Critical  | 2      |
| High      | 6      |
| Medium    | 7      |
| Low       | 3      |
| **Total** | **18** |

| Test account              | Defects |
| ------------------------- | ------- |
| `standard_user`           | 5       |
| `problem_user`            | 4       |
| `error_user`              | 5       |
| `visual_user`             | 3       |
| `performance_glitch_user` | 1       |

See the [bug list](bug-reports/README.md#bug-list) for details.

## Automated Tests

High-priority test cases are automated with Playwright and TypeScript (Page Object Model) in [`automation/`](automation/README.md) and run on every push via GitHub Actions.

```bash
cd automation
npm install
npx playwright install chromium
npm test
```

## Repository Structure

```
saucedemo-testing/
├── docs/
│   ├── test-plan.md          # Test plan
│   ├── test-cases.xlsx       # Test cases and execution results (+ test-cases.csv)
│   ├── test-summary-report.md  # Test summary (completion) report
│   └── test-scenarios.md     # Test scenarios and requirements coverage
├── bug-reports/
│   ├── README.md             # Bug summary and bug list
│   └── BUG-001.md … BUG-018.md
├── evidence/
│   ├── screenshots/          # Screenshots referenced in bug reports
│   ├── videos/               # GIF and MP4 recordings
│   ├── performance/          # Chrome DevTools performance traces
│   └── lighthouse/           # Lighthouse reports (HTML)
├── automation/               # Playwright + TypeScript tests (see automation/README.md)
└── .github/workflows/        # CI: runs the Playwright tests on push and pull request
```

Evidence files are named `BUG-XXX_<description>.<ext>` after the bug report they belong to. Evidence of a passed test case without a bug (e.g. Lighthouse reports) is named after the test case: `TC-XXX_<description>.<ext>`.
