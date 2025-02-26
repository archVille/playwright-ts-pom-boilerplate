import { test, expect } from "../../pageFixture";
import AxeBuilder from "@axe-core/playwright";
import { generateViolationError } from '../../utils/helper'; 

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

test('Page should have unique IDs', async ({ }) => {

  const idViolations = accessibilityScanResults.violations.filter(
      (violation) => violation.id === 'duplicate-id'
  );

  expect(idViolations).toEqual([]);

  if (idViolations.length > 0) {
    generateViolationError(accessibilityScanResults, 'Image alt text testing');
  }
});

test('Images have alt text', async ({ }) => {
  accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .include('img') // Target only image elements
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);

  if (accessibilityScanResults.violations.length > 0) {
    generateViolationError(accessibilityScanResults, 'Image alt text testing');
  }
});

test.skip('Links have discernible text', async ({ }) => {
  const accessibilityScanResultsLinkElements = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .include('a') // Target only link elements
    .analyze();

  expect(accessibilityScanResultsLinkElements.violations).toEqual([]);

  if (accessibilityScanResultsLinkElements.violations.length > 0) {
    generateViolationError(accessibilityScanResultsLinkElements, 'Links testing');
  }
});

test.skip('Form labels are correctly associated', async ({ }) => {
  const accessibilityScanResultsWithInputsAndFormElements = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .include('input, select, textarea') // Target form elements
    .analyze();

  expect(accessibilityScanResultsWithInputsAndFormElements.violations).toEqual([]);

  if (accessibilityScanResultsWithInputsAndFormElements.violations.length > 0) {
    generateViolationError(accessibilityScanResultsWithInputsAndFormElements, 'Target form elements testing');
  }
});

test.skip('Color contrast is sufficient', async ({  }) => {
  const accessibilityScanResultsColorContrast = await new AxeBuilder({ page })
    .withTags(['wcag2aa']) // Color contrast is primarily a level AA issue.
    .analyze();

  expect(accessibilityScanResultsColorContrast.violations).toEqual([]);

  if (accessibilityScanResultsColorContrast.violations.length > 0) {
    console.error('Color contrast violations:');
    generateViolationError(accessibilityScanResultsColorContrast, 'Color contrast testings');
  }
});

});