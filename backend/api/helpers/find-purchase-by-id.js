module.exports = {


  friendlyName: 'Find purchase by id',


  description: '',


  inputs: {
    id: {
      type: 'number'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let purchase = await Purchase.findOne({id: inputs.id});

    return exits.success(purchase);

  }


};

