module.exports = {
  
  
  friendlyName: 'Create',
  
  
  description: 'Create admin.',
  
  
  inputs: {
    email: {
      description: '',
      type: 'string',
      required: true,
      unique: true,
      isEmail: true
    },
    password: {
      description: '',
      type: 'string',
      required: true,
      custom: function(value) {
        // • be a string
        // • be at least 6 characters long
        // • contain at least one number
        // • contain at least one letter
        return _.isString(value) && value.length >= 6 && value.match(/[a-z]/i) && value.match(/[0-9]/);
      }
    },
    username: {
      description:'',
      type: 'string',
      required: true,
    },
    connection_time: {
      description: '',
      type: 'string',
      allowNull: true
    }
  },
  
  
  exits: {
    success: {
      statusCode: 200,
      description: 'New admin was added'
    },
    serverError: {
      statusCode: 500,
      description: 'Admin could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("admin/create");
    
    var newAdmin = await Admin.create({
      email: inputs.email,
      password: inputs.password,
      username: inputs.username,
      connection_time: inputs.connection_time
    })
    .intercept('E_UNIQUE', ()=>{
      return exits.serverError({
        info: 'Email already in use'
      });
    })
    .fetch();
    
    if(!newAdmin) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New admin added',
      id: newAdmin.id
    });
    
  }
  
  
};
