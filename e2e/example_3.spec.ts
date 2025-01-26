import { test, expect } from '@playwright/test';

test('basic test into my youtube channel from the youtube - just adding page screenshots', async ({ page }) => {
    await page.goto('https://www.youtube.com/');

    await test.step('Accept the use of cookies and data', async () => {
    await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
    });

    await test.step('Search for my channel', async () => {
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('panosperspective');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    });

    // screenshot 1 
    await page.screenshot({ path: './screenshots/screenshot_search.png' });

    await test.step('Search the videos', async () => {
      
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('France#');
    await page.getByRole('textbox', { name: 'Search' }).press('Enter');
    await expect(page.getByRole('main')).toContainText('Lyon - France, fragrance of France #lyon #france #français #lyonnaise #bridge');
    await page.getByRole('textbox', { name: 'Search' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Search' }).fill('Feroe islands');
    await page.getByRole('textbox', { name: 'Search' }).press('Enter');

    await page.screenshot({ path: './screenshots/screenshot_search_youtube.png' });

    await expect(page.getByRole('main')).toContainText('Faroe Islands - Tjornuvik 4K 🇫🇴 #faroeislands #explorefaroeislands #visitfaroeislands');
    });

});
