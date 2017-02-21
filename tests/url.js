import test from 'ava';
let Validator = require('./../src/js/validator');

test('The input is a valid url', t => {

	let output = Validator.make({ "url": "http://g-ocanto.com" }, { "url": "url" }, {
		"url": "The field format is invalid"
	});

	t.false(Object.keys(output).length > 0, output.url);
});

test('The input is not a valid url', t => {

	let output = Validator.make({ "url": "gocanto" }, { "url": "url" }, {
		"url": "The field format is invalid"
	});

	t.true(Object.keys(output).length > 0, output.url);
});