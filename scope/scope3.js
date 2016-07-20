
function sayMore(org) {
	org.msg += ' world'
	console.log('saying more: ' + org.msg)
}

var test = {}
test.msg = 'hello'
sayMore(test)

console.log(test.msg)
