import { type Page } from "@playwright/test";
import Actions from "./utils/actions";

export abstract class BasePage {
    actions: any;    
    constructor(readonly page: Page) {}

    async open(path: string) {
        await this.page.goto(path);
      }
}