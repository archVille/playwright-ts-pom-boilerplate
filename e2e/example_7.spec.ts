import { test, expect } from '@playwright/test';
import exp from 'constants';
import { beforeEach } from 'node:test';

test.beforeEach(async ({ page }) => {  
    await page.goto('https://www.youtube.com/');  
    await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();

});


test.describe('Asserting elements', () => {
    test('Asserting elements', async ({ page }) => {
        await expect(page.getByPlaceholder('Search', {exact:true}).first()).toBeVisible();
        await expect(page.getByPlaceholder('Search', {exact:true}).first()).toBeEditable();
        await expect(page.getByPlaceholder('Search', {exact:true}).first()).toBeEnabled();
        await expect(page.getByPlaceholder('Search', {exact:true}).first()).toBeEmpty();
    });
});

test('Asserting search functionality stuff', async ({ page }) => {
    test('Asserting search functionality', async ({ page }) => {
        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill('panosperspective');
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');
        
        await expect(page.locator('div[id="tooltip"]').first()).toHaveText('PanosPerspective');
        
    });

});
