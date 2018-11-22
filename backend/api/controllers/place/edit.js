module.exports = async (req, res) => {
  const PlaceId = req.param('id');
  let place_type_id = req.body.place_type_id;
  let imagesOfPlaces = req.body.imagesOfPlaces;
  let tours = req.body.tours;
  
  
  let currentPlace = await Place.findOne({id: PlaceId});
  
  if(!currentPlace) 
    return res.json({info: 'Place notFound'});
  
  var placeTypeObj = ' ';
  
  if(place_type_id)
    placeTypeObj = await PlaceType.findOne({id: place_type_id});
  
  if(!placeTypeObj) 
    return res.json({info: 'PlaceType notFound'});

  
  var imageObj = ' ';
  
  if(imagesOfPlaces)
    imageObj = await ImageOfPlace.findOne({id: imagesOfPlaces});
  
  if(!imageObj) 
    return res.json({info: 'Image notFound'});

 
  var tourObj = ' ';
  
  if(tours)
    tourObj = await Tour.findOne({id: tours});
  
  if(!tourObj) 
    return res.json({info: 'Tour notFound'});
  
  
  var updatedPlace = await Place.update({id: PlaceId})
  .set({
    name: req.name,
    description: req.body.description,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    narrative_url: req.body.narrative_url,
    place_type_id: placeTypeObj.id,
    imagesOfPlaces: (imagesOfPlaces)?await Place.addToCollection(PlaceId, 'imagesOfPlaces', imageObj.id):undefined,
    tours: (tours)?await Place.addToCollection(PlaceId, 'tours', tourObj.id):undefined
  })
  .intercept((err)=>{
    err.message = 'An error has ocurred: '+err.message;
    return err;
   })
  .fetch();
  
  return res.json(updatedPlace);
}