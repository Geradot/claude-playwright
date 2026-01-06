# Honda Playwright Test Automation

## Summary

This project contains automated end-to-end tests for the Honda Ukraine website (https://honda.kh.ua) using Playwright and TypeScript. The test suite follows the Page Object Model (POM) design pattern and includes comprehensive test scenarios for user journeys and contact information verification.

### Test Coverage

The project includes two main test specifications:

1. **honda-claude-main.spec.ts** - Complete user journey from main page to test drive registration
   - Navigation to Honda main page
   - Page scrolling interactions
   - Test drive sign-up flow
   - URL validation
   - Content verification
   - Social media links validation

2. **honda-contact-info.spec.ts** - Contact information verification on the main page
   - Social media links verification (Facebook, YouTube, Instagram)
   - Phone numbers validation
   - Email addresses validation

## Requirements

Before running the tests, ensure you have the following installed:

- **Node.js** (version 18.x or higher)
- **npm** (version 9.x or higher) or **yarn** (version 1.22.x or higher)
- **Git** (for cloning the repository)

### Supported Browsers

Playwright supports the following browsers:
- Chromium
- Firefox
- WebKit (Safari)

## Steps to Install

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   git clone https://github.com/Geradot/claude-playwright.git
   ```
   ```bash
   cd claude-playwright
   ```

2. **Install Playwright and TypeScript dependencies**:
   ```bash
   npm install
   ```

3. **Install Playwright browsers**:
   ```bash
   npx playwright install
   ```
   
   Or install specific browsers:
   ```bash
   npx playwright install chromium
   npx playwright install firefox
   npx playwright install webkit
   ```

## Steps to Run

### Run All Tests

Execute all test specifications:
```bash
npx playwright test
```

### Run Specific Test File

Run a single test specification:
```bash
npx playwright test specs/honda-claude-main.spec.ts
npx playwright test specs/honda-contact-info.spec.ts
```

### Run Tests in Headed Mode

Run tests with visible browser (useful for debugging):
```bash
npx playwright test --headed
```

### Run Tests in UI Mode

Run tests with Playwright's interactive UI:
```bash
npx playwright test --ui
```

### Run Tests in Specific Browser
>Note: Make sure that the corresponding block of code is uncommented in the configuration file.

Run tests in a specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```


### Debug Mode

Run tests with Playwright Inspector for debugging:
```bash
npx playwright test --debug
```

### Generate Test Report

After running tests, generate and view HTML report:
```bash
npx playwright show-report
```