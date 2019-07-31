import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextInputGroup = ({
    type,
    icon,
    inputErrorMessage,
    name,
    id,
    value,
    onChange,
    label

}) => (
    <div className="col s12 m6 l6 input-field">
        <span className={icon}></span>
        <input
            className={classnames('validate', {
                'invalid': inputErrorMessage
            })}
            type={type}
            name={name}
            id={id}
            onChange={onChange}
            value={value}
            required
        />
        <label htmlFor={id}>{label}</label>
        {inputErrorMessage ? <span className="helper-text invalid">{inputErrorMessage}</span> : null}
    </div>
);

TextInputGroup.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    inputErrorMessage: PropTypes.string,
    icon: PropTypes.string.isRequired
};

TextInputGroup.defaultProps = {
    disabled: 'false',
    type: 'text'
};

export default TextInputGroup;