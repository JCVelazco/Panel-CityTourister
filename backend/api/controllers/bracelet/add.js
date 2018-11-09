module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add Bracelet.',
  
  
  inputs: {   
    active_at: {
      type: 'string',
      required: true,
      allowNull: false
    },
    status: {
      type: 'boolean',
      required: true,
      allowNull: false
    },
    folio: {
      type: 'string',
      required: true,
      allowNull: false,
      encrypt: true,
      unique: true
    },
    ticket_id: {
      type: 'number',
      unique: true,
    },
    tour_id: {
      type: 'number',
      required: true,
    }
  },
  
  
  exits: {
    success: {
      statusCode: 200,
      description: 'New Bracelet was added'
    },
    serverError: {
      statusCode: 500,
      description: 'Bracelet could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("Bracelet/add");

    var hasTrueTicket = await Ticket.findOne({where: {id: inputs.ticket_id}, select: ['id']});
    var hasTrueTour = await Tour.findOne({where: {id: inputs.tour_id}, select: ['id']});
    
    if(hasTrueTicket == null){
      return exits.serverError({
        info: 'Ticket not found'
      });
    }
    if(hasTrueTour == null){
      return exits.serverError({
        info: 'Tour not found'
      });
    }
    
    var newBracelet = await Bracelet.create({
      active_at: inputs.active_at,
      status: inputs.status,
      folio: inputs.folio,
      //do the program adds tickets from bracelet?
      ticket_id: inputs.ticket_id,
      tour_id: (await Tour.findOne({where: {id: inputs.tour_id}, select: ['id']}) == null)?
      exits.serverError({info: 'Tour not found'}):inputs.tour_id,
    })
    .fetch();
    
    if(!newBracelet) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New Bracelet added',
      id: newBracelet.id
    });
    
  }
  
  
};
