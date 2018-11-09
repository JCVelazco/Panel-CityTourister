module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add Ticket.',
  
  
  inputs: {   
    name: {
      type: 'string',
      required: true,
      allowNull: false,
      minLength: 3
    },

    age: {
      type: 'number',
      required: true,
      allowNull: false,
      min: 0,
      max: 120
    },
    date_tour: {
      type: 'string',
      required: true,
      allowNull: false
    },

    qr_code: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: true,
      encrypt: true
    },

    sub_total: {
      type: 'number',
      required: true, 
      allowNull: false,
      min: 0
    },
    purchase_id: {
      type: 'number',
      required: false
    },
    price_id: {
      type: 'number',
      required: true
    },
    bracelet_id: {
      type: 'number',
      required: true
    }
  },
  
  
  exits: {
    success: {
      statusCode: 200,
      description: 'New Ticket was added'
    },
    serverError: {
      statusCode: 500,
      description: 'Ticket could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("Ticket/add");
    
    var newTicket = await Ticket.create({
      name:  inputs.name,
      age: inputs.age,
      date_tour: inputs.date_tour,
      qr_code: inputs.qr_code,
      sub_total: inputs.sub_total,
      //no required
      purchase_id: (await Purchase.findOne({where: {id: inputs.purchase_id}, select: ['id']}) == null)?
      null:inputs.purchase_id,
      //required
      price_id: (await Price.findOne({where: {id: inputs.price_id}, select: ['id']}) == null)?
      exits.serverError({info: 'Price not found'}):inputs.price_id,
      //required
      bracelet_id: (await Bracelet.findOne({where: {id: inputs.bracelet_id}, select: ['id']}) == null)?
      exits.serverError({info: 'Bracelet not found'}):inputs.bracelet_id,

    })
    .fetch();
    
    if(!newTicket) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New Ticket added',
      id: newTicket.id
    });
    
  }
  
  
};
