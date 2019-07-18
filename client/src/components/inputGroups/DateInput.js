import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DateInput = ({ icon, dateErrorMessage, id, name, value, onChange, label }) => (
    <div className="col s12 m6 l6 input-field">
        <span className={icon}></span>
        <input 
            type="text"
            className={classnames('datepicker validate', {
                'invalid': dateErrorMessage
            })}
            id={id}
            name={name}
            onChange={onChange}
            required
        />
        <label htmlFor={id}>{label}</label>
        {dateErrorMessage ? <span className="helper-text invalid">{dateErrorMessage}</span> : null}
    </div>
);

DateInput.propTypes = {
    icon: PropTypes.string.isRequired,
    dateErrorMessage: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

DateInput.defaultProps = {
    icon: 'mdi mdi-calendar prefix'
};

export default DateInput;