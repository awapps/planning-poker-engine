
const server = require('restify').createServer();

server.get('/status', (req, res, next) => {
    res.send('ok');
    next();
});
server.listen(process.env.PORT || 3000);
