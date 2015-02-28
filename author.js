var _ = require('underscore');
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
	var bookModel = JSON.parse(fs.readFileSync(bookManifest));
	AUTHOR.bookModel = bookModel;

	logger.debug('========================');
	logger.debug(u.prettyJson(bookModel));
	logger.debug('========================');

	var bookProps = ['title', 'sounds', 'pages'];
	var i;
	for (i = 0; i < bookProps.length; i++) {
		logger.verbose(bookProps[i] + ': {..}');
	}
}

var bookManifest = process.argv[2];
parseBook(bookManifest);
