import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';

test.beforeEach(async ({ page }) => {  
    await page.goto('https://www.jqueryui.com/datepicker/');  
});


test('Handling iframes setting hard coded value', async ({ page }) => {
    const iframe = page.frameLocator('[class="demo-frame"]');
    await iframe.locator('#datepicker').fill('12/15/2024');
});

test('Handling iframes setting dynamic date with todays date', async ({ page }) => {
    const iframe = page.frameLocator('[class="demo-frame"]');
    await iframe.locator('#datepicker').click();
    await iframe.locator('.ui-datepicker-today').click();
});
