
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , channel = require('./routes/channel')
  , http = require('http')
  , path = require('path')
  , uglify = require('express-uglify')
  , staticAsset = require('static-asset')
  , reds = require('reds'),
    redis = require('redis');

app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.compress());
  app.use(uglify.middleware({ 
    src: __dirname + '/public',
    logLevel: 'debug'
  }));
  app.use(staticAsset(__dirname + "/public/") );
  app.use(express.static(path.join(__dirname, 'public')));
});

/*
reds.client = redis.createClient(10000, "localhost"); 
reds.client.auth("3ca6ef43-4132-4f05-aab7-e72f6342b61a", function() {
  app.locals({
    searchClient: reds.createSearch('search:wilmington'),
    dbClient: reds.client
  });
});
*/

app.locals({
  searchClient: reds.createSearch('search:wilmington'),
  dbClient: reds.client
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/search/:channel', channel.search);
app.get('/:id', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
