
const roomsController = require('./rooms');

/**
 * @api {get} /status Check application status
 * @apiName GetStatus
 * @apiGroup
 *
 * @apiSuccess {String} OK Application Status.
 */
const getStatus = (req, res, next) => {
    res.send(200, 'OK');
    return next();
};

const controller = {
    setup: server => {
        roomsController.setup(server);
        server.get('/status', getStatus);
    }
};

module.exports = controller;
