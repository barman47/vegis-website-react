import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { applyForCourse } from '../actions/courseActions';

import src from '../img/js.png';

class WebDevelopment extends Component {
    constructor (props) {
        super(props);
        this.state = {
            type: 'SIWES',
            title: 'Web Development: A beginner’s Guide',
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
                                <img src={src} alt="Web Development: A beginner's Guide" className="course-image" />
                            </div>
                            <div className="col s12 m8 l8">
                                <h3>{this.state.title}</h3>
                                <p>
                                    Web development is the coding or programming that enables website functionality, per the owner's requirements. It mainly deals with the non-design aspect of building websites, which includes coding and writing markup. 
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="course-section">
                        <div className="course-section__left">
                            <div className="left__section">
                                <h4>About this Course</h4>
                                <p>
                                    Web programming, also known as web development, is the creation of dynamic web applications. Examples of web applications are social networking sites like Facebook or e-commerce sites like Amazon. The good news is that learning web development is not that hard!
                                    This course takes you from the basics of web development <strong>(HTML, CSS, JavaScript)</strong> to more advanced concepts like server-side technologies, frameworks, databases and web site deployment. At the end of the course you'll be fully equiped with knowledge to build whatever kind of website or web app you choose to build.
                                </p>
                            </div>
                            <div className="left__section">
                                <h4>What You'll Learn</h4>
                                <ul>
                                    <li>Build websites and webapps.</li>
                                    <li>Be proficient with databases and server-side languages.</li>
                                    <li>Web Frameworks to make development faster.</li>
                                    <li>Manipulate the DOM with vanilla JS.</li>
                                    <li>Manipulate the DOM using jQuery.</li>
                                    <li>Use NodeJS to write server-side JavaScript.</li>
                                    <li>Write a REAL application using everything in the course.</li>
                                    <li>Use common JS data structures like Arrays and Objects.</li>
                                    <li>Create a beautiful, responsive landing page for a startup.</li>
                                    <li>Use JavaScript variables, conditionals, loops, functions, arrays, and objects.</li>
                                    <li>Create complex HTML forms with validations.</li>
                                    <li>Use Express and MongoDB to create full-stack JS applications.</li>
                                    <li>Create full-stack web applications from scratch.</li>
                                    <li>How to integrate version control with git in your applications.</li>
                                    <li>Master the command line interface.</li>
                                    <li>Implement user authentication.</li>
                                    <li>Continue to learn and grow as a developer, long after the course ends.</li>
                                </ul>
                            </div>
                            <div className="left__section">
                                <h4>Prerequisites</h4>
                                <ul>
                                    <li>Have a computer with internet.</li>
                                    <li>Be ready to learn an insane amount of awesome stuff.</li>
                                    <li>Be ready to learn and unlearn stuff.</li>
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

export default connect(mapStateToProps, { applyForCourse })(WebDevelopment);