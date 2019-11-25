const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateStudentRegisterInput(data) {
    let errors = {};

    data.topic = !isEmpty(data.topic) ? data.topic : '';
    data.department = !isEmpty(data.department) ? data.department : '';
    data.abstract = !isEmpty(data.abstract) ? data.abstract : '';
    data.chapters = !isEmpty(data.chapters) ? data.chapters : '';
    data.pages = !isEmpty(data.pages) ? data.pages : '';
    data.price = !isEmpty(data.price) ? data.price : '';
    data.introduction = !isEmpty(data.introduction) ? data.introduction : '';

    if (Validator.isEmpty(data.topic)) {
        errors.topic = 'Project topic is required!';
    }

    if (Validator.isEmpty(data.department)) {
        errors.department = 'Project department is required!';
    }
    
    if (Validator.isEmpty(data.chapters)) {
        errors.chapters = 'Number of chapters is required!';
    }
    if (!Validator.isNumeric(data.chapters)) {
        errors.chapters = 'Invalid number!';
    }

    if (Validator.isEmpty(data.department)) {
        errors.department = 'Number of project pages is required!';
    }

    if (Validator.isEmpty(data.pages)) {
        errors.pages = 'Project number of pages is required!';
    }
    if (!Validator.isNumeric(data.pages)) {
        errors.pages = 'Invalid number of pages!';
    }

    if (Validator.isEmpty(data.price)) {
        errors.price = 'Project price is required!';
    }
    if (!Validator.isNumeric(data.price)) {
        errors.price = 'Invalid Price!';
    }

    if (Validator.isEmpty(data.introduction)) {
        errors.introduction = 'Project topic introduction is required!';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};