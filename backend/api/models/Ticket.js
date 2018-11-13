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
      allowNull: false,
      minLength: 3
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
      unique: true,
      encrypt: true
    },

    sub_total: {
      type: 'number',
      required: true, 
      allowNull: false,
      min: 0
    },

    
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    purchase_id: {
      model: 'purchase',
    },
    price_id: {
      model: 'price',
      required: true
    },
    tour_associated: {
      model: 'tour',
      required: true
    }
    /*
    bracelet_id: {
      collection: 'bracelet',
      via: 'ticket_id',
    }*/

  },

};

