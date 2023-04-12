const net = require("net");
const { IP, PORT, NAME } = require('./constants');

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // code to execute on connecting to server
  conn.on('connect', () => {
    console.log('Connected to game server');
    conn.write(NAME);
  });

  // code to execute when data is recieved from server
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {connect};