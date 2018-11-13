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

    latitude: {
      type: 'number',
      required: true
    },

    longitude: {
      type: 'number',
      required: true
    },

    narrative_url: {
      type: 'string',
      allowNull: true
    },
    
    place_type_id: {
      type: 'number',
      required: true
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
      longitude: inputs.longitude,
      latitude: inputs.latitude,
      narrative_url: inputs.narrative_url,
      //required
      place_type_id: key_ofplacetype,
      //no required
      imagesOfPlaces: key_ofimages,
      //no required
      tours: key_oftour,
    })
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
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
