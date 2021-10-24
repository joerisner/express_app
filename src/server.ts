import express, { Request, Response, Application } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Grant access to env vars in the project & set the port variable
dotenv.config();
const PORT = process.env.PORT;

// Create the express server
const app: Application = express();

/**
 * Create a route definition.
 * The app.get() method defines a callback function that will be invoked whenever there
 *  is an HTTP GET request with a path ('/') relative to the site root. The callback function
 *  takes a request and a response object as arguments, and simply calls sendFile() on the
 *  response to return the hello.html file"
 */
app.get('/', (req: Request, res: Response): void => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  res.sendFile(path.join(__dirname, '../public/hello.html'));
});

app.listen(PORT, (): void => {
  console.log(`Server running on ${PORT}`);
});
