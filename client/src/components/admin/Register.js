import React, { useEffect, useState } from 'react';

import TextInputGroup from '../inputGroups/TextInputGroup';

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        console.log(props);
    });

    const onSubmit = (e) => {
        e.preventDefault();
        const user = { username, password };
    };

    return (
        <form onSubmit={onSubmit} noValidate>
            <h2>Student Application Form</h2>
            <div className="personal-info">
                <h5>Personal Information</h5>
                <div className="row">
                    <TextInputGroup 
                        icon="mdi mdi-account prefix"
                        name="name"
                        id="name"
                        value={name}
                        label="name"
                        onChange={(e) => setName(e.target.value)}
                        inputErrorMessage={errors.name}
                    />
                    <TextInputGroup 
                        icon="mdi mdi-account prefix"
                        name="username"
                        id="username"
                        value={username}
                        label="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        inputErrorMessage={errors.username}
                    />
                    <TextInputGroup 
                        icon="mdi mdi-lock-outline prefix"
                        name="password"
                        id="password"
                        value={password}
                        label="password"
                        onChange={(e) => setPassword(e.target.value)}
                        inputErrorMessage={errors.password}
                    />
                </div>
            </div>
        </form>
    );
};

export default Register;