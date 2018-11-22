/*var supertest = require('supertest');

describe('HourIntervalController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add hourinterval success', function (done){
      supertest(sails.hooks.http.app)
      .post('/hourinterval')
      .send({ start_time: '6:00', end_time: '20:00', frequency: '10'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch hourinterval success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/hourinterval/1')
      .send({ frequency: '15'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put hourinterval success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/hourinterval/1')
      .send({ start_time: '8:00', end_time: '21:00', frequency: '20'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get hourinterval success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/hourinterval/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete hourinterval success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/hourinterval/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
*/