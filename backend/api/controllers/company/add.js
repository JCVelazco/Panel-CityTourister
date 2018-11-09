module.exports = {
  
  
  friendlyName: 'Add',
  
  
  description: 'Add company.',
  
  
  inputs: {
    name: {
      type: 'string',
      required: true,
      allowNull: false,
      maxLength: 30
    },
    
    full_name: {
      type: 'string',
      required: true,
      unique: true,
      allowNull:false,
      minLength: 3,
      maxLength: 50
      
    },
    
    phone_number: {
      type: 'string',
      allowNull: true,
      maxLength: 10,
      minLength: 10,
    },
    
    address: {
      type: 'string',
      allowNull: true,
      minLength: 5,
      maxLength: 70
    },
    
    postal_code: {
      type: 'string',
      allowNull: true,
      minLength: 5,
      maxLength: 5
    },
    
    rfc: {
      type: 'string',
      allowNull: true,
      maxLength: 13,
      minLength: 12
    },
    
    ieps: {
      type: 'number',
      required: true,
      allowNull:false,
      max: 1
     
    },
    
    iva: {
      type: 'number',
      required: true,
      allowNull: false,
      max: 1
    },
    
  },
  
  
  exits: {
    success: {
      statusCode: 200,
      description: 'New company was added'
    },
    serverError: {
      statusCode: 500,
      description: 'Company could not be added'
    }
  },
  
  
  fn: async function (inputs, exits) {
    
    sails.log.info("company/add");
        
    var newCompany = await Company.create({
      name: inputs.name,
      full_name: inputs.full_name,
      phone_number: inputs.phone_number,
      address: inputs.address,
      postal_code: inputs.postal_code,
      rfc: inputs.rfc,
      ieps: inputs.ieps,
      iva: inputs.iva
    })
    .fetch();
    
    if(!newCompany) return exits.serverError({
      info: 'Internal server error'
    });
    
    return exits.success({
      info: 'New company added',
      id: newCompany.id
    });
    
  }
  
  
};
