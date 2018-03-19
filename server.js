//Modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

//Routes
var appRoutes = require('./routes/app');
var userRoutes = require('./routes/user');
var parkingRoutes = require('./routes/parking');
var mapRoutes = require('./routes/maps');
var reservationRoutes = require('./routes/reservation');

var app = express();
var debug = require('debug')('node-rest:server');
var mongoose = require('mongoose');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('www'));
app.use(cors()); // CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/parksharing';
mongoose.connect(MONGODB_URI, function (err, database) {
  if (err) {
    process.exit(1);
  }

  db = database; // Our database object from mLab

  console.log("Database connection ready");

  // Initialize the app.
  app.listen(app.get('port'), function () {
    app.on('error', onError);
    app.on('listening', onListening);
    console.log("You're a wizard, Harry. I'm a what? Yes, a wizard, on port", app.get('port'));
  });
});

//Routes

app.use('/user', userRoutes);
app.use('/parking', parkingRoutes);
app.use('/maps', mapRoutes);
app.use('/reservation', reservationRoutes);
app.use('/', appRoutes);

module.exports = app;

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = app.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
