
const request = require('supertest');
const should = require('chai').should();

const server = require('../../server');
const controller = require('../../controller');

describe('Controller', () => {
    it('should have a setup method', () => {
        controller.should.respondTo('setup');
    });

    it('should return OK for /status', done => {
        request(server).get('/status')
        .expect(200)
        .end((err, res) => {
            res.body.should.equal('ok');
            return done(err);
        });
    });
});
