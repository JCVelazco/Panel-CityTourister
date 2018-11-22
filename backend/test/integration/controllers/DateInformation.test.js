/*var supertest = require('supertest');

describe('DateInformationController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add dateinformation success', function (done){
      supertest(sails.hooks.http.app)
      .post('/dateinformation')
      .send({hour_id: '1'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch dateinformation success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/dateinformation/1')
      .send({hour_id: '2'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put dateinformation success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/dateinformation/1')
      .send({hour_id: '1'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get dateinformation success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/dateinformation/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete dateinformation success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/dateinformation/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
*/