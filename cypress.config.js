const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://www.google.com',
    //setupNodeEvents(on, config) {
      //var url = 'https://http://34.49.0.148/?'
      //var utmExperiment = 'experiment=CRAT-033b&loggedIn=true'
      //var source = '&utm_source=ga4-test'
      //var medium = '&utm_medium=martech-ga4'
      //var campaign = '&utm_campaign=test-cypress-2022-12-13-v4'

      //config.baseUrl = url+utmExperiment+source+medium+campaign

      //return config
      // implement node event listeners here
    //},
  },
});