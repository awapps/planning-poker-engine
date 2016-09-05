
const errors = require('restify-errors');

/**
*   @api {post} /rooms Create a new room
*   @apiName CreateRoom
*   @apiGroup Rooms
*   @apiParamExample {json} Room-Example:
*   {
*       "owner": "Moe",
*       "name": "my-room"
*   }
*
*   @apiSuccess {String} OK Room successfully create.
*   @apiError UnprocessableEntityError The room does not have all required props.
*
**/
const createRoom = (req, res, next) => {
    if (!(req.body.name && req.body.owner)) {
        return next(new errors.UnprocessableEntityError());
    }

    res.send({ status: 'SUCCESS' });
    return next();
};

const controller = {
    setup: server => {
        server.post('/rooms', createRoom);
    }
};

module.exports = controller;
