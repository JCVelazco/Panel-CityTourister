var supertest = require('supertest');

describe('MuralController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add mural success', function (done){
      supertest(sails.hooks.http.app)
      .post('/mural')
      .send({ title: 'Mural test', author_name: 'test check', description:'checking the test'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch mural success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/mural/1')
      .send({ title: 'Test Mural'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put mural success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/mural/1')
      .send({ title: 'Mural test2', author_name: 'test check2', description:'checking the test2'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get mural success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/mural/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete mural success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/mural/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
