import { test, expect } from '../fixtures/fixtures';
import { ALL_PRODUCTS, PRODUCTS, formatPrice } from '../fixtures/test-data';

test.describe('Cart', () => {
  test('TC-CRT-01 Empty cart shows no badge and no items', async ({ page, loggedIn, cartPage }) => {
    await expect(loggedIn.header.cartBadge).toBeHidden();
    await loggedIn.header.openCart();

    await expect(page).toHaveURL(/cart\.html$/);
    await expect(page.getByTestId('title')).toHaveText('Your Cart');
    await expect(cartPage.items).toHaveCount(0);
  });

  test('TC-CRT-02 Badge updates when items are added and removed', async ({ loggedIn }) => {
    await loggedIn.addToCart(PRODUCTS.backpack.name);
    await loggedIn.addToCart(PRODUCTS.bikeLight.name);
    await expect(loggedIn.header.cartBadge).toHaveText('2');

    await loggedIn.removeFromCart(PRODUCTS.bikeLight.name);
    await expect(loggedIn.header.cartBadge).toHaveText('1');
  });

  test('TC-CRT-03 Cart page shows correct item details', async ({ loggedIn, cartPage }) => {
    await loggedIn.addToCart(PRODUCTS.backpack.name);
    await loggedIn.header.openCart();

    const item = cartPage.item(PRODUCTS.backpack.name);
    await expect(cartPage.items).toHaveCount(1);
    await expect(item.getByTestId('inventory-item-name')).toHaveText(PRODUCTS.backpack.name);
    await expect(item.getByTestId('item-quantity')).toHaveText('1');
    await expect(item.getByTestId('inventory-item-desc')).not.toBeEmpty();
    await expect(item.getByTestId('inventory-item-price')).toHaveText(formatPrice(PRODUCTS.backpack.price));
    await expect(item.locator('button')).toHaveText('Remove');
  });

  test('TC-CRT-04 Cart page lists all products', async ({ loggedIn, cartPage }) => {
    for (const p of ALL_PRODUCTS) await loggedIn.addToCart(p.name);
    await loggedIn.header.openCart();

    await expect(cartPage.items).toHaveCount(ALL_PRODUCTS.length);
    for (const p of ALL_PRODUCTS) {
      const item = cartPage.item(p.name);
      await expect(item.getByTestId('item-quantity')).toHaveText('1');
      await expect(item.getByTestId('inventory-item-price')).toHaveText(formatPrice(p.price));
    }
  });

  test('TC-CRT-06 Remove one item on the cart page', async ({ loggedIn, cartPage }) => {
    await loggedIn.addToCart(PRODUCTS.backpack.name);
    await loggedIn.addToCart(PRODUCTS.bikeLight.name);
    await loggedIn.header.openCart();
    await cartPage.remove(PRODUCTS.bikeLight.name);

    await expect(cartPage.item(PRODUCTS.bikeLight.name)).toHaveCount(0);
    await expect(cartPage.items).toHaveCount(1);
    await expect(loggedIn.header.cartBadge).toHaveText('1');
  });

  test('TC-CRT-07 Remove all items on the cart page', async ({ loggedIn, cartPage }) => {
    const products = [PRODUCTS.backpack, PRODUCTS.bikeLight];
    for (const p of products) await loggedIn.addToCart(p.name);
    await loggedIn.header.openCart();
    for (const p of products) await cartPage.remove(p.name);

    await expect(cartPage.items).toHaveCount(0);
    await expect(loggedIn.header.cartBadge).toBeHidden();

    await cartPage.continueShoppingButton.click();
    await loggedIn.expectLoaded();
    for (const p of products) await expect(loggedIn.cartButton(p.name)).toHaveText('Add to cart');
  });

  test('TC-CRT-09 Proceed to checkout from the cart', async ({ page, loggedIn, cartPage }) => {
    await loggedIn.addToCart(PRODUCTS.backpack.name);
    await loggedIn.header.openCart();
    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one\.html$/);
    await expect(page.getByTestId('title')).toHaveText('Checkout: Your Information');
  });
});
