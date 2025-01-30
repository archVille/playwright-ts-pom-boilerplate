import { BasePage } from "../base.page";
export class HomePage extends BasePage {


    async open() {
        await super.open('https://codilime.com/resources/');
    }

     async clickAllowCookies() {
        await this.page.locator('button[id=onetrust-accept-btn-handler]').click();
     }
        
    
}