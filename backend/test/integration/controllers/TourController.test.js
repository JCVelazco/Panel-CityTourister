var supertest = require('supertest');

describe('TourController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add tour success', function (done){
      supertest(sails.hooks.http.app)
      .post('/tour')
      .send({ name: 'Tour Test', image: 'url', description: 'test descripcion'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch tour success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/tour/1')
      .send({ name: 'Tour Test Patch'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put tour success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/tour/1')
      .send({name: 'Tour Test2', image: 'url2', description: 'test descripcion 2'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get tour success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/tour/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete tour success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/tour/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
