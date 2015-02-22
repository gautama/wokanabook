var fs = require('fs');

var manifestFileName = process.argv[2];
console.log('reading manifestFile=' + manifestFileName, 'utf-8');
var book = JSON.parse(fs.readFileSync(manifestFileName));

