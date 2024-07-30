const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env : {DataFile: 'Datafile.json'},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
