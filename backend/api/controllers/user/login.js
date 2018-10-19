module.exports = {


  friendlyName: 'Login',


  description: 'Login user.',


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
    },
    incorrectPassword: {
      message: 'Wrong password...'
    }
  },


  fn: async function (inputs, exits) {

    sails.log("users/login");

    var user = await User.findOne({
      email: inputs.email
    }).decrypt();

    if(!user) return exits.notFound();

    if(inputs.password == user.password)
      return exits.success({id: user.id});
    
    return exits.incorrectPassword.message;

  }


};
