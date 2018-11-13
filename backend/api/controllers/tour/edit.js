module.exports = async (req, res) => {
  const TourId = req.param('id');
  let prices = req.body.prices;
  let tickets = req.body.tickets;
  let buses = req.body.buses;
  let dateinformations = req.body.dateinformations;
  let places = req.body.places;
  
  
  let currentTour = await Tour.findOne({id: TourId});
  
  if(!currentTour) 
  return res.json({info: 'Tour notFound'});

  var priceObj = ' ';

  if(prices)
  priceObj = await Price.findOne({id: prices});
  
  if(!priceObj) 
  return res.json({info: 'Price notFound'});

  var ticketObj = ' ';

  if(tickets)
  ticketObj = await Ticket.findOne({id: tickets});
  
  if(!ticketObj) 
  return res.json({info: 'Ticket notFound'});

  var busObj = ' ';

  if(buses)
  busObj = await Bus.findOne({id: buses});
  
  if(!busObj) 
  return res.json({info: 'Bus notFound'});

  var dateinfoObj = ' ';

  if(dateinformations)
  dateinfoObj = await DateInformation.findOne({id: dateinformations});
  
  if(!dateinfoObj) 
  return res.json({info: 'DateInfo notFound'});

  var placeObj = ' ';

  if(places)
  placeObj = await Place.findOne({id: places});
  
  if(!placeObj) 
  return res.json({info: 'Place notFound'});
  
  
 
  
  var updatedTour = await Tour.update({id: TourId})
  .set({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,

    prices: priceObj.id,
    tickets: ticketObj.id,
    buses: busObj.id,
    dateinformations: dateinfoObj.id,
    places: placeObj.id
  })
  .intercept((err)=>{
    err.message = 'An error has ocurred: '+err.message;
    return err;
   })
  .fetch();
  
  return res.json(updatedTour);
}