import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

import { loginAdmin } from '../../actions/adminActions';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setErrors();
    }, [errors]);

    const onSubmit = (e) => {
        e.preventDefault();
        const user = { username, password };

        loginAdmin(user, props.history);
    };

    return (
        <form className="admin-login" onSubmit={onSubmit} noValidate>
            <h5>Admin Login</h5>
            <div className="row">
                <div className="col s12 input-field">
                    <span className="mdi mdi-account prefix"></span>
                    <input
                        type="text"
                        className={classnames('validate', {
                            // 'invalid': errors.username ? errors.username : null
                        })}
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                    />
                    <label htmlFor="username">Admin Username</label>
                    {/* {errors.username ? <span className="helper-text invalid">{errors.username}</span> : null} */}
                </div>
                <div className="row">
                    <div className="col s12 input-field">
                        <span className="mdi mdi-lock-outline prefix"></span>
                        <input
                            type="password"
                            className={classnames('validate', {
                                // 'invalid': errors.password ? errors.password : null
                            })}
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        {/* {errors.password ? <span className="helper-text invalid">{errors.password}</span> : null} */}
                    </div>
                    <div className="col button-container">
                        <button type="submit">Login</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

Login.propTypes = {
    loginAdmin: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    errors: state.errors
});

export default connect(mapStateToProps, { loginAdmin })(withRouter(Login));