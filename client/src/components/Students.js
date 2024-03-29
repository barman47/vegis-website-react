import React, { Component, Fragment} from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import M from 'materialize-css';

import isEmpty from '../validation/is-empty';

import { registerStudent, clearErrors, clearStudent } from '../actions/studentActions';
import { clearCourse } from '../actions/courseActions';
import { hideModal } from '../actions/modalActions';

import SuccessModal from './modals/Modal';
import TextInputGroup from './inputGroups/TextInputGroup';
import DateInput from './inputGroups/DateInput';
import StateOfOriginInput from './inputGroups/StateOfOriginInput';
import { SiwesDropdown, RegularDropdown } from './inputGroups/CourseDropdown';

class Students extends Component {
    constructor () {
        super();
        this.state = {
            name: '',
            phone: '',
            email: '',
            gender: '',
            address: '',
            dateOfBirth: '',
            stateOfOrigin: '',
            lga: '',
            nextOfKinName: '',
            nextOfKinAddress: '',
            nextOfKinPhone: '',
            nextOfKinEmail: '',
            nextOfKinOccupation: '',
            relationship: '',
            course: '',
            courseType: '',
            SIWES: '',
            regular: '',
            courseChoice: '',
            // passport: {},
            disabled: true,
            agree: false,
            errors: {},
            student: {},
            showModal: false,
            buttonText: 'Submit Data and Continue'
        }
    }

    componentDidMount () {
        let elems = document.querySelectorAll('.datepicker');
        //eslint-disable-next-line
        let instances = M.Datepicker.init(elems, {
            autoClose: true,
            format: 'dddd dd mmmm, yyyy',
            i18n: {
                months: ['January', 'February', 'March', 'April', 'May', 'June',' July', 'August', 'September', 'October', 'November', 'December'],
                weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            },
            maxDate: new Date('December 31, ' + new Date().getFullYear()),
            yearRange: 60
        });

        let elems2 = document.querySelectorAll('select');
        // eslint-disable-next-line
        let instances2 = M.FormSelect.init(elems2);

        if (!isEmpty(this.props.course)) {
            this.handleSetCourse(this.props.course);
        }
    }

    componentWillUnmount () {
        this.props.clearCourse();
    }

    componentDidUpdate () {
        let elems2 = document.querySelectorAll('select');
        // eslint-disable-next-line
        let instances2 = M.FormSelect.init(elems2);
    }

    componentWillReceiveProps (nextProps) {
        if (!isEmpty(nextProps.errors)) {
            console.log('nextProps');
            this.setState({
                errors: nextProps.errors,
                buttonText: 'Submit Data and Continue',
                disabled: false
            });
            if (nextProps.errors.userExists) {
                console.log('nextProps');
                this.setState({
                    disabled: false
                });
                M.toast({
                    html: nextProps.errors.userExists,
                    classes: 'invalid-toast',
                    completeCallback: () => {
                        delete this.props.errors.userExists;
                    }
                });   
            }

            if (nextProps.network === false) {
                this.setState({
                    disabled: true
                });
            }

            if (nextProps.network === false || this.state.disabled === false) {
                this.setState({
                    disabled: true
                });
            }
        }

        if (!isEmpty(nextProps.student) && isEmpty(nextProps.errors.userExists)) {
            this.setState(prevState => ({
                registrationNumber: nextProps.student.studentId,
                showModal: !prevState.showModal,
                errors: {},
                buttonText: 'Submit Data and Continue'
            }));
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
          this.setState(() => ({ createdAt }));
        }
    };

    handleCheckboxChange = () => {
        if (this.props.network === false) {
            this.setState({
                disabled: true,
                agree: false
            });
        }

        if (this.props.network === true) {
            this.setState({
                disabled: false,
                agree: true
            });
        }
    }

    handleDateChange = () => {
        this.setState({
            dateOfBirth: document.getElementById('dateOfBirth').value
        });
    }

    handleCourseType = (e) => {
        switch (e.target.value || this.props.course.type) {
            case 'SIWES':
                this.setState({
                    courseType: 'SIWES',
                    SIWES: 'SIWES',
                    regular: '',
                });
            break;

            case 'Regular':
                this.setState({
                    courseType: 'Regular',
                    regular: 'Regular',
                    SIWES: ''
                });
                break;

            default:
                break;
        }
    }

    handleSetCourse = (course) => {
        const { type, title } = course;
        switch (type) {
            case 'Regular':
                this.setState({
                    course: title,
                    courseType: type,
                    regular: type,
                    SIWES: ''
                });
                const regular = document.getElementById('regular');
                regular.checked = true;
                break;

                case 'SIWES':
                    this.setState({
                        course: title,
                        courseType: type,
                        SIWES: type,
                        regular: '',
                    });
                    const SIWES = document.getElementById('SIWES');
                    SIWES.checked = true;
                    break;

                default: 
                    break;
        }
    }

    toggleModal = (e) => {
        this.setState(prevState => ({
            showModal: !prevState.showModal,
            errors: {},
            student: {}
        }));
        this.props.clearErrors();
        this.props.clearStudent();
        this.props.hideModal();
        this.props.history.push('/');
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            buttonText: 'Submitting Data . . .',
            disabled: !prevState.disabled
        }));
        this.handleDateChange();
        setTimeout(() => {
            const student = {
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                gender: this.state.gender,
                address: this.state.address,
                dateOfBirth: this.state.dateOfBirth,
                stateOfOrigin: this.state.stateOfOrigin,
                lga: this.state.lga,
                nextOfKinName: this.state.nextOfKinName,
                nextOfKinAddress: this.state.nextOfKinAddress,
                nextOfKinPhone: this.state.nextOfKinPhone,
                nextOfKinEmail: this.state.nextOfKinEmail,
                nextOfKinOccupation: this.state.nextOfKinOccupation,
                relationship: this.state.relationship,
                course: this.state.course,
                courseType: this.state.courseType
                // passport: this.state.passport
            };
            this.props.registerStudent(student);
        }, 500);
    }

    render () {
        const { errors } = this.state;
        const show = {
            display: 'flex'
        };

        const hide = {
            display: 'none'
        };
        return (
            <Fragment>
                <Helmet><title>Students : : Vegistech.com</title></Helmet>
                <div>
                    <SuccessModal 
                        style={this.state.showModal ? show : hide}
                        modalHeader="Application Successful!"
                        regNumber={this.state.registrationNumber ? this.state.registrationNumber : ''}
                        toggle={this.toggleModal}
                    />
                    <form className="add-student-form" encType="multipart/form-data" onSubmit={this.onSubmit} noValidate>
                        <h2>Student Application Form</h2>
                        <div className="personal-info">
                            <h5>Personal Information</h5>
                            <div className="row">
                                <TextInputGroup 
                                    icon="mdi mdi-account prefix"
                                    name="name"
                                    id="name"
                                    value={this.state.name}
                                    label="Student Name"
                                    onChange={this.onChange}
                                    inputErrorMessage={errors.name}
                                />
                                <TextInputGroup 
                                    icon="mdi mdi-cellphone-android prefix"
                                    name="phone"
                                    id="phone"
                                    value={this.state.phone}
                                    label="Phone Number"
                                    onChange={this.onChange}
                                    inputErrorMessage={errors.phone}
                                /> 
                            </div>
                            <div className="row">
                                <TextInputGroup 
                                    icon="mdi mdi-email-outline prefix"
                                    name="email"
                                    id="email"
                                    value={this.state.email}
                                    label="Email Address"
                                    onChange={this.onChange}
                                    inputErrorMessage={errors.email}
                                />
                                <div className="col s12 m6 l6 input-field">
                                    <p className="gender">
                                        <span className="input-title">Select Gender</span>
                                        <br/>
                                        <label htmlFor="male">
                                            <input 
                                                type="radio" 
                                                className={classnames('with-gap validate', {
                                                    'invalid': errors.gender
                                                })}
                                                name="gender"
                                                value="Male" 
                                                onChange={this.onChange}
                                                id="male"
                                                required
                                            />
                                            <span>Male</span>
                                        </label>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <label htmlFor="female">
                                            <input 
                                                type="radio" 
                                                className={classnames('with-gap validate', {
                                                    'invalid': errors.gender
                                                })}
                                                name="gender"
                                                value="Female" 
                                                onChange={this.onChange}
                                                id="female"
                                                required 
                                            />
                                            <span>Female</span>
                                        </label>
                                    </p>
                                    {errors.gender && <span className="helper-text invalid">{errors.gender}</span>}
                                </div>
                            </div>
                            <div className="row">
                                <DateInput 
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    onChange={this.handleDateChange}
                                    label="Date of Birth"
                                    dateErrorMessage={errors.dateOfBirth}
                                />
                                <div className="input-field col s12 m6 l6">
                                    <span className="mdi mdi-office-building prefix"></span>
                                    <textarea 
                                        id="address" 
                                        name="address" 
                                        className={classnames('materialize-textarea validate', {
                                            'invalid': errors.address
                                        })} 
                                        value={this.state.address}
                                        onChange={this.onChange}
                                        required
                                    >
                                    </textarea>
                                    <label htmlFor="address">Home Address</label>
                                    {errors.address ? <span className="helper-text invalid">{errors.address}</span> : null}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 m6 l6 input-field">
                                    <StateOfOriginInput 
                                        value={this.state.stateOfOrigin}
                                        onChange={this.onChange}
                                        stateOfOriginErrorMessage={errors.stateOfOrigin}
                                    />
                                </div>
                                <TextInputGroup 
                                    icon="mdi mdi-home prefix"
                                    name="lga"
                                    id="lga"
                                    value={this.state.lga}
                                    label="Local Government Area"
                                    onChange={this.onChange}
                                    inputErrorMessage={errors.lga}
                                />
                            </div>
                        </div>
                        <div className="next-of-kin-info">
                            <h5>Next of Kin Information</h5>
                            <div className="row">
                                <TextInputGroup 
                                    icon="mdi mdi-account prefix"
                                    name="nextOfKinName"
                                    id="nextOfKinName"
                                    value={this.state.nextOfKinName}
                                    placeholder="Enter Next of Kin Name"
                                    label="Next of Kin Name"
                                    onChange={this.onChange}
                                    inputErrorMessage={errors.nextOfKinName}

                                />
                                <div className="input-field col s12 m6 l6">
                                    <span className="mdi mdi-office-building prefix"></span>
                                    <textarea 
                                        id="nextOfKinAddress" 
                                        name="nextOfKinAddress" 
                                        className={classnames('materialize-textarea validate required', {
                                            'invalid': errors.nextOfKinAddress
                                        })}
                                        value={this.state.nextOfKinAddress}
                                        onChange={this.onChange}
                                        required
                                    >
                                    </textarea>
                                    <label htmlFor="nextOfKinAddress">Next of Kin Address</label>
                                    {errors.nextOfKinAddress ? <span className="helper-text" data-error={errors.nextOfKinAddress}></span> : null}
                                </div>
                            </div>
                            <div className="row">
                                <TextInputGroup 
                                    icon="mdi mdi-cellphone-android prefix"
                                    name="nextOfKinPhone"
                                    id="nextOfKinPhone"
                                    value={this.state.nextOfKinPhone}
                                    label="Next of Phone Number"
                                    onChange={this.onChange}
                                    inputErrorMessage={errors.nextOfKinPhone}
                                />
                                <TextInputGroup 
                                    icon="mdi mdi-email-outline prefix"
                                    name="nextOfKinEmail"
                                    id="nextOfKinEmail"
                                    value={this.state.nextOfKinEmail}
                                    label="Next of Kin Email"
                                    onChange={this.onChange}
                                    inputErrorMessage={errors.nextOfKinEmail}
                                />
                            </div>
                            <div className="row">
                                <TextInputGroup 
                                    icon="mdi mdi-worker prefix"
                                    name="nextOfKinOccupation"
                                    id="nextOfKinOccupation"
                                    value={this.state.nextOfKinOccupation}
                                    label="Next of Kin Occupation"
                                    onChange={this.onChange}
                                    inputErrorMessage={errors.nextOfKinOccupation}
                                />
                                <TextInputGroup 
                                    icon="mdi mdi-account-multiple prefix"
                                    name="relationship"
                                    id="relationship"
                                    value={this.state.relationship}
                                    label="Relationship with Next of Kin"
                                    onChange={this.onChange}
                                    inputErrorMessage={errors.relationship}
                                />
                            </div>
                            <div className="row">
                                <div className="col s12 m6 l6 input-field">
                                    <p className="course-type">
                                        <span className="input-title">Choose Course Type</span>
                                        <br/><br/>
                                        <label htmlFor="SIWES">
                                            <input 
                                                type="radio" 
                                                className="with-gap validate" 
                                                name="courseType" 
                                                value="SIWES" 
                                                onChange={this.handleCourseType}
                                                id="SIWES"
                                            />
                                            <span>SIWES</span>
                                        </label>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <label htmlFor="regular">
                                            <input 
                                                type="radio" 
                                                className="with-gap validate" 
                                                name="courseType" 
                                                value="Regular" 
                                                onChange={this.handleCourseType}
                                                id="regular"                                           
                                            />
                                            <span>Regular</span>
                                        </label>
                                    </p>
                                    {this.state.errors.courseType ?  <span className="helper-text invalid">{errors.courseType}</span> : null }
                                </div>
                                <div className="col s12 m6 l6 input-field">
                                    <br/>
                                    {this.state.SIWES && 
                                        <div>
                                            <SiwesDropdown 
                                                defaultValue={this.state.course} 
                                                onChange={this.onChange} 
                                                courseErrorMessage={errors.course} 
                                                // checked={this.state.handleSetCourse ? this.state.handleSetCourse : 'false'}
                                            />
                                        </div>
                                    }
                                    {this.state.regular && 
                                        <div>
                                            <RegularDropdown 
                                                defaultValue={this.state.course} 
                                                onChange={this.onChange} 
                                                courseErrorMessage={errors.course}
                                            // checked={this.state.handleSetCourse ? this.state.handleSetCourse : 'false'}
                                        />
                                        </div>}
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col s12 file-field input-field">
                                    <div className="btn">
                                        <span>Add Passport</span>
                                        <input 
                                            type="file" 
                                            accept=".jpg"
                                            name="passport"
                                            onChange={this.onChange} 
                                        />
                                        </div>
                                    <div className="file-path-wrapper">
                                        <input 
                                            className="file-path validate" 
                                            type="text" 
                                            // value={this.state.passport}
                                            name="passport"
                                            onChange={this.onChange}
                                            placeholder="Passport here" 
                                        />
                                        <span className="helper-text invalid">{errors.passport}</span>
                                    </div>
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col s12 input-field submit-button-section">
                                    <p className="agree-text">
                                        <label>
                                            <input 
                                                type="checkbox"
                                                id="agreeCheckbox"
                                                name="agreeCheckbox"
                                                value={this.state.handleCheckboxChange}
                                                onChange={this.handleCheckboxChange}
                                            />
                                            <span></span>
                                        </label>
                                        <span className="agree">Check here to indicate that you have read and agree to Vegistech Student Policy.</span>
                                        <span id="note">
                                            <span className="mdi mdi-alert-circle-outline mdi-24px"
                                                style={{
                                                    position: 'relative',
                                                    top: '-5px'
                                                }}
                                            >

                                            </span>
                                            <span className="warning-text">A registration number will be automatically generated for you. ensure to keep it safe as it will be needed to complete the application.</span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 input-field">
                                <input type="submit"
                                    className="btn"
                                    value={this.state.buttonText}
                                    disabled={this.state.disabled}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </Fragment>
        );
    }
}

Students.propTypes = {
    clearCourse: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    clearStudent: PropTypes.func.isRequired,
    course: PropTypes.object,
    errors: PropTypes.object.isRequired,
    hideModal: PropTypes.func.isRequired,
    registerStudent: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    course: state.course,
    errors: state.errors,
    network: state.network,
    student: state.student
});

export default connect(mapStateToProps, {  
    clearErrors, 
    clearCourse, 
    clearStudent, 
    hideModal, 
    registerStudent 
})(Students);