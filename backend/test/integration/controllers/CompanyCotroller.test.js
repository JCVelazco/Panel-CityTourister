var supertest = require('supertest');

describe('CompanyController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add company success', function (done){
      supertest(sails.hooks.http.app)
      .post('/company/add')
      .set({'auth': sails.session.token})
      .send({ name: 'Test Company', full_name: 'Test Company INC', ieps: .1, iva:.15})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  describe('#put()', function() {
    it('should return a 200, of put company success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/company/edit/1')
      .set({'auth': sails.session.token})
      .send({ name: 'Test Com', full_name: 'Test Com INC', ieps: .2, iva:.16})
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
      .set({'auth': sails.session.token})
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
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});
