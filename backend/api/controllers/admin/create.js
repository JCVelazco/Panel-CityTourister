module.exports = {
  
  
  friendlyName: 'Create',
  
  
  description: 'Create admin.',
  
  
  inputs: {
    email: {
      
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      allowNull:false
    },
    password: {
      
      type: 'string',
      required: true,
      encrypt:true,
      allowNull:false,
      custom: function(value) {
        // • be a string
        // • be at least 6 characters long
        // • contain at least one number
        // • contain at least one letter
        return _.isString(value) && value.length >= 6 && value.match(/[a-z]/i) && value.match(/[0-9]/);
      }
    },
    username: {
      type: 'string',
      required: true,
      allowNull: false
    },
    connection_time: {
      type: 'string',
      required:false,
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
        info: 'Email already in use',
        color: 'danger'
      });
    })
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
     })
    .fetch();
    
    if(!newAdmin) return exits.serverError({
      info: 'Internal server error',
      color: 'warning'
    });

    let token = await sails.helpers.generateToken(newAdmin.id, newAdmin.email, 'Admin');
    
    return exits.success({
      info: 'Éxito',
      color: 'success',
      id: newAdmin.id,
      token: token
    });
    
  }
  
  
};
