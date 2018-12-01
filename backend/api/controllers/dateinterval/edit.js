module.exports = async (req, res) => {
  const DateIntervalId = req.param('id');
  
  let currentDateInterval = await DateInterval.findOne({id: DateIntervalId});
  
  if(!currentDateInterval) 
  return res.json({info: 'DateInterval notFound'});
  
 
  var updatedDateInterval = await DateInterval.update({id: DateIntervalId})
  .set({
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    service: req.body.service
  })
  .intercept((err)=>{
    err.message = 'An error has ocurred: '+err.message;
    return err;
   })
  .fetch();
  
  return res.json(updatedDateInterval);
}