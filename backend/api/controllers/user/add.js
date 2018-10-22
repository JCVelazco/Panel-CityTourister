module.exports = {


  friendlyName: 'Add',


  description: 'Add user.',


  inputs: {
    name: {
      description: '',
      type: 'string',
      required: true,
    },
    email: {
      description: '',
      type: 'string',
      required: true,
      unique: true,
    },
    password: {
      description: '',
      type: 'string',
      required: true
    },
    phone_number: {
      description: '',
      type: 'string',
      allowNull: true
    },
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'New user was added'
    },
    serverError: {
      statusCode: 500,
      description: 'Admin could not be added'
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
    .intercept()
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
