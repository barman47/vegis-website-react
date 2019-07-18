import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const StateOfOriginInput = ({ value, onChange, stateOfOriginErrorMessage }) => (
    <Fragment>
        <span className="mdi mdi-map-marker prefix"></span>
        <select 
            className={classnames('validate required', {
                'invalid': stateOfOriginErrorMessage
            })}
            id="stateOfOrigin" 
            name="stateOfOrigin" 
            value={value}
            onChange={onChange}
        >
            <option value="" disabled>Choose State of Origin</option>
            <option value="Abia">Abia</option>
            <option value="Abuja (FCT)">Abuja (FCT)</option>
            <option value="Adamawa">Adamawa</option>
            <option value="Akwa Ibom">Akwa Ibom</option>
            <option value="Anambra">Anambra</option>
            <option value="Bauchi">Bauchi</option>
            <option value="Bayelsa">Bayelsa</option>
            <option value="Benue">Benue</option>
            <option value="Borno">Borno</option>
            <option value="Cross River">Cross River </option>
            <option value="Delta">Delta</option>
            <option value="Ebonyi">Ebonyi</option>
            <option value="Enugu">Enugu</option>
            <option value="Edo">Edo</option>
            <option value="Ekiti">Ekiti</option>
            <option value="Gombe">Gombe</option>
            <option value="Imo">Imo</option>
            <option value="Jigawa">Jigawa</option>
            <option value="Kaduna">Kaduna</option>
            <option value="Jano">Kano</option>
            <option value="Katsina">Katsina</option>
            <option value="Kebbi">Kebbi</option>
            <option value="Kogi">Kogi</option>
            <option value="Kwara">Kwara</option>
            <option value="Lagos">Lagos</option>
            <option value="Nassarawa">Nassarawa</option>
            <option value="Niger">Niger</option>
            <option value="Ogun">Ogun</option>
            <option value="Ondo">Ondo</option>
            <option value="Osun">Osun</option>
            <option value="Oyo">Oyo</option>
            <option value="Plateau">Plateau</option>
            <option value="Rivers">Rivers</option>
            <option value="Sokoto">Sokoto</option>
            <option value="Taraba">Taraba</option>
            <option value="Yobe">Yobe</option>
            <option value="Zamfara">Zamfara</option>
        </select>
        <label htmlFor="stateOfOrigin">State of Origin</label>
        {stateOfOriginErrorMessage ? <span className="helper-text invalid">{stateOfOriginErrorMessage}</span> : null}
    </Fragment>
);

StateOfOriginInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    stateOfOriginErrorMessage: PropTypes.string
};

export default StateOfOriginInput;