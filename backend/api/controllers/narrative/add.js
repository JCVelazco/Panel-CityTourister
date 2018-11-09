module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add Narrative.',
  
  
  inputs: {
    audio_url: {
      type: 'string',
      unique: true,
      required: true,
      allowNull: false,
      isURL: true
    },
  },

  exits: {
    success: {
      statusCode: 200,
      description: 'New narrative was added'
    },
    serverError: {
      statusCode: 500,
      description: 'Narrative could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("narrative/add");
        
    var newNarrative = await Narrative.create({
      audio_url: inputs.audio_url
    })
    .fetch();
    
    if(!newNarrative) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New Narrative added',
      id: newNarrative.id
    });
    
  }
  
  
};
