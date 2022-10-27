const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'http://150.164.30.91:5000/',
    viewportWidth: 1920,
    viewportHeight: 1000,
    defaultCommandTimeout: 30000
  },
});
