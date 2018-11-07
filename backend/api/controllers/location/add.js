module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add location.',
  
  
  inputs: {
    latitude: {
      type: 'number',
      required: true,
      allowNull: false,
    },
    
    longitude: {
      type: 'number',
      required: true,
      allowNull: false,
    },
  },
  
  exits: {
    success: {
      statusCode: 200,
      description: 'New location was added'
    },
    serverError: {
      statusCode: 500,
      description: 'Location could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("location/add");
    
    var newLocation = await Location.create({
      latitude: inputs.latitude,
      longitude: inputs.longitude
    })
    .fetch();
    
    if(!newLocation) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New location added',
      id: newTickeT.id
    });
    
  }
  
  
};

