module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add tour.',
  
  
  inputs: {
    name: {
      type: 'string',
      required: true,
      allowNull: false,
      minLength: 5,
      maxLength: 20
    },

    image: {
      type: 'string', //check if ref isnt better
      required: true,
      allowNull: false,
      isURL: true
    },

    description: {
      type: 'string',
      required: true,
      allowNull: false,
      minLength: 10,
      maxLength: 200
    },
    prices: {
      type: 'number',
      required: false
    },
    bracelets: {
      type: 'number',
      required: false
    },
    buses: {
      type: 'number',
      required: false
    },
    dateinformations: {
      type: 'number',
      required: false
    },
    places: {
      type: 'number',
      required: false
    }
  },
  
  
  exits: {
    success: {
      statusCode: 200,
      description: 'New tour was added'
    },
    serverError: {
      statusCode: 500,
      description: 'tour could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("tour/add");
        
    var newTour = await Tour.create({
      name: inputs.name,
      image: inputs.image,
      description: inputs.description,
      //no required
      prices: (inputs.prices)?(await Price.find({where: {id: inputs.prices}, select: ['id']}) == null)?
      exits.serverError({info: 'Price not found'}):inputs.prices:null,
      //no required
      bracelets: (inputs.bracelets)?(await Bracelet.find({where: {id: inputs.bracelets}, select: ['id']}) == null)?
      exits.serverError({info: 'Bracelet not found'}):inputs.bracelets:null,
      //no required
      buses: (inputs.buses)?(await Bus.find({where: {id: inputs.buses}, select: ['id']}) == null)?
      exits.serverError({info: 'Bus not found'}):inputs.buses:null,
      //required
      dateinformations: (await DateInformation.find({where: {id: inputs.dateinformations}, select: ['id']}) == null)?
      exits.serverError({info: 'Date Info not found'}):inputs.dateinformations,
      //no required
      places: (inputs.places)?(await Place.find({where: {id: inputs.places}, select: ['id']}) == null)?
      exits.serverError({info: 'Place not found'}):inputs.places:null,
    })
    .fetch();
    
    if(!newTour) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New tour added',
      id: newTour.id
    });
    
  }
  
  
};
