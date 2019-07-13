const express = require('express');
const router = express.Router();

const Student = require('../../models/Student');
const validateStudentRegisterInput = require('../../utils/validation/register');

router.get('/', (req, res) => {
    res.send('Student route works!');
});

router.post('/registerStudent', (req, res) => {
    const { errors, isValid } = validateStudentRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    let id;
    let idCharacters = [];
    let newIdCharacters = '';

    for (var i = 0; i <5; i++) {
        idCharacters.push(Math.ceil(Math.random() * 9)).toString();
    }


    for (var i = 0; i < idCharacters.length; i++) {
        newIdCharacters = `${newIdCharacters}${idCharacters[i]}`;
    }
    
    switch (req.body.courseType) {
        case 'Regular': 
            id = `VT/RG/${new Date().getFullYear().toString().replace(/20/ig, '')}/${newIdCharacters}`;
            break;

        case 'SIWES':
           id = `VT/IT/${new Date().getFullYear().toString().replace(/20/ig, '')}/${newIdCharacters}`;
           break;

        default:
            id: '';
            break;
    }

    const newStudent = new Student({
        name: req.body.name.toUpperCase(),
        phone: req.body.phone,
        email: req.body.email.toLowerCase(),
        gender: req.body.gender,
        address: req.body.address.toUpperCase(),
        dateOfBirth: req.body.dateOfBirth,
        stateOfOrigin: req.body.stateOfOrigin,
        lga: req.body.lga.toUpperCase(),
        nextOfKinName: req.body.nextOfKinName.toUpperCase(),
        nextOfKinPhone: req.body.nextOfKinPhone,
        nextOfKinEmail: req.body.nextOfKinEmail.toLowerCase(),
        nextOfKinAddress: req.body.nextOfKinAddress.toUpperCase(),
        nextOfKinOccupation: req.body.nextOfKinOccupation.toUpperCase(),
        relationship: req.body.relationship.toUpperCase(),
        course: req.body.course,
        courseType: req.body.courseType,
        studentId: id
    });

    Student.findOne({ email: newStudent.email })
        .then(student => {
            if (student) {
                errors.userExists = 'User already exists.';
                return res.status(401).json(errors);            
            }

            newStudent.save()
                .then(savedStudent => {
                    res.json(savedStudent);
                })
                .catch(err => console.log(err));
            })
        .catch(err => console.log(err));
});

router.post('/findStudent', (req, res) => {
    Student.find({ $text: { $search: req.body.searchQuery}, activated: true}, { $score: { $meta: "textScore" }})
        .sort({ $score: { $meta: "textScore" } })
        .then(students => {
            if(!students) {
                return res.status(404).json({ err: 'Student not found.' });
            }
            console.log('found ' + students.length + ' Students.');
            res.json(students);
        })
        .catch(err => console.log(err));
});

router.post('/activateStudent', (req, res) => {
    const activationCode = '5555';
    if (req.body.activationCode === activationCode) {
        Student.findOneAndUpdate({ studentId: req.body.studentId }, {$set: { activated: true }}, { new: true })
        .then(student => {
            if (student) {
                res.json(student)
            } else {
                res.status(404).json({ err: 'Student not found' });
            }
        })
        .catch(err => console.log(err));
    } else {
        res.status(400).json({ err: 'You are not authorized to do this!'});
    }
    
});

module.exports = router;