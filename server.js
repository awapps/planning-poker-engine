
const server = require('restify').createServer();
const controller = require('./controller');

controller.setup(server);
server.listen(process.env.PORT || 3000);

module.exports = server;
