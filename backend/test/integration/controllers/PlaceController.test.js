var supertest = require('supertest');


//ADD PLACETYPE, BECAUSE YOU NEED IT TO CREATE A PLACE
describe('PlaceTypeController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add placetype success', function (done){
      supertest(sails.hooks.http.app)
      .post('/placetype/add')
      .set({'auth': sails.session.token})
      .send({ name: 'Test Ticket Place'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#put()', function() {
    it('should return a 200, of put placetype success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/placetype/edit/1')
      .set({'auth': sails.session.token})
      .send({ name: 'Test Ticket Place Edit'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get placetype success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/placetype/1')
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});


describe('PlaceController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add place success', function (done){
      supertest(sails.hooks.http.app)
      .post('/place/add')
      .set({'auth': sails.session.token})
      .send({ name: 'place Test', description: 'descrption of test', place_type_id:'1', latitude: 15.0005, longitude: 48.5524})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#put()', function() {
    it('should return a 200, of put place success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/place/edit/1')
      .set({'auth': sails.session.token})
      .send({ name: 'place Test edited', description: 'descrption of test edited', place_type_id:'1', latitude: 17.0005, longitude: 58.5524})
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
      .set({'auth': sails.session.token})
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
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });

  describe('#delete()', function() {
    it('should return a 200, of delete placetype success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/placetype/1')
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
