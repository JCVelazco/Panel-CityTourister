var jwt = require('jsonwebtoken');

module.exports = {

  inputs: {

    email: {
      type: 'string'
    }
  
  },

  fn: async function (inputs, exits) {

    let token = jwt.sign({email: inputs.email}, sails.config.session.secret,{
      algorithm: sails.config.session.algorithm
    });

    return exits.success(token);
  
  }

};

