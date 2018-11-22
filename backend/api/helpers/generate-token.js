var jwt = require('jsonwebtoken');

module.exports = {

  inputs: {
    id: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
  
  },

  fn: async function (inputs, exits) {

    let token = jwt.sign({
      id: inputs.id,
      email: inputs.email,
      type: inputs.type
    }, sails.config.session.secret,{
      algorithm: sails.config.session.algorithm
    }, (err, token)=>{
      if(!err) return exits.success(token);
    });
  
  }

};

