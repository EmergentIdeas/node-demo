var fs = require('fs')

var readLines = function(path) {
	var data = fs.readFileSync(path)
	var lines = data.toString().split('\n')
	return lines
}

module.exports = readLines
