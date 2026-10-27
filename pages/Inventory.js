class InventoryPage {
  constructor(page) {
    this.page = page;
    this.backpackButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.bikeLightButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-bike-light"]'
    );
    this.shoppingCart = page.locator('.shopping_cart_link');
  }

  async addBackpack() {
    await this.backpackButton.click();
  }

  async addBikeLight() {
    await this.bikeLightButton.click();
  }

  async openCart() {
    await this.shoppingCart.click();
  }
}

module.exports = InventoryPage;