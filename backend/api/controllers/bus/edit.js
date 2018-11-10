module.exports = async (req, res) => {
  const busId = req.param('id');
  var bus;

    bus = (await Bus.findOne({where: {id: busId}, select: ['id']}) === undefined)?undefined:busId;
    if(bus === undefined){
      return res.json({info: 'Bus not found'});
    }


  var tourObj;
  //if i recieve the field I check if its correct
  if(req.body.tour_id){
    tourObj = (await Tour.findOne({where: {id: req.body.tour_id}, select: ['id']}) === undefined)?undefined:req.body.tour_id;
    if(tourObj === undefined){
      return res.json({info: 'Tour not found'});
    }
  }


  var updatedBus = await Bus.update({id: busId})
  .set({
    availability: req.body.availability,
    numBus: req.body.numBus,
    tour_id: tourObj
  }).fetch();

  return res.json(updatedBus);
}