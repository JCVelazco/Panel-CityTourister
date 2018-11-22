/*var supertest = require('supertest');

describe('PlaceTypeController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add placetype success', function (done){
      supertest(sails.hooks.http.app)
      .post('/placetype')
      .send({ name: 'Test Ticket Place'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch placetype success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/placetype/1')
      .send({ name: 'Test Ticket Place2'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put placetype success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/placetype/1')
      .send({ name: 'Test Ticket Place'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get placetype success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/placetype/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete placetype success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/placetype/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
*/