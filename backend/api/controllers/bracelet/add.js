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
      key_ofticket = (await Ticket.findOne({where: {id: inputs.ticket_id}, select: ['id']}) === undefined)?undefined:inputs.ticket_id;
      if(key_ofticket === undefined){
        return exits.serverError({
          info: 'Ticket not found'
        });
      }
    }
    
    
    var newBracelet = await Bracelet.create({
      active_at: inputs.active_at,
      status: inputs.status,
      folio: inputs.folio,
      ticket_id: key_ofticket,
      tour_id: key_oftour
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
