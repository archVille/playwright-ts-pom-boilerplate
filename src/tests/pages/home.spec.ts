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

    test("should have the correct base title", async ({ homePage }) => {
        const title = await homePage.page.title();
        expect(title).toBe("CodiLime's Knowledge Resources: Ebooks, Webinars, Podcasts");
    });

    test("should have nine shortcut page links", async ({ homePage }) => {
        const h1Text = await homePage.page.locator('h1').textContent();
        await expect(h1Text).toBe('All our resources in one place'); 
    });

    test("footer components are visible", async ({ homePage }) => {
        await expect(homePage.footer.host).toBeVisible();
        for (let link of Object.values(homePage.footer.links)) {
          await expect(link).toBeVisible();
        }
      });

      test("header bar components are visible", async ({ homePage }) => {
        await expect(homePage.header.host).toBeVisible();
        for (let hoverLink of Object.values(homePage.header.hoverLinks)) {
          await expect(hoverLink).toBeVisible();         
        }
        await expect(homePage.header.contactUsButton).toBeVisible();
        await expect(homePage.header.homeIcon).toBeVisible();
      });


      test("header hover components are clickable", async ({ homePage }) => {
        await expect(homePage.header.host).toBeVisible();
        for (let hoverLink of Object.values(homePage.header.hoverLinks)) {
          await expect(hoverLink).toBeDefined();
        }
       
      });
    

});


