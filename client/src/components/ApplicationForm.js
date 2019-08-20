import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import PropTypes from 'prop-types';

import { showModal } from '../actions/modalActions';
import logo from '../img/logo2.png';

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

    showModal = () => {
        this.props.showModal();
    }

    printForm = () => {
        window.print();
    }

    render () {
        const { student } = this.state;
        return (
            <Fragment>
                <Helmet><title>{student.name + " : : Vegistech"}</title></Helmet>
                <section className="application-form container">
                    <div className="row head-section">
                        <div className="col s12 m9 l9">
                            <img className="logo2" src={logo} alt="logo" />
                        </div>
                        <div className="col s12 m3 l3 passport-section">
                            {/* <img src={passport} alt={student.name + " Passport"}/> */}
                        </div>
                    </div>
                    <h3>Course Application Form</h3>
                    <div className="course-information form-section">
                        <h4>Course Details</h4>
                        <ApplicationFormField
                            label1="Course Type"
                            id1="courseType"
                            content1={student.courseType ? student.courseType : ''}
                            label2="Course Duration"
                            id2="courseDuration"
                            content2={student.duration ? student.duration : ''}
                        />
                        <ApplicationFormField
                            label1="Student Number"
                            id1="studentNumber"
                            content1={student.studentId ? student.studentId : ''}
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
                            content1={student.name ? student.name : ''}
                            label2="Phone Number"
                            id2="phone"
                            content2={student.phone ? student.phone : ''}
                        />
                        <ApplicationFormField
                            label1="Email Address"
                            id1="email"
                            content1={student.email ? student.email : ''}
                            label2="Gender"
                            id2="gender"
                            content2={student.gender ? student.gender : ''}
                        />
                        <ApplicationFormField
                            label1="Date of Birth"
                            id1="dateOfBirth"
                            content1={student.dateOfBirth ? student.dateOfBirth : ''}
                            label2="Home Address"
                            id2="address"
                            content2={student.address ? student.address : ''}
                        />
                        <ApplicationFormField
                            label1="State of Origin"
                            id1="stateOfOrigin"
                            content1={student.stateOfOrigin ? student.stateOfOrigin : ''}
                            label2="Local Government Area"
                            id2="lga"
                            content2={student.lga ? student.lga : ''}
                        />
                    </div>
                    <div className="nextOfKinInfo form-section">
                        <h4>Next of Kin Information</h4>
                        <ApplicationFormField
                            label1="Next of Kin Name"
                            id1="nextOfKinName"
                            content1={student.nextOfKinName ? student.nextOfKinName : ''}
                            label2="Next of Kin Phone Number"
                            id2="nextOfKinPhone"
                            content2={student.nextOfKinPhone ? student.nextOfKinPhone : ''}
                        />
                        <ApplicationFormField
                            label1="Next of Kin Email Address"
                            id1="nextOfKinEmail"
                            content1={student.nextOfKinEmail ? student.nextOfKinEmail : ''}
                            label2="Next of Kin Address"
                            id2="nextOfKinAddress"
                            content2={student.nextOfKinAddress ? student.nextOfKinAddress : ''}
                        />
                        <ApplicationFormField
                            label1="Next of Kin Occupation"
                            id1="nextOfKinOccupation"
                            content1={student.nextOfKinOccupation ? student.nextOfKinOccupation : ''}
                            label2="Relationship with Next of Kin"
                            id2="nextOfKinRelationship"
                            content2={student.relationship ? student.relationship : ''}
                        />
                    </div>
                    <div className="button-section">
                        <button id="printButton" className="btn" onClick={this.printForm}>Print Form</button>
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
