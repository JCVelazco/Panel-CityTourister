/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'pages/homepage'
  },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝

  /************* LOG IN ***************/

  'post /admin/login' : 'admin/login',
  'post /user/login' : 'user/login',

  /************* ADD ***************/

  'post /admin/create' : 'admin/create',
  'post /user/add' : 'user/add',
  'post /company/add' : 'company/add',
  'post /bus/add' : 'bus/add',
  'post /dateinterval/add' : 'dateinterval/add',
  'post /hourinterval/add' : 'hourinterval/add',
  'post /imageofplace/add' : 'imageofplace/add',
  'post /placetype/add' : 'placetype/add',
  'post /tickettype/add' : 'tickettype/add',
  'post /tour/add' : 'tour/add',
  'post /place/add' : 'place/add',
  'post /dateinformation/add' : 'dateinformation/add',
  'post /price/add' : 'price/add',
  'post /ticket/add' : 'ticket/add',
  'post /purchase/add' : 'purchase/add',

  /************* EDIT ***************/

  'put /bus/edit/:id' : 'bus/edit',
  'put /place/edit/:id' : 'place/edit',
  'put /admin/edit/:id' : 'admin/edit',
  'put /user/edit/:id' : 'user/edit',
  'put /company/edit/:id' : 'company/edit',
  'put /dateinformation/edit/:id' : 'dateinformation/edit',
  'put /dateinterval/edit/:id' : 'dateinterval/edit',
  'put /hourinterval/edit/:id' : 'hourinterval/edit',
  'put /imageofplace/edit/:id' : 'imageofplace/edit',
  'put /placetype/edit/:id' : 'placetype/edit',
  'put /price/edit/:id' : 'price/edit',
  'put /tour/edit/:id' : 'tour/edit',
  'put /tickettype/edit/:id' : 'tickettype/edit',
  'put /ticket/edit/:id' : 'ticket/edit',
  'put /purchase/edit/:id' : 'purchase/edit',

  /************* GET by Id ***************/

  'get /purchase/:id': 'purchase/findone',


  /************* NOT FOUND ***************/

  'post /admin' : 'notfound',
  'post /user' : 'notfound',
  'post /company' : 'notfound',
  'post /bus' : 'notfound',
  'post /dateinterval' : 'notfound',
  'post /hourinterval' : 'notfound',
  'post /imageofplace' : 'notfound',
  'post /placetype' : 'notfound',
  'post /tickettype' : 'notfound',
  'post /tour' : 'notfound',
  'post /place' : 'notfound',
  'post /dateinformation' : 'notfound',
  'post /price' : 'notfound',
  'post /ticket' : 'notfound',
  'post /purchase' : 'notfound',

  'put /bus/:id' : 'notfound',
  'put /place/:id' : 'notfound',
  'put /admin/:id' : 'notfound',
  'put /user/:id' : 'notfound',
  'put /company/:id' : 'notfound',
  'put /dateinformation/:id' : 'notfound',
  'put /dateinterval/:id' : 'notfound',
  'put /hourinterval/:id' : 'notfound',
  'put /imageofplace/:id' : 'notfound',
  'put /placetype/:id' : 'notfound',
  'put /price/:id' : 'notfound',
  'put /tour/:id' : 'notfound',
  'put /tickettype/:id' : 'notfound',
  'put /ticket/:id' : 'notfound',
  'put /purchase/:id' : 'notfound',

  /************* remove Tour ***************/

  'put /tour/:id/remove' : 'tour/remove/generic'

  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
