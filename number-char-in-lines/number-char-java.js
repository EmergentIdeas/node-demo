var fs = require('fs')

var data = fs.readFileSync('./input.txt')
var info = data.toString()
var lines = info.split('\n')

var charCount = {}

for(var i = 0; i < lines.length; i++) {
	var line = lines[i]
	var counter = 0
	for(var j = 0; j < line.length; j++) {
		if(line[j] != ' ') {
			counter++
		}
	}
	charCount[i] = counter
}

for(var key in charCount) {
	console.log((parseInt(key) + 1) + ': ' + charCount[key])
}
