var _ = require('underscore')

var charCount = require('./char-count')
var printLines = require('./numbered-iterator')
var sum = require('./sum')
var pos = require('./pos')

var lines = require('./lines')('./input.txt')
lines = _.filter(lines, function(line) {
	return pos(charCount(line))
})

var counts = _.map(lines, charCount)
_.each(counts, printLines)


var total = _.reduce(counts, sum)
console.log('Total characters: ' + total)
console.log('Max length: ' + _.max(counts))
console.log('Min length: ' + _.min(counts))


// if you want to see the numbered lines
// _.each(lines, printLines)
