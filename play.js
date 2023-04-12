const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');

// runs connect function from client.js and its return object is passed into setupInput in input.js
setupInput(connect());