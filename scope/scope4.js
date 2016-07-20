var _ = require('underscore')

var myCreatedFunctions = []

for(var i = 0; i < 10; i++) {
	var newFunction = function() {
		console.log(10 + i)
	}
	myCreatedFunctions.push(newFunction)
}

_.each(myCreatedFunctions, function(created) {
	created()
})
