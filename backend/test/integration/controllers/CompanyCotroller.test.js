/*var supertest = require('supertest');

describe('CompanyController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add company success', function (done){
      supertest(sails.hooks.http.app)
      .post('/company')
      .send({ name: 'Test Company', full_name: 'Test Company INC', phone_number: '0000000000', address: 'Por ahi', postal_code: '72222', rfc: 'abcd', ieps: '.1', iva:'.15'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#patch()', function() {
    it('should return a 200, of patch company success', function (done) {
      supertest(sails.hooks.http.app)
      .patch('/company/1')
      .send({ name: 'Patch Company'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put company success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/company/1')
      .send({ name: 'Test Com', full_name: 'Test Com INC', phone_number: '0000000001', address: 'Por aqui', postal_code: '72221', rfc: 'abcde', ieps: '.2', iva:'.16'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get company success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/company/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#delete()', function() {
    it('should return a 200, of delete company success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/company/1')
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
*/