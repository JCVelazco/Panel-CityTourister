module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add Purchase.',
  
  
  inputs: {
    date_tour: {
      type: 'string',
      required: true,
      allowNull: false
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
      required: false
    },

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

    let ticket, user, company;

    user = await sails.helpers.findUserById(inputs.user_id);
    company = await sails.helpers.findCompanyById(inputs.company_id);
    ticket = [];

    if(!user)
      return exits.serverError({
        info: 'User not found'
      });
    
    if(!company)
      return exits.serverError({
        info: 'Company not found'
      });
    
    if(inputs.tickets)
      ticket = await Ticket.findOne({id: tickets});

    if(!ticket) return exits.serverError({info: 'Ticket not found'});

    var newPurchase = await Purchase.create({
      date_tour: inputs.date_tour,
      user_id: user.id,
      company_id: company.id,
      tickets: ticket,
    })
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
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
