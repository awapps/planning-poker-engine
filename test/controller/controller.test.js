
const should = require('chai').should();
const controller = require('../../controller');

describe('Controller', () => {
    describe('index', () =>{
        it('should be a function', () =>{
            controller.dummy.should.be.a('function');
        });

        it('should return true if param is used', () =>{
            controller.dummy(1).should.equal(true);
        });

        it('should return false if param is not used', () =>{
            controller.dummy().should.equal(false);
        });
    });
});
