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
    tour_associated: {
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
    
    //no required
    var key_ofpurchase;
    //if i recieve the field I check if its correct
    if(inputs.ticket_id){
      key_ofpurchase = (await Purchase.findOne({where: {id: inputs.purchase_id}, select: ['id']}) === undefined)?undefined:inputs.purchase_id;
      if(key_ofpurchase === undefined){
        return exits.serverError({
          info: 'Purchase not found'
        });
      }
    }
    
    //required
    var key_ofprice = (await Price.findOne({where: {id: inputs.price_id}, select: ['id']}) === undefined)?undefined:inputs.price_id;
    if(key_ofprice === undefined){
      return exits.serverError({
        info: 'Price not found'
      });
    }
    
    //required
    var key_oftour = (await Tour.findOne({where: {id: inputs.tour_associated}, select: ['id']}) === undefined)?undefined:inputs.tour_associated;
    if(key_oftour === undefined){
      return exits.serverError({
        info: 'Tour not found'
      });
    }
    
    var newTicket = await Ticket.create({
      name:  inputs.name,
      date_tour: inputs.date_tour,
      qr_code: inputs.qr_code,
      sub_total: inputs.sub_total,
      //no required
      purchase_id: key_ofpurchase,
      //required
      price_id: key_ofprice,
      //required
      tour_associated: key_oftour
      
    })
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
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
