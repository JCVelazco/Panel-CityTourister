//not used

var passport = require('passport'),
    LocalStrategy = require ('passport-local'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = '5bbeb748b82385cc66475e5a1e16938f';

passport.use(new JwtStrategy(opts, async function(payload, callback){

    let objectFound = await Admin.findOne({
        email: payload.email
    }).decrypt() || User.findOne({
        email: payload.email
    }).decrypt();

    if(objectFound) return callback(null, objectFound, {info: 'Email found'});
}));

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email, password, callback)=>{

    let admin = await Admin.findOne({
        email: email
    }).decrypt();

    if(!admin) return callback(null, false, {info: 'Admin was not found', color: 'danger'});

    if(admin.password == password)
        return callback(null, admin, {info: 'Login success', color: 'success'});

    return callback(null, false, {info: 'Incorrect password', color: 'warning'});

}));