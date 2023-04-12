const { stdin } = require('process');
const { KEY_MAPPING } = require('./constants');

// stores conn object returned by connect function in client.js (line 10)
let connection;

// allows inputs to be taken from CLI
const setupInput = (conn) => {
  
  // stores the conn object as a global variable so handleUserInput can access it (line 4)
  connection = conn;

  // gets stdin processes and sets how it should behave
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  return stdin;
};

// determines what to do with inputs
const handleUserInput = (key) => {

  // if CTRL + C disconnect from server
  if (key === '\u0003') {
    process.exit();
  }

  // sends appropriate value to server when each key is pressed
  connection.write(KEY_MAPPING[key]);
};

// listens for data coming in from stdin (on command line) and processes it through handleUserInput
stdin.on('data', handleUserInput);

module.exports = { setupInput };