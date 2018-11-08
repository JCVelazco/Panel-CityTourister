/**
 * Place.js
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
      columnName: 'place_id',
      autoIncrement: true
    },

    name: {
      type: 'string',
      required: true,
      allowNull: false,
      minLength: 3
    },

    description: {
      type: 'string',
      required: true,
      allowNull: false,
      minLength: 5
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    place_type_id: {
      model: 'placetype',
      required: true,
      type:'number'
    },
    
    location_id: {
      collection: 'location',
      via: 'place_id',
      type:'number',
      required: true

    },
    
    narrative_id: {
      collection: 'narrative',
      via: 'place_id',
      type: 'number',
      required: false,
      allowNull: true
    },

    imagesOfPlaces: {
      collection: 'imageofplace',
      via: 'places',
      type: 'number',
      required: false,
      allowNull: true
    },

    placeTours: {
      collection: 'placetour',
      via: 'place_id',
      type: 'number',
      required: false,
      allowNull: true
    }
  },

};

