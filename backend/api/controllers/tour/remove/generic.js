module.exports = async (req, res) => {
  const TourId = req.param('id');
  let prices = req.body.prices;
  let buses = req.body.buses;
  let dateinformations = req.body.dateinformations;
  let places = req.body.places;
  
  let currentTour = await Tour.findOne({id: TourId});
  
  if(!currentTour) 
  return res.json({info: 'Tour notFound'});
  
  var updatedTour = await Tour.update({id: TourId})
  .set({
    prices: (prices)?await Tour.removeFromCollection(TourId, 'prices', prices):undefined,
    buses: (buses)?await Tour.removeFromCollection(TourId, 'buses', buses):undefined,
    dateinformations: (dateinformations)?await Tour.removeFromCollection(TourId, 'dateinformations', dateinformations):undefined,
    places: (places)?await Tour.removeFromCollection(TourId, 'places', places):undefined
  })
  .intercept((err)=>{
    err.message = 'An error has ocurred: '+err.message;
    return err;
   })
  .fetch();
  
  return res.json(updatedTour);
}