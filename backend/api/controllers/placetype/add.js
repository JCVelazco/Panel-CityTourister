module.exports = {


  friendlyName: 'Add',


  description: 'Add placetype.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {module.exports = {
  
  
    friendlyName: 'Add',
    
    
    description: 'Add placetype.',
    
    
    inputs: {
      name: {
        type: 'string',
        required: true,
        unique: true,
        allowNull: false,
        maxLength: 50,
        minLength: 5
      },
    },
    
    
    fn: async function (inputs, exits) {
      
      sails.log.info("placetype/add");
          
      var newpPlacetype = await placetype.create({
        name: inputs.name
      })
      .fetch();
      
      if(!newpPlacetype) return exits.serverError({
        info: 'Internal server error'
      });
      
      return exits.success({
        info: 'New placetype added',
        id: newTickeT.id
      });
      
    }
    
    
  };
  

    return exits.success();

  }


};
