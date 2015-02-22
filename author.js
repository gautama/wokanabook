var _ = require('underscore');
var fs = require('fs');

var logger = {
	info: function(message) {
		console.log(message);
	},
	debug: function(message) {
		// console.log(message);
	},
	error: function(message) {
		console.log(message);
	}
}

var book = {};
function parseBook(bookManifest) {
	logger.debug('================================');
	logger.debug(JSON.stringify(bookManifest));
	logger.debug('================================');

	book.title = bookManifest.title;
	logger.info(book.title);
}

var manifestFileName = process.argv[2];
console.log('reading manifestFile=' + manifestFileName, 'utf-8');
var bookManifest = JSON.parse(fs.readFileSync(manifestFileName));

parseBook(bookManifest);
