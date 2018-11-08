module.exports = {
  
  
  friendlyName: 'Edit',
  
  
  description: 'Edit Bus.',
  
  
  inputs: {   
    availability: {
      type: 'boolean',
      required: true,
      allowNull: false
    },
    
    numBus: {
      type: 'string',
      required: true,
      allowNull: false,
      minLength: 3
    },
    
    tour_id: {
      type: 'number',
      required: true
    }
  },
  
  exits: {
    success: {
      statusCode: 200,
      description: 'Bus was edited'
    },
    serverError: {
      statusCode: 500,
      description: 'Bus could not be edited'
    }
  },
  
  
  
  fn: async function (req, res) {
    
    try {
      
      let params = req.params;
      let attributes = {};
      if (params.availability) {
        attributes.availability = params.availability;
      }
      if (params.numBus) {
        attributes.numBus = params.numBus;
      }
      if (params.tour_id) {
        attributes.tour_id = params.tour_id;
      }
      
      const results = await Bus.update({id: req.params.id}, attributes);
      return res.ok(results);
      
    }
    catch (err) {
      return res.serverError(err);
    }
    
    
    
    
    
    
    
    
    
  }
  
  
  
  
  
};
