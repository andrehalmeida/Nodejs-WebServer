'use strict';

const { createServer } = require('node:http');

const port = process.env.PORT || 5000;
const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello World! Wellcome to the Server!");
}).listen(port);
