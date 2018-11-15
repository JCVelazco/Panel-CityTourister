module.exports = async (req, res) => {
  const PurchaseId = req.param('id');
  let user_id = req.body.user_id;
  let company_id = req.body.company_id;
  let tickets = req.body.tickets;
  
  
  let currentPurchase = await Purchase.findOne({id: PurchaseId});
  
  if(!currentPurchase) 
  return res.json({info: 'Purchase notFound'});
  
  
  var userObj = ' ';
  
  if(user_id)
  userObj = await User.findOne({id: user_id});
  
  if(!userObj) 
  return res.json({info: 'User notFound'});

  var companyObj = ' ';
  
  if(company_id)
  companyObj = await Company.findOne({id: company_id});
  
  if(!companyObj) 
  return res.json({info: 'Company notFound'});

  var ticketObj = ' ';
  
  if(tickets)
  ticketObj = await Ticket.findOne({id: tickets});
  
  if(!ticketObj) 
  return res.json({info: 'Ticket notFound'});
  
  var updatedPurchase = await Purchase.update({id: PurchaseId})
  .set({
    sub_total: req.body.sub_total,
    total: req.body.total,
    date_tour: req.body.date_tour,
    user_id: userObj.id,
    company_id: companyObj.id,
    tickets: ticketObj.id
  })
  .intercept((err)=>{
    err.message = 'An error has ocurred: '+err.message;
    return err;
   })
  .fetch();
  
  return res.json(updatedPurchase);
}