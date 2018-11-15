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
    
    //no required
    var key_ofprice;
    //if i recieve the field I check if its correct
    if(inputs.prices){
      key_ofprice = (await Price.findOne({where: {id: inputs.prices}, select: ['id']}) === undefined)?undefined:inputs.prices;
      if(key_ofprice === undefined){
        return exits.serverError({
          info: 'Price not found'
        });
      }
    }
    
    
    //no required
    var key_ofbus;
    //if i recieve the field I check if its correct
    if(inputs.buses){
      key_ofbus = (await Bus.findOne({where: {id: inputs.buses}, select: ['id']}) == null)?undefined:inputs.buses;
      if(key_ofbus === undefined){
        return exits.serverError({
          info: 'Bus not found'
        });
      }
    }
    
    //no required
    var key_ofdateinfo;
    //if i recieve the field I check if its correct
    if(inputs.dateinformations){
      key_ofdateinfo = (await DateInformation.findOne({where: {id: inputs.dateinformations}, select: ['id']}) === undefined)?undefined:inputs.dateinformations;
      if(key_ofdateinfo === undefined){
        return exits.serverError({
          info: 'DateInfo not found'
        });
      }
    }
    
    //no required
    var key_ofplace;
    //if i recieve the field I check if its correct
    if(inputs.places){
      key_ofplace = (await Place.findOne({where: {id: inputs.places}, select: ['id']}) === undefined)?undefined:inputs.places;
      if(key_ofplace === undefined){
        return exits.serverError({
          info: 'Place not found'
        });
      }
    }
    
    var newTour = await Tour.create({
      name: inputs.name,
      image: inputs.image,
      description: inputs.description,
      //no required
      prices: key_ofprice,
      //no required
      buses: key_ofbus,
      //required
      dateinformations: key_ofdateinfo,
      //no required
      places: key_ofplace
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
