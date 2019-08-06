import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { applyForCourse } from '../actions/courseActions';

import src from '../img/mongodb.jpg';

class MongoDB extends Component {
    constructor (props) {
        super(props);
        this.state = {
            type: 'SIWES',
            title: 'MongoDB Essentials',
            duration: '8 Weeks',
            effort: '8 - 12 Hours per week',
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
                                <p>
                                    Master database design with the most popular and modern NoSQL database and use it with any project of your choice. 
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="course-section">
                        <div className="course-section__left">
                            <div className="left__section">
                                <h4>About this Course</h4>
                                <p>
                                    MongoDB is one of the most important databases you can work with these days. It's extremely popular and MongoDB developers are in high demand.
                                    No matter if you're building web applications, mobile applications or any other kind of application or if you're a data scientist - you'll need to work with data. Storing data, querying it efficiently and minimizing complexities whilst optimizing performance are crucial tasks.
                                    MongoDB makes working with data simple - it's built on a philosophy that prioritizes performance and efficiency.
                                    In this course, you'll learn all about MongoDB from scratch. <strong>No prior MongoDB or database experience is required!</strong>
                                </p>
                            </div>
                            <div className="left__section">
                                <h4>What You'll Learn</h4>
                                <ul>
                                    <li>Understand how MongoDB stores data.</li>
                                    <li>Write efficient queries for reading data.</li>
                                    <li>Gain mastery of the most popular MongoDB interface, Mongoose JS.</li>
                                    <li>Learn the purpose of each of Mongoose's functions.</li>
                                    <li>Write efficient and well-performing queries to fetch data in the format you need it.</li>
                                    <li>Use all features MongoDB offers you to work with data efficiently.</li>
                                </ul>
                            </div>
                            <div className="left__section">
                                <h4>Prerequisites</h4>
                                <ul>
                                    <li>NO prior knowledge on databases (of any kind) is required.</li>
                                    <li>General web development or mobile development knowledge will help you but is not a must-have.</li>
                                    <li>All you need is a Computer.</li>
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

export default connect(mapStateToProps, { applyForCourse })(MongoDB);