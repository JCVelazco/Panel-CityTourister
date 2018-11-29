module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add Bus.',
  
  
  inputs: {   
    availability: {
      type: 'boolean',
      required: true,
      allowNull: false
    },
    
    numBus: {
      type: 'string',
      required: true,
      allowNull: false,
      minLength: 3
    },

    tour_id: {
      type: 'number',
      required: false
    }
  },
  
  exits: {
    success: {
      statusCode: 200,
      description: 'New Bus was added'
    },
    serverError: {
      statusCode: 500,
      description: 'Bus could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("Bus/add");

    //no required
    var key_oftour;
    //if i have recieve the field I check if its correct
    if(inputs.tour_id){
      key_oftour = (await Tour.findOne({where: {id: inputs.tour_id}, select: ['id']}) === undefined)?undefined:inputs.tour_id;
      if(key_oftour === undefined){
        return exits.serverError({
          info: 'Tour not found'
        });
      }
    }
    
    var newBus = await Bus.create({
      availability: inputs.availability,
      numBus: inputs.numBus,
      tour_id: key_oftour
    })
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
     })
    .fetch();
    
    if(!newBus) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New Bus added',
      id: newBus.id
    });
    
    
  }

  
  
};
