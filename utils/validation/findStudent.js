const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateFindStudentInput(data) {
    let errors = {};

    data.studentNumber = !isEmpty(data.studentNumber) ? data.studentNumber : '';
    

    if (Validator.isEmpty(data.studentNumber)) {
        errors.studentNumber = 'Student Number is required'
    }

    console.log(data.studentNumber);

    return {
        errors,
        isValid: isEmpty(errors)
    }
};