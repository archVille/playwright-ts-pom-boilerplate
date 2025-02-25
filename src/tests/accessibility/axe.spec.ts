import { test, expect } from "../../pageFixture";
import AxeBuilder from "@axe-core/playwright";

let page;
let labelViolations;
let accessibilityScanResults;
let altTextViolations;   
let contrastViolations;

test.describe("Accessibility Scans", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open();
    page = homePage.page;

    accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze(); 

    labelViolations = accessibilityScanResults.violations.filter(
      (violation) => violation.id === 'label'
    );

    altTextViolations = accessibilityScanResults.violations.filter(
      (violation) => violation.id === 'image-alt'
  );

    contrastViolations = accessibilityScanResults.violations.filter(
    (violation) => violation.id === 'color-contrast'
  );
});

  test.describe.configure({ retries: 0 });

  test.skip("home page a11y", async ({ page }) => {
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  }); 

  test('Home page should have proper labels', async ({ }) => {    

    expect(labelViolations).toEqual([]);

    if (labelViolations.length > 0) {
      console.error('Label accessibility violations found:');
      labelViolations.forEach((violation) => {
        console.error('Description:', violation.description);
        violation.nodes.forEach((node) => {
          console.error('  Target:', node.target);
          console.error('  HTML:', node.html);
        });
        console.error('---');
      });
    }
  });

  test('Image alt text check', async ({ }) => {

    expect(altTextViolations).toEqual([]);
    if (altTextViolations.length > 0) {
        console.error('Image alt text violations found:');
        altTextViolations.forEach((violation) => {
            console.error('Description:', violation.description);
            violation.nodes.forEach((node) => {
                console.error('  Target:', node.target);
                console.error('  HTML:', node.html);
            });
            console.error('---');
        });
    }
});


test.skip('Contrast check for important elements', async ({ }) => {  

  expect(contrastViolations).toEqual([]);

  if (contrastViolations.length > 0) {
    console.error('Contrast violations found:');
    contrastViolations.forEach((violation) => {
      console.error('Description:', violation.description);
      violation.nodes.forEach((node) => {
        console.error('  Target:', node.target);
        console.error('  HTML:', node.html);
      });
      console.error('---');
    });
  }
});

});