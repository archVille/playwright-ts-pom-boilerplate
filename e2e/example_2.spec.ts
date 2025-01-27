import { test, expect } from '@playwright/test';

test('basic test into my youtube channel from the google search', async ({ page }) => {
  await page.goto('https://www.google.com/');

  await page.getByRole('button', { name: 'Accept all' }).click();
  // await page.getByRole('combobox', { name: 'Αναζήτηση' }).fill('Panosperspective youtube');
  // await page.getByRole('combobox', { name: 'Αναζήτηση' }).press('Enter');

  // not a robot check

  ///

});


test('basic test into my youtube channel from the youtube', async ({ page }) => {
    await page.goto('https://www.youtube.com/');

    await page.getByRole('button', { name: 'Accept all' }).click();
    await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
    });

    await test.step('Search for my channel', async () => {
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('panosperspective');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    });


    await test.step('Navigate the options', async () => {
    await page.getByRole('link', { name: 'PanosPerspective tooltip @' }).click();
    await page.locator('#tabsContent').getByText('Videos').click();
    await page.locator('#tabsContent').getByText('Shorts').click();
    await page.locator('#tabsContent').getByText('Playlists').click();
    await page.locator('#tabsContent').getByText('Community').click();
    });

    await test.step('Search the videos', async () => {
    await page.locator('#icon-button').getByRole('button', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('France#');
    await page.getByRole('textbox', { name: 'Search' }).press('Enter');
    await expect(page.getByRole('main')).toContainText('Lyon - France, fragrance of France #lyon #france #français #lyonnaise #bridge');
    await page.getByRole('textbox', { name: 'Search' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Search' }).fill('Feroe islands');
    await page.getByRole('textbox', { name: 'Search' }).press('Enter');
    await expect(page.getByRole('main')).toContainText('Faroe Islands - Tjornuvik 4K 🇫🇴 #faroeislands #explorefaroeislands #visitfaroeislands');
    });

});
