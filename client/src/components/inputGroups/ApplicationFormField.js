import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ApplicationFormField = ({ label1, content1, label2, content2, id1, id2 }) => (
    <Fragment>
        <div className="row">
            <div className="col s12 m6 l6">
                <label className="label-content" htmlFor="name">{label1}: &nbsp;<span id="name" className="text-content">{content1}</span></label>
            </div>
            <div className="col s12 m6 l6">
                <label className="label-content" htmlFor={id2}>{label2}: &nbsp;<span id={id2} className="text-content">{content2}</span></label>
            </div>
        </div>
    </Fragment>
);

ApplicationFormField.propTypes = {
    label1: PropTypes.string.isRequired,
    label2: PropTypes.string.isRequired,
    content1: PropTypes.string.isRequired,
    content2: PropTypes.string.isRequired,
    id1: PropTypes.string.isRequired,
    id2: PropTypes.string.isRequired
};

export default ApplicationFormField;
