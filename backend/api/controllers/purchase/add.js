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
      description: 'New Purchase was added'
    },
    serverError: {
      statusCode: 500,
      description: 'Purchase could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("Purchase/add");
    
    //required
    var key_ofuser = (await User.findOne({where: {id: inputs.user_id}, select: ['id']}) === undefined)?undefined:inputs.user_id;
    if(key_ofuser === undefined){
      return exits.serverError({
        info: 'User not found'
      });
    }
    
    //required
    var key_ofcompany = (await Company.findOne({where: {id: inputs.company_id}, select: ['id']}) === undefined)?undefined:inputs.company_id;
    if(key_ofcompany === undefined){
      return exits.serverError({
        info: 'Company not found'
      });
    }
    
    //no required
    var key_ofticket;
    
    if(inputs.tickets){
      key_ofticket = (await Ticket.findOne({where: {id: inputs.tickets}, select: ['id']}) === undefined)?undefined:inputs.tickets;
      if(key_ofticket === undefined){
        return exits.serverError({
          info: 'Ticket not found'
        });
      }
    }

        //required
        var key_oftour = (await Tour.findOne({where: {id: inputs.tour_associated}, select: ['id']}) === undefined)?undefined:inputs.tour_associated;
        if(key_ofcompany === undefined){
          return exits.serverError({
            info: 'Tour not found'
          });
        }
        
    
    
    var newPurchase = await Purchase.create({
      sub_total: inputs.sub_total,
      date_tour: inputs.date_tour,
      total: inputs.total,
      //required
      user_id: key_ofuser,
      //required
      company_id: key_ofcompany,
      //required
      tickets: key_ofticket,
      //required
      tour_associated: key_oftour
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
