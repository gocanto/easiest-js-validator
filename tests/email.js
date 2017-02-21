import test from 'ava';
let Validator = require('./../src/js/validator');

test('The input is a valid email address', t => {

	let output = Validator.make({ "email": "gustavoocanto@gmail.com" }, { "email": "email" }, {
		"email": "The field must be a valid email address."
	});

	t.false(Object.keys(output).length > 0, output.email);
});

test('The input is not a valid email address', t => {

	let output = Validator.make({ "email": "gocanto" }, { "email": "email" }, {
		"email": "The field must be a valid email address."
	});

	t.true(Object.keys(output).length > 0, output.email);
});