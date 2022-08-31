const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // console.log(config) // see everything in here!
      
      // modify config values
      // config.defaultCommandTimeout = 4000
      // config.baseUrl = 'http://localhost:8000'
      
      // modify env var value
      // config.env.ENVIRONMENT = 'staging'
      
      // IMPORTANT return the updated config object
      // return config
    },
  },
});
