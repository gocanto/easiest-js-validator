import Vue from 'vue';
import Validator from 'easiest-js-validator';

window.Vue = Vue;

new Vue({

	el: 'body',

	data:
	{
		errors: {}, profile: {},

		rules: {
			url: 'url',
			integer: 'integer',
			numeric: 'numeric',
			alphaNum: 'required,alphaNum',
			email: 'required,email',
			last_name: 'required,alpha',
			first_name: 'required,alpha',
		},

		messages: {
			'url': 'The field format is invalid.',
			'numeric': 'The field must be a number.',
			'integer': 'The field must be an integer.',
			'alpha': 'The field may only contain letters.',
			'required': 'The field field is required.',
			'email': 'The field must be a valid email address.',
			'alphaNum': 'The field may only contain letters and numbers.',
		}
	},

	methods:
	{
		//submit the form.
		submit: function ()
		{
			//check for validation rules.
			let validate = Validator.make(this.profile, this.rules, this.messages);

			if (Object.keys(validate).length > 0)
			{
				this.errors = validate;
				return false;
			}

			this.errors = [];

			alert('Do something amazing!');
		},

		//look up possibles validation errors.
		hasError: function (key)
		{
			return typeof this.errors[key] !== 'undefined';
		}
	}

});