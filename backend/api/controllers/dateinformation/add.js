module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add DateInformation.',
  
  
  inputs: {
    tours: {
      type: 'number',
      rquired: false
    },
    date_id: {
      type: 'number',
      required: true
    },
    hour_id: {
      type: 'number',
      required: true
    }
  },

  exits: {
    success: {
      statusCode: 200,
      description: 'New DateInformation was added'
    },
    serverError: {
      statusCode: 500,
      description: 'DateInformation could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("DateInformation/add");
        
    var newDateInfo = await DateInformation.create({
      tours: inputs.tours,
      date_id : inputs.date_id,
      hour_id: inputs.hour_id
    })
    .fetch();
    
    if(!newDateInfo) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New DateInformation added',
      id: newDateInfo.id
    });
    
  }
  
  
};
