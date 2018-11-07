module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add mural.',
  
  
  inputs: {
    title: {
      type: 'string',
      required: true,
      allowNull: false
    },

    author_name: {
      type: 'string',
      required: true,
      allowNull: false,
      minLength: 3,
      maxLength: 50
    },

    description: {
      type: 'string',
      required: true,
      allowNull: false,
      minLength: 10,
      maxLength: 200
    },

    imageMural: {
      type: 'string',
      allowNull: true,
      isURL: true
    },
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("mural/add");
        
    var newMural = await mural.create({
      title: inputs.title,
      author_name: inputs.author_name,
      description: inputs.description,
      imageMural: inputs.imageMural
    })
    .fetch();
    
    if(!newMural) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New mural added',
      id: newTickeT.id
    });
    
  }
  
  
};
