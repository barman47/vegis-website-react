import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';

import { showModal } from '../actions/modalActions';
import FindStudentModal from './modals/ActivateStudentModal';

import ApplicationFormField from './inputGroups/ApplicationFormField';

class ApplicationForm extends Component {
    constructor () {
        super();
        this.state = {
            student: {},
            showModal: false
        };
    }
    
    componentWillMount () {
        this.setState({
            student: this.props.student
        });
    }

    componentWillReceiveProps (nextProps) {
        console.log(nextProps);
    }

    showModal = () => {
        this.props.showModal();
    }

    printForm = () => {
        window.print();
    }

    render () {
        const show = {
            display: 'flex'
        };

        const hide = {
            display: 'none'
        };
        const { student } = this.state;
        return (
            <Fragment>
                <FindStudentModal 
                    style={this.state.showModal ? show : hide}
                />
                <section className="application-form container">
                    <div className="row head-section">
                        <div className="col s12 m10 l10"><h1>Application Form</h1></div>
                        <div className="col s12 m2 l2 passport-section"></div>
                    </div>
                    <div className="course-information form-section">
                        <h4>Course Details</h4>
                        <ApplicationFormField
                            label1="Course Type"
                            id1="courseType"
                            content1={student.courseType}
                            label2="Course Duration"
                            id2="courseDuration"
                            content2={student.duration}
                        />
                        <ApplicationFormField
                            label1="Student Number"
                            id1="studentNumber"
                            content1={student.studentId}
                            label2="Date Printed"
                            id2="datePrinted"
                            content2={moment().format('MMMM Do, YYYY.')}
                        />
                    </div>
                    <div className="personal-information form-section">
                        <h4>Personal Information</h4>
                        <ApplicationFormField
                            label1="Name"
                            id1="name"
                            content1={student.name}
                            label2="Phone Number"
                            id2="phone"
                            content2={student.phone}
                        />
                        <ApplicationFormField
                            label1="Email Address"
                            id1="email"
                            content1={student.email}
                            label2="Gender"
                            id2="gender"
                            content2={student.gender}
                        />
                        <ApplicationFormField
                            label1="Date of Birth"
                            id1="dateOfBirth"
                            content1={student.dateOfBirth}
                            label2="Home Address"
                            id2="address"
                            content2={student.address}
                        />
                        <ApplicationFormField
                            label1="State of Origin"
                            id1="stateOfOrigin"
                            content1={student.stateOfOrigin}
                            label2="Local Government Area"
                            id2="lga"
                            content2={student.lga}
                        />
                    </div>
                    <div className="nextOfKinInfo form-section">
                        <h4>Next of Kin Information</h4>
                        <ApplicationFormField
                            label1="Next of Kin Name"
                            id1="nextOfKinName"
                            content1={student.nextOfKinName}
                            label2="Next of Kin Phone Number"
                            id2="nextOfKinPhone"
                            content2={student.nextOfKinPhone}
                        />
                        <ApplicationFormField
                            label1="Next of Kin Email Address"
                            id1="nextOfKinEmail"
                            content1={student.nextOfKinEmail}
                            label2="Next of Kin Address"
                            id2="nextOfKinAddress"
                            content2={student.nextOfKinAddress}
                        />
                        <ApplicationFormField
                            label1="Next of Kin Occupation"
                            id1="nextOfKinOccupation"
                            content1={student.nextOfKinOccupation}
                            label2="Relationship with Next of Kin"
                            id2="nextOfKinRelationship"
                            content2={student.relationship}
                        />
                    </div>
                    <div className="button-section">
                        <button className="btn" onClick={this.printForm}>Print Form</button>
                    </div>
                </section>
            </Fragment>
        );
    }
}

ApplicationForm.propTypes = {
    showModal: PropTypes.func.isRequired,
    student: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    showModal: state.showModal,
    student: state.student
});

export default connect(mapStateToProps, { showModal })(ApplicationForm);
