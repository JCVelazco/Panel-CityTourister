/*var supertest = require('supertest');

describe('BusController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add bus success', function (done){
      supertest(sails.hooks.http.app)
      .post('/bus')
      .send({ availability: '1', tour_id: '1', numBus: 'BusNumber5'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch bus success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/bus/1')
      .send({ tour_id: '2'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put bus success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/bus/1')
      .send({availability: '0', tour_id: '1', numBus: 'BusNumber4'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get bus success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/bus/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete bus success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/bus/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
*/