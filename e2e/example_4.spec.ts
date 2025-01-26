import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/search.page';

test.beforeAll(async ({ page }) => {
    console.log('beforeAll hook');
    const plDev = new SearchPage(page);
    await plDev.GoToUrl();
});


test('basic test into my youtube channel from the youtube - just adding page screenshots', async ({ page }) => {
    

});

test.afterAll(async ({ page }) => {
    console.log('afterAll hook');
});
