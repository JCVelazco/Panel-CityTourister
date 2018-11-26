var supertest = require('supertest');

//TO CREATE A TICKET YOU WILL NEED A PURCHASE AND A PRICE

//PRICE
//TO CREATE A PRICE YOU NEED A TOUR AND A TICKETTYPE

//TICKETYPE CREATION:
describe('TicketTypeController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add tickettype success', function (done){
      supertest(sails.hooks.http.app)
      .post('/tickettype/add')
      .set({'auth': sails.session.token})
      .send({ name: 'TicketType Test'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#put()', function() {
    it('should return a 200, of put tickettype success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/tickettype/edit/1')
      .set({'auth': sails.session.token})
      .send({name: 'Test'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get tickettype success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/tickettype/1')
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
});


//ADD TOUR
describe('TourController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add tour success', function (done){
      supertest(sails.hooks.http.app)
      .post('/tour/add')
      .set({'auth': sails.session.token})
      .send({ name: 'Tour Test', image: 'image.jpg', description: 'test descripcion'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  describe('#put()', function() {
    it('should return a 200, of put tour success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/tour/edit/1')
      .set({'auth': sails.session.token})
      .send({name: 'Tour Test2', image: 'url2.jpg', description: 'test descripcion 2'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get tour success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/tour/1')
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});



//CREATE PRICE
describe('PriceController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add price success', function (done){
      supertest(sails.hooks.http.app)
      .post('/price/add')
      .set({'auth': sails.session.token})
      .send({ priceAmount: 100, ticket_type_id: '1', tour_id: '1'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      });
    });
  });
  
  
  describe('#put()', function() {
    it('should return a 200, of put price success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/price/edit/1')
      .set({'auth': sails.session.token})
      .send({priceAmount: 110, ticket_type_id: '1', tour_id: '1'})
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
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});


//PURCHASE
//TO CREATE A PURCHASE YOU NEED A USER AND A COMPANY

//COMPANY CREATOR
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
});

//USER CREATOR
describe('UserController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add user success', function (done){
      supertest(sails.hooks.http.app)
      .post('/user/add')
      .send({ name: 'Test Prueba', email: 'test@email.com', password: 'test123'})
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
      .send({ email: 'test@email.com', password: 'test123' })
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#put()', function() {
    it('should return a 200, of put user success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/user/edit/1')
      .set({'auth': sails.session.token})
      .send({ name: 'User Patched', email: 'put@email.com', password: '123abc' })
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get user success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/user/1')
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
});

//PURCHASE CREATOR
describe('PurchaseController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add purchase success', function (done){
      supertest(sails.hooks.http.app)
      .post('/purchase/add')
      .set({'auth': sails.session.token})
      .send({date_tour: '1542938714', user_id: '1', company_id: '1'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  describe('#put()', function() {
    it('should return a 200, of put purchase success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/purchase/edit/1')
      .set({'auth': sails.session.token})
      .send({ date_tour: '1542538714', user_id: '1', company_id: '1'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
});


//ticket creator
describe('TicketController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add ticket success', function (done){
      supertest(sails.hooks.http.app)
      .post('/ticket/add')
      .set({'auth': sails.session.token})
      .send({ name: 'Ticket Test', qr_code: 'a5a4s5as15a', purchase_id: '1', price_id: '1'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  describe('#put()', function() {
    it('should return a 200, of put ticket success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/ticket/edit/1')
      .set({'auth': sails.session.token})
      .send({ name: 'Ticket Test edit', qr_code: 'a5a4s5ass5a', purchase_id: '1', price_id: '1'})
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
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get purchase success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/purchase/1')
      .set({'auth': sails.session.token})
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
      .set({'auth': sails.session.token})
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
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });

  describe('#delete()', function() {
    it('should return a 200, of delete tour success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/tour/1')
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });

  describe('#delete()', function() {
    it('should return a 200, of delete tickettype success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/tickettype/1')
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

  describe('#delete()', function() {
    it('should return a 200, of delete user success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/user/1')
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});