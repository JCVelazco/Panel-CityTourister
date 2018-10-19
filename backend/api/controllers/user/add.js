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
    },
    birthdate: {
      description: '',
      type: 'string',
      allowNull: true
    },
    password: {
      description: '',
      type: 'string',
      required: true
    },
    postal_code: {
      description: '',
      type: 'string',
      allowNull: true
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
      birthdate: inputs.birthdate,
      password: inputs.password,
      postal_code: inputs.postal_code,
      phone_number: inputs.phone_number
    }).fetch();

    return newUser;

  }


};
