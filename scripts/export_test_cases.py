"""Export docs/test-cases.xlsx to docs/test-cases.md so the test cases can be read on GitHub.

The workbook is the source of truth; the Markdown file is generated and must not be edited by hand.

Usage (from the repository root):
    python scripts/export_test_cases.py           # write docs/test-cases.md
    python scripts/export_test_cases.py --check   # exit 1 if docs/test-cases.md is out of date

Requires: openpyxl (pip install openpyxl)
"""

from __future__ import annotations

import argparse
import html
import re
import sys
from collections import Counter
from pathlib import Path

from openpyxl import load_workbook

ROOT = Path(__file__).resolve().parent.parent
XLSX = ROOT / 'docs' / 'test-cases.xlsx'
MD = ROOT / 'docs' / 'test-cases.md'
BUG_DIR = '../bug-reports'  # relative to docs/

NON_MODULE_SHEETS = {'Guide', 'Summary', 'Bug List'}
PRIORITIES = ['High', 'Medium', 'Low']
STATUSES = ['Pass', 'Fail', 'Blocked', 'Not Run']
STATUS_ICON = {'Pass': '✅ Pass', 'Fail': '❌ Fail', 'Blocked': '⛔ Blocked', 'Not Run': '⏸️ Not Run'}
AUTOMATION_LEGEND = [
    ('Done', 'Scripted in [`automation/`](../automation/README.md)'),
    ('P1 / P2 / P3', 'Automation candidate, by priority'),
    ('Known bug', 'Fails because of a known bug; kept out of the regression suite or marked `test.fail()`'),
    ('Manual', 'Needs human judgement or a separate tool'),
    ('Covered', 'Covered indirectly by the automated suite'),
]
DETAIL_FIELDS = [
    ('Scenario', 'Scenario ID'),
    ('Requirement', 'Requirement'),
    ('Technique', 'Technique'),
    ('Test account', 'Test Account'),
    ('Preconditions', 'Preconditions'),
    ('Test steps', 'Test Steps'),
    ('Test data', 'Test Data'),
    ('Expected result', 'Expected Result'),
    ('Actual result', 'Actual Result'),
    ('Notes', 'Notes'),
    ('Automation', 'Automation Note'),
]
# A standalone bug ID; not part of a file name such as evidence/screenshots/BUG-018_item-total.png.
BUG_RE = re.compile(r'(?<![\w/])BUG-\d{3}(?!\w)')


def text(value) -> str:
    return '' if value is None else str(value).strip()


def cell(value) -> str:
    """Make a value safe for a Markdown table cell: escape HTML and pipes, keep line breaks."""
    s = html.escape(text(value), quote=False).replace('|', '\\|')
    return s.replace('\r\n', '\n').replace('\n', '<br>')


def link_bugs(s: str) -> str:
    return BUG_RE.sub(lambda m: f'[{m.group(0)}]({BUG_DIR}/{m.group(0)}.md)', s)


def anchor(tc_id: str) -> str:
    return tc_id.lower()


def slug(title: str) -> str:
    """GitHub heading anchor."""
    return re.sub(r'[^a-z0-9 -]', '', title.lower()).replace(' ', '-')


def pct(part: int, whole: int) -> str:
    return f'{part / whole * 100:.1f}%' if whole else '–'


def read_module(ws) -> list[dict]:
    rows = ws.iter_rows(values_only=True)
    header = [text(h) for h in next(rows)]
    cases = []
    for values in rows:
        row = dict(zip(header, values))
        if text(row.get('TC ID')).startswith('TC-'):
            cases.append(row)
    return cases


def read_bugs(ws) -> list[dict]:
    rows = ws.iter_rows(values_only=True)
    header = [text(h) for h in next(rows)]
    return [dict(zip(header, v)) for v in rows if text(v[0]).startswith('BUG-')]


def render(modules: dict[str, list[dict]], bugs: list[dict]) -> str:
    out: list[str] = []
    add = out.append

    add('# Test Cases – SauceDemo')
    add('')
    add('> **Generated file – do not edit.** Source: [test-cases.xlsx](test-cases.xlsx). '
        'Regenerate with `python scripts/export_test_cases.py` after changing the workbook.')
    add('')
    add('Related documents: [Test Plan](test-plan.md) · [Test Scenarios](test-scenarios.md) · '
        '[Test Summary Report](test-summary-report.md) · [Bug Reports](../bug-reports/README.md)')
    add('')

    # Contents
    add('## Contents')
    add('')
    add('- [Summary](#summary)')
    add('- [Bug List](#bug-list)')
    for name in modules:
        add(f'- [{name}](#{slug(name)})')
    add('')

    # Summary
    add('## Summary')
    add('')
    add('| Module | Total | High | Medium | Low | Pass | Fail | Blocked | Not Run | Pass Rate | Automated |')
    add('| ------ | ----: | ---: | -----: | --: | ---: | ---: | ------: | ------: | --------: | --------: |')
    totals = Counter()
    for name, cases in modules.items():
        c = Counter()
        c['Total'] = len(cases)
        for tc in cases:
            c[text(tc.get('Priority'))] += 1
            c[text(tc.get('Status')) or 'Not Run'] += 1
            c['Automated'] += text(tc.get('Automation')) == 'Done'
        totals.update(c)
        executed = c['Pass'] + c['Fail'] + c['Blocked']
        add(f"| [{name}](#{slug(name)}) | {c['Total']} | " + ' | '.join(str(c[p]) for p in PRIORITIES)
            + ' | ' + ' | '.join(str(c[s]) for s in STATUSES)
            + f" | {pct(c['Pass'], executed)} | {c['Automated']} |")
    executed = totals['Pass'] + totals['Fail'] + totals['Blocked']
    add(f"| **Total** | **{totals['Total']}** | " + ' | '.join(f'**{totals[p]}**' for p in PRIORITIES)
        + ' | ' + ' | '.join(f'**{totals[s]}**' for s in STATUSES)
        + f" | **{pct(totals['Pass'], executed)}** | **{totals['Automated']}** |")
    add('')
    add('Pass Rate = Pass / Executed, where Executed = Pass + Fail + Blocked. '
        'Automated = test cases with Automation status "Done".')
    add('')
    add('**Automation status**')
    add('')
    add('| Value | Meaning |')
    add('| ----- | ------- |')
    for value, meaning in AUTOMATION_LEGEND:
        add(f'| {value} | {meaning} |')
    add('')

    # Bug list
    add('## Bug List')
    add('')
    add('| Bug ID | Title | Account | Severity | Priority | Test cases |')
    add('| ------ | ----- | ------- | -------- | -------- | ---------- |')
    for b in bugs:
        tcs = ', '.join(f'[{t}](#{anchor(t)})' for t in re.findall(r'TC-[A-Z]+-\d+', text(b.get('Related Test Cases'))))
        add(f"| {link_bugs(text(b['Bug ID']))} | {cell(b.get('Title'))} | `{text(b.get('Test Account'))}` | "
            f"{text(b.get('Severity'))} | {text(b.get('Priority'))} | {tcs} |")
    add('')

    # Modules
    for name, cases in modules.items():
        add(f'## {name}')
        add('')
        add('| ID | Title | Priority | Account | Status | Bugs | Automation |')
        add('| -- | ----- | -------- | ------- | ------ | ---- | ---------- |')
        for tc in cases:
            tc_id = text(tc['TC ID'])
            status = text(tc.get('Status')) or 'Not Run'
            bug_ids = ', '.join(link_bugs(b) for b in dict.fromkeys(BUG_RE.findall(text(tc.get('Notes')))))
            add(f"| [{tc_id}](#{anchor(tc_id)}) | {cell(tc.get('Title'))} | {text(tc.get('Priority'))} | "
                f"`{text(tc.get('Test Account'))}` | {STATUS_ICON.get(status, status)} | {bug_ids} | "
                f"{text(tc.get('Automation'))} |")
        add('')
        add('<details>')
        add(f'<summary><b>Test case details – {name}</b></summary>')
        add('')
        for tc in cases:
            tc_id = text(tc['TC ID'])
            add(f'<a id="{anchor(tc_id)}"></a>')
            add('')
            add(f"#### {tc_id} – {cell(tc.get('Title'))}")
            add('')
            add('| Field | Value |')
            add('| ----- | ----- |')
            add(f"| Priority | {text(tc.get('Priority'))} |")
            add(f"| Status | {STATUS_ICON.get(text(tc.get('Status')), text(tc.get('Status')))} |")
            for label, column in DETAIL_FIELDS:
                value = cell(tc.get(column))
                if label == 'Notes':
                    value = link_bugs(value)
                if value:
                    add(f'| {label} | {value} |')
            add('')
        add('</details>')
        add('')

    return '\n'.join(out)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('--check', action='store_true', help='exit 1 if the Markdown file is out of date')
    args = parser.parse_args()

    wb = load_workbook(XLSX, read_only=True)
    modules = {name: read_module(wb[name]) for name in wb.sheetnames if name not in NON_MODULE_SHEETS}
    bugs = read_bugs(wb['Bug List'])
    md = render(modules, bugs)

    if args.check:
        current = MD.read_text(encoding='utf-8').replace('\r\n', '\n') if MD.exists() else ''
        if current != md:
            print(f'{MD.relative_to(ROOT)} is out of date. Run: python scripts/export_test_cases.py')
            return 1
        print(f'{MD.relative_to(ROOT)} is up to date.')
        return 0

    MD.write_text(md, encoding='utf-8', newline='\n')
    print(f'Wrote {MD.relative_to(ROOT)} ({sum(len(c) for c in modules.values())} test cases, {len(bugs)} bugs).')
    return 0


if __name__ == '__main__':
    sys.exit(main())
