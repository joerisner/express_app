// Node server: no express, just a node web server that listens on port 5000
import http from 'http';

const hostname = '127.0.0.1'; // IP address equivalent to 'localhost'
const port = 5000;

// Create the server
const server = http.createServer((req, res) => {

  // Set response headers
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Send the response body
  res.end('Yo World');
});

server.listen(port, hostname, () => {
  console.log(`Server listening at http://${hostname}:${port}`);
});
