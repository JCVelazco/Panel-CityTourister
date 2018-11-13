
module.exports = async (req, res) => {
  const TicketTypeId = req.param('id');
  
  let currentTicketType = await TicketType.findOne({id: TicketTypeId});
  
  if(!currentTicketType) 
  return res.json({info: 'TicketType notFound'});
  
 
  var updatedTicketType = await TicketType.update({id: TicketTypeId})
  .set({
    name: req.body.name,
    description: req.body.description,
  })
  .intercept((err)=>{
    err.message = 'An error has ocurred: '+err.message;
    return err;
   })
  .fetch();
  
  return res.json(updatedTicketType);
}