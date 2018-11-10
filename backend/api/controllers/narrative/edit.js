
module.exports = async (req, res) => {
  const NarrativeId = req.param('id');
  
  let currentNarrative = await Narrative.findOne({id: NarrativeId});
  
  if(!currentNarrative) 
  return res.json({info: 'Narrative notFound'});
  
 
  var updatedNarrative = await Narrative.update({id: NarrativeId})
  .set({
    audio_url: req.body.audio_url
  }).fetch();
  
  return res.json(updatedNarrative);
}