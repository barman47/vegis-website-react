import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { applyForCourse } from '../actions/courseActions';

import src from '../img/js.png';

class JavaScript extends Component {
    constructor (props) {
        super(props);
        this.state = {
            type: 'SIWES',
            title: 'Learn JavaScript from Novice to Professional',
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
                                <p>Learn Java in this course and become a programmer. This course is for anyone with prior or no knowledge of programming as it provides step-by-step hands-on examples in building java applications. </p>
                            </div>
                        </div>
                    </section>
                    <section className="course-section">
                        <div className="course-section__left">
                            <div className="left__section">
                                <h4>About this Course</h4>
                                <p>
                                    JavaScript often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. 
                                    Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it, and major web browsers have a dedicated JavaScript engine to execute it. 
                                    This course will take you from an absolute beginner to a professional JavaScript developer and programmer.
                                </p>
                            </div>
                            <div className="left__section">
                                <h4>What You'll Learn</h4>
                                <ul>
                                    <li>Go from an absolute beginner to an advanced javascript developer</li>
                                    <li>JavaScript and programming fundamentals: variables, boolean logic, if/else, loops, functions, arrays, etc.</li>
                                    <li>A true understanding of how javascript works.</li>
                                    <li>Organize and structure your code using JavaScript patterns like modules.</li>
                                    <li>What's new in ES6: arrow functions, classes, default and rest parameters, etc.</li>
                                    <li>Modern JavaScript for {new Date().getFullYear()}</li>
                                </ul>
                            </div>
                            <div className="left__section">
                                <h4>Prerequisites</h4>
                                <ul>
                                    <li>No coding experience is required to take this course. We take you from beginner to professional.</li>
                                    <li>A computer to install all the free software and tools needed to build your new apps.</li>
                                    <li>A basic understanding of HTML and CSS is a plus, but not a must!</li>
                                    <li>That's it, you're all set and ready to get rolling.</li>
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

export default connect(mapStateToProps, { applyForCourse })(JavaScript);