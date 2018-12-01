/**
 * Company.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    id: {
      type: 'number',
      autoIncrement: true,
      columnName: 'company_id'
    },

    name: {
      type: 'string',
      required: true,
      allowNull: false,
      maxLength:30
    },

    full_name: {
      type: 'string',
      required: true,
      unique: true,
      allowNull: false,
      minLength: 3,
      maxLength: 50
    },

    phone_number: {
      type: 'string',
      allowNull: true,
      maxLength: 15,
      minLength: 5
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
      maxLength: 20,
      minLength: 10
    },

    ieps: {
      type: 'number',
      required: true,
      allowNull: false,
      max: 100
    },

    iva: {
      type: 'number',
      required: true,
      allowNull: false,
      max:100
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    
    purchases: {
      collection: 'purchase',
      via: 'company_id',
    }

  },

};

