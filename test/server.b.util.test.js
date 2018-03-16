import { expect, to, equal, be, a } from 'chai';
import {
    statusCode,
    requestMethod,
    requestProtocol,
    log
} from '../src/server/util';
import { request } from 'http';

describe('Utility/Helper functions', function() {
    it('statusCode()', function() {
        it('should return a styled string when given a number or string', function(done) {
            let s,n;
            let result = '\u001b[32m200\u001b[39m';

            s = statusCode('200');
            n = statusCode(200);
            
            expect(s).to.be.a('string');
            expect(n).to.be.a('string');
            expect(s).to.have.length.of(3);
            expect(n).to.have.length.of(3);
            expect(s).to.be(result);
            expect(n).to.equal(result);
            done();
        });

        it('should fail if not passed a number or string', function(done) {
            let o,a,s;
            o = statusCode({ status: '404' });
            a = statusCode([ 404, 403 ]);
            s = statusCode(new Symbol(500));

            expect(o).to.not.be.a('string');
            expect(a).to.not.be.a('string');
            expect(s).to.not.be.a('string');
            expect(o).to.be.a('function');
            expect(a).to.be.a('function');
            expect(s).to.be.a('function');
            done();
        });
    });

    it('requestMethod()', function() {
        it('should return a styled string when given a string', function(done) {
            let g,p,pt,d;
            g = requestMethod('GET');
            p = requestMethod('POST');
            pt = requestMethod('PUT');
            d = requestMethod('DELETE');

            expect(g).to.be.a('string');
            expect(p).to.be.a('string');
            expect(pt).to.be.a('string');
            expect(d).to.be.a('string');

            expect(g).to.be('\u001b[1m\u001b[90mGET\u001b[39m\u001b[22m');
            expect(p).to.be('\u001b[1m\u001b[37mPOST\u001b[39m\u001b[22m');
            expect(pt).to.be('\u001b[1m\u001b[33mPUT\u001b[39m\u001b[22m');
            expect(d).to.be('\u001b[1m\u001b[31mDELETE\u001b[39m\u001b[22m');

            done();
        });

        it('should fail when passed an argument that is not a string', function(done) {
            let n,o,a,s;
            n = requestMethod(555);
            o = requestMethod({ method: 'GET' });
            a = requestMethod([ 'GET', 'POST', 'PUT', 'DELETE' ]);
            s = requestMethod(new Symbol('GET'));

            expect(n).to.not.be.a('string');
            expect(o).to.not.be.a('string');
            expect(a).to.not.be.a('string');
            expect(s).to.not.be.a('string');

            expect(n).to.be.a('function');
            expect(o).to.be.a('function');
            expect(a).to.be.a('function');
            expect(s).to.be.a('function');

            done();
        });
    });

    it('requestProtocol()', function() {
        it('should return a styled string when passed a string', function(done) {
            let h,s;
            h = requestProtocol('http');
            s = requestProtocol('https');

            expect(h).to.be.a('string');
            expect(s).to.be.a('string');

            expect(h).to.be('\u001b[90mHTTP\u001b[39m');
            expect(s).to.be('\u001b[90mHTTPS\u001b[39m');

            done();
        });

        it('should fail when passed an argument that is not a string', function(done) {
            let n,o,a,s;
            n = requestProtocol(404);
            o = requestProtocol({ protocol: 'https' });
            a = requestProtocol([ 'http', 'https' ]);
            s = requestProtocol(new Symbol('https'));

            expect(n).to.not.be.a('string');
            expect(o).to.not.be.a('string');
            expect(a).to.not.be.a('string');
            expect(s).to.not.be.a('string');

            expect(n).to.be.a('function');
            expect(o).to.be.a('function');
            expect(a).to.be.a('function');
            expect(s).to.be.a('function');

            done();
        });
    });

    it('log()', function() {
        it('should return a route string when provided request and response objects', function(done) {
            let request = { protocol: 'http', method: 'GET', url: '/', ip: '127.0.0.1' };
            let response = { status: '200' };

            let r = log(null, request, response);

            expect(r).to.be.a('string');
            expect(r).to.be('\u001b[33m[Server]\u001b[39m \u001b[90mHTTP\u001b[39m \u001b[1m\u001b[90mGET\u001b[39m\u001b[22m \u001b[32m200\u001b[39m - / FROM: 127.0.0.1');
            done();
        });

        it('should return a regular log message when provided a message', function(done){
            let message = 'Everything looks okay.';
            let result  = '\u001b[33m[Server]\u001b[39m Everything looks okay.';

            let a = log(message, {}, {});
            let b = log(message, null, null);
            let c = log(message);

            expect(a).to.be.a('string');
            expect(b).to.be.a('string');
            expect(c).to.be.a('string');

            expect(a).to.be(result);
            expect(b).to.be(result);
            expect(c).to.be(result);

            done();
        });
    });

    it('error()', function(){
        it('should return a styled error message when passed a message', function() {
            let message = 'Something went wrong.';
            let result = '\u001b[33m[Server]\u001b[39m \u001b[101m\u001b[31mSomething went wrong.\u001b[39m\u001b[49m';

            let a = error(message);
            
            expect(a).to.be.a('string');
            
            expect(a).to.be(result);
            done();
        });

        it('should return a generic error message when no arguments are passed', function() {
            let result = '\u001b[33m[Server]\u001b[39m \u001b[101m\u001b[31mThere has been an unreported error.\u001b[39m\u001b[49m';

            let a = error();

            expect(a).to.be.a('string');

            expect(a).to.be(result);
            done();
        });
    });
});
