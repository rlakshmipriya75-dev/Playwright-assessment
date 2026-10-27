
const { test, expect } = require('@playwright/test');
const LoginPage = require('./pages/LoginPage.js');

test('Test 2 - Locked-out user sees login error', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://www.saucedemo.com/');

  await loginPage.login('locked_out_user', 'secret_sauce');

  await expect(loginPage.getErrorMessage()).toContainText(
    'Epic sadface: Sorry, this user has been locked out.'
  );

  await page.screenshot({
  path: 'screenshots/Test1.png',
  fullPage: true
});
});
