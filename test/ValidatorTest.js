let Should = require('should');
let Input = require('./input');
let Validator = require('./../src/js/validator');

describe('Validator Task', () => {

    it('Passing rules', () => {

		let errors = Validator.make(
			Input.data, Input.rules, Input.messages
		);

	    (Object.keys(errors).length > 0).should.not.be.true(
	    	resolveMessage(errors)
	    );
    });
});

/**
 * Format the output.
 *
 * @param  {Array} messages
 * @return {String}
 */
function resolveMessage(messages)
{
	let message = '';

	for (key in messages) {
		message += '(' + key + ') >> ' + messages[key] + '\n';
	}

	return message;
}