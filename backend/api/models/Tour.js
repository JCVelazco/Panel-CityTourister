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
        allowNull: false,
        minLength: 5,
        maxLength: 20
      },
  
      image: {
        type: 'string', //check if ref isnt better
        required: true,
        allowNull: false,
        isURL: true
      },

      description: {
        type: 'string',
        required: true,
        allowNull: false,
        minLength: 10,
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
    /*bracelets: {
      collection: 'bracelet',
      via: 'tour_id'
    },*/
    buses: {
      collection: 'bus',
      via: 'tour_id'
    },
    dateinformations: {
      collection: 'dateinformation',
      via: 'tours'
    },
    places: {
      collection: 'place',
      via: 'tours'
    },



  },

};



