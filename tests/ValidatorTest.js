import test from 'ava';
let Validator = require('./../src/js/validator');

test('The validator is a function', t => {
	t.true(typeof Validator == 'function');
});

test('An input is required and has to be formatted as email', t => {
	let output = Validator.make({ "email": "gustavoocanto@gmail.com" }, { "email": "required,email" }, {
		"email": "The field must be a valid email address."
	});

	t.false(Object.keys(output).length > 0, output.email);
});

test('An input is required and has to be formatted as email, but it has some errors', t => {
	let output = Validator.make({ "email": "" }, { "email": "required,email" }, {
		"email": "The field must be a valid email address.",
		"required": "The field field is required."
	});

	t.true(Object.keys(output).length > 0, output.email);
	t.is(output.email, "The field must be a valid email address.");
});

