
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
import server from '../index';
let should = chai.should();

chai.use(chaiHttp);

describe('User', () => {
    beforeEach((done) => {
        done();
    });

    describe('/GET user', () => {
        it('it should GET all the user', (done) => {
            chai.request(server)
                .get('/api/user?offset=0&limit=3')
                .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVlZDI1YTQyLTdlYzQtNGQzMi1hNTY2LTBmZDMxNWI5MWE0YSIsIm5hbWUiOiJIdXUgVGFpIiwicm9sZSI6ImRpcmVjdG9yIiwiaWF0IjoxNjE1NDcxMzgyLCJleHAiOjE2NDcwMjg5ODJ9.sbTKJIM0jA-DwKSAK7PHkrxRwEZPtUKMfGtXCCUYDkM')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(3); // fixme :)
                    done();
                });
        });
    });

    describe('/GET user', () => {
        it('it should error no token provided', (done) => {
            chai.request(server)
                .get('/api/user?offset=0&limit=3')
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });
    });

    describe('/GET user', () => {
        it('it should invalid token', (done) => {
            chai.request(server)
                .get('/api/user?offset=0&limit=3')
                .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.edlYzQtNGQzMi1gVGFpIiwicm9sZSI6ImRpcmVjdG9yIiwiaWF0IjoxNjE1NDcxMzgyLCJleHAiOjE2NDcwMjg5ODJ9.sbTKJIM0jA-DwKSAK7PHkrxRwEZPtUKMfGtXCCUYDkM')
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });
    });

    describe('/GET user', () => {
        it('it should role is not allow', (done) => {
            chai.request(server)
                .get('/api/user?offset=0&limit=3')
                .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVlZDI1YTQyLTdlYzQtNGQzMi1hNTY2LTBmZDMxNWI5MWE0YSIsIm5hbWUiOiJIdXUgVGFpIiwicm9sZSI6ImRpcmVjdG8iLCJpYXQiOjE2MTU2MjE4NjEsImV4cCI6MTY0NzE3OTQ2MX0.r1GDFhPwjv27uL5x6izojwSvRzoFnbyRpgJpJR94vR4')
                .end((err, res) => {
                    res.should.have.status(403);
                    done();
                });
        });
    });

    describe('/GET user', () => {
        it('it should no pass queryString offset or limit or (offset and limit)', (done) => {
            chai.request(server)
                .get('/api/user')
                .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVlZDI1YTQyLTdlYzQtNGQzMi1hNTY2LTBmZDMxNWI5MWE0YSIsIm5hbWUiOiJIdXUgVGFpIiwicm9sZSI6ImRpcmVjdG8iLCJpYXQiOjE2MTU2MjE4NjEsImV4cCI6MTY0NzE3OTQ2MX0.r1GDFhPwjv27uL5x6izojwSvRzoFnbyRpgJpJR94vR4')
                .end((err, res) => {
                    res.should.have.status(403);
                    done();
                });
        });
    });
});