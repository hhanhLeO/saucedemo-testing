import type { Page } from '@playwright/test';
import { test, expect } from '../fixtures/fixtures';
import type { CartPage } from '../pages/CartPage';
import type { CheckoutPage } from '../pages/CheckoutPage';
import type { InventoryPage } from '../pages/InventoryPage';
import { ALL_PRODUCTS, CUSTOMER, ERRORS, PRODUCTS, formatPrice } from '../fixtures/test-data';

type Product = { name: string; price: number };

/** Adds the products from the Products page, then opens the cart and starts checkout. */
async function startCheckout(inventory: InventoryPage, cart: CartPage, products: readonly Product[]) {
  for (const p of products) await inventory.addToCart(p.name);
  await inventory.header.openCart();
  await cart.checkout();
}

/** Starts checkout with the Backpack, fills in valid information and finishes the order. */
async function completeOrder(page: Page, inventory: InventoryPage, cart: CartPage, checkout: CheckoutPage) {
  await startCheckout(inventory, cart, [PRODUCTS.backpack]);
  await checkout.fillInformation(CUSTOMER);
  await checkout.finishButton.click();
  await expect(page).toHaveURL(/checkout-complete\.html$/);
}

test.describe('Checkout', () => {
  test('TC-CHK-01 Complete an order end-to-end', async ({ page, loggedIn, cartPage, checkoutPage }) => {
    await startCheckout(loggedIn, cartPage, [PRODUCTS.backpack]);
    await checkoutPage.fillInformation(CUSTOMER);
    await expect(page).toHaveURL(/checkout-step-two\.html$/);
    await checkoutPage.finishButton.click();

    await expect(page).toHaveURL(/checkout-complete\.html$/);
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
    await expect(loggedIn.header.cartBadge).toBeHidden();
  });

  test('TC-CHK-02 Overview page shows complete order information', async ({ loggedIn, cartPage, checkoutPage }) => {
    await startCheckout(loggedIn, cartPage, [PRODUCTS.backpack]);
    await checkoutPage.fillInformation(CUSTOMER);

    const item = checkoutPage.items.filter({ hasText: PRODUCTS.backpack.name });
    await expect(checkoutPage.items).toHaveCount(1);
    await expect(item.getByTestId('inventory-item-name')).toHaveText(PRODUCTS.backpack.name);
    await expect(item.getByTestId('item-quantity')).toHaveText('1');
    await expect(item.getByTestId('inventory-item-price')).toHaveText(formatPrice(PRODUCTS.backpack.price));
    await expect(checkoutPage.paymentInfo).not.toBeEmpty();
    await expect(checkoutPage.shippingInfo).not.toBeEmpty();
    await expect(checkoutPage.subtotal).toBeVisible();
    await expect(checkoutPage.tax).toBeVisible();
    await expect(checkoutPage.total).toBeVisible();
    await expect(checkoutPage.cancelButton).toBeVisible();
    await expect(checkoutPage.finishButton).toBeVisible();
  });

  const missingFields = [
    { id: 'TC-CHK-03', title: 'Continue with all fields empty', info: { firstName: '', lastName: '', postalCode: '' }, error: ERRORS.firstNameRequired },
    { id: 'TC-CHK-04', title: 'First Name empty', info: { ...CUSTOMER, firstName: '' }, error: ERRORS.firstNameRequired },
    { id: 'TC-CHK-05', title: 'Last Name empty', info: { ...CUSTOMER, lastName: '' }, error: ERRORS.lastNameRequired },
    { id: 'TC-CHK-06', title: 'Postal Code empty', info: { ...CUSTOMER, postalCode: '' }, error: ERRORS.postalCodeRequired },
  ];

  for (const data of missingFields) {
    test(`${data.id} ${data.title}`, async ({ page, loggedIn, cartPage, checkoutPage }) => {
      await startCheckout(loggedIn, cartPage, [PRODUCTS.backpack]);
      await checkoutPage.fillInformation(data.info);
      await expect(checkoutPage.error).toHaveText(data.error);
      await expect(page).toHaveURL(/checkout-step-one\.html$/);
    });
  }

  // Expected amounts are the observed baseline from test-cases.xlsx (8% tax), not a documented requirement.
  const priceCalculations = [
    { id: 'TC-CHK-14', title: 'One product', products: [PRODUCTS.backpack], itemTotal: '$29.99', tax: '$2.40', total: '$32.39' },
    { id: 'TC-CHK-15', title: 'Two products', products: [PRODUCTS.backpack, PRODUCTS.boltTShirt], itemTotal: '$45.98', tax: '$3.68', total: '$49.66' },
    {
      id: 'TC-CHK-16',
      title: 'Four products (rounding case)',
      products: [PRODUCTS.backpack, PRODUCTS.boltTShirt, PRODUCTS.onesie, PRODUCTS.fleeceJacket],
      itemTotal: '$103.96',
      tax: '$8.32',
      total: '$112.28',
      knownBug: 'BUG-018', // Item total is shown as $103.96000000000001
    },
    { id: 'TC-CHK-17', title: 'All six products', products: ALL_PRODUCTS, itemTotal: '$129.94', tax: '$10.40', total: '$140.34' },
  ];

  for (const data of priceCalculations) {
    test(`${data.id} Price calculation – ${data.title}`, async ({ loggedIn, cartPage, checkoutPage }) => {
      // Expected to fail until the known bug is fixed; Playwright reports an unexpected pass once it is.
      test.fail(!!data.knownBug, data.knownBug);
      await startCheckout(loggedIn, cartPage, data.products);
      await checkoutPage.fillInformation(CUSTOMER);

      await expect(checkoutPage.items).toHaveCount(data.products.length);
      await expect(checkoutPage.subtotal).toHaveText(`Item total: ${data.itemTotal}`);
      await expect(checkoutPage.tax).toHaveText(`Tax: ${data.tax}`);
      await expect(checkoutPage.total).toHaveText(`Total: ${data.total}`);
    });
  }

  test('TC-CHK-21 Cart is empty after the order is completed', async ({ page, loggedIn, cartPage, checkoutPage }) => {
    await completeOrder(page, loggedIn, cartPage, checkoutPage);
    await expect(loggedIn.header.cartBadge).toBeHidden();

    await loggedIn.header.openCart();
    await expect(cartPage.items).toHaveCount(0);
  });

  test('TC-CHK-22 Back Home after order completion', async ({ page, loggedIn, cartPage, checkoutPage }) => {
    await completeOrder(page, loggedIn, cartPage, checkoutPage);
    await checkoutPage.backHomeButton.click();

    await loggedIn.expectLoaded();
    for (const p of ALL_PRODUCTS) await expect(loggedIn.cartButton(p.name)).toHaveText('Add to cart');
  });
});
