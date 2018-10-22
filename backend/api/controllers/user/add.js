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
      message: 'User found!'
    },
    notFound: {
      message: 'User not found...'
    }
  },


  fn: async function (inputs, exits) {

    sails.log("users/add");

    var newUser = await User.create({
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
      phone_number: inputs.phone_number
    }).fetch();

    if(!newUser) return exits.serverError({info: 'Internal server error'});

    return exits.success({info: 'New user added',
                          id: newUser.id});

  }


};
