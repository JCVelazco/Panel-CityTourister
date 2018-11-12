module.exports = async (req, res) => {
  const PriceId = req.param('id');
  let tour_id = req.body.tour_id;
  let ticket_id = req.body.tickets;
  let ticket_type_id = req.body.ticket_type_id;
  
  
  let currentPrice = await Price.findOne({id: PriceId});
  
  if(!currentPrice) 
  return res.json({info: 'Price notFound'});
  
  var tourObj = ' ';
  
  if(tour_id)
  tourObj = await Tour.findOne({id: tour_id});
  
  if(!tourObj) 
  return res.json({info: 'Tour notFound'});
  
  var ticketObj = ' ';
  
  if(ticket_id)
  ticketObj = await Ticket.findOne({id: ticket_id});
  
  if(!ticketObj) 
  return res.json({info: 'Ticket notFound'});
  
  var ticketTypeObj = ' ';
  
  if(ticket_type_id)
  ticketTypeObj = await TicketType.findOne({id: ticket_type_id});
  
  if(!ticketTypeObj) 
  return res.json({info: 'TicketType notFound'});
  
  var updatedBracelet = await Bracelet.update({id: braceletId})
  .set({
    priceAmount : req.body.priceAmount,
    ticket_type_id: ticketTypeObj.id,
    tour_id: tourObj.id,
    tickets: ticketObj.id
  }).fetch();
  
  return res.json(updatedBracelet);
}