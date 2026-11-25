import { type Locator, type Page } from '@playwright/test';
import { Header } from './Header';

export class ProductDetailPage {
  readonly header: Header;
  /** Product details block. Locators are scoped to it because the Products page uses the same data-test ids. */
  readonly details: Locator;
  readonly name: Locator;
  readonly description: Locator;
  readonly price: Locator;
  /** The 'Add to cart' / 'Remove' button. */
  readonly cartButton: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    this.header = new Header(page);
    this.details = page.locator('.inventory_details_desc_container');
    this.name = this.details.getByTestId('inventory-item-name');
    this.description = this.details.getByTestId('inventory-item-desc');
    this.price = this.details.getByTestId('inventory-item-price');
    this.cartButton = this.details.locator('button');
    this.backButton = page.getByTestId('back-to-products');
  }
}
