module.exports = {
  
  
  friendlyName: '404',
  
  
  description: 'notfound.',
  
  
  inputs: {
  
  },
  
  
  exits: {
    notfound: {
      statusCode: 404,
      description: 'Tha page is not available'
    },
  },
  
  
  fn: async function (inputs, exits) {
    return exits.notfound();
  }
  
  
};
