import test from 'ava';
let Validator = require('./../src/js/validator');

test('The input can not be empty', t => {

	let output = Validator.make({ "blank": "Making sure there is some data in this field" }, { "blank": "blank" }, {
		"blank": "The field is required and does not allow a blank space."
	});

	t.false(Object.keys(output).length > 0, output.blank);
});