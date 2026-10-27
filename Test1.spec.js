const { test, expect } = require('@playwright/test');

const LoginPage = require('./pages/LoginPage');
const InventoryPage = require('./pages/Inventory');
const CartPage = require('./pages/CartPage');
const CheckoutPage = require('./pages/Checkout');

test('Test 1 - Standard user completes checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');

  // Verify successful login
  await expect(page).toHaveURL(/inventory\.html/);

  const inventoryPage = new InventoryPage(page);

  await inventoryPage.addBackpack();
  await inventoryPage.addBikeLight();
  await inventoryPage.openCart();

  const cartPage = new CartPage(page);

  // Verify exactly two products
  await expect(cartPage.getCartItems()).toHaveCount(2);

  await cartPage.checkout();

  const checkoutPage = new CheckoutPage(page);

  await checkoutPage.enterCustomerDetails(
    'Test',
    'User',
    '12345'
  );

  // Verify checkout overview before finishing
  await expect(page).toHaveURL(/checkout-step-two\.html/);

  await checkoutPage.finishCheckout();

  // Verify order confirmation
  await expect(checkoutPage.getOrderConfirmation())
    .toHaveText('Thank you for your order!');

  await expect(page).toHaveURL(/checkout-complete\.html/);
});