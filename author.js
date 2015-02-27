var _ = require('underscore');
var fs = require('fs');

var logger = {
	info: function(message) {
		console.log(message);
	},
	debug: function(message) {
	    console.log(message);
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
	bookModel: undefined
}

function parseTitle(title) {
	logger.verbose('title: ' + AUTHOR.bookModel.title);
}

function parseSounds(soundsManifest) {
}

function parsePages(pagesManifest) {	
}

function parseBook(bookManifest) {
	console.log('reading bookManifest=' + bookManifest, 'utf-8');
	AUTHOR.bookModel = JSON.parse(fs.readFileSync(bookManifest));

	logger.debug('================================');
	logger.debug(u.prettyJson(AUTHOR.bookModel));
	logger.debug('================================');
}

var bookManifest = process.argv[2];
parseBook(bookManifest);




