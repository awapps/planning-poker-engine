
const restify = require('restify');
const server = restify.createServer();
const controller = require('./controller');

server.use(restify.queryParser());
server.use(restify.bodyParser());

controller.setup(server);

server.listen(process.env.PORT || 3000);

module.exports = server;
