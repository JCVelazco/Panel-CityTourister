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
    
    //required
    var key_ofplacetype = (await PlaceType.findOne({where: {id: inputs.place_type_id}, select: ['id']}) === undefined)?undefined:inputs.place_type_id;
    if(key_ofplacetype === undefined){
      return exits.serverError({
        info: 'PlaceType not found'
      });
    }
    
    //required
    var key_oflocation = (await Location.findOne({where: {id: inputs.location_id}, select: ['id']}) === undefined)?undefined:inputs.location_id;
    if(key_oflocation === undefined){
      return exits.serverError({
        info: 'Location not found'
      });
    }
    
    //no required
    var key_ofnarrative;
    //if i recieve the field I check if its correct
    if(inputs.ticket_id){
      key_ofnarrative = (await Narrative.findOne({where: {id: inputs.narrative_id}, select: ['id']}) === undefined)?undefined:inputs.narrative_id;
      if(key_ofnarrative === undefined){
        return exits.serverError({
          info: 'Narrative not found'
        });
      }
    }
    
    //no required
    var key_ofimages;
    //if i recieve the field I check if its correct
    if(inputs.ticket_id){
      key_ofimages = (await ImageOfPlace.findOne({where: {id: inputs.imagesOfPlaces}, select: ['id']}) === undefined)?undefined:inputs.imagesOfPlaces;
      if(key_ofimages === undefined){
        return exits.serverError({
          info: 'Image not found'
        });
      }
    }
    
    //no required
    var key_oftour;
    //if i recieve the field I check if its correct
    if(inputs.ticket_id){
      key_oftour = (await Tour.findOne({where: {id: inputs.tours}, select: ['id']}) === undefined)?undefined:inputs.tours;
      if(key_oftour === undefined){
        return exits.serverError({
          info: 'Tour not found'
        });
      }
    }
    
    var newPlace = await Place.create({
      name: inputs.name,
      description: inputs.description,
      //required
      place_type_id: key_ofplacetype,
      //required
      location_id: key_oflocation,
      //no required
      narrative_id: key_ofnarrative,
      //no required
      imagesOfPlaces: key_ofimages,
      //no required
      tours: key_oftour,
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
