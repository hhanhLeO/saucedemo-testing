import { type Locator, type Page, expect } from '@playwright/test';
import { Header } from './Header';

export type SortOption = 'az' | 'za' | 'lohi' | 'hilo';

export class InventoryPage {
  readonly header: Header;
  readonly title: Locator;
  readonly items: Locator;
  readonly itemNames: Locator;
  readonly itemPrices: Locator;
  readonly sortSelect: Locator;

  constructor(private readonly page: Page) {
    this.header = new Header(page);
    this.title = page.getByTestId('title');
    this.items = page.getByTestId('inventory-item');
    this.itemNames = page.getByTestId('inventory-item-name');
    this.itemPrices = page.getByTestId('inventory-item-price');
    this.sortSelect = page.getByTestId('product-sort-container');
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/\/inventory\.html$/);
    await expect(this.title).toHaveText('Products');
  }

  item(name: string): Locator {
    return this.items.filter({ hasText: name });
  }

  /** The 'Add to cart' / 'Remove' button of a product (the image and name links also have role="button"). */
  cartButton(name: string): Locator {
    return this.item(name).locator('button');
  }

  async addToCart(name: string) {
    await this.cartButton(name).filter({ hasText: 'Add to cart' }).click();
  }

  async removeFromCart(name: string) {
    await this.cartButton(name).filter({ hasText: 'Remove' }).click();
  }

  /** Opens the product detail page by clicking the product name and waits until it is loaded. */
  async openDetail(name: string) {
    await this.item(name).getByTestId('inventory-item-name').click();
    await expect(this.page).toHaveURL(/\/inventory-item\.html\?id=\d+$/);
  }

  async sortBy(option: SortOption) {
    await this.sortSelect.selectOption(option);
  }

  async getNames(): Promise<string[]> {
    return this.itemNames.allTextContents();
  }

  async getPrices(): Promise<number[]> {
    const texts = await this.itemPrices.allTextContents();
    return texts.map((t) => Number(t.replace('$', '')));
  }
}
