import test from 'ava';
let Validator = require('./../src/js/validator');

test('The input is a valid phone number', t => {

	let output = Validator.make({ "phone": "(123) 456-7890" }, { "phone": "phone" }, {
		"phone": "The field does not have a valid phone number format."
	});

	t.false(Object.keys(output).length > 0, output.phone);
});

test('The input is not a valid phone number', t => {

	let output = Validator.make({ "phone": "gocanto*" }, { "phone": "phone" }, {
		"phone": "The field does not have a valid phone number format."
	});

	t.true(Object.keys(output).length > 0, output.phone);
});