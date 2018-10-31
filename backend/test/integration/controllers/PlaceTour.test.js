var supertest = require('supertest');

describe('PlaceTourController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add placetour success', function (done){
      supertest(sails.hooks.http.app)
      .post('/placetour')
      .send({ place_id: '1'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch placetour success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/placetour/1')
      .send({ place_id: '2'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put placetour success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/placetour/1')
      .send({ place_id: '1'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get placetour success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/placetour/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete placetour success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/placetour/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
