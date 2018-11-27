module.exports = async (req, res) => {
    const currentId = req.param('id');
   
  
    let currentObject = await Price.findOne({id: currentId}).populate('tickets');
  
    if(!currentObject) 
      return res.json({info: 'Price notFound'});

    if(currentObject.tickets.length != 0){
        return res.json({info: 'Price has tickets, cannot be deleted'});
    }

    var deletedObject = await Price.destroy({id: currentId})
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
     })
    .fetch();
  
    return res.json(deletedObject);
  }