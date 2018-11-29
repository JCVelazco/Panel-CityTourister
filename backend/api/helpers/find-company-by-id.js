module.exports = {


  friendlyName: 'Find company by id',


  description: '',


  inputs: {
    id: {
      type: 'number'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let company = await Company.findOne({id: inputs.id});

    return exits.success(company);

  }


};

