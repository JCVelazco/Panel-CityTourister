module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add Dateinterval.',
  
  
  inputs: {
    start_date: {
      type: 'string',
      required: true,
      allowNull: false
    },

    end_date: {
      type: 'string',
      required: true,
      allowNull: false
    },

    service: {
      type: 'boolean',
      required: true,
      allowNull: false
    },
  },

  exits: {
    success: {
      statusCode: 200,
      description: 'New dateInterval was added'
    },
    serverError: {
      statusCode: 500,
      description: 'dateInterval could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("Dateinterval/add");
        
    var newDateinterval = await DateInterval.create({
      start_date: inputs.start_date,
      end_date: inputs.end_date,
      service: inputs.service
    })
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
     })
    .fetch();
    
    if(!newDateinterval) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New Dateinterval added',
      id: newDateinterval.id
    });
    
  }
  
  
};
