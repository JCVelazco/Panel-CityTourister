
module.exports = async (req, res) => {
  const TicketTypeId = req.param('id');
  
  let currentTicketType = await TicketType.findOne({id: TicketTypeId});
  
  if(!currentTicketType) 
  return res.json({info: 'TicketType notFound'});
  
 
  var updatedTicketType = await TicketType.update({id: TicketTypeId})
  .set({
    name: req.body.name,
    description: req.body.description,
  }).fetch();
  
  return res.json(updatedTicketType);
}