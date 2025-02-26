import AxeBuilder from "@axe-core/playwright";

export const generateViolationError = (accessibilityScanResults: any, functionTested: string) => {
    console.error(`Accessibility violations found: ${functionTested}`);
    accessibilityScanResults.violations.forEach((violation) => {
      console.error('Rule:', violation.id);
      console.error('Description:', violation.description);
      console.error('Impact:', violation.impact);
      violation.nodes.forEach((node) => {
        console.error('  Target:', node.target);
        console.error('  HTML:', node.html);
      });
      console.error('---');
    });
    //throw new Error('Accessibility violations found in inputs and form elements.');
  };