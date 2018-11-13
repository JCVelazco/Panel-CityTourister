module.exports = async (req, res) => {
  const TicketId = req.param('id');
  let purchase_id = req.body.purchase_id;
  let price_id = req.body.price_id;
  let tour_associated = req.body.tour_associated;
  
  
  let currentTicket = await Ticket.findOne({id: TicketId});
  
  if(!currentTicket) 
  return res.json({info: 'Ticket notFound'});
  
  var purchaseObj = ' ';
  
  if(purchase_id)
  purchaseObj = await Purchase.findOne({id: purchase_id});
  
  if(!purchaseObj) 
  return res.json({info: 'Purchase notFound'});

 
  var priceObj = ' ';

  if(price_id)
  priceObj = await Price.findOne({id: price_id});
  
  if(!priceObj) 
  return res.json({info: 'Price notFound'});
 
  
  var updatedTicket = await Ticket.update({id: TicketId})
  .set({
    name:  req.body.name,
    date_tour: req.body.date_tour,
    qr_code: req.body.qr_code,

    purchase_id: purchaseObj.id,
    price_id: priceObj.id,
  })
  .intercept((err)=>{
    err.message = 'An error has ocurred: '+err.message;
    return err;
   })
  .fetch();
  
  return res.json(updatedTicket);
}