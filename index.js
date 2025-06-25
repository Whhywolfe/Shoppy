const http = require('http');

// Firebase/Cloud Run sets this env variable automatically
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.end('Hello from SkyHigh Sim backend!');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
