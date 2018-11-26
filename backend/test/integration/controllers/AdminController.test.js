var supertest = require('supertest');
var istanbul = require('istanbul');

describe('AdminController', function() {
    
    
    describe('#create()', function() {
        it('should return a 200, of create admin success', function (done){
            supertest(sails.hooks.http.app)
            .post('/admin/create')
            .send({ email: 'test@admin.com', username: 'JCarlos',password: 'test123'})
            .expect(200).end(function(err, res){
                if(err) throw err;
                done();
            })
        })
    });
    
    describe('#login()', function() {
        it('should return a 200, of login admin success', function (done) {
            supertest(sails.hooks.http.app)
            .post('/admin/login')
            .send({ email: 'test@admin.com', password: 'test123' })
            .expect(200).end(function(err, res) {
                if (err) throw err;
                sails.session.token = res.body.token
                done();
            });
        });
    });
    
    describe('#put()', function() {
        it('should return a 200, of put admin success', function (done) {
            supertest(sails.hooks.http.app)
            .put('/admin/edit/1')
            .set({'auth':sails.session.token})
            .send({ email: 'test@admin.com', password: 'test1234'})
            .expect(200).end(function(err, res) {
                if (err) throw err;
                done();
            });
        });
    });
    
    describe('#get()', function() {
        it('should return a 200, of get admin success', function (done) {
            supertest(sails.hooks.http.app)
            .get('/admin/1')
            .set({'auth':sails.session.token})
            .expect(200).end(function(err, res) {
                if (err) throw err;
                done();
            });
        });
    });
    /*
    
    describe('#delete()', function() {
        it('should return a 200, of delete admin success', function (done) {
            supertest(sails.hooks.http.app)
            .delete('/admin/1')
            .set({'auth':sails.session.token})
            .expect(200).end(function(err, res) {
                if (err) throw err;
                done();
            });
        });
    });*/
    
})

