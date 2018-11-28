module.exports = async (req, res) => {
    const companyId = req.param('id');
   
  
    let currentCompany = await Company.findOne({id: companyId}).populate('purchases');
  
    if(!currentCompany) 
      return res.json({info: 'Company notFound', color: 'danger'});

    if(currentCompany.purchases.length != 0){
        return res.json({info: 'Company has purchases, cannot be deleted', color: 'danger'});
    }

    var deletedCompany = await Company.destroy({id: companyId})
    .intercept((err)=>{
        return res.json({info: 'An error has ocurred', color: 'warning'});
     })
    .fetch();
  
    return res.json(deletedCompany, {info: 'Company deleted', color: 'success'});
  }