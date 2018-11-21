module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add user.',
  
  
  inputs: {
    name: {
      type: 'string',
      required: true,
      maxLength: 50,
      minLength: 3
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true
    },
    password: {
      type: 'string',
      required: true,
      encrypt: true,
      minLength: 6
    },
    phone_number: {
      type: 'string',
      allowNull: true,
      minLength: 5,
      maxLength: 15
    },
  },
  
  
  exits: {
    success: {
      statusCode: 200,
      description: 'New user was added'
    },
    serverError: {
      statusCode: 500,
      description: 'User could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("users/add");
    
    var newUser = await User.create({
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
      phone_number: inputs.phone_number
    })
    .intercept('E_UNIQUE', ()=>{
      return exits.success({
        info: 'Email already in use'
      });
    })
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
     })
    .fetch();
    
    if(!newUser) return exits.serverError({
      info: 'Internal server error'
    });

    let token = await sails.helpers.generateToken(newUser.email);
    
    return exits.success({
      info: 'New user added',
      id: newUser.id,
      token: token
    });
    
  }
  
  
};
