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
      maxLength: 10,
      minLength: 10
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
      allowNull: false,
      max: 1
    },

    iva: {
      type: 'number',
      required: true,
      allowNull: false,
      max:1
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

