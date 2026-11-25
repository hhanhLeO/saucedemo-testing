import { test, expect } from '../fixtures/fixtures';
import { PRODUCTS } from '../fixtures/test-data';

test.describe('Product Detail', () => {
  test('TC-PDP-02 Add a product from the detail page', async ({ loggedIn, productDetailPage }) => {
    await loggedIn.openDetail(PRODUCTS.backpack.name);
    await expect(productDetailPage.name).toHaveText(PRODUCTS.backpack.name);
    await productDetailPage.cartButton.click();

    await expect(productDetailPage.cartButton).toHaveText('Remove');
    await expect(productDetailPage.header.cartBadge).toHaveText('1');
  });

  test('TC-PDP-03 Remove a product from the detail page', async ({ loggedIn, productDetailPage }) => {
    await loggedIn.openDetail(PRODUCTS.backpack.name);
    await productDetailPage.cartButton.click();
    await productDetailPage.cartButton.click();

    await expect(productDetailPage.cartButton).toHaveText('Add to cart');
    await expect(productDetailPage.header.cartBadge).toBeHidden();
  });

  test('TC-PDP-04 Cart state added on detail page is shown in the list', async ({ loggedIn, productDetailPage }) => {
    await loggedIn.openDetail(PRODUCTS.onesie.name);
    await productDetailPage.cartButton.click();
    await productDetailPage.backButton.click();

    await loggedIn.expectLoaded();
    await expect(loggedIn.cartButton(PRODUCTS.onesie.name)).toHaveText('Remove');
    await expect(loggedIn.header.cartBadge).toHaveText('1');
  });

  test('TC-PDP-05 Cart state added on the list is shown on the detail page', async ({ loggedIn, productDetailPage }) => {
    await loggedIn.addToCart(PRODUCTS.onesie.name);
    await loggedIn.openDetail(PRODUCTS.onesie.name);

    await expect(productDetailPage.name).toHaveText(PRODUCTS.onesie.name);
    await expect(productDetailPage.cartButton).toHaveText('Remove');
  });
});
