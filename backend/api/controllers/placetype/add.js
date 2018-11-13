module.exports = {
  
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

  exits: {
    success: {
      statusCode: 200,
      description: 'New placetype was added'
    },
    serverError: {
      statusCode: 500,
      description: 'PlaceType could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("placetype/add");
    
    var newPlacetype = await PlaceType.create({
      name: inputs.name
    })
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
     })
    .fetch();
    
    if(!newPlacetype) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New placetype added',
      id: newPlacetype.id
    });
    
  }
  
  
};


