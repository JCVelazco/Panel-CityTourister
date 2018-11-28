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
    
    qr_code: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: true,
      encrypt: true
    },
    purchase_id: {
      type: 'number',
      required: true
    },
    price_id: {
      type: 'number',
      required: true
    },
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
    
    let purchase, price;

    purchase = await sails.helpers.findPurchaseById(inputs.purchase_id);
    price = await sails.helpers.findPriceById(inputs.price_id);

    if(!purchase) return exits.serverError({info: 'Purchase not found'});

    if(!price) return exits.serverError({info: 'Price not found'});
    
    
    var newTicket = await Ticket.create({
      name:  inputs.name,
      qr_code: inputs.qr_code,
      purchase_id: purchase.id,
      price_id: price.id,
    })
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
    })
    .fetch();
    
    if(!newTicket) return exits.serverError({
      info: 'Internal server error'
    });

    let company = await sails.helpers.findCompanyById(purchase.company_id.id);
    let purchaseSubTotalSum = purchase.sub_total + price.priceAmount;
    let purchaseTotal = purchaseSubTotalSum*company.iva;// CHECAR EL PRECIO TOTAL 

    await Purchase.update({id: purchase.id})
    .set({
      sub_total: purchaseSubTotalSum,
      total: purchaseTotal
    })
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
    })
    .fetch();

    
    return exits.success({
      info: 'New Ticket added',
      id: newTicket.id
    });
    
  }
  
  
};
