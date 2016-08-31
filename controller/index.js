
/**
 * @api {get} /status Check backend status
 * @apiName GetStatus
 *
 *
 * @apiSuccess {String} Backend status.
 */
const getStatus = (req, res, next) => {
    res.send(200, 'ok');
    return next();
};

const controller = {
    setup: server => {
        // server.post('/rooms', roomController.create);
        // server.put('/rooms/:id', roomController.update);

        server.get('/status', getStatus);
        server.get('/statu', getStatus);
    }
};

module.exports = controller;
