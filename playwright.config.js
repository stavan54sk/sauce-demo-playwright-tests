const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000, // Test timeout in milliseconds
  expect: {
    timeout: 5000, // Expectation timeout
  },
  fullyParallel: true, // Run tests in parallel
  retries: 1, // Number of retries for failed tests
  workers: process.env.CI ? 2 : 4, // Number of workers to run in parallel (based on environment)
  reporter: 'html', // Reporter format
  use: {
    actionTimeout: 0, // Disable action timeout
    baseURL: 'https://www.saucedemo.com', // Base URL for tests
    headless: process.env.HEADLESS !== 'false', // Run in headless mode by default
    screenshot: 'on', // Take screenshot for each test failure
    video: 'retain-on-failure', // Record video for failed tests
    trace: 'on-first-retry', // Capture trace on first retry
  },
  projects: [

    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});