module.exports = async (req, res) => {
    const currentId = req.param('id');
   
  
    let currentObject = await Tour.findOne({id: currentId}).populate('prices');
  
    if(!currentObject) 
      return res.json({info: 'Tour notFound'});

    if(currentObject.prices.length != 0){
        return res.json({info: 'Tour has prices, cannot be deleted'});
    }

    var deletedObject = await Tour.destroy({id: currentId})
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
     })
    .fetch();
  
    return res.json(deletedObject);
  }