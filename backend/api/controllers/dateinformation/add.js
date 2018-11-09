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
        
    var newDateInfo = await DateInformation.create({
      //no required
      tours: (inputs.tours)?(await Tour.find({where: {id: inputs.tours}, select: ['id']}) == null)?
      exits.serverError({info: 'Tour not found'}):inputs.tours:null,
      //required
      date_id: (await DateInterval.find({where: {id: inputs.date_id}, select: ['id']}) == null)?
      exits.serverError({info: 'DateInterval not found'}):inputs.date_id,
      //required
      hour_id: (await HourInterval.find({where: {id: inputs.hour_id}, select: ['id']}) == null)?
      exits.serverError({info: 'HourInterval not found'}):inputs.hour_id,
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
