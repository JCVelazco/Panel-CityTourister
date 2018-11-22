/*var supertest = require('supertest');

describe('UserController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add user success', function (done){
      supertest(sails.hooks.http.app)
      .post('/user/add')
      .send({ name: 'Test Prueba', email: 'test@email.com', password: 'test'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  describe('#login()', function() {
    it('should return a 200, of login user success', function (done) {
      supertest(sails.hooks.http.app)
      .post('/user/login')
      .send({ email: 'test@email.com', password: 'test' })
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#patch()', function() {
    it('should return a 200, of patch user success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/user/1')
      .send({ email: 'patch@email.com'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put user success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/user/1')
      .send({ name: 'User Patched', email: 'put@email.com', password: '123' })
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get user success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/user/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete user success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/user/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
*/
