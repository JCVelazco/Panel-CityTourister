var supertest = require('supertest');

describe('PlaceController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add place success', function (done){
      supertest(sails.hooks.http.app)
      .post('/place')
      .send({ name: 'place Test', description: 'descrption of test', place_type_id:'1'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch place success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/place/1')
      .send({ place_type_id:'2'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put place success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/place/1')
      .send({ name: 'place Test2', description: 'descrption of test2', place_type_id:'3'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get place success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/place/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete place success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/place/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
