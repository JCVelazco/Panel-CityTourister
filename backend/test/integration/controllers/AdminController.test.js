var supertest = require('supertest');

describe('AdminController.login', function() {

  describe('#login()', function() {
    it('should return a 200, of login admin success', function (done) {
      supertest(sails.hooks.http.app)
      .post('/admin/login')
      .send({ email: 'test@email.com', password: 'test' })
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});

