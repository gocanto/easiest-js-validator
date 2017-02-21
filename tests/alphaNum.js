import test from 'ava';
let Validator = require('./../src/js/validator');

test('The input is a valid alphanumeric', t => {

	let output = Validator.make({ "alphaNum": "gocanto123" }, { "alphaNum": "alphaNum" }, {
		"alphaNum": "The field may only contain letters and numbers."
	});

	t.false(Object.keys(output).length > 0, output.alphaNum);
});

test('The input is not a valid alphanumeric', t => {

	let output = Validator.make({ "alphaNum": "gocanto123*" }, { "alphaNum": "alphaNum" }, {
		"alphaNum": "The field may only contain letters and numbers."
	});

	t.true(Object.keys(output).length > 0, output.alphaNum);
});