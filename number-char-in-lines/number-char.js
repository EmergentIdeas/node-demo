var fs = require('fs')
var _ = require('underscore')

var data = fs.readFileSync('./input.txt')
var lines = data.toString().split('\n')

_.each(_.map(lines, function(line) {
	return line.replace(/ /, '').length
}), function(count, index) {
	console.log((index + 1) + ": " + count)
})
