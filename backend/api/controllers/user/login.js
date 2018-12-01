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
    //it should have a 500 response code...
    notFound: {
      statusCode: 200,
      description: 'User not found...'
    },
    //it should have a 500 response code...
    incorrectPassword: {
      statusCode: 200,
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

    let token = await sails.helpers.generateToken(user.id, user.email, 'User');

    if(inputs.password == user.password){
      sails.session.userId = user.id;
      return exits.success({
        info: 'Login success',
        id: user.id,
        token: token
      });
    }
    
    return exits.incorrectPassword({
      info: 'Incorrect password'
    });

  }


};
