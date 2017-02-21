import test from 'ava';
let Validator = require('./../src/js/validator');

test('The input is valid', t => {

	let output = Validator.make({ "required": "Hi there!" }, { "required": "required" }, {
		"required": "The field field is required."
	});

	t.false(Object.keys(output).length > 0, output.required);
});

test('The input is required', t => {

	let output = Validator.make({ "required": "" }, { "required": "required" }, {
		"required": "The field field is required."
	});

	t.true(Object.keys(output).length > 0, output.required);
	t.is(output.required, "The field field is required.");
});

test('An input object can be required as well', t => {

	let output = Validator.make({ "required": {} }, { "required": "required" }, {
		"required": "The field field is required."
	});

	t.true(Object.keys(output).length > 0, output.required);
	t.is(output.required, "The field field is required.");
});

test('A valid input object', t => {

	let output = Validator.make({ "required": { name: 'gustavo' } }, { "required": "required" }, {
		"required": "The field field is required."
	});

	t.false(Object.keys(output).length > 0);
});