var express = require('express');
var router = express.Router();

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

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: AUTHOR.book.title });
});

module.exports = router;
