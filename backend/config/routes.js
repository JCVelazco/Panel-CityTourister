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

  'post /admin/login' : 'admin/login',
  'post /user/login' : 'user/login',
  'post /admin/create' : 'admin/create',
  'post /user/add' : 'user/add',
  'post /company/add' : 'company/add',
  'post /bus/add' : 'bus/add',
  'post /dateinterval/add' : 'dateinterval/add',
  'post /hourinterval/add' : 'hourinterval/add',
  'post /imageofplace/add' : 'imageofplace/add',
  'post /location/add' : 'location/add',
  'post /narrative/add' : 'narrative/add',
  'post /placetype/add' : 'placetype/add',
  'post /tickettype/add' : 'tickettype/add',
  'post /tour/add' : 'tour/add',
  'post /location/add' : 'location/add',
  'post /place/add' : 'place/add',
  'post /dateinformation/add' : 'dateinformation/add',
  'post /price/add' : 'price/add',
  'post /bracelet/add' : 'bracelet/add',
  'post /ticket/add' : 'ticket/add',
  'post /purchase/add' : 'purchase/add',

  'PATCH /bus/edit/:id' : 'bus/edit',

  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
