var supertest = require('supertest');


describe('BusController', function() {
  
  
  describe('#add()', function(){
    it('should return a 200, of add bus success', function (done){
      supertest(sails.hooks.http.app)
      .post('/bus/add')
      .set({'auth': sails.session.token})
      .send({ availability: 'true',  numBus: 'BusNumber5'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put bus success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/bus/edit/1')
      .set({'auth': sails.session.token})
      .send({availability: 'false', numBus: 'BusNumber4'})
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
      .set({'auth': sails.session.token})
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
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
});
