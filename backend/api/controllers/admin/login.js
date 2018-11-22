var passport = require('passport');

module.exports = {


  friendlyName: 'AdminLogin',


  description: 'Admin login',


  inputs: {
    email: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Admin was found'
    },
    notFound: {
      statusCode: 500,
      description: 'Admin not found...'
    },
    incorrectPassword: {
      statusCode: 500,
      description: 'Wrong password...'
    }
  },


  fn: async function (inputs, exits) {

    sails.log.info("admin/login");

    var admin = await Admin.findOne({email: inputs.email}).decrypt();

    if(!admin) return exits.notFound({
      info: 'User was not found',
      color: 'danger'
    });
    
    let token = await sails.helpers.generateToken(admin.id, admin.email, 'Admin');

    if(inputs.password == admin.password){
      return exits.success({
        info: 'Login exitoso',
        color: 'success',
        id: admin.id,
        token: token
      });
    }
    
    return exits.incorrectPassword({
      info: 'Incorrect password',
      color: 'warning'
    });

  }


};
