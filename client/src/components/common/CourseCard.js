import React from 'react';
import { NavLink }  from 'react-router-dom';
import PropTypes from 'prop-types';


const CourseCard = ({
    src,
    alt,
    title,
    to
}) => (
    <div className="col s12 m3 l3">
        <div className="card large">
            <div className="card-image">
                <img className="course-image responsive-img" src={src} alt={alt} />
            </div>
            <div className="card-content">
                <p>{title}</p>
            </div>
            <div className="card-action">
                <NavLink className="info" to={to}>Info</NavLink>
            </div>
        </div>
    </div>
);

CourseCard.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
};

export default CourseCard;