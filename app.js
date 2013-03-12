
/**
 * Module dependencies.
 */

var requiredir = require("requiredir")

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

app = express();

var passport = require('passport'); // auth

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(passport.initialize());
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var configs = requiredir("./config");
var backend = requiredir("./backend");

app.get('/', routes.index);

app.get("/offline.appcache", function(req, res){
  res.header("Content-Type", "text/cache-manifest");
  res.sendfile('offline.appcache')
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

// configure auth
var login = require("./login");
login.init(app, passport);