import { test, expect } from '@playwright/test';

test.describe('PGA Superstore full flow', () => {

  test('Search, filter, add to cart, and verify', async ({ page }) => {
    // Navigate to PGA Superstore
    await page.goto('https://www.pgasuperstore.com/');

    // Accept cookies if visible
    const cookieButton = page.locator('button:has-text("Accept")');
    if (await cookieButton.isVisible()) {
      await cookieButton.click();
    }

    // Search for product
    const searchInput = page.locator('input[type="search"]');
    await searchInput.fill('golf balls');
    await searchInput.press('Enter');

    // Apply filter
    const brandFilter = page.locator('label:has-text("Titleist")');
    if (await brandFilter.isVisible()) {
      await brandFilter.click();
      // Wait for products to refresh
      await page.waitForTimeout(2000);
    }

    // Click first product
    const productList = page.locator('.product-grid .product-tile');
    await expect(productList).toHaveCount(1); // exact 1
    await productList.first().click();

    // Add to cart
    const addToCartButton = page.locator('button:has-text("Add to Cart")');
    await expect(addToCartButton).toBeVisible();
    await addToCartButton.click();

    // Verify cart page or mini-cart popup
    const cartIcon = page.locator('a[aria-label="View Cart"]');
    await cartIcon.click();

    const cartItem = page.locator('.cart-item'); // adjust selector if needed
    await expect(productList).toHaveCount(1); // exact 1

    // Verify product title in cart
    const cartProductTitle = cartItem.first().locator('.cart-item-name');
    await expect(cartProductTitle).toBeVisible();
  });

});