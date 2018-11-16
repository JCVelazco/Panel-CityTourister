module.exports = async (req, res) => {
  const TourId = req.param('id');
  let prices = req.body.prices;
  let buses = req.body.buses;
  let dateinformations = req.body.dateinformations;
  let places = req.body.places;
  let purchases = req.body.purchases;
  
  
  let currentTour = await Tour.findOne({id: TourId});
  
  if(!currentTour) 
  return res.json({info: 'Tour notFound'});

  var priceObj = ' ';

  if(prices)
  priceObj = await Price.findOne({id: prices});
  
  if(!priceObj) 
  return res.json({info: 'Price notFound'});

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

  var purchaseObj = ' ';

  if(purchases)
  purchaseObj = await Place.findOne({id: purchases});
  
  if(!purchaseObj) 
  return res.json({info: 'Purchase notFound'});
  
  
 
  
  var updatedTour = await Tour.update({id: TourId})
  .set({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,

    purchases: (purchases)?await Tour.addToCollection(TourId, 'purchases', purchaseObj.id):undefined,
    prices: (prices)?await Tour.addToCollection(TourId, 'prices', priceObj.id):undefined,
    buses: (buses)?await Tour.addToCollection(TourId, 'buses', busObj.id):undefined,
    dateinformations: (dateinformations)?await Tour.addToCollection(TourId, 'dateinformations', dateinfoObj.id):undefined,
    places: (places)?await Tour.addToCollection(TourId, 'places', placeObj.id):undefined
  })
  .intercept((err)=>{
    err.message = 'An error has ocurred: '+err.message;
    return err;
   })
  .fetch();
  
  return res.json(updatedTour);
}