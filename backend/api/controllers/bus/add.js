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
    
    mural_id: {
      type: 'number',
      unique: true,
      required: true
    },
    tour_id: {
      type: 'number',
      required: true
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
    
    var newDateinterval = await Bus.create({
      availability: inputs.availability,
      numBus: inputs.numBus,
      mural_id: inputs.mural_id,
      tour_id: inputs.tour_id
    })
    .fetch();
    
    if(!newDateinterval) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New Bus added',
      id: newDateinterval.id
    });
    
  }
  
  
};
