module.exports = {


  friendlyName: 'Add',


  description: 'Add user.',


  inputs: {
    name: {
      description: '',
      type: 'string',
      required: true,
      maxLength: 50,
      minLength: 3
    },
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
      minLength: 6,
      maxLength: 14
    },
    phone_number: {
      description: '',
      type: 'string',
      allowNull: true,
      minLength: 10,
      maxLength: 10
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
      return exits.serverError({
        info: 'Email already in use'
      });
    })
    .fetch();

    if(!newUser) return exits.serverError({
      info: 'Internal server error'
    });

    return exits.success({
      info: 'New user added',
      id: newUser.id
    });

  }


};
