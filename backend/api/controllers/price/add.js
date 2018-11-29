module.exports = {
  
  friendlyName: 'Add',
  
  
  description: 'Add Price.',
  
  
  inputs: {
    priceAmount: {
      type: 'number',
      required: true,
      allowNull: false,
      min: 0
    },
    ticket_type_id: {
      type: 'number',
      required: true,
    },
    tour_id: {
      type: 'number',
      required: true,
    },
    tickets: {
      type: 'number',
      required: false
    }
  },
  
  exits: {
    success: {
      statusCode: 200,
      description: 'New Price was added'
    },
    serverError: {
      statusCode: 500,
      description: 'Price could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("Price/add");
    
    //required
    var key_oftickettype = (await TicketType.findOne({where: {id: inputs.ticket_type_id}, select: ['id']}) === undefined)?undefined:inputs.ticket_type_id;
    if(key_oftickettype === undefined){
      return exits.serverError({
        info: 'TicketType not found'
      });
    }
    
    //required
    var key_oftour = (await Tour.findOne({where: {id: inputs.tour_id}, select: ['id']}) === undefined)?undefined:inputs.tour_id;
    if(key_oftour === undefined){
      return exits.serverError({
        info: 'Tour not found'
      });
    }
    
    //no required
    var key_ofticket;
    //if i recieve the field I check if its correct
    if(inputs.ticket_id){
      key_ofticket = (await Ticket.findOne({where: {id: inputs.tickets}, select: ['id']}) === undefined)?undefined:inputs.tickets;
      if(key_ofticket === undefined){
        return exits.serverError({
          info: 'Ticket not found'
        });
      }
    }
    
    
    
    var newPrice = await Price.create({
      priceAmount : inputs.priceAmount,
      //required
      ticket_type_id: key_oftickettype,
      //required
      tour_id: key_oftour,
      //no required
      tickets: key_ofticket
    })
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
     })
    .fetch();
    
    if(!newPrice) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New Price added',
      id: newPrice.id
    });
    
  }
  
  
};


