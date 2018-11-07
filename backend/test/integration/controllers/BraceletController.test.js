var supertest = require('supertest');

describe('BraceletController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add bracelet success', function (done){
      supertest(sails.hooks.http.app)
      .post('/bracelet')
      .send({ active_at: '05/05/2018', status: '0', tour_id:'1', folio: '5555'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch bracelet success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/bracelet/1')
      .send({ status: '1'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put bracelet success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/bracelet/1')
      .send({ active_at: '05/06/2018', status: '0', tour_id: '2', folio: '5758'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get bracelet success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/bracelet/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete bracelet success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/bracelet/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
