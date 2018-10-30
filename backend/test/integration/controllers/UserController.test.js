var supertest = require('supertest');

describe('UserController.login', function() {

  describe('#add()', function(){
    it('should return a 200, of add user success', function (done){
      supertest(sails.hooks.http.app)
      .post('/user/add')
      .send({ name: 'Test Prueba', email: 'test@email.com', password: 'test'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })

  describe('#login()', function() {
    it('should return a 200, of login user success', function (done) {
      supertest(sails.hooks.http.app)
      .post('/user/login')
      .send({ email: 'test@email.com', password: 'test' })
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});

