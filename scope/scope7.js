var _ = require('underscore')

function makePush(ar, prefix) {
	return function(item) {
		ar.push(prefix + ': ' + item)
	}
}


var theArray = []
var theArray2 = []
var push = makePush(theArray, 'happy item')
var push2 = makePush(theArray2, 'glad item')

_.each([10, 20, 30], push)
_.each([10, 20, 30], push2)

console.log(theArray.join(', '))
console.log(theArray2.join(', '))
