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
    
    var newPrice = await Price.create({
      priceAmount : inputs.priceAmount,
      //required
      ticket_type_id: (await TicketType.find({where: {id: inputs.ticket_type_id}, select: ['id']}) == null)?
      exits.serverError({info: 'TicketType not found'}):inputs.ticket_type_id,
      //required
      tour_id: (await Tour.find({where: {id: inputs.tour_id}, select: ['id']}) == null)?
      exits.serverError({info: 'Tour not found'}):inputs.tour_id,
      //no required
      tickets: (inputs.tickets)?(await Ticket.find({where: {id: inputs.tickets}, select: ['id']}) == null)?
      exits.serverError({info: 'Ticket not found'}):inputs.tickets:null,
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


