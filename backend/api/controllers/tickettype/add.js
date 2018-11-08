module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add tickettype.',
  
  
  inputs: {
    name: {
      type: 'string',
      required: true,
      allowNull: false,
      maxLegth: 30,
      minLength: 3, 
    },
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
        
    var newTicketT = await TicketType.create({
      name: inputs.name,
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
