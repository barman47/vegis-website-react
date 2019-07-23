import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { findStudent } from '../actions/studentActions';

class FindStudent extends Component {
    constructor () {
        super();
        this.state = {
            studentNumber: '',
            student: {},
            errors: {}
        }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = {
            studentNumber: this.state.studentNumber
        };
        this.props.findStudent(data, this.props.history);
    }

    render () {
        const { errors } = this.state;
        return (
            <div>
                <form className="find-student-form" onSubmit={this.onSubmit} noValidate>
                    <div className="row find-student__student-number">
                        <h1 className="icon-header" style={{ textAlign: 'center' }}><span className="mdi mdi-account-search search-student-icon"></span></h1>
                        <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>Find Student</h1>
                        <div className="col s12 input-field">
                            <span className="mdi mdi-account prefix"></span>
                            <input
                                type="text"
                                className={classnames('validate', {
                                    'invalid': errors.studentNumber
                                })}
                                name="studentNumber"
                                id="studentNumber"
                                onChange={this.onChange}
                                value={this.state.studentNumber}
                                required
                            />
                            <label htmlFor="studentNumber">Registration Number</label>
                            {errors.studentNumber ? <span className="helper-text invalid">{errors.studentNumber}</span> : null}
                            <span className="helper-text">Provide Student Registration number to print form.</span>
                        </div>
                    </div>
                    <div className="col s12 input-field">
                        <input 
                            className="btn"
                            type="submit" 
                            name="findStudent" 
                            id="findStudentButton" 
                            value="Find Student" 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

FindStudent.propTypes = {
    findStudent: PropTypes.func.isRequired,
    student: PropTypes.object.isRequired
};

const mapsStateToProps = (state) => ({
    errors: state.errors,
    student: state.student
});

export default connect(mapsStateToProps, { findStudent })(withRouter(FindStudent));