module.exports = async (req, res) => {
  const DateInformationId = req.param('id');
  let hour_id = req.body.hour_id;
  let date_id = req.body.date_id;
  
  let currentDateInformation = await DateInformation.findOne({id: DateInformationId});
  
  if(!currentDateInformation) 
  return res.json({info: 'DateInformation notFound'});
  
  var hourObj = ' ';
  
  if(hour_id)
  hourObj = await HourInterval.findOne({id: hour_id});
  
  if(!hourObj) 
  return res.json({info: 'HourInterval notFound'});
  
  var dateObj = ' ';
  
  if(date_id)
  dateObj = await DateInterval.findOne({id: date_id});
  
  if(!dateObj) 
  return res.json({info: 'DateInterval notFound'});
  
  var updatedDateInformation = await DateInformation.update({id: DateInformationId})
  .set({
    tours: req.body.tours,
    date_id: dateObj.id,
    hour_id: hourObj.id
  })
  .intercept((err)=>{
    err.message = 'An error has ocurred: '+err.message;
    return err;
   })
  .fetch();
  
  return res.json(updatedDateInformation);
}