
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.',
  testMatch: ['Test1.spec.js', 'Test2.spec.js'],

  reporter: [
    ['list'],
    ['./reporter/custom-reporter.js']
  ],

  use: {
    baseURL: 'https://www.saucedemo.com',
    browserName: 'chromium',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  },

  timeout: 30000,
  retries: 0
});
