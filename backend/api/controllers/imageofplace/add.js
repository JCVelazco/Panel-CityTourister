module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add ImageOfPlace.',
  
  
  inputs: {
    image_url: {
      type: 'string',
      unique: true,
      allowNull: false,
      required: true,
      isURL: true
    },

    description: {
      type: 'string',
      allowNull: true,
      minLength: 10
    },
  },

  exits: {
    success: {
      statusCode: 200,
      description: 'New ImageOfPlace was added'
    },
    serverError: {
      statusCode: 500,
      description: 'ImageOfPlace could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("ImageOfPlace/add");
        
    var newImageOfPlace = await ImageOfPlace.create({
      image_url: inputs.image_url,
      description: inputs.description
    })
    .fetch();
    
    if(!newImageOfPlace) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New ImageOfPlace added',
      id: newImageOfPlace.id
    });
    
  }
  
  
};
