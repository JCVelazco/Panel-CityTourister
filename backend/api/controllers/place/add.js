module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add Place.',
  
  
  inputs: {   
    name: {
      type: 'string',
      required: true,
      allowNull: false,
      minLength: 3
    },

    description: {
      type: 'string',
      required: true,
      allowNull: false,
      minLength: 5
    },

    place_type_id: {
      type: 'number',
      required: true
    },
    
    location_id: {
      type: 'number',
      required: true
    },
    
    narrative_id: {
      type: 'number',
      required: false,
      allowNull: true
    },

    imagesOfPlaces: {
      type: 'number',
      required: false,
      allowNull: true
    },

    placeTours: {
      type: 'number',
      required: false,
      allowNull: true
    }
  },
  
  exits: {
    success: {
      statusCode: 200,
      description: 'New Place was added'
    },
    serverError: {
      statusCode: 500,
      description: 'Place could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("Place/add");
    
    var newPlace = await Place.create({
      name: inputs.name,
      description: inputs.description,
      place_type_id: inputs.place_type_id,
      location_id: inputs.location_id,
      narrative_id: inputs.narrative_id,
      imagesOfPlaces: inputs.imagesOfPlaces,
      placeTours: inputs.placeTours
    })
    .fetch();
    
    if(!newPlace) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New Place added',
      id: newPlace.id
    });
    
  }
  
  
};
