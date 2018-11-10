module.exports = async (req, res) => {
  const braceletId = req.param('id');
  let tour_id = req.body.tour_id;
  let ticket_id = req.body.ticket_id;


  let currentBracelet = await Bracelet.findOne({id: braceletId});

  if(!currentBracelet) 
    return res.json({info: 'Bracelet notFound'});

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

  var updatedBracelet = await Bracelet.update({id: braceletId})
  .set({
    active_at: req.body.active_at,
    status: req.body.status,
    folio: req.body.folio,
    ticket_id: ticketObj.id,
    tour_id: tourObj.id
  }).fetch();

  return res.json(updatedBracelet);
}