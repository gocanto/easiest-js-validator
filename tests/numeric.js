import test from 'ava';
let Validator = require('./../src/js/validator');

test('The input is a valid number', t => {

	let output = Validator.make({ "numeric": "3.2" }, { "numeric": "numeric" }, {
		"numeric": "The field must be an numeric."
	});

	t.false(Object.keys(output).length > 0, output.numeric);
});

test('The input is not a valid number', t => {

	let output = Validator.make({ "numeric": "gocanto" }, { "numeric": "numeric" }, {
		"numeric": "The field must be a number."
	});

	t.true(Object.keys(output).length > 0, output.numeric);
});