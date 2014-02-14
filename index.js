
module.exports = function Factory() {

	var paymentMethods = {}

	function add(newPaymentMethod) {
		paymentMethods[newPaymentMethod.id] = newPaymentMethod
	}

	function get(id) {
		if (typeof paymentMethods[id] === 'undefined') {
			throw new Error("No payment method exists for id '" + id + "'")
		}
		return paymentMethods[id]
	}

	return {
		add: add,
		get: get
	}
}
