import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { applyForCourse } from '../actions/courseActions';

import src from '../img/apps-that-sell.png';

class AppsThatSell extends Component {
    constructor (props) {
        super(props);
        this.state = {
            type: 'SIWES',
            title: 'Learn and make apps that sell using Visual Basic.NET',
            duration: '24 Weeks',
            effort: '15 - 22 Hours per week',
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
                                If it's thinkable, it's workable. Learn to build applications to handle daily business tasks. This course enables you build apps that are responsive and reliable using visual basic.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="course-section">
                        <div className="course-section__left">
                            <div className="left__section">
                                <h4>About this Course</h4>
                                <p>
                                    If you are new to programming and want to be able to develop different kind of applications that sell, with or without database, this course will teach you step by step with practical exercises during each lesson.
                                    In this course you will learn basic to advanced programming techniques using Windows Forms. You will create a Database Applications in which you will Add, Delete, and Modify records in database through from application. 
                                    Af th end of the course, you will be able to develop an applications that will sell with a professional interface.
                                </p>
                            </div>
                            <div className="left__section">
                                <h4>What You'll Learn</h4>
                                <ul>
                                    <li>Create a standard application independently.</li>
                                    <li>Create application with a database.</li>
                                    <li>Design User Friendly Application Interface.</li>
                                    <li>Program in Visual Basic like a boss.</li>
                                </ul>
                            </div>
                            <div className="left__section">
                                <h4>Prerequisites</h4>
                                <ul>
                                    <li>Basic computer knowledge and skills.</li>
                                    <li>Passion for programming.</li>
                                    <li>Passion to learn.</li>
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

export default connect(mapStateToProps, { applyForCourse })(AppsThatSell);