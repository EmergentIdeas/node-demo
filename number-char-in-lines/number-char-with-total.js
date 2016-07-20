var fs = require('fs')
var _ = require('underscore')

var numberOfCharsInLine = function(line) {
	return line.replace(/ /, '').length
}

var printNumberedQuantity = function(count, index) {
	console.log((index + 1) + ": " + count)
}

var sum = function(runningTotal, num) {
	return runningTotal + num
}

var data = fs.readFileSync('./input.txt')
var lines = data.toString().split('\n')

var counts = _.map(lines, numberOfCharsInLine)
_.each(counts, printNumberedQuantity)


counts = _.filter(counts, function(num) {
	return num > 0
})

var total = _.reduce(counts, sum)
console.log('Total characters: ' + total)
console.log('Max length: ' + _.max(counts))
console.log('Min length: ' + _.min(counts))
