# Nodejs-Server

## 'use strict';

### const { createServer } = require('node:http');

### const port = process.env.PORT || 5000;<br>
### const server = createServer((req, res) => {<br>
###   res.writeHead(200, { 'Content-Type': 'text/plain' });<br>
###    res.end("Hello World! Wellcome to the Server!");<br>
### }).listen(port);<br>

