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
      prices: inputs.prices,
      bracelets: inputs.bracelets,
      buses: inputs.buses,
      dateinformations: inputs.dateinformations,
      places: inputs.places
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
