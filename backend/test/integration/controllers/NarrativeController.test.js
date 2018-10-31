var supertest = require('supertest');

describe('NarrativeController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add narrative success', function (done){
      supertest(sails.hooks.http.app)
      .post('/narrative')
      .send({ audio_url: 'test.mp3'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch narrative success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/narrative/1')
      .send({  audio_url: 'test2.mp3'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put narrative success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/narrative/1')
      .send({  audio_url: 'test3.mp3'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get narrative success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/narrative/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete narrative success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/narrative/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
