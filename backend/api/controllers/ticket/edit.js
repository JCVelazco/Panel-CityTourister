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

  var tourObj = ' ';

  if(tour_associated)
  tourObj = await Price.findOne({id: tour_associated});
  
  if(!tourObj) 
  return res.json({info: 'Tour notFound'});
 
  
  var updatedTicket = await Ticket.update({id: TicketId})
  .set({
    name:  req.name,
    date_tour: req.date_tour,
    qr_code: req.qr_code,
    sub_total: req.sub_total,

    purchase_id: purchaseObj.id,
    price_id: priceObj.id,
    tour_associated: tourObj.id
  })
  .intercept((err)=>{
    err.message = 'An error has ocurred: '+err.message;
    return err;
   })
  .fetch();
  
  return res.json(updatedTicket);
}