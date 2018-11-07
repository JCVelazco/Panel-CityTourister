module.exports = {


  friendlyName: 'Create',


  description: 'Create admin.',


  inputs: {
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
      maxLength: 14,
      minLength: 6
    },
    username: {
      description:'',
      type: 'string',
      required: true
    },
    connection_time: {
      description: '',
      type: 'string',
      allowNull: true
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
      password: inputs.password,
      username: inputs.username,
      connection_time: inputs.connection_time
    })
    .intercept('E_UNIQUE', ()=>{
      return exits.serverError({
        info: 'Email already in use'
      });
    })
    .fetch();

    if(!newAdmin) return exits.serverError({
      info: 'Internal server error'
    });

    return exits.success({
      info: 'New admin added',
      id: newAdmin.id
    });

  }


};
