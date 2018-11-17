module.exports = {


  friendlyName: 'Find price by id',


  description: '',


  inputs: {
    id: {
      type:'number'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let price = await Price.findOne({id: inputs.id});

    return exits.success(price);

  }


};

