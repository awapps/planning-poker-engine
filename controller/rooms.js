
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
*   @apiSuccess {String} OK Room successfully created.
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

/**
*   @api {post} /rooms/:id/members Add members to an existing room
*   @apiName AddMembers
*   @apiGroup Rooms
*   @apiParamExample {json} Members-Example:
*   [
*       {
*           "name": "Moe"
*       }, {
*           "name": "Curly"
*       }
*   ]
*
*   @apiSuccess {String} OK Members successfully added.
*
**/
const addMembers = (req, res, next) => {
    res.send({ status: 'SUCCESS' });
    return next();
};

/**
*   @api {delete} /rooms/:id/members Delete members from an existing room
*   @apiName DeleteMembers
*   @apiGroup Rooms
*   @apiParamExample {json} Members-Example:
*   [
*       {
*           "name": "Moe"
*       }, {
*           "name": "Curly"
*       }
*   ]
*
*   @apiSuccess {String} OK Members successfully deleted from the room.
*
**/
const deleteMembers = (req, res, next) => {
    res.send({ status: 'SUCCESS' });
    return next();
};

const controller = {
    setup: server => {
        server.post('/rooms', createRoom);
        server.post('/rooms/:id/members', addMembers);
        server.del('/rooms/:id/members', deleteMembers);
    }
};

module.exports = controller;
