// Express server that listens on port 3000 (hostname = localhost or 127.0.0.1)
import express from 'express';

// Creates the express app
const app = express();

// Creates a route definition.
//The app.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root. 
// The callback function takes a request and a response object as arguments, and simply calls send() on the response to return the string "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello From Express!');
});

// Starts the server on port 3000.
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
