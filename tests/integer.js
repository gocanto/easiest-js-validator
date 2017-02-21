import test from 'ava';
let Validator = require('./../src/js/validator');

test('The input a valid integer', t => {

	let output = Validator.make({ "integer": "32" }, { "integer": "integer" }, {
		"integer": "The field must be an integer."
	});

	t.false(Object.keys(output).length > 0, output.integer);
});

test('The input is not an integer', t => {

	let output = Validator.make({ "integer": "gocanto" }, { "integer": "integer" }, {
		"integer": "The field must be an integer."
	});

	t.true(Object.keys(output).length > 0, output.integer);
});