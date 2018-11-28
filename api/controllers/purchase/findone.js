module.exports = {


  friendlyName: 'Findone',


  description: 'Findone purchase.',


  inputs: {
    id: {
      type: 'number'
    }
  },


  exits: {
    notfound:{
      statusCode: 404,

    }
  },


  fn: async function (inputs, exits) {

    let purchase = await sails.helpers.findPurchaseById(inputs.id);

    if(!purchase) return exits.notfound();

    let price = await sails.helpers.findPriceById(purchase.tickets[0].price_id);

    purchase.tour_name = price.tour_id.name;

    return exits.success(purchase);

  }


};
