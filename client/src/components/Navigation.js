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
            showFindModal: false,
            showMenu: false
        };
    }

    componentDidMount () {
        let sidenavElem = document.querySelectorAll('.sidenav');
        // eslint-disable-next-line
        let sidenavInstance = M.Sidenav.init(sidenavElem, {});

        const mobileLinks = document.querySelectorAll('.mobile-link');
        mobileLinks.forEach((mobileLink) => {
            mobileLink.addEventListener('click', (e) => {
                if (e.target.id === 'mobile-dropdown') {
                    this.setState({
                        showMenu: true
                    });
                } else {
                    setTimeout(sidenavInstance[0].close(), 1000);
                }
            });
        });
    }

    showModal = () => {
        this.props.showModal();
    }

    showMenu = (e) => {
        e.preventDefault();
        this.setState({
            showMenu: true
        });
        document.addEventListener('click', this.hideMenu);
    }

    hideMenu = (e) => {
        if (e.target.id !== 'mobile-dropdown') {
            this.setState({
                showMenu: false
            });
        }
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
                                <li><NavLink onMouseOver={this.hideMenu} className="links" to="/">Home</NavLink></li>
                                <li><NavLink className="links" to="/courses">Courses</NavLink></li>
                                <li><NavLink onMouseOver={this.hideMenu} className="links" to="/store/laptops">Store</NavLink></li>
                                <li><NavLink onClick={this.showMenu} onMouseOver={this.showMenu} className="links" to="#!">
                                    Students
                                    </NavLink>
                                    {
                                        this.state.showMenu 
                                        ?
                                        (
                                            <ul onMouseLeave={this.hideMenu} className="dropdown">
                                                <li><NavLink className="links" to="/students">Apply</NavLink></li>
                                                <li className="divider"></li>
                                                <li><NavLink onClick={this.showModal} className="links" to="#!">Activate Student</NavLink></li>
                                                <li className="divider"></li>
                                                <li><NavLink className="links" to="/students/find">Find Student</NavLink></li>
                                            </ul>
                                        )
                                        :
                                        null
                                    }
                                </li>
                                <li><NavLink onMouseOver={this.hideMenu} className="links" to="/about">About</NavLink></li>
                                <li><NavLink onMouseOver={this.hideMenu} className="links" to="/admin">Admin</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                    <ul className="sidenav" id="mobile-nav">
                        <li className="mobile-link"><NavLink onMouseOver={this.hideMenu} className="links" to="/">Home</NavLink></li>
                        <li className="mobile-link"><NavLink onMouseOver={this.hideMenu} className="links store" to="/courses">Courses</NavLink></li>
                        <li className="mobile-link"><NavLink onMouseOver={this.hideMenu} className="links" to="/store/laptops">Store</NavLink></li>
                        <li><NavLink id="mobile-dropdown" onClick={this.showMenu} onMouseEnter={this.showMenu} className="links mobile-link" to="#!">
                            Students
                            </NavLink>
                            {
                                this.state.showMenu 
                                ?
                                (
                                    <ul className="mobile-dropdown">
                                        <li className="mobile-link"><NavLink className="mobile-dropdown-links" to="/students">Apply</NavLink></li>
                                        <li className="mobile-link"><NavLink className="mobile-dropdown-links" onClick={this.showModal} to="#!">Activate Student</NavLink></li>
                                        <li className="mobile-link"><NavLink className="mobile-dropdown-links" to="/students/find">Find Student</NavLink></li>
                                    </ul>
                                )
                                :
                                null
                            }
                        </li>
                        <li className="mobile-link"><NavLink onMouseOver={this.hideMenu} className="links" to="/about">About</NavLink></li>
                        <li className="mobile-link"><NavLink onMouseOver={this.hideMenu} className="links" to="/admin">Admin</NavLink></li>
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