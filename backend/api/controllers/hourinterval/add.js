module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add hourInterval.',
  
  
  inputs: {
    start_time: {
      type: 'string',
      required: true,
      allowNull: false
    },
    
    end_time: {
      type: 'string',
      required: true,
      allowNull: false
    },

    frequency: {
      type: 'number',
      required: true,
      allowNull: false
    },

  },

  exits: {
    success: {
      statusCode: 200,
      description: 'New hourInterval was added'
    },
    serverError: {
      statusCode: 500,
      description: 'hourInterval could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("hourInterval/add");
        
    var newHourInterval = await HourInterval.create({
      start_time: inputs.start_time,
      end_time: inputs.end_time,
      frequency: inputs.frequency
    })
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
     })
    .fetch();
    
    if(!newHourInterval) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New hourInterval added',
      id: newHourInterval.id
    });
    
  }
  
  
};
