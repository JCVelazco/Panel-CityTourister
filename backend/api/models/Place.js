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
      autoIncrement: true,
      unique: true
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
    },
    
    location_id: {
      collection: 'location',
      via: 'place_id',
    },
    
    narrative_id: {
      collection: 'narrative',
      via: 'place_id',
    },

    imagesOfPlaces: {
      collection: 'imageofplace',
      via: 'places',
    },

    tours: {
      collection: 'tour',
      via: 'places',
    }
  },

};

