import { test, expect } from '../fixtures/fixtures';
import { ALL_PRODUCTS, PRODUCTS, formatPrice } from '../fixtures/test-data';
import type { SortOption } from '../pages/InventoryPage';

test.describe('Inventory', () => {
  test('TC-INV-01 All products are displayed', async ({ loggedIn }) => {
    await expect(loggedIn.items).toHaveCount(ALL_PRODUCTS.length);
  });

  test('TC-INV-02 Each product shows complete information', async ({ loggedIn }) => {
    for (const p of ALL_PRODUCTS) {
      const item = loggedIn.item(p.name);
      await expect(item.getByTestId('inventory-item-name')).toHaveText(p.name);
      await expect(item.getByTestId('inventory-item-desc')).not.toBeEmpty();
      await expect(item.getByTestId('inventory-item-price')).toBeVisible();
      await expect(loggedIn.cartButton(p.name)).toHaveText('Add to cart');
      const image = item.locator('img');
      await expect(image).toBeVisible();
      await expect(image).toHaveAttribute('alt', p.name);
      await expect(image).toHaveAttribute('src', new RegExp(p.image));
    }
  });

  test('TC-INV-03 Product prices are displayed correctly', async ({ loggedIn }) => {
    for (const p of ALL_PRODUCTS) {
      await expect(loggedIn.item(p.name).getByTestId('inventory-item-price')).toHaveText(formatPrice(p.price));
    }
  });

  const byName = (a: string, b: string) => a.localeCompare(b);
  const sorts: { id: string; title: string; option: SortOption; check: 'names' | 'prices'; compare: (a: any, b: any) => number }[] = [
    { id: 'TC-INV-05', title: 'Sort by Name (Z to A)', option: 'za', check: 'names', compare: (a, b) => byName(b, a) },
    { id: 'TC-INV-06', title: 'Sort by Price (low to high)', option: 'lohi', check: 'prices', compare: (a, b) => a - b },
    { id: 'TC-INV-07', title: 'Sort by Price (high to low)', option: 'hilo', check: 'prices', compare: (a, b) => b - a },
  ];

  test('TC-INV-04 Default sort is Name (A to Z)', async ({ loggedIn }) => {
    const names = await loggedIn.getNames();
    expect(names).toEqual([...names].sort(byName));
  });

  for (const s of sorts) {
    test(`${s.id} ${s.title}`, async ({ loggedIn }) => {
      await loggedIn.sortBy(s.option);
      const values = s.check === 'names' ? await loggedIn.getNames() : await loggedIn.getPrices();
      expect(values).toEqual([...values].sort(s.compare));
    });
  }

  test('TC-INV-08 Add one product from the product list', async ({ loggedIn }) => {
    await loggedIn.addToCart(PRODUCTS.backpack.name);
    await expect(loggedIn.header.cartBadge).toHaveText('1');
    await expect(loggedIn.cartButton(PRODUCTS.backpack.name)).toHaveText('Remove');
  });

  test('TC-INV-09 Remove a product from the product list', async ({ loggedIn }) => {
    await loggedIn.addToCart(PRODUCTS.backpack.name);
    await loggedIn.removeFromCart(PRODUCTS.backpack.name);
    await expect(loggedIn.header.cartBadge).toBeHidden();
    await expect(loggedIn.cartButton(PRODUCTS.backpack.name)).toHaveText('Add to cart');
  });

  test('TC-INV-10 Add all products from the product list', async ({ loggedIn }) => {
    for (const p of ALL_PRODUCTS) await loggedIn.addToCart(p.name);
    for (const p of ALL_PRODUCTS) await expect(loggedIn.cartButton(p.name)).toHaveText('Remove');
    await expect(loggedIn.header.cartBadge).toHaveText(String(ALL_PRODUCTS.length));
  });
});
