const express = require('express');
const router = express.Router();

const Student = require('../../models/Student');
const validateStudentRegisterInput = require('../../utils/validation/register');
const validateFindStudentInput = require('../../utils/validation/findStudent');
const validateActivateStudentInput = require('../../utils/validation/activateStudent');

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
        // passport: req.body.passport,
        studentId: id
    });

    if (req.body.courseType === 'SIWES') {
        newStudent.duration = '24 Weeks';
    } else if (req.body.courseType === 'Regular') {
        newStudent.duration = '12 Weeks';
    }

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
    const { errors, isValid } = validateFindStudentInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    Student.findOne({ studentId: req.body.studentNumber, activated: true })
        .then(student => {
            if (!student) {
                errors.studentNumber = 'Student not Found';
                return res.status(404).json(errors);
            }
            res.json(student);
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json(err);
        });

    // if (parseInt(req.body.authenticationPin) === authenticationPin) {
    //     Student.find({ $text: { $search: req.body.registrationNumber}, activated: true}, { $score: { $meta: "textScore" }})
    //         .sort({ $score: { $meta: "textScore" } })
    //         .then(students => {
    //             if(students) {
    //                 console.log('found ' + students.length + ' Students.');
    //                 res.json(students);
    //             } else {
    //                 errors.registrationNumber = 'Student not Found'
    //                 return res.status(404).json(errors);
    //             }
                
    //         })
    //         .catch(err => console.log(err));
    // } else {
    //     errors.authenticationPin = 'Incorrect Authentication Pin';
    //     return res.status(400).send(errors);
    // }
});

router.post('/activateStudent', (req, res) => {
    const { errors, isValid } = validateActivateStudentInput(req.body);
    const { authenticationPin, authenticationPin2 } = require('../../config/keys');

    if(!isValid) {
        return res.status(400).json(errors);
    }

    switch (parseInt(req.body.authenticationPin)) {
        case authenticationPin:
            Student.findOneAndUpdate({ studentId: req.body.registrationNumber }, {$set: { activated: true }}, { new: true })
                .then(student => {
                    if (student) {
                        res.json(student)
                    } else {
                        errors.registrationNumber = 'Student not found.';
                        res.status(404).json(errors);
                    }
                })
                .catch(err => console.log(err));
                break;

        case authenticationPin2:
            Student.findOneAndUpdate({ studentId: req.body.registrationNumber }, {$set: { activated: true }}, { new: true })
                .then(student => {
                    if (student) {
                        res.json(student)
                    } else {
                        errors.registrationNumber = 'Student not found.';
                        res.status(404).json(errors);
                    }
                })
                .catch(err => console.log(err));
                break;
                
        default:
            errors.authenticationPin = 'Incorrect Authentication Pin!';
            return res.status(400).json(errors);
    }
});

module.exports = router;