
module.exports = async (req, res) => {
  const UserId = req.param('id');
  
  let currentUser = await User.findOne({id: UserId});
  
  if(!currentUser) 
  return res.json({info: 'User notFound'});
  
 
  var updatedUser = await User.update({id: UserId})
  .set({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone_number: req.body.phone_number
  })
  .intercept((err)=>{
    err.message = 'An error has ocurred: '+err.message;
    return err;
   })
  .fetch();
  
  return res.json(updatedUser);
}