var _ = require('underscore')

var myCreatedFunctions = []

for(var i = 0; i < 10; i++) {
	var newFunction = (function() {
		var j = i
		return function() {
			console.log(10 + j)
		}
	})()

	myCreatedFunctions.push(newFunction)
}

_.each(myCreatedFunctions, function(created) {
	created()
})
