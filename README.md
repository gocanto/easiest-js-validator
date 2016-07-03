# JS Validator

I wrote this library because I was tired of using 3rd packages, wanted something very light and easy implementation. Therefore, I am going to do my best pulling my thoughts out and explain how you could use it.

# Gettings started
First of all, you will have to import the library into the file where you are operating. As so,
```js
import Validator from '.validator';
```

# Example

![example](https://github.com/gocanto/js-validator/blob/development/src/images/demo.gif)


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

```js
//form object
profile: {
     first_name,
     last_name,
     email,
     address,
}
```


# Invoke the validator class
At this point, we just have to call the static method make into the validator class and pass the info which it will operate. As so,

```js
let validate = Validator.make(profile, rules, errors);
```

Where errors will be the responsible of bringing the language into the class, in order for it to offer a better output, such as field is required, email is not valid, etc. It is important to know that errors have to meet the same structure as profile object.

```js
//errors object example
errors: {
     first_name: 'required',
     email: 'must have a valid format'
}
```

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

If you have any question, shoot me an email. I will be glad of helping you out.

Email: gustavoocanto@gmail.com
