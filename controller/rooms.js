
/**
 * @api {post} /rooms Create a new room
 * @apiName CreateRoom
 * @apiGroup Rooms
 *
 * @apiSuccess {String} OK Room successfully create.
 */
const createRoom = (req, res, next) => {
    res.send({ status: 'SUCCESS' });
    return next();
};

const controller = {
    setup: server => {
        server.post('/rooms', createRoom);
    }
};

module.exports = controller;
