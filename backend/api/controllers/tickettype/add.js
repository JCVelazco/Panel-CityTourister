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
      description: inputs.description,
    })
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
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
