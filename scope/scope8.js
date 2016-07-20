var _ = require('underscore')

function whatAmI() {
	console.log('I am: ' + this.num)
}


var a = {
	num: 5
}

var b = {
	num: 6,
	whatAmI: whatAmI
}

var c = {
	num: 7
}

a.whatAmI = whatAmI
whatAmI()
a.whatAmI()
b.whatAmI()

var whatAmI2 = _.bind(whatAmI, c)

b.whatAmI = whatAmI2
c.whatAmI = whatAmI2

b.whatAmI()
c.whatAmI()
whatAmI2()
