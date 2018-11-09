module.exports = async (req, res) => {
  const busId = req.param('id');

  let tourObj = await Tour.findOne({id: req.body.tour_id});

  if(!tourObj) return res.json({info: 'Tour not Found'});

  var updatedBus = await Bus.update({id: busId})
  .set({
    availability: req.body.availability,
    numBus: req.body.numBus,
    tour_id: tourObj
  }).fetch();

  return res.json(updatedBus);
}