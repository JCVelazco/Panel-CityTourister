module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add PlaceTour.',
  
  
  inputs: {   
    place_id: {
      type: 'number',
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
      description: 'New PlaceTour was added'
    },
    serverError: {
      statusCode: 500,
      description: 'PlaceTour could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("PlaceTour/add");
    
    var newPlaceTour = await PlaceTour.create({
      place_id: inputs.place_id,
      tour_id: inputs.tour_id
    })
    .fetch();
    
    if(!newPlaceTour) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New PlaceTour added',
      id: newPlaceTour.id
    });
    
  }
  
  
};
