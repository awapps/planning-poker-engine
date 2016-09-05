
const request = require('supertest');
const should = require('chai').should();

const server = require('../../server');
const roomsController = require('../../controller/rooms');

describe('Rooms Controller', () => {
    it('should have a setup method', () => {
        roomsController.should.respondTo('setup');
    });

    describe('Creation', () => {
        const room = {
            owner: 'OwnerName',
            room: 'new-room-name',
        };

        it('should return OK', done => {
            request(server).post('/rooms')
            .send(room)
            .expect(200)
            .end((err, res) => {
                res.body.should.be.an('object');
                res.body.should.have.property('status');
                res.body.status.should.equal('SUCCESS');
                return done(err);
            });
        });
    });
});
