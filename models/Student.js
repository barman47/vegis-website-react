const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    dateOfBirth: {
        type: String,
        required: true
    },

    stateOfOrigin: {
        type: String,
        required: true
    },

    lga: {
        type: String, 
        required: true
    },

    nextOfKinName: {
        type: String,
        required: true
    },

    nextOfKinEmail: {
        type: String,
        required: true
    },

    nextOfKinPhone: {
        type: String,
        required: true
    },

    nextOfKinAddress: {
        type: String,
        required: true
    },

    relationship: {
        type: String,
        required: true
    },

    nextOfKinOccupation: {
        type: String,
        required: true
    },

    photo: {
        data: Buffer,
        contentType: String
    },

    course: {
        type: String,
        required: true
    },

    courseType: {
        type: String,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    passport: {
        data: Buffer,
        contentType: String
    },

    studentId: {
        type: String,
        required: true
    },

    activated: {
        type: Boolean,
        default: false
    }
});

StudentSchema.index({'$**': 'text'});

module.exports = Student = mongoose.model('student', StudentSchema);