const http = require('http');

const server = http.createServer((req, res) => {
  // This is a common mistake that will lead to a memory leak
  // if the request is not handled appropriately.
  // The 'data' event will keep emitting until the client closes the connection.
  req.on('data', chunk => {
    //The code does not handle the incoming chunks efficiently
    console.log(chunk.toString());
  });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});