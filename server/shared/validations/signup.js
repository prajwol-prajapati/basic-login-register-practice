import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';


export default function validateInput(data) {
    let errors = {};

    if(Validator.isEmpty(data.username)) {
        errors.username = 'this field is required';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'this field is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'this field is required';
    }

    if(Validator.isEmpty(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'this field is required';
    }

    if (!Validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Password must match';
    }

    if(Validator.isEmpty(data.timezone)) {
        errors.timezone = 'this field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}