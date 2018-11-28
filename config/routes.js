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
  'put /placetype/edit/:id' : 'placetype/edit',
  'put /price/edit/:id' : 'price/edit',
  'put /tour/edit/:id' : 'tour/edit',
  'put /tickettype/edit/:id' : 'tickettype/edit',
  'put /ticket/edit/:id' : 'ticket/edit',
  'put /purchase/edit/:id' : 'purchase/edit',

  /************* GET by Id ***************/

  'get /purchase/:id': 'purchase/findone',


  /************* NOT FOUND ***************/

  'post /:model' : 'notfound',

  'put /:model/:id' : 'notfound',

  'patch /:model/:id' : 'notfound',

  'delete /purchase/:id' : 'notfound',

  'delete /purchase/:id' : 'notfound',

  'delete /user/:id' : 'notfound',

  'delete /ticket/:id' : 'notfound',



  /************* remove Tour ***************/

  'put /tour/:id/remove' : 'tour/remove/generic',

  /**************** delete *****************/

  'delete /dateinformation/:id' : 'dateinformation/delete',
  'delete /company/:id' : 'company/delete',
  'delete /tickettype/:id' : 'tickettype/delete',
  'delete /price/:id' : 'price/delete',
  'delete /placetype/:id' : 'placetype/delete',
  'delete /tour/:id' : 'tour/delete',

  /****************extras****************** */

  'get /purchase/total/:id' : 'purchase/total',


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
