import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ modalHeader, regNumber, toggle, style }) => (
    <div style={style} id="modal" className="success-modal">
        <div className="modal-container">
            <div className="modal-content">
                <h4 className="modal-header">{modalHeader}<span style={{ marginLeft: '20px' }} className="mdi mdi-check-circle-outline"></span></h4>
                <p><span style={{ fontWeight: 'bold' }}>Registration Number:</span> {regNumber}</p><br/>
                <p>Please proceed to our office with your registration number to complete the registartion process. It is important that you do not misplace your registration number.</p><br/>
                </div>
                <div className="modal-footer">
                <button onClick={toggle} className="btn modal-okay-btn">Okay, I Agree</button>
            </div>
        </div>
    </div>
);

Modal.propTypes = {
    modalHeader: PropTypes.string.isRequired,
    regNumber: PropTypes.string.isRequired,
    toggle: PropTypes.func.isRequired
};

export default Modal;