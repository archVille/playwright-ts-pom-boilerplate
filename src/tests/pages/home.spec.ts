import { test, expect } from "../../pageFixture";

test.describe("Home Page", () => {
    test.beforeEach(async ({ homePage }) => {
        await homePage.open();
        await homePage.clickAllowCookies();
    });

    test("should have the correct title", async ({ homePage }) => {
        const title = await homePage.page.title();
        expect(title).toBe("CodiLime's Knowledge Resources: Ebooks, Webinars, Podcasts");
    });

    test("should have nine shortcut page links", async ({ homePage }) => {
        const count = await homePage.page.locator("div[class*='w-80 rounded-lg']").count();
        expect(count).toBe(9);
    });

});


