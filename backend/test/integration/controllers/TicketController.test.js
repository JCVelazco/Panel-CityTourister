/*var supertest = require('supertest');

describe('TicketController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add ticket success', function (done){
      supertest(sails.hooks.http.app)
      .post('/ticket')
      .send({ name: 'Ticket Test', purchase_id: '1'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch ticket success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/ticket/1')
      .send({ name: 'Patch Test'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put ticket success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/ticket/1')
      .send({ name: 'Ticket Test Put', purchase_id: '2'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get ticket success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/ticket/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete ticket success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/ticket/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
*/