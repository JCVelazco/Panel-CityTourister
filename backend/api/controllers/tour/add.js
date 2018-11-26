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
      type: 'string', 
      required: true,
      allowNull: false,
      isURL: true
    },
    
    description: {
      type: 'string',
      required: true,
      allowNull: false,
      minLength: 10
    },
    prices: {
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
    /*
    places: {
      type: 'number',
      required: false
    }
    */
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

    let prices = inputs.prices;
    let buses = inputs.buses;
    let dateinformations = inputs.dateinformations;
    let places = inputs.places;
    
    var priceObj = ' ';

  if(prices)
  priceObj = await Price.findOne({id: prices});
  
  if(!priceObj) 
  return exits.serverError({info: 'Price notFound'});

  var busObj = ' ';

  if(buses)
  busObj = await Bus.findOne({id: buses});
  
  if(!busObj) 
  return exits.serverError({info: 'Bus notFound'});

  var dateinfoObj = ' ';

  if(dateinformations)
  dateinfoObj = await DateInformation.findOne({id: dateinformations});
  
  if(!dateinfoObj) 
  return exits.serverError({info: 'DateInfo notFound'});

  /*
  var placeObj = ' ';

  if(places)
  placeObj = await Place.findOne({id: places});

  
  if(!placeObj) 
  return exits.serverError({info: 'Place notFound'});
    */
   
    
    var newTour = await Tour.create({
      name: inputs.name,
      image: inputs.image,
      description: inputs.description,
      prices: priceObj.id,
      buses: busObj.id,
      dateinformations: dateinfoObj.id,
      //places: placeObj.id
    })
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
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
