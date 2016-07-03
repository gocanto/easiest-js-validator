# Easiest JS Validator

It is a simple library ready to pull in into your project. Its goal is to provide an easy way to validate HTML forms without the headache of adapting any other complicated packages. Also, it was written in es2015, so you can get your feet wet with this amazing new way of working with JS.


# Gettings started
First of all, you will have to import the library into the file where you are operating. As so,

```js
import Validator from 'easiest-js-validator';
```

Take a look at the <a href="https://github.com/gocanto/easiest-js-validator/blob/development/src/js/demo.js#L2" target="_blank">example</a> published.

# illustration

![example](https://github.com/gocanto/easiest-js-validator/blob/development/src/images/demo.gif)


Also, you will be able to see the online <a href="https://gocanto.github.io/easiest-js-validator/" target="_blank">DEMO</a>


# Validation rules array

This array contains all the information about the form fields that you want to be validated where its keys are the same as your form object, As so:

```html
<!-- input example is linked through VUEJS -->
<input type="text" v-model = "profile.first_name">
```

```js
//rules object
rules: {
     first_name: 'required,alpha',
     last_name: 'required,alpha',
     email: 'required,email',
     address: 'required',
}
```
<a href="https://github.com/gocanto/easiest-js-validator/blob/development/src/js/demo.js#L14" target="_blank">Implementation</a>


```js
//form object
profile: {
     first_name,
     last_name,
     email,
     address,
}
```
<a href="https://github.com/gocanto/easiest-js-validator/blob/development/src/js/demo.js#L12" target="_blank">Implementation</a>



# Invoke the validator class
At this point, we just have to call the static method ```make``` into the validator class and pass the info which it will operate. As so,

```js
let validate = Validator.make(profile, rules, messages);
```

Where messages will be the responsible of bringing the language into the class, in order for it to offer a better output, such as field is required, email is not valid, etc. It is important to know that messages have to meet the same structure as profile object.

```js
//messages object example
messages: {
     first_name: 'required',
     email: 'must have a valid format'
}
```
<a href="https://github.com/gocanto/easiest-js-validator/blob/development/src/js/demo.js#L24" target="_blank">Implementation</a>



# If there were errors

If there were errors, you will have an associative array using reference the exactly field that does not me the rules. as so,

```js
errors = [
    first_name: "The field is required.",
    last_name: "The field is required.",
    email: "The email field must be a valid email address.",
    address: "The field is required."
]
```
<a href="https://github.com/gocanto/easiest-js-validator/blob/development/src/js/demo.js#L45" target="_blank">Implementation</a>



Now, you have access to the validation messages and can proceed as you want.

# How can I see if my field has errors?
This is easy enough. You only have to check the returned array and show the result on the form in the best way for you. As so,

```js
hasError: function (key)
{
     return typeof errors[key] !== 'undefined';
}

if (hasError('first_name')) {
     console.log(errors['first_name'])
}

```

You can see the demo on <a href="https://gocanto.github.io/easiest-js-validator/" target="_blank">DEMO</a>


# Features

You will be able to validate you forms againts any of this rules: 

* url
* integer
* numeric
* alphaNum
* email
* alpha
* required
* digits
* length


# Summary
In spite of it was written in vuejs, you will be able to pull in the validator class under any other js framework 

If you have any question, shoot me an email. I will be glad of helping you out.

# Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.


# License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.


# How can I thank you?
Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter? Spread the word!


Don't forget to [follow me on twitter](https://twitter.com/gocanto)!

Thanks!

Gustavo Ocanto.
gustavoocanto@gmail.com
