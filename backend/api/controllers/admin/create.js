module.exports = {


  friendlyName: 'Create',


  description: 'Create admin.',


  inputs: {
    email: {
      description: '',
      type: 'string',
      required: true
    },
    password: {
      description: '',
      type: 'string',
      required: true
    }
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

    var newAdmin = await Admin.create({
      email: inputs.email,
      password: inputs.password
    }).fetch();

    return newAdmin;

  }


};
