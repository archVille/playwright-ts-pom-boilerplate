# Ιnstructions how to run

## Accessibility Tests

You need to change the config dir in playwright.config.ts to 

> 'testDir: './src/tests/accessibility'

then simply run 
```
npx playwright test
```

If you want to generate the report:

```
npx playwright show-report
```


## E2E Tests

You need to change the config dir in playwright.config.ts to 

> 'testDir: './src/tests/e2e'