/*var supertest = require('supertest');

describe('PriceController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add price success', function (done){
      supertest(sails.hooks.http.app)
      .post('/price')
      .send({ priceAmount: '100', ticket_type_id: '1', tour_id: '1'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch price success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/price/1')
      .send({ priceAmount: '120'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put price success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/price/1')
      .send({priceAmount: '110', ticket_type_id: '2', tour_id: '2'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get price success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/price/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete price success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/price/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
*/