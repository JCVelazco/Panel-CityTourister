module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add tickettype.',
  
  
  inputs: {
    name: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: true,
      maxLegth: 30,
      minLength: 3, 
    },
    description: {
      type: 'string',
      required: false,
      allowNull: true,
      minLength: 5
    },
    prices: {
      type: 'number',
      required: false
    }
  },
  
  exits: {
    success: {
      statusCode: 200,
      description: 'New tickettype was added'
    },
    serverError: {
      statusCode: 500,
      description: 'tikcetType could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("tickettype/add");
    
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
    
    var newTicketT = await TicketType.create({
      name: inputs.name,
      description: inputs.description,
      prices: key_ofprice
    })
    .fetch();
    
    if(!newTicketT) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New tickettype added',
      id: newTicketT.id
    });
    
  }
  
  
};
