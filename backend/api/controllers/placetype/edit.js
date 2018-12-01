
module.exports = async (req, res) => {
  const PlaceTypeId = req.param('id');
  
  let currentPlaceType = await PlaceType.findOne({id: PlaceTypeId});
  
  if(!currentPlaceType) 
  return res.json({info: 'PlaceType notFound'});
  
 
  var updatedPlaceType = await PlaceType.update({id: PlaceTypeId})
  .set({
    name: req.body.name
  })
  .intercept((err)=>{
    err.message = 'An error has ocurred: '+err.message;
    return err;
   })
  .fetch();
  
  return res.json(updatedPlaceType);
}