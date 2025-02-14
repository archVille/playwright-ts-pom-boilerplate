import { test, expect } from "../../pageFixture";

test.describe("Navigate", () => {
    test.beforeEach(async ({ homePage }) => {
        await homePage.open();
        await homePage.clickAllowCookies();
    });

    test("should all shortcuts be navigated and working", async ({ homePage }) => {
        const title = await homePage.page.title();
        expect(title).toBe("CodiLime's Knowledge Resources: Ebooks, Webinars, Podcasts");
    });
    

});


