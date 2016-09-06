
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
            name: 'new-room-name'
        };

        it('should return 200 OK for a valid Room', done => {
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

        it('should return 422 UnprocessableEntityError for a missing props Room', done => {
            request(server).post('/rooms')
            .send({})
            .expect(422)
            .end((err, res) => {
                return done(err);
            });
        });
    });

    describe('Add members', () => {
        const membersList = [
        {
            name: 'Foo'
        }, {
            name: 'Bar'
        }];

        it('should return 200 OK for valid Members list', done => {
            request(server).post('/rooms/1/members')
            .send(membersList)
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
