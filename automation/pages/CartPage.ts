import { type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly items: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(private readonly page: Page) {
    this.items = page.getByTestId('inventory-item');
    this.checkoutButton = page.getByTestId('checkout');
    this.continueShoppingButton = page.getByTestId('continue-shopping');
  }

  async goto() {
    await this.page.goto('/cart.html');
  }

  item(name: string): Locator {
    return this.items.filter({ hasText: name });
  }

  async remove(name: string) {
    await this.item(name).locator('button', { hasText: 'Remove' }).click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}
