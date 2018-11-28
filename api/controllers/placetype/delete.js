module.exports = async (req, res) => {
    const currentId = req.param('id');
   
  
    let currentObject = await PlaceType.findOne({id: currentId}).populate('places');
  
    if(!currentObject) 
      return res.json({info: 'PlaceType notFound'});

    if(currentObject.places.length != 0){
        return res.json({info: 'PlaceType has places, cannot be deleted'});
    }

    var deletedObject = await PlaceType.destroy({id: currentId})
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
     })
    .fetch();
  
    return res.json(deletedObject);
  }