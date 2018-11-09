module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add Place.',
  
  
  inputs: {   
    name: {
      type: 'string',
      required: true,
      allowNull: false,
      minLength: 3,
      unique: true
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

    tours: {
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
      place_type_id: (await PlaceType.findOne({where: {id: inputs.place_type_id}, select: ['id']}) == null)?
      exits.serverError({info: 'PlaceType not found'}):inputs.place_type_id,
      location_id: (await Location.findOne({where: {id: inputs.location_id}, select: ['id']}) == null)?
      exits.serverError({info: 'Location not found'}):inputs.location_id,
      narrative_id: (await Narrative.findOne({where: {id: inputs.narrative_id}, select: ['id']}) == null)?
      exits.serverError({info: 'Narrative not found'}):inputs.narrative_id,
      imagesOfPlaces: (await ImageOfPlace.findOne({where: {id: inputs.imagesOfPlaces}, select: ['id']}) == null)?
      exits.serverError({info: 'Image not found'}):inputs.imagesOfPlaces,
      tours: (await Tour.findOne({where: {id: inputs.tours}, select: ['id']}) == null)?
      exits.serverError({info: 'Tour not found'}):inputs.tours,
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
