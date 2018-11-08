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
    
    var newBracelet = await Bracelet.create({
      active_at: inputs.active_at,
      status: inputs.status,
      folio: inputs.folio,
      ticket_id: inputs.ticket_id,
      tour_id: inputs.tour_id
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
