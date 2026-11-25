import { test, expect } from '../fixtures/fixtures';
import { ERRORS, PASSWORD, USERS } from '../fixtures/test-data';

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('TC-LGN-01 Login with a valid username and password', async ({ loginPage, inventoryPage }) => {
    await loginPage.login(USERS.standard, PASSWORD);
    await inventoryPage.expectLoaded();
  });

  const invalidLogins = [
    { id: 'TC-LGN-02', title: 'both fields empty', username: '', password: '', error: ERRORS.usernameRequired },
    { id: 'TC-LGN-03', title: 'empty username and valid password', username: '', password: PASSWORD, error: ERRORS.usernameRequired },
    { id: 'TC-LGN-04', title: 'valid username and empty password', username: USERS.standard, password: '', error: ERRORS.passwordRequired },
    { id: 'TC-LGN-05', title: 'valid username and wrong password', username: USERS.standard, password: 'wrong_password', error: ERRORS.invalidCredentials },
    { id: 'TC-LGN-06', title: 'unregistered username and valid password', username: 'unknown_user', password: PASSWORD, error: ERRORS.invalidCredentials },
    { id: 'TC-LGN-07', title: 'unregistered username and wrong password', username: 'unknown_user', password: 'wrong_password', error: ERRORS.invalidCredentials },
    { id: 'TC-LGN-08', title: 'a locked-out account', username: USERS.lockedOut, password: PASSWORD, error: ERRORS.lockedOut },
    { id: 'TC-LGN-09', title: 'a username in different letter case', username: 'Standard_User', password: PASSWORD, error: ERRORS.invalidCredentials },
    { id: 'TC-LGN-10', title: 'a username with a trailing space', username: `${USERS.standard} `, password: PASSWORD, error: ERRORS.invalidCredentials },
  ];

  for (const data of invalidLogins) {
    test(`${data.id} Login with ${data.title}`, async ({ page, loginPage }) => {
      await loginPage.login(data.username, data.password);
      await loginPage.expectError(data.error);
      await expect(page).toHaveURL('/');
    });
  }

  const protectedPages = [
    { id: 'TC-LGN-14', url: '/inventory.html', path: '/inventory.html' },
    { id: 'TC-LGN-15', url: '/cart.html', path: '/cart.html' },
    { id: 'TC-LGN-16', url: '/checkout-step-one.html', path: '/checkout-step-one.html' },
    { id: 'TC-LGN-17', url: '/inventory-item.html?id=4', path: '/inventory-item.html' },
  ];

  for (const data of protectedPages) {
    test(`${data.id} Access ${data.path} without logging in`, async ({ page, loginPage }) => {
      await page.goto(data.url);
      await expect(page).toHaveURL('/');
      await loginPage.expectError(`Epic sadface: You can only access '${data.path}' when you are logged in.`);
    });
  }
});
