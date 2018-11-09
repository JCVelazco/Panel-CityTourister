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
      //required
      place_type_id: (await PlaceType.find({where: {id: inputs.place_type_id}, select: ['id']}) == null)?
      exits.serverError({info: 'PlaceType not found'}):inputs.place_type_id,
      //required
      location_id: (await Location.find({where: {id: inputs.location_id}, select: ['id']}) == null)?
      exits.serverError({info: 'Location not found'}):inputs.location_id,
      //no required
      narrative_id: (inputs.narrative_id)?(await Narrative.find({where: {id: inputs.narrative_id}, select: ['id']}) == null)?
      exits.serverError({info: 'Narrative not found'}):inputs.narrative_id:null,
      //no required
      imagesOfPlaces: (inputs.imagesOfPlaces)?(await ImageOfPlace.find({where: {id: inputs.imagesOfPlaces}, select: ['id']}) == null)?
      exits.serverError({info: 'ImageOfPlace not found'}):inputs.imagesOfPlaces:null,
      //no required
      tours: (inputs.tours)?(await Tour.findOne({where: {id: inputs.tours}, select: ['id']}) == null)?
      exits.serverError({info: 'Tour not found'}):inputs.tours:null,
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
