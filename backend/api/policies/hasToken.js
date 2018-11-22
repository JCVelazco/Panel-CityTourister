var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    var token = req.headers['authorization'] || req.headers['auth'];
    
    jwt.verify(token, sails.config.session.secret, async function(err, decoded){
        
        if(err) return res.notFound();
        if(!decoded.id || !decoded.email || !decoded.type) return res.notFound();
        
        let object;

        if(decoded.type == 'User')
            object = await sails.helpers.findUserById(decoded.id);
        if(decoded.type == 'Admin')
            object = await sails.helpers.findAdminById(decoded.id);

        if(decoded.email == object.email) next();
        else return res.notFound();
    })
};