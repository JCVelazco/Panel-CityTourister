var supertest = require('supertest');

//first we create a date interval and a hour interval, because we will need it

//DATE INTERVAL
describe('DateIntervalController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add dateinterval success', function (done){
      supertest(sails.hooks.http.app)
      .post('/dateinterval/add')
      .set({'auth': sails.session.token})
      .send({ start_date: '1542938714', end_date: '1542998714', service:'true'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#put()', function() {
    it('should return a 200, of put dateinterval success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/dateinterval/edit/1')
      .set({'auth': sails.session.token})
      .send({start_date: '1542938715', end_date: '1542998715', service:'false'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get dateinterval success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/dateinterval/1')
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
});

//HOUR INTERVAL
describe('HourIntervalController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add hourinterval success', function (done){
      supertest(sails.hooks.http.app)
      .post('/hourinterval/add')
      .set({'auth': sails.session.token})
      .send({ start_time: '1542938714', end_time: '1542938820', frequency: '10'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  describe('#put()', function() {
    it('should return a 200, of put hourinterval success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/hourinterval/edit/1')
      .set({'auth': sails.session.token})
      .send({ start_time: '1542938715', end_time: '1542938830', frequency: '20'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get hourinterval success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/hourinterval/1')
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
});




//DATE INFO
describe('DateInformationController', function() {
  
  describe('#add()', function(){
    it('should return a 200, of add dateinformation success', function (done){
      supertest(sails.hooks.http.app)
      .post('/dateinformation/add')
      .set({'auth': sails.session.token})
      .send({hour_id: '1', date_id: '1'})
      .expect(200).end(function(err, res){
        if(err) throw err;
        done();
      })
    })
  })
  
  
  describe('#put()', function() {
    it('should return a 200, of put dateinformation success', function (done) {
      supertest(sails.hooks.http.app)
      .put('/dateinformation/edit/1')
      .set({'auth': sails.session.token})
      .send({hour_id: '1', date_id: '1'})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
  describe('#get()', function() {
    it('should return a 200, of get dateinformation success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/dateinformation/1')
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
  
});

//DELETE EVERYTHING
describe('DeleteHourDateIntervals', function() {
  
  describe('#delete()', function() {
    it('should return a 200, of delete dateinformation success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/dateinformation/1')
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });

  describe('#delete()', function() {
    it('should return a 200, of delete hourinterval success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/hourinterval/1')
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });

  describe('#delete()', function() {
    it('should return a 200, of delete dateinterval success', function (done) {
      supertest(sails.hooks.http.app)
      .delete('/dateinterval/1')
      .set({'auth': sails.session.token})
      .expect(200).end(function(err, res) {
        if (err) throw err;
        done();
      });
    });
  });
});