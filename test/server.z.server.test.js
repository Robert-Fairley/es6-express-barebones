import { expect } from 'chai';
import request from 'supertest';

/**
 * This test checks for a response with the correct status code
 * per implemented route. If you add more routes to your application,
 * then you need to add more test cases to match.
 */

describe('Server', function() {
    var server;
    beforeEach(function() {
        server = null;
        server = require('../src/server/index').default;
    });

    it('responds to /', function(done) {
        request(server)
            .get('/')
            .expect(200);
        server.close(done);
    });

    it('responds to /about', function(done) {
        request(server)
            .get('/about')
            .expect(200);
        server.close(done);
    });

    it('responds with 404 to everything else', function(done){
        request(server)
            .get('/broken')
            .expect(404);
        server.close(done);
    });

});
