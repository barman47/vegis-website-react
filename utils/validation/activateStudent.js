const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateStudentRegisterInput(data) {
    let errors = {};

    data.registrationNumber = !isEmpty(data.registrationNumber) ? data.registrationNumber : '';
    data.authenticationPin = !isEmpty(data.authenticationPin) ? data.authenticationPin : '';
    

    if (Validator.isEmpty(data.registrationNumber)) {
        errors.registrationNumber = 'Registration Number is required'
    }

    if (Validator.isEmpty(data.authenticationPin)) {
        errors.authenticationPin = 'Authentication Pin is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};