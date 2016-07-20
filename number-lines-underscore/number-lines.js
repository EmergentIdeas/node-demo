#! /usr/local/bin/node

var fs = require('fs')
var _ = require('underscore')

var data = fs.readFileSync('./input.txt')
var info = data.toString()
var lines = info.split('\n')
_.each(lines, function(line) {
	console.log((i + 1) + ': ' + lines[i])
})
