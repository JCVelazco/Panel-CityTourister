module.exports = {


  friendlyName: 'Add',


  description: 'Add company.',


  inputs: {
    name : {
      description: '',
      type: 'string',
      required: true,
    },
    full_name: {
      description: '',
      type: 'string',
      required: true,
      unique: true,
    },
    phone_number: {
      description: '',
      type: 'string',
      allowNull: true,
    },
    address: {
      description: '',
      type: 'string',
      allowNull: true,
    },
    postal_code: {
      description: '',
      type: 'string',
      allowNull: true
    },
    rfc: {
      description: '',
      type: 'string',
      allowNull: true
    },
    ieps: {
      description: '',
      type: 'number',
      required: true,
    },
    iva: {
      description: '',
      type: 'number',
      required: true
    },

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
    sails.log.info("company/add");

    var newCompany = await Company.create({
      name: inputs.name,
      full_name: inputs.full_name,
      phone_number: inputs.phone_number,
      postal_code: inputs.postal_code,
      address: inputs.address,
      rfc:  inputs.rfc,
      ieps: inputs.ieps,
      iva: inputs.iva
    }).fetch();

    if(!newCompany) return exits.serverError({
      info: 'Internal server error'
    });

    return exits.success({
      info: 'New company added',
      id: newCompany.id
    });

  }


};
