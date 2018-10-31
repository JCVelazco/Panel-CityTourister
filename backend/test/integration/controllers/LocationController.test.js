var supertest = require('supertest');

describe('LocationController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add location success', function (done){
      supertest(sails.hooks.http.app)
      .post('/location')
      .send({ latitude: '18', longitude: '-4'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch location success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/location/1')
      .send({ latitude: '17'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put location success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/location/1')
      .send({ latitude: '19', longitude: '-5'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get location success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/location/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete location success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/location/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
