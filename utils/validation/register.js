const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateStudentRegisterInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.phone = !isEmpty(data.phone) ? data.phone : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.gender = !isEmpty(data.gender) ? data.gender : '';
    data.address = !isEmpty(data.address) ? data.address : '';
    data.dateOfBirth = !isEmpty(data.dateOfBirth) ? data.dateOfBirth : '';
    data.stateOfOrigin = !isEmpty(data.stateOfOrigin) ? data.stateOfOrigin : '';
    data.lga = !isEmpty(data.lga) ? data.lga : '';
    data.nextOfKinName = !isEmpty(data.nextOfKinName) ? data.nextOfKinName : '';
    data.nextOfKinAddress = !isEmpty(data.nextOfKinAddress) ? data.nextOfKinAddress : '';
    data.nextOfKinPhone = !isEmpty(data.nextOfKinPhone) ? data.nextOfKinPhone : '';
    data.nextOfKinEmail = !isEmpty(data.nextOfKinEmail) ? data.nextOfKinEmail : '';
    data.nextOfKinAddress = !isEmpty(data.nextOfKinAddress) ? data.nextOfKinAddress : '';
    data.nextOfKinOccupation = !isEmpty(data.nextOfKinOccupation) ? data.nextOfKinOccupation : '';
    data.relationship = !isEmpty(data.relationship) ? data.relationship : '';
    data.course = !isEmpty(data.course) ? data.course : '';
    data.courseType = !isEmpty(data.courseType) ? data.courseType : '';
    data.studentId = !isEmpty(data.studentId) ? data.studentId : '';
    // data.passport = !isEmpty(data.passport) ? data.passport : '';

    if(!Validator.isLength(data.name, { min: 2, max: 50 })) {
        errors.name = 'Invalid Name';
    }

    if (Validator.isEmail(data.name)) {
        errors.name = 'Invalid Name';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name is field is required'
    }

    if (!Validator.isMobilePhone(data.phone)) {
        errors.phone = 'Invalid Phone Number';
    }

    if (Validator.isEmpty(data.phone)) {
        errors.phone = 'Phone Number is required';
    }

    if (!Validator.equals(data.phone.length.toString(), '11')) {
        errors.phone = 'Invalid Phone Number';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid'
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is field is required'
    }

    if (Validator.isNumeric(data.gender)) {
        errors.gender = 'Gender Cannot be a number'
    }

    if (Validator.isEmpty(data.gender)) {
        errors.gender = 'Gender is required'
    }

    if (Validator.isNumeric(data.address)) {
        errors.address = 'Invalid Address';
    }

    if (Validator.isEmail(data.address)) {
        errors.address = 'Address cannot be an email';
    }

    if (Validator.isEmpty(data.address)) {
        errors.address = 'Address is required';
    }

    if (Validator.isEmpty(data.dateOfBirth)) {
        errors.dateOfBirth = 'Date of Birth is required';
    }

    if (Validator.isNumeric(data.stateOfOrigin)) {
        errors.stateOfOrigin = 'Invalid State of Origin';
    }

    if (Validator.isEmpty(data.stateOfOrigin)) {
        errors.stateOfOrigin = 'Sate of Origin is required';
    }

    if (Validator.isNumeric(data.lga)) {
        errors.lga = 'Invalid Local Government Area';
    }

    if (Validator.isEmpty(data.lga)) {
        errors.lga = 'Local Government is required';
    }

    if (!Validator.isLength(data.nextOfKinName, { min: 2, max: 50 })) {
        errors.nextOfKinName = 'Invalid Name';
    }

    if (Validator.isEmail(data.nextOfKinName)) {
        errors.nextOfKinName = 'Invalid Name';
    }

    if (Validator.isEmpty(data.nextOfKinName)) {
        errors.nextOfKinName = 'Next of Kin Name is required';
    }

    if (Validator.isNumeric(data.nextOfKinAddress)) {
        errors.nextOfKinAddress = 'Invalid Address';
    }

    if (Validator.isEmail(data.nextOfKinAddress)) {
        errors.nextOfKinAddress = 'Invalid Address';
    }

    if (Validator.isEmpty(data.nextOfKinAddress)) {
        errors.nextOfKinAddress = 'Next of Kin Address is required';
    }

    if (!Validator.isMobilePhone(data.nextOfKinPhone)) {
        errors.nextOfKinPhone = 'Invalid Phone Number';
    }

    if (!Validator.equals(data.nextOfKinPhone.length.toString(), '11')) {
        errors.nextOfKinPhone = 'Invalid Phone Number';
    }

    if (Validator.isEmpty(data.nextOfKinPhone)) {
        errors.nextOfKinPhone = 'Next of Kin Phone is required';
    }

    if (!Validator.isEmail(data.nextOfKinEmail)) {
        errors.nextOfKinEmail = 'Invalid Email Address';
    }

    if (Validator.isEmpty(data.nextOfKinEmail)) {
        errors.nextOfKinEmail = 'Next of Kin Email is required';
    }

    if (Validator.isEmail(data.nextOfKinAddress)) {
        errors.nextOfKinAddress = 'Address Cannot be an Email';
    }

    if (Validator.isNumeric(data.nextOfKinAddress)) {
        errors.nextOfKinAddress = 'Address Cannot be a Number';
    }

    if (!Validator.isLength(data.nextOfKinAddress, { min: 10 })) {
        errors.nextOfKinAddress = 'Invalid Address';
    }

    if (Validator.isEmpty(data.nextOfKinAddress)) {
        errors.nextOfKinAddress = 'Next of Kin Address is required';
    }

    if (!Validator.isLength(data.nextOfKinOccupation, { min: 5 })) {
        errors.nextOfKinOccupation = 'Next of Kin Occupation should be at least 5 characters long';
    }

    if (Validator.isEmpty(data.nextOfKinOccupation)) {
        errors.nextOfKinOccupation = 'Invalid Occupation';
    }

    if (Validator.isEmail(data.relationship)) {
        errors.relationship = 'Invalid Relationship';
    }
    
    if (Validator.isNumeric(data.relationship)) {
        errors.relationship = 'Invalid Relationship';
    }

    if (Validator.isEmpty(data.relationship)) {
        errors.relationship = 'Relationship with next of kin is required';
    }

    if (Validator.isEmpty((data.course))) {
        errors.course = 'Please Select a Course';
    }

    if (Validator.isEmpty(data.courseType)) {
        errors.courseType = 'Please Select course type';
    }

    // if (Validator.isEmpty(data.passport)) {
    //     errors.passport = 'Passport is required';
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};