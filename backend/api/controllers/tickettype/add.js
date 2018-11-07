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
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("tickettype/add");
        
    var newTicketT = await tickettype.create({
      name: inputs.name,
    })
    .fetch();
    
    if(!newTicketT) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New tickettype added',
      id: newTickeT.id
    });
    
  }
  
  
};
