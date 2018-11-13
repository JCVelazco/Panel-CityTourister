module.exports = async (req, res) => {
  const HourIntervalId = req.param('id');
  
  let currentHourInterval = await HourInterval.findOne({id: HourIntervalId});
  
  if(!currentHourInterval) 
  return res.json({info: 'HourInterval notFound'});
  
 
  var updatedHourInterval = await HourInterval.update({id: HourIntervalId})
  .set({
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    frequency: req.body.frequency
  })
  .intercept((err)=>{
    err.message = 'An error has ocurred: '+err.message;
    return err;
   })
  .fetch();
  
  return res.json(updatedHourInterval);
}