import { test, expect } from '../fixtures/fixtures';

test.describe('Menu and Session', () => {
  test('TC-MNU-05 Log out from the side menu', async ({ page, loggedIn, loginPage }) => {
    await loggedIn.header.logout();
    await expect(page).toHaveURL('/');
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('TC-MNU-07 Browser Back after logout', async ({ page, loggedIn, loginPage }) => {
    await loggedIn.header.logout();
    await expect(page).toHaveURL('/');
    await page.goBack();

    await expect(page).toHaveURL('/');
    await expect(loginPage.loginButton).toBeVisible();
    await expect(loggedIn.items).toHaveCount(0);
  });

  test('TC-MNU-08 Open a protected URL after logout', async ({ page, loggedIn, loginPage }) => {
    await loggedIn.header.logout();
    await page.goto('/inventory.html');
    await expect(page).toHaveURL('/');
    await expect(loginPage.error).toBeVisible();
  });
});
