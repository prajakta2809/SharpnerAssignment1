const http = require('http');
const { log } = require('console');

const routes =require('./routes');
//console.log(routes.someText);

const server=http.createServer(routes);
server.listen(4000);