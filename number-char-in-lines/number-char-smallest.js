var _ = require('underscore')
var charCount = require('./char-count')
var printLines = require('./numbered-iterator')

var lines = require('./lines')('./input.txt')
_.each(_.map(lines, charCount), printLines)
