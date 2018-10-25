/**
 * Tour.js
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
        columnName: 'tour_id'
      },
  
      name: {
        type: 'string',
        required: true,
        allowNull: false
      },
  
      image: {
        type: 'string', //check if ref isnt better
        required: true,
        allowNull: false
      },

      description: {
        type: 'string',
        required: true,
        allowNull: false
      },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    
    prices: {
      collection: 'price',
      via: 'tour_id',
    },
    bracelets: {
      collection: 'bracelet',
      via: 'tour_id'
    },
    buses: {
      collection: 'bus',
      via: 'tout_id'
    },
    dateInformations: {
      collection: 'dateinformation',
      via: 'tours'
    },
    placeTours: {
      collection: 'placetour',
      via: 'tour_id'
    }


  },

};



