module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add Purchase.',
  
  
  inputs: {   
    sub_total: {
      type: 'number',
      required: true,
      min: 0
    },

    total: {
      type: 'number',
      allowNull: false,
      required: true,
      min: 0
    },
    user_id: {
      type: 'number',
      required: true
    },
    company_id: {
      type: 'number',
      required: true
    },
    tickets: {
      type: 'number',
    }
  },
  
  
  exits: {
    success: {
      statusCode: 200,
      description: 'New Purchase was added'
    },
    serverError: {
      statusCode: 500,
      description: 'Purchase could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("Purchase/add");
    
    var newPurchase = await Purchase.create({
      sub_total: inputs.sub_total,
      total: inputs.total,
      user_id: (await User.findOne({where: {id: inputs.user_id}, select: ['id']}) == null)?
      exits.serverError({info: 'User not found'}):inputs.user_id,
      company_id: (await Company.findOne({where: {id: inputs.company_id}, select: ['id']}) == null)?
      exits.serverError({info: 'Company not found'}):inputs.company_id,
      tickets: (await Ticket.findOne({where: {id: inputs.tickets}, select: ['id']}) == null)?
      exits.serverError({info: 'Tickets not found'}):inputs.tickets,
    })
    .fetch();
    
    if(!newPurchase) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New Purchase added',
      id: newPurchase.id
    });
    
  }
  
  
};
