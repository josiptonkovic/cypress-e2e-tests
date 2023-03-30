import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
