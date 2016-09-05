
/**
 * @api {post} /rooms Create a new room
 * @apiName CreateRoom
 * @apiGroup Rooms
 * @apiParamExample {json} Room-Example:
 * 	{
 *  	"owner": "Moe",
 *  	"name": "my-room"
 *  }
 * @apiSuccess {String} OK Room successfully create.
 */
const createRoom = (req, res, next) => {
    console.log(req.body);
    res.send({ status: 'SUCCESS' });
    return next();
};

const controller = {
    setup: server => {
        server.post('/rooms', createRoom);
    }
};

module.exports = controller;
