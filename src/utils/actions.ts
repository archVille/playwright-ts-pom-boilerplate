import { Page } from '@playwright/test';

export default class Actions {
     constructor(protected page: Page) {}

    async navigateTo(url) {
        await this.page.goto(url);  
    }

}