module.exports = async (req, res) => {
    const ticketTypeId = req.param('id');
   
  
    let currentTicketType = await TicketType.findOne({id: ticketTypeId}).populate('prices');
  
    if(!currentTicketType) 
      return res.json({info: 'TicketType notFound'});

    if(currentTicketType.prices.length != 0){
        return res.json({info: 'TicketType has prices, cannot be deleted'});
    }

    var deletedTicketType = await TicketType.destroy({id: ticketTypeId})
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
     })
    .fetch();
  
    return res.json(deletedTicketType);
  }