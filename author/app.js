var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var fs = require('fs');

var logger = {
    info: function(message) {
        console.log(message);
    },
    debug: function(message) {
       // console.log(message);
    },
    verbose: function(message) {
        console.log(message);
    },
    error: function(message) {
        console.log(message);
    }
}

var u = {
    prettyJson: function (jObj) {
        return JSON.stringify(jObj, null, '\t');
    }
}

var AUTHOR = {
    book: undefined,
    config: {
        manifest: 'japan_story.json'
    }
}

function parseBook(bookManifest) {
    console.log('reading bookManifest=' + bookManifest, 'utf-8');
    var bookModel = JSON.parse(fs.readFileSync(bookManifest));

    logger.debug('========================');
    logger.debug(u.prettyJson(bookModel));
    logger.debug('========================');

    return bookModel;
}
AUTHOR.book = parseBook(AUTHOR.config.manifest);

module.exports = app;
