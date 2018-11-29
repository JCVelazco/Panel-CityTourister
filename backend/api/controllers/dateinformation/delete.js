module.exports = async (req, res) => {
    const DateInformationId = req.param('id');
    
    let currentDateInformation = await DateInformation.findOne({id: DateInformationId});
    
    if(!currentDateInformation) 
    return res.json({info: 'DateInformation notFound'});
    
    await DateInterval.destroy({id: currentDateInformation.date_id.id})
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
     })
    .fetch();

    await HourInterval.destroy({id: currentDateInformation.hour_id.id})
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
     })
    .fetch();
    
    var deleteDateInformation = await DateInformation.destroy({id: DateInformationId})
    .intercept((err)=>{
      err.message = 'An error has ocurred: '+err.message;
      return err;
     })
    .fetch();
    
    return res.json(deleteDateInformation);
  }