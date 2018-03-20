import { expect, to, be, a } from 'chai';
import Component from '../src/client/components/primitives/Component';

describe('Client - Component Primitive', function() {
    it('#constructor()', function() {
        it('should be a class and intantiate without error', function(done) {
            expect(Component).to.be.a('function');
            expect(new Component()).to.be.a('object');
            done();
        });
    
    });

    it('#getName()', function() {
        it('should return the default name when not passed one', function(done) {
            const c = new Component();
            const n = c.getName();

            expect(n).to.be.a('string');
            expect(n).to.be('Unnamed Component');
            done();
        });

        it('should return the passed name', function(done) {
            const c = new Component({ name: 'Test Name' });
            const n = c.getName();

            expect(n).to.be.a('string');
            expect(n).to.be('Test Name');
            done();
        })
    });
});