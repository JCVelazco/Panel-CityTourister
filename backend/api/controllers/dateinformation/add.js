module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add DateInformation.',
  
  
  inputs: {
    tours: {
      type: 'number',
      required: false
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
    
    //no required
    var key_oftour;
    //if i recieve the field I check if its correct
    if(inputs.tours){
      key_oftour = (await Tour.findOne({where: {id: inputs.tours}, select: ['id']}) === undefined)?undefined:inputs.tours;
      if(key_oftour === undefined){
        return exits.serverError({
          info: 'Tour not found'
        });
      }
    }
    
    //required
    var key_ofdate = (await DateInterval.findOne({where: {id: inputs.date_id}, select: ['id']}) === undefined)?undefined:inputs.date_id;
    if(key_ofdate === undefined){
      return exits.serverError({
        info: 'Date not found'
      });
    }
    
    //required
    var key_ofhour = (await HourInterval.findOne({where: {id: inputs.hour_id}, select: ['id']}) === undefined)?undefined:inputs.hour_id;
    if(key_ofhour === undefined){
      return exits.serverError({
        info: 'Hour not found'
      });
    }
    
    
    var newDateInfo = await DateInformation.create({
      //no required
      tours: key_oftour,
      //required
      date_id: key_ofdate,
      //required
      hour_id: key_ofhour
    })
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
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
