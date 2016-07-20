#! /usr/local/bin/node

var fs = require('fs')

var data = fs.readFileSync('./input.txt')
var info = data.toString()
var lines = info.split('\n')
for(var i = 0; i < lines.length; i++) {
	console.log((i + 1) + ': ' + lines[i])
}
