const { stdin } = require('process');

// allows inputs to be taken from CLI
const setupInput = () => {
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
};

// listens for data coming in from stdin (on command line) and processes it through handleUserInput
stdin.on('data', handleUserInput);

module.exports = { setupInput };