module.exports = {


  friendlyName: 'Find user by id',


  description: '',


  inputs: {
    id: {
      type: 'number'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let user = await User.findOne({id: inputs.id});

    return exits.success(user);

  }


};

