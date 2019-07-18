import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { showModal } from '../actions/modalActions';
import M from 'materialize-css';
import logo from '../img/logo.png';
import ActivateStudentModal from './modals/ActivateStudentModal';

class Navigation extends Component {
    constructor () {
        super();
        this.state = {
            showModal: false,
            showFindModal: false
        };
    }

    componentDidMount () {
        let sidenavElem = document.querySelectorAll('.sidenav');
        // eslint-disable-next-line
        let sidenavInstance = M.Sidenav.init(sidenavElem, {});

        const mobileLinks = document.querySelectorAll('.mobile-link');
        mobileLinks.forEach((mobileLink) => {
            mobileLink.addEventListener('click', (e) => {
                setTimeout(sidenavInstance[0].close(), 1000)
            });
        });
    }

    showModal = () => {
        this.props.showModal();
    }

    render () {
        const show = {
            display: 'flex'
        };

        const hide = {
            display: 'none'
        };

        return (
            <Fragment>
                <ActivateStudentModal
                    style={this.state.showModal ? show : hide}
                />
                <div className="navbar navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <NavLink to="/" className="brand-logo"><img src={logo} alt="Logo" /></NavLink>
                            <NavLink to="#" data-target="mobile-nav" className="sidenav-trigger"><span id="menu-icon" className="mdi mdi-menu"></span></NavLink>
                            <ul className="right hide-on-med-and-down">
                                <li><NavLink className="links home" to="/">Home</NavLink></li>
                                <li><NavLink className="links store" to="/store/laptops">Store</NavLink></li>
                                {/* <li><NavLink className="links store" to="/courses">Courses</NavLink></li> */}
                                <li><NavLink className="links store" to="/students">Students</NavLink></li>
                                <li><NavLink onClick={this.showModal} className="links" to="#!">Activate Student</NavLink></li>
                                <li><NavLink className="links" to="/students/find">Find Student</NavLink></li>
                                <li><NavLink className="links about" to="/about">About</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                    <ul className="sidenav" id="mobile-nav">
                        <li><NavLink className="links mobile-link home" to="/">Home</NavLink></li>
                        <li><NavLink className="links mobile-link store" to="/store/laptops">Store</NavLink></li>
                        {/* <li><NavLink className="links mobile-link store" to="/courses">Courses</NavLink></li> */}
                        <li><NavLink className="links mobile-link store" to="/students">Students</NavLink></li>
                        <li><NavLink onClick={this.showModal} className="links mobile-link" to="#!">Activate Student</NavLink></li>
                        <li><NavLink className="links mobile-link" to="/students/find">Find Student</NavLink></li>
                        <li><NavLink className="links mobile-link about" to="/about">About</NavLink></li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}

Navigation.propTypes = {
    showModal: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    showModal: state.showModal
});

export default connect(mapStateToProps, { showModal })(Navigation);