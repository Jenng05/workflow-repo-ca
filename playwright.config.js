const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests/e2e',
  use: {
    baseURL: 'http://localhost:8080',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'npx http-server -p 8080 -c-1',
    url: 'http://localhost:8080',
    reuseExistingServer: true,
  },
});
