module.exports = async function (req, res) {

  req.file('avatar').upload({
    //saveAs: req.body.name,
    dirname: require('path').resolve(sails.config.appPath, 'assets/images'),
    maxBytes: 10000000
  }, async (err, uploadedFiles)=>{
    if(err)
      return res.serverError(err);

    if(uploadedFiles.length == 0)
      return res.badRequest('No file was uploaded');

    var iop = await ImageOfPlace.create({
      image_url: uploadedFiles[0].fd
    })
    .fetch()
    .exec((err)=>{
      if(err)
        return res.serverError(err);

      return res.ok();
    });
  });

}