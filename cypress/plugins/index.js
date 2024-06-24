// cypress/plugins/index.js
const slowDown = require('cypress-slow-down');

module.exports = (on, config) => {
  slowDown(on, config, {
    delay: 500, // Delay in milliseconds
    commands: ['visit', 'click', 'type', 'get', 'find', 'contains'], // List of commands to slow down
  });

  return config;
};
