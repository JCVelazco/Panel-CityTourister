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
      allowNull: false
    },

    full_name: {
      type: 'string',
      required: true,
      unique: true,
      allowNull: false
    },

    phone_number: {
      type: 'string',
      allowNull: true,
    },

    address: {
      type: 'string',
      allowNull: true
    },

    postal_code: {
      type: 'string',
      allowNull: true
    },

    rfc: {
      type: 'string',
      allowNull: true,
    },

    ieps: {
      type: 'number',
      required: true,
      allowNull: false
    },

    iva: {
      type: 'number',
      required: true,
      allowNull: false
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

