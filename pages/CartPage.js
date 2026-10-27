class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  getCartItems() {
    return this.cartItems;
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}

module.exports = CartPage;