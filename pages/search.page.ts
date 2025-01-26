import { Page } from 'playwright';

export class SearchPage {
    private page: Page;
    private searchInput: string = 'input[name="q"]';
    private searchButton: string = 'button[type="submit"]';
    private results: string = '.results';

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async GoToUrl(){
        this.page.goto('https://www.youtube.com/');
    }

    /**
     * @param query The search query to enter
     */
    async enterSearchQuery(query: string): Promise<void> {
        await this.page.fill(this.searchInput, query);
    }

    async submitSearch(): Promise<void> {
        await this.page.click(this.searchButton);
    }

    async getSearchResults() {
        await this.GoToUrl();
        await this.submitSearch();
    } 

    async getResults(): Promise<string[]> {
        await this.page.waitForSelector(this.results);
        return this.page.$$eval(this.results, elements => elements.map(item => item.textContent || ''));
    }
}