var fs = require('fs')
var _ = require('underscore')

var numberOfCharsInLine = function(line) {
	return line.replace(/ /, '').length
}

var printNumberedQuantity = function(value, index) {
	console.log((index + 1) + ": " + value)
}

var data = fs.readFileSync('./input.txt')
var lines = data.toString().split('\n')

var counts = _.map(lines, numberOfCharsInLine)
_.each(counts, printNumberedQuantity)
