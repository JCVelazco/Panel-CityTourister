module.exports = async (req, res) => {
  const busId = req.param('id');


  var tourObj;
  //if i recieve the field I check if its correct
  if(req.tour_id){
    tourObj = (await Tour.findOne({where: {id: req.tour_id}, select: ['id']}) === undefined)?undefined:inputs.tour_id;
    if(tourObj === undefined){
      return exits.serverError({
        info: 'Tour not found'
      });
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