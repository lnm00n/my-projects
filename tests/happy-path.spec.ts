import { test, expect } from '@playwright/test';

test('portfolio happy path navigation + resume download', async ({ page }) => {
  // go to portfolio
  await page.goto('http://localhost:5173/');

  // check header
  await expect(page.getByRole('heading', { name: 'Leah Mooney' })).toBeVisible();

  // check nav
  await expect(page.locator('.logo')).toHaveText('Leah Mooney');

  // navigate to Hobbies
  await page.getByTestId('nav-hobbies').click();
  await expect(page).toHaveURL(/latestHobbies/);

  // navigate to Contact
  await page.getByTestId('nav-contact').click();
  await expect(page).toHaveURL(/contact/);

  // return to About
  await page.getByTestId('nav-about').click();
  // await expect(page).toHaveURL('/');

  // download resume
  const downloadPromise = page.waitForEvent('download');

  await page.getByRole('link', { name: /download resume/i }).click();

  const download = await downloadPromise;

  expect(download.suggestedFilename()).toContain('MooneyResume');
});