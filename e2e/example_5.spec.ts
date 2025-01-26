import { test, expect } from '@playwright/test';



test('Getting dropdown touch down', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await page.getByRole('button', { name: 'Allow all cookies' }).click();
    await page.getByRole('button', { name: 'Create new account' }).click();  
    await page.getByRole('button', { name: 'Allow all cookies' }).click(); 
    await page.getByLabel('Day').selectOption('14');
    await page.getByLabel('Month').selectOption('8');
    await page.getByLabel('Year').selectOption('1987');
});

