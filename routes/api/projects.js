const express = require('express');
const router = express.Router();

const Project = require('../../models/Project');

const validateAddProjectInput = require('../../utils/validation/add-project');

router.post('/add', (req, res) => {
    console.log('Project Request');
    const { errors, isValid } = validateAddProjectInput(req.body);

    if (!isValid) {
        return res.status(406).json(errors);
    }

    const project = new Project({
        department: req.body.department.toUpperCase(),
        topic: req.body.topic.toUpperCase(),
        abstract: req.body.abstract,
        chapters: req.body.chapters,
        pages: req.body.pages,
        price: req.body.price,
        introduction: req.body.introduction
    });

    Project.findOne({ topic: req.body.topic.toUpperCase(), department: req.body.department.toUpperCase() })
        .then(returnedProject => {
            if (returnedProject) {
                errors.topic = 'Topic already exists!';
                return res.status(500).json(errors);
            }
            project.save()
                .then(() => res.status(201).json({ msg: 'Added successfully.' }))
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
});

router.get('/all', (req, res) => {
    Project.find({})
        .then(projects => res.json(projects))
        .catch(err => console.error(err));
});

router.get('/department/:department', (req, res) => {
    Project.find({ department: req.params.department })
        .then(projects => res.json(projects))
        .catch(err => console.error(err));
});

router.get('/topics/:topic', (req, res) => {
    Project.find({ topic: req.params.topic })
        .then(projects => res.json(projects))
        .catch(err => console.error(err));
});

module.exports = router;