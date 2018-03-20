import { expect, to, be, a, not } from 'chai';
const jsdom = require('jsdom');

import Counter from '../src/client/components/Counter';

const { JSDOM } = jsdom;

describe('Client - Counter Component', function() {
    it('#constructor()', function() {
        it('should instantiate without error', function(done) {

            expect(Counter).to.be.a('function');
            expect(new Counter()).to.be.a('object');

            done();
        });

        it('should return the default name when no props passed', function(done) {
           
            const c = new Counter();
            const n = c.getName();

            expect(n).to.be.a('string');
            expect(n).to.be('World');

            done();
        });

        it('should return the passed name when props passed', function(done) {
         
            const c = new Counter({ name: 'Test Counter' });
            const n = c.getName();

            expect(n).to.be.a('string');
            expect(n).to.be('Test Counter');

            done();
        });

        it('should have a state object with a count value of 0', function(done) {
       
            const c = new Counter();
            const x = c.state.count;

            expect(x).to.be.a('number');
            expect(x).to.equal(0);
            expect(x).to.not.equal(1);
            expect(x).to.not.equal(-1);

            done();
        });
    });

    it('#increaseCount()', function() {
        const c = new Counter();

        it('should increase the count by 1', function(done) {
            let count = c.state.count;

            expect(count).to.equal(0);
            c.increaseCount();
            expect(count).to.equal(1);
            c.increaseCount();
            expect(count).to.equal(2);

            done();
        });
    });

    it('#decreaseCount()', function() {
        const c = new Counter();
        it('should decrease the count by 1', function() {
            let count = c.state.count = 1;
            
            expect(count).to.equal(1);
            c.decreaseCount();
            expect(count).to.equal(0);
            c.decreaseCount();
            expect(count).to.equal(-1);

            done();
        })
    });

    it('#render()', function() {
        const dom = new JSDOM(`<!DOCTYPE html><div id="test"></div>`);
        const APP_ROOT = dom.window.document.querySelector('#test');

        it('should mount to the APP_ROOT element without error', function(done) {
            const c = new Counter();
            
            try {
                c.render(APP_ROOT);
                APP_ROOT.innerHTML = null;
                done();
            } catch(err) {
                APP_ROOT.innerHTML = null;
                done(err);
            }
        });

        it('should mount and present a message', function(done) {
            const testMessage = 'Hello, World!'; // Uses default name
            const c = new Counter();
            c.render(APP_ROOT);
            let presentedMessage = APP_ROOT.querySelector('.message').innerText;

            expect(presentedMessage).to.be.a('string');
            expect(presentedMessage).to.be(testMessage);

            APP_ROOT.innerHTML = null;

            done();
        });

        it('should mount and display the count', function(done) {
            let testCount = 0;
            const c = new Counter();
            c.render(APP_ROOT);
            let presentedCount = APP_ROOT.querySelector('.count').innerText;

            expect(presentedCount).to.equal(testCount);
            c.increaseCount();
            expect(presentedCount).to.equal(testCount + 1);

            APP_ROOT.innerHTML = null;

            done();
        });

        it('should mount and have working control buttons', function(done) {
            const c = new Counter();
            c.render(APP_ROOT);
            const buttons = APP_ROOT.querySelectorAll('button');

            expect(buttons[0]).to.be.a('object');
            expect(buttons[1]).to.be.a('object');
            expect(buttons[0].innerText).to.be('++');
            expect(buttons[1].innerText).to.be('--');

            expect(c.state.count).to.equal(0);
            buttons[0].click();
            expect(c.state.count).to.equal(1);
            buttons[1].click();
            expect(c.state.count).to.equal(0);

            APP_ROOT.innerHTML = null;

            done();
        });
    });
});