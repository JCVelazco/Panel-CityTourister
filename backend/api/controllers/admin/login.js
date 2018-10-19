module.exports = {


  friendlyName: 'Login',


  description: 'Login admin.',


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

    sails.log("admin/login");

    var admin = await Admin.findOne({
      email: inputs.email
    }).decrypt();

    if(!admin) return exits.notFound();

    if(inputs.password == admin.password)
      return exits.success({id: admin.id});
    
    return exits.incorrectPassword.message;

  }


};
