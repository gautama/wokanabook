var _ = require('underscore');
_.str = require('underscore.string');
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
	bookModel: undefined,
	configModel: undefined
}

var bookProps = ['title', 'sounds', 'pages'];

function parseTitle(title) {
	logger.verbose('title: ' + AUTHOR.bookModel.title);
}

function parseSounds(soundsManifest) {
}

function parsePages(pagesManifest) {	
}

function parseBook(bookManifest) {
	console.log('reading bookManifest=' + bookManifest, 'utf-8');
	var bookModel = JSON.parse(fs.readFileSync(bookManifest));

	logger.debug('========================');
	logger.debug(u.prettyJson(bookModel));
	logger.debug('========================');

	var i;
	for (i = 0; i < bookProps.length; i++) {
		logger.verbose(bookProps[i] + ': {..}');
	}

	return bookModel;
}

function parseConfig(configManifest) {
	console.log('reading bookConfig=' + configManifest, 'utf-8');
	var configModel = JSON.parse(fs.readFileSync(configManifest));
	AUTHOR.configModel = configModel;

	logger.verbose('========================');
	logger.verbose(u.prettyJson(configModel));
	logger.verbose('========================');

	return configModel;
}

var config = parseConfig(process.argv[2]);
AUTHOR.bookModel = parseBook(config.manifest);

var verb = process.argv[3];
logger.info('verb: ' + verb);

var path = process.argv[4];
logger.info('path: ' + path);

var uPath = url.parse(path);
logger.info(u.prettyJson(uPath));

// GET /title
// POST /title

