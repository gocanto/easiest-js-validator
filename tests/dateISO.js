import test from 'ava';
let Validator = require('./../src/js/validator');

test('The input has a valid ISO format', t => {

	let output = Validator.make({ "dateISO": "32" }, { "dateISO": "1984-10-18" }, {
		"dateISO": "Please enter a valid date with a ISO format."
	});

	t.false(Object.keys(output).length > 0, output.dateISO);
});

test('The input does not have a valid ISO format', t => {

	let output = Validator.make({ "dateISO": "gocanto" }, { "dateISO": "dateISO" }, {
		"dateISO": "Please enter a valid date with a ISO format."
	});

	t.true(Object.keys(output).length > 0, output.dateISO);
});