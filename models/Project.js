const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    department: {
        type: String,
        required: true
    },

    topic: {
        type: String,
        required: true
    },

    abstract: {
        type: String
    },

    chapters: {
        type: Number,
        required: true
    },

    pages: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    introduction: {
        type: String,
        required: true
    },

    dateCreated: {
        type: Date,
        default: new Date()
    }
});

module.exports = Project = mongoose.model('project', ProjectSchema);