const http = require('http');
const bodyParser = require('body-parser');

const server = http.createServer((req, res) => {
  let body = '';
  // Use body-parser to efficiently handle incoming request data
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    console.log('Body:', body);
    res.end('Hello World!');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});