var supertest = require('supertest');

describe('tickettypeController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add tickettype success', function (done){
      supertest(sails.hooks.http.app)
      .post('/tickettype')
      .send({ name: 'Puebla Test'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch tickettype success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/tickettype/1')
      .send({ name: 'Puebla Test Patch'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put tickettype success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/tickettype/1')
      .send({name: 'Puebla Test'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get tickettype success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/tickettype/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete tickettype success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/tickettype/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
