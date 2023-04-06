import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    testIsolation: false,
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env: {
      storeApi: "https://api.storerestapi.com",
      demoQA: "https://demoqa.com",
    },
  },
});
