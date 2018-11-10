
module.exports = async (req, res) => {
  const LocationId = req.param('id');
  
  let currentLocation = await Location.findOne({id: LocationId});
  
  if(!currentLocation) 
  return res.json({info: 'Location notFound'});
  
 
  var updatedLocation = await Location.update({id: LocationId})
  .set({
    latitude: req.body.latitude,
    longitude: req.body.longitude
  }).fetch();
  
  return res.json(updatedLocation);
}