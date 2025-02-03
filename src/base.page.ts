import { type Page } from "@playwright/test";
import Actions from "./utils/actions";
import Footer from "./pages/components/footer";
import Header from "./pages/components/header";
export abstract class BasePage {
    actions: any;    
    constructor(readonly page: Page) {}

    public footer = new Footer(this.page.locator("section[id=main-footer]"));
    public header = new Header(this.page.locator('nav.border-grey-light.fixed.left-0.right-0.z-40.mx-auto.h-\\[75px\\].border-b.transition-all.bg-white'));

    async open(path: string) {
        await this.page.goto(path);
      }
}