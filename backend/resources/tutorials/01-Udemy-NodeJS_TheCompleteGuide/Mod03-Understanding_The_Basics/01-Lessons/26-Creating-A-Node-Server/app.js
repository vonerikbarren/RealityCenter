/**
 * [#] Core Modules of Node (few)
 * |- http => Launch a server, send request
 * |- https => Launch a SSL server
 * |- fs => 
 * |- path
 * |- os
 */

const http = require('http');

// |- [#] - Old way of doing things
// function rqListener(req, res) {

// }

// http.createServer(rqListener);

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); // Exits the Event Loop
});

server.listen(3000);