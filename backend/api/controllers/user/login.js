module.exports = {


  friendlyName: 'UserLogin',


  description: 'User login',


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
      statusCode: 200,
      description: 'User was found'
    },
    notFound: {
      statusCode: 500,
      description: 'User not found...'
    },
    incorrectPassword: {
      statusCode: 500,
      description: 'Wrong password...'
    }
  },


  fn: async function (inputs, exits) {

    sails.log.info("user/login");

    var user = await User.findOne({
      email: inputs.email
    }).decrypt();

    if(!user) return exits.notFound({
      info: 'User was not found'
    });

    if(inputs.password == user.password)
      return exits.success({
        info: 'Login success',
        id: user.id
      });
    
    return exits.incorrectPassword({
      info: 'Incorrect password...'
    });

  }


};
