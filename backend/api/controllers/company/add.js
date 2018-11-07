module.exports = {


  friendlyName: 'Add',


  description: 'Add user.',


  inputs: {
    name: {
      type: 'string',
      required: true,
    },

    full_name: {
      type: 'string',
      required: true,
      unique: true
    },

    phone_number: {
      type: 'string',
      allowNull: true
    },

    address: {
      type: 'string',
      allowNull: true
    },

    postal_code: {
      type: 'string',
      allowNull: true
    },

    rfc: {
      type: 'string',
      allowNull: true,
    },

    ieps: {
      type: 'number',
      required: true
    },

    iva: {
      type: 'number',
      required: true
    },

    purchases: {
      collection: 'purchase',
      via: 'company_id',
    }
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'New company was added'
    },
    serverError: {
      statusCode: 500,
      description: 'Company could not be added'
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
    .intercept('E_UNIQUE', ()=>{
      return new Error('Email already in use');
    })
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
