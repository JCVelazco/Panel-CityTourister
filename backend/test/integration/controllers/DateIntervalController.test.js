var supertest = require('supertest');

describe('DateIntervalController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add dateinterval success', function (done){
      supertest(sails.hooks.http.app)
      .post('/dateinterval')
      .send({ start_date: '05/05/2018', end_date: '08/05/2018', service:'0'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch dateinterval success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/dateinterval/1')
      .send({ service: '1'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put dateinterval success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/dateinterval/1')
      .send({ start_date: '05/05/2019', end_date: '08/05/2019', service:'0'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get dateinterval success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/dateinterval/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete dateinterval success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/dateinterval/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
