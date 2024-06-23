/* eslint-disable no-unused-vars */
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://www.demoblaze.com/',
    adminCredentials: {
      username:'qa-auto-admin-user',
      Password:'DemoBlaze!345'
    }
  },
});
