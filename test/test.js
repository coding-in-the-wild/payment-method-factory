var test = require('tap').test
var Factory = require('../index.js')

test('Has an add function', function(t) {
	t.equal(typeof Factory, 'function', 'module returns a function')

	var f = new Factory()

	t.equal(typeof f.add, 'function', 'instantiated object has an add function')

	t.end()
})

test('Can add a mock charge object and get it back', function(t) {
	var Mock = require('payment-method-mock')
	var mock = new Mock()

	var f = new Factory()

	f.add(mock)

	var paymentMethodFromFactory = f.get(mock.id)

	t.equal(typeof paymentMethodFromFactory, 'object', "Factory gave us back an actual object")
	t.equal(typeof paymentMethodFromFactory.charge, 'function', "Payment method still has a charge function")

	t.end()
})

test("Throws an error if there's no matching id in the factory", function(t) {
	var f = new Factory()

	t.plan(1)

	try {
		f.get("Doesn't exist!")
	} catch (e) {
		t.ok(e instanceof Error, 'The thrown error is an Error object')
		console.log("The thrown error had a message of:", e.message)
	}

	t.end()
})
