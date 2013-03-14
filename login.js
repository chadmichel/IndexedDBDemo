var requiredir = require("requiredir")
var backend = requiredir("./backend");

exports.init = function(app, passport) {

    var FacebookStrategy = require('passport-facebook').Strategy;

    passport.use(new FacebookStrategy({
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: "http://localhost:3000/auth/facebook/callback"
        },
        function(accessToken, refreshToken, profile, done) {

            console.log("token = " + accessToken);
            console.log("refreshToken = " + refreshToken);
            console.log("user name = " + profile.name);
            console.log("display name = " + profile.displayName);
            console.log("id = " + profile.id);
            console.log("value = " + profile.value);

            done(null, {email: profile.value});

        }
    ));

    // Redirect the user to Facebook for authentication.  When complete,
    // Facebook will redirect the user back to the application at
    //     /auth/facebook/callback
    app.get('/auth/facebook', passport.authenticate('facebook'));

    // Facebook will redirect the user to this URL after approval.  Finish the
    // authentication process by attempting to obtain an access token.  If
    // access was granted, the user will be logged in.  Otherwise,
    // authentication has failed.
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', { successRedirect: '/',
            failureRedirect: '/login' }));

    passport.serializeUser(function(user, done) {
        done(null, { id: user.id, email: user.email });
    });

    passport.deserializeUser(function(id, done) {

            done(err, {id: id, email: "chadmichel@me.com"});

    });
};