module.exports = async (req, res) => {
  const busId = req.param('id');
  let tour_id = req.body.tour_id;

  let currentBus = await Bus.findOne({id: busId});

  if(!currentBus) 
    return res.json({info: 'Bus notFound'});

  var tourObj = ' ';

  if(tour_id)
    tourObj = await Tour.findOne({id: tour_id});

  if(!tourObj) 
    return res.json({info: 'Tour notFound'});

  var updatedBus = await Bus.update({id: busId})
  .set({
    availability: req.body.availability,
    numBus: req.body.numBus,
    tour_id: tourObj.id
  })
  .intercept((err)=>{
    err.message = 'An error has ocurred: '+err.message;
    return err;
   })
  .fetch();

  return res.json(updatedBus);
}