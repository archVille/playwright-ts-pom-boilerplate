import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('Basic google flights search - straight from Capture > Shows basic title and Best option', async ({ page }) => {
  await page.goto('https://www.google.com/flights');
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByLabel('Where from?').click();
  await page.getByText('Athens International Airport').click();
  await page.getByRole('combobox', { name: 'Where to?' }).click();
  await page.getByRole('combobox', { name: 'Where to?' }).fill('london');
  await page.getByText('London, United Kingdom', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('day trips').click();
  await page.getByRole('button', { name: 'Done.' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Monday, February 10,' }).click();
  await page.getByRole('button', { name: 'Sunday, February 16' }).click();
  await page.getByRole('button', { name: 'Done. Search for round trip' }).click();
  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page.getByRole('heading', { name: 'Top departing flights' })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'BestLearn more about ranking' })).toBeVisible();
});
