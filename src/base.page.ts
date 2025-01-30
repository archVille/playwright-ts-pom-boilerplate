import { type Page } from "@playwright/test";
import Actions from "./utils/actions";
import Footer from "./pages/components/footer";

export abstract class BasePage {
    actions: any;    
    constructor(readonly page: Page) {}

    public footer = new Footer(this.page.locator("section[id=main-footer]"));

    async open(path: string) {
        await this.page.goto(path);
      }
}