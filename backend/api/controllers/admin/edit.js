module.exports = async (req, res) => {
  const adminId = req.param('id');

  let currentAdmin = await Admin.findOne({id: adminId});

  if(!currentAdmin) 
    return res.json({info: 'Admin notFound'});


  var updatedAdmin = await Admin.update({id: adminId})
  .set({
    email: req.body.email,
    username: req.body.username,
    connection_time: req.body.connection_time,
    password: req.body.password,
  }).fetch();

  return res.json(updatedAdmin);
}