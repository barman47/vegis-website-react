import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { applyForCourse } from '../actions/courseActions';

import src from '../img/internet-technology.jpg';

class InternetTechnologyMasterclass extends Component {
    constructor (props) {
        super(props);
        this.state = {
            type: 'Regular',
            duration: '12 Weeks',
            effort: '5 - 10 Hours per Week',
            level: 'Beginner',
            title: 'Internet Technology Masterclass'
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
                                <img src={src} alt="Internet Technology Masterclass" className="course-image" />
                            </div>
                            <div className="col s12 m8 l8">
                                <h3>{this.state.title}</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nobis, incidunt officiis, dicta asperiores, quaerat nam illo ut obcaecati sequi id mollitia eveniet accusamus repudiandae alias iusto veritatis eos? Culpa?
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="course-section">
                        <div className="course-section__left">
                            <div className="left__section">
                                <h4>About this Course</h4>
                                <p>
                                    Do you want to learn all the skills you need to make professional designs? Do you want to be an expert in creating logos and branding packages? Are you intimidated by learning Adobe Photoshop, Adobe illustrator, Adobe InDesign or Corel Draw and want to execute practical real world projects? Then, this class is for you! This is a course that will bring you up from the level of a novice to a mastery level. Every designer needs to know and master these programs. This essence of this course is to make sure that you know the essential tools to carryout real world project. By the end of this course, you will have a solid grasp of what Graphics design entails.
                                </p>
                            </div>
                            <div className="left__section">
                                <h4>What You'll Learn</h4>
                                <ul>
                                    <li>A full understanding of how the Internet works in its current versions.</li>
                                    <li>Basic knowledge about the Internet Layered Architecture.</li>
                                    <li>A full understanding of common internet protocols.</li>
                                    <li>Understand how the common Internet Applications including DNS, NAT, and firewalls works.</li>
                                    <li>A full understanding of Internet security challenges and mitigation mechanisms.</li>
                                </ul>
                            </div>
                            <div className="left__section">
                                <h4>Prerequisites</h4>
                                <ul>
                                    <li>Passion to learn.</li>
                                    <li>Basic knowledge of computer will make your progress faster.</li>
                                    <li>Knowledge of computer networks is plus but not required.</li>
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

export default connect(mapStateToProps, { applyForCourse })(InternetTechnologyMasterclass);