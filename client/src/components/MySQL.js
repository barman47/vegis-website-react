import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { applyForCourse } from '../actions/courseActions';

import src from '../img/mysql.png';

class MySQL extends Component {
    constructor (props) {
        super(props);
        this.state = {
            type: 'SIWES',
            title: 'Learn Database Design with MySQL',
            duration: '12 Weeks',
            effort: '5 - 10 Hours per week',
            level: 'Advanced',
        };
    }

    componentDidMount () {
        const courseDetails = {
            type: this.state.type,
            duration: this.state.duration,
            effort: this.state.effort,
            level: this.state.level,
            title: this.state.title
        };
        this.props.applyForCourse(courseDetails);
    }

    handleApplyButton = (e) => {
        this.props.history.push('/students');;
    }

    render () {
        let icon;
        switch (this.state.level) {
            case 'Beginner':
                icon = 'mdi mdi mdi-signal-cellular-1 left';
                break;

            case 'Intermediate':
                icon = 'mdi mdi mdi-signal-cellular-2 left';
                break;

            case 'Advanced':
                icon = 'mdi mdi mdi-signal-cellular-3 left';
                break;

            default:
                icon = 'mdi mdi mdi-signal-cellular-2 left';
                break;
        }
        return (
            <Fragment>
                <Helmet><title>{this.state.title} : : vegistech.com</title></Helmet>
                <div>
                    <section className="course-header">
                        <div className="row">
                            <div className="col s12 m4 l4">
                                <img src={src} alt="Access Database for Beginners" className="course-image" />
                            </div>
                            <div className="col s12 m8 l8">
                                <h3>{this.state.title}</h3>
                                <p>Database design is a must-have skill for anyone willing to persist data from their application to a database. This course is intended to provide an individual with the neccessary knowledge to use MySQL database with any programming knowledge of your choice.</p>
                            </div>
                        </div>
                    </section>
                    <section className="course-section">
                        <div className="course-section__left">
                            <div className="left__section">
                                <h4>About this Course</h4>
                                <p>
                                    When we talk about web programming, one of the important aspect of it that should come to mind is Database Design. Proper and successful implementation of any system with Data Storage will always require proper database design. To create a database, you need to have a full knowledge of Database technology, as well as the design process and the normalization. This course has different levels with MySQL, starting from level zero, which is the basic introduction level to advanced level which is the professional level in Database Design. So panic not because this cause is going to take you from a Database Design novice to a Database Design professional.
                                </p>
                            </div>
                            <div className="left__section">
                                <h4>What You'll Learn</h4>
                                <ul>
                                    <li>The tips and tricks of database design.</li>
                                    <li>The subtleties of proper database design.</li>
                                    <li>A full understanding of how database works.</li>
                                    <li>A full understanding of MySQL.</li>
                                    
                                </ul>
                            </div>
                            <div className="left__section">
                                <h4>Prerequisites</h4>
                                <ul>
                                    <li>Passion to learn</li>
                                    <li>Prior knowledge of Programming is a plus but not mandatory</li>
                                    <li>Your personal computer.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="course-section__right">
                            <div className="right__section-item">
                                <span className="mdi mdi-calendar-clock left">&nbsp;&nbsp;<span className="title">Duration: </span></span>
                                <span className="value">{this.state.duration}</span>
                            </div>
                            <div className="right__section-item">
                                <span className="mdi mdi-speedometer left">&nbsp;&nbsp;<span className="title">Effort: </span></span>
                                <span className="value">{this.state.effort}</span>
                            </div>
                            <div className="right__section-item">
                                <span className="mdi mdi-office-building left">&nbsp;&nbsp;<span className="title">Institution: </span></span>
                                <span className="value">Vegistech</span>
                            </div>
                            <div className="right__section-item">
                                <span className="mdi mdi-school left">&nbsp;&nbsp;<span className="title">Subject: </span></span>
                                <span className="value">Computer Science</span>
                            </div>
                            <div className="right__section-item">
                                <span className={icon}>&nbsp;&nbsp;<span className="title">Level: </span></span>
                                <span className="value">{this.state.level}</span>
                            </div>
                            <div className="right__section-item">
                                <span className="mdi mdi-all-inclusive left">&nbsp;&nbsp;<span className="title">Type: </span></span>
                                <span className="value">{this.state.type}</span>
                            </div>
                            <div className="right__section-item">
                                <span className="mdi mdi-grease-pencil left">&nbsp;&nbsp;<span className="title">Title: </span></span>
                                <span className="value">{this.state.title}</span>
                            </div>
                            <div style={{ width: '100%', marginTop: '1rem' }}>
                                <button 
                                    className="info"
                                    onClick={this.handleApplyButton}
                                >
                                Apply
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    course: state.course
});

export default connect(mapStateToProps, { applyForCourse })(MySQL);