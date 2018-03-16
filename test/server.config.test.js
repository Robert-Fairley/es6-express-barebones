import { expect, to, be, a } from 'chai';
import Config from '../src/server/config';

describe('Config Object Properties', function() {
    it('PRODUCTION', function() {
        let productionMode = Config.PRODUCTION;

        it('should set to true if in production mode', function(done) {
            let tmp = process.env.NODE_ENV;
            process.env.NODE_ENV = 'production';

            expect(productionMode).to.be.a('boolean');
            expect(productionMode).to.be(true);
            expect(productionMode).to.not.be(false);

            process.env.NODE_ENV = tmp;
            done();
        });

        it('should be set to false if in development mode', function(done) {
            let tmp = process.env.NODE_ENV;
            process.env.NODE_ENV = 'development';

            expect(productionMode).to.be.a('boolean');
            expect(productionMode).to.be(false);
            expect(productionMode).to.not.be(true);

            process.env.NODE_ENV = tmp;
            done();
        });
    });

    it('PROMPT', function() {
        let prompt = Config.PROMPT;

        it('should be a styled string', function() {
            expect(prompt).to.be.a('string');
            expect(prompt.contains('\u001b[33m')).to.be(true);
            expect(prompt.contains('\u001b[39m')).to.be(true);

            done();
        });
    });

    it('ADDR', function() {
        let addr = Config.PROMPT;

        it('should be a string', function() {
            expect(addr).to.be.a('string');
            done();
        });
    });

    it('PORT', function() {
        let port = Config.PORT;

        it('should be a number four digits long', function(done) {
            expect(port).to.be.a(number);
            expect(port.toString()).to.satisfy(n => {
                return (n == 2 || n == 4)
                    ? true
                    : false;
            });
            done();  
        })
    })
});
