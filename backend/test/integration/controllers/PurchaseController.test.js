/*var supertest = require('supertest');

describe('PurchaseController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add purchase success', function (done){
      supertest(sails.hooks.http.app)
      .post('/purchase')
      .send({ sub_total: '80', total: '100', user_id: '1', company_id: '1'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch purchase success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/purchase/1')
      .send({ total: '110'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put purchase success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/purchase/1')
      .send({ sub_total: '90', total: '120'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get purchase success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/purchase/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete purchase success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/purchase/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
*/