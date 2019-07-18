import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import M from 'materialize-css';

import { hideModal } from '../../actions/modalActions';
import { activateStudent } from '../../actions/studentActions';

import TextInputGroup from '../inputGroups/TextInputGroup';

class ActivateStudentModal extends Component {
    constructor () {
        super();
        this.state = {
            registrationNumber: '',
            authenticationPin: '',
            showModal: false,
            student: {},
            errors: {}
        };
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }

        if (nextProps.showModal === true && this.state.showModal === false) {
            this.setState({
                showModal: true
            });
        }

        if (nextProps.student.activated === true && this.state.showModal === true) {
            M.toast({
                html: 'Student Activated Successfully',
                classes: 'success-toast',
                completeCallback: () => {
                    this.setState({
                        showModal: false,
                        registrationNumber: '',
                        authenticationPin: ''
                    });
                    this.props.hideModal();
                }
            });
        }
    }

    closeModal = () => {
        this.setState({
            showModal: false
        });
        this.props.hideModal();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const studentInfo = {
            registrationNumber: this.state.registrationNumber,
            authenticationPin: this.state.authenticationPin
        };

        this.props.activateStudent(studentInfo, this.props.history);
    }

    render () {
        let style = {};
        if (this.state.showModal === true) {
            style = { display: 'flex' };
        } else {
            style = {
                display: 'none'
            }
        }
        const { errors } = this.state;
        return (
            <div style={style} id="modal" className="success-modal">
                <div className="modal-container">
                    <div className="modal-content">
                        <h4 className="modal-header">Activate Student<span onClick={this.closeModal} style={{ marginLeft: '20px' }} className="mdi mdi-close right close-icon"></span></h4>
                        <form onSubmit={this.onSubmit} noValidate>
                            <div className="row">
                                <TextInputGroup 
                                    inputErrorMessage={errors.registrationNumber}
                                    name="registrationNumber"
                                    id="registrationNumber"
                                    value={this.state.registrationNumber}
                                    onChange={this.onChange}
                                    label="Registration Number"
                                    icon=""
                                />
                                <TextInputGroup 
                                    type="password"
                                    inputErrorMessage={errors.authenticationPin}
                                    name="authenticationPin"
                                    id="authenticationPin"
                                    value={this.state.authenticationPin}
                                    onChange={this.onChange}
                                    label="Authentication Pin"
                                    icon=""
                                />
                                <div className="row">
                                    <input 
                                        id="activate-button" 
                                        className="btn"
                                        type="submit" 
                                        value="Activate" 
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

ActivateStudentModal.propTypes = {
    activateStudent: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    showModal: state.showModal,
    student: state.student,
    errors: state.errors
});

export default connect(mapStateToProps, { activateStudent, hideModal })(withRouter(ActivateStudentModal));