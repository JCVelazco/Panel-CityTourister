/**
 * Ticket.js
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
      columnName: 'ticket_id'
    },

    name: {
      type: 'string',
      required: true,
      allowNull: false
    },

    age: {
      type: 'number',
      required: true,
      allowNull: false
    },
    date_tour: {
      type: 'string',
      required: true,
      allowNull: false
    },

    qr_code: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: true
    },

    sub_total: {
      type: 'number',
      required: true, 
      allowNull: false
    }

    
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    purchase_id: {
      model: 'purchase',
      required: true
    },
    price_id: {
      model: 'price'
    },
    bracelet_id: {
      collection: 'bracelet',
      via: 'ticket_id'
    }

  },

};

