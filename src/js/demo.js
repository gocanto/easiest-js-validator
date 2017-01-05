import Vue from 'vue';
import Validator from './validator';

window.Vue = Vue;

new Vue({

	el: '#demo',

	data:
	{
		errors: {}, profile: {},

		rules: {
			url: 'url',
			dateISO: 'dateISO',
			integer: 'integer,min,3,max,10',
			numeric: 'numeric,length,3',
			blank: 'required,blank',
			email: 'required,email',
			phone: 'required,phone',
			last_name: 'required,alpha',
			first_name: 'required,alpha',
			alphaNum: 'required,alphaNum'
		},

		messages: {
			'url': 'The field format is invalid.',
			'numeric': 'The field must be a number.',
			'integer': 'The field must be an integer.',
			'required': 'The field field is required.',
			'alpha': 'The field may only contain letters.',
			'email': 'The field must be a valid email address.',
			'dateISO': 'Please enter a valid date with a ISO format.',
			'alphaNum': 'The field may only contain letters and numbers.',
			'phone': 'The field does not have a valid phone number format.',
			'blank': 'The field is required and does not allow blank spaces.',
			'length': 'The field is required and has to be exactly this length.',
			'min': 'The field is required and has to have at least amount of 3 symbols.',
			'max': 'The field is required and can not be longer than 10 symbols.'
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