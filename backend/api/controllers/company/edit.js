module.exports = async (req, res) => {
  const companyId = req.param('id');
 

  let currentCompany = await Company.findOne({id: companyId});

  if(!currentCompany) 
    return res.json({info: 'Company notFound'});

  var updatedCompany = await Company.update({id: companyId})
  .set({
    name: req.body.name,
    full_name: req.body.full_name,
    phone_number: req.body.phone_number,
    address: req.body.address,
    postal_code: req.body.postal_code,
    rfc: req.body.rfc,
    ieps: req.body.ieps,
    iva: req.body.iva
  })
  .intercept((err)=>{
    err.message = 'An error has ocurred: '+err.message;
    return err;
   })
  .fetch();

  return res.json(updatedCompany);
}