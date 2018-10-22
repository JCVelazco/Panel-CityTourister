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
      statusCode: 200,
      description: 'New admin was added'
    },
    serverError: {
      statusCode: 500,
      description: 'Admin could not be added'
    }
  },


  fn: async function (inputs, exits) {

    sails.log.info("admin/create");

    var newAdmin = await Admin.create({
      email: inputs.email,
      password: inputs.password
    }).fetch();

    if(!newAdmin) return exits.serverError({
      info: 'Internal server error'
    });

    return exits.success({
      info: 'New adming added',
      id: newAdmin.id
    });

  }


};
