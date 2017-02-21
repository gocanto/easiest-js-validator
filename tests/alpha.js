import test from 'ava';
let Validator = require('./../src/js/validator');

test('The input has a valid alpha format', t => {

	let output = Validator.make({ "alpha": "gocanto" }, { "alpha": "alpha" }, {
		"alpha": "The field may only contain letters.."
	});

	t.false(Object.keys(output).length > 0, output.alpha);
});

test('The input does not have a valid aplha format', t => {

	let output = Validator.make({ "alpha": "1234567890" }, { "alpha": "alpha" }, {
		"alpha": "The field may only contain letters.."
	});

	t.true(Object.keys(output).length > 0, output.alpha);
});