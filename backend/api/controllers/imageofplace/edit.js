
module.exports = async (req, res) => {
  const ImageOfPlaceId = req.param('id');
  
  let currentImageOfPlace = await ImageOfPlace.findOne({id: ImageOfPlaceId});
  
  if(!currentImageOfPlace) 
  return res.json({info: 'ImageOfPlace notFound'});
  
 
  var updatedImageOfPlace = await ImageOfPlace.update({id: ImageOfPlaceId})
  .set({
    image_url: req.body.image_url,
    description: req.body.description
  }).fetch();
  
  return res.json(updatedImageOfPlace);
}