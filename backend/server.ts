import { createYoga } from 'graphql-yoga';
import { schema } from './schema'; // Assuming you have your GraphQL schema defined here
import { createServer } from 'http';

// Create the Yoga instance (server)
const yoga = createYoga({
  schema,
});

// Create an HTTP server and bind Yoga to it
const server = createServer(yoga);

// Define the port to run the server on
const port = 4000;

// Start the server
server.listen(port, () => {
  console.log(`GraphQL server is running on http://localhost:${port}`);
});
