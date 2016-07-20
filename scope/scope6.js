
function makePush(ar) {
	return function(item) {
		ar.push(item)
	}
}


var theArray = []
var push = makePush(theArray)

push(10)
push(12)
push(14)

console.log(theArray.join(', '))
