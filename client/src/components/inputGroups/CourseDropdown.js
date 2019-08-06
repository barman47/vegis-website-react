import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const SiwesDropdown = ({ defaultValue, onChange, courseErrorMessage }) => (
    <Fragment>
        <select 
            className={classnames('validate', {
                'invalid': courseErrorMessage
            })}
            id="course" 
            name="course" 
            defaultValue={defaultValue}
            onChange={onChange}
            required
        >
            <option value="" disabled>Choose Course</option>
            <option value="A complete guide to programming in Java">A complete guide to programming in Java</option>
            <option value="Visual Basic.NET Master Class">Visual Basic.Net Master Class</option>
            <option value="Visual Basic programming with windows form Apps">Visual basic programming with windows form Apps</option>
            <option value="Learn and make apps that sell using Visual Basic.NET">Learn and make apps that sells using Visual Basic.net</option>
            <option value="Learn JavaScript from Novice to Professional">Learn JavaScript from Novice to Professional</option>
            <option value="Web Development: A beginner’s Guide">Web Development: A beginner’s Guide</option>
            <option value="Learn Database Design with MySQL">Learn Database Design with MySQL</option>
            <option value="Access Database for Beginners">Access Database for Beginners</option>
            <option value="Access Database for Beginners">Access Database for Beginners</option>
            <option value="MongoDB Essentials">MongoDB Essentials</option>
            <option value="Node.js, Express.js & Mongo DB: From development to Deployment">Node.js, Express.js &amp; Mongo DB: From development to Deployment</option>
            <option value="SQLite made Easy">SQLite made Easy</option>
        </select>
        {courseErrorMessage ? <span className="helper-text invalid">{courseErrorMessage}</span> : null}
    </Fragment>
);

SiwesDropdown.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    courseErrorMessage: PropTypes.string
};

export const RegularDropdown = ({ defaultValue, onChange, courseErrorMessage }) => (
    <Fragment>
        <select 
            className={classnames('validate required', {
                'invalid': courseErrorMessage
            })}
            id="course" 
            name="course" 
            defaultValue={defaultValue}
            onChange={onChange}
        >
            <option value="" disabled>Choose Course</option>
            <option value="Computer and System Engineering for Beginners">Computer and System Engineering for Beginners</option>
            <option value="Graphics Design Mastery: From Scratch to Professional">Graphics Design Mastery: From Scratch to Professional</option>
            <option value="Complete Desktop Publishing Master Class">Complete Desktop Publishing Master Class</option>
            <option value="Internet Technology Master Class">Internet Technology Master Class</option>
        </select>
        {courseErrorMessage ? <span className="helper-text invalid">{courseErrorMessage}</span> : null}
    </Fragment>
);

RegularDropdown.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    courseErrorMessage: PropTypes.string
};