const { stdin } = require('process');

let connection;

// allows inputs to be taken from CLI
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

// determines what to do with inputs
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
};

// listens for data coming in from stdin (on command line) and processes it through handleUserInput
stdin.on('data', handleUserInput);

module.exports = { setupInput };