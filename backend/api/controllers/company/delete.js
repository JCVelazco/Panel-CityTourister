module.exports = async (req, res) => {
    const companyId = req.param('id');
   
  
    let currentCompany = await Company.findOne({id: companyId}).populate('purchases');
  
    if(!currentCompany) 
      return res.json({info: 'Company notFound'});

    if(currentCompany.purchases.length != 0){
        return res.json({info: 'Company has purchases, cannot be deleted'});
    }

    var deletedCompany = await Company.destroy({id: companyId})
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
     })
    .fetch();
  
    return res.json(deletedCompany);
  }