import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <Fragment>
            <Helmet><title>About : : vegistech.com</title></Helmet>
            <div className="col s12 breadcrumb-section">
                <NavLink to="/" className="breadcrumb">Home</NavLink>
                <NavLink to="/about" className="breadcrumb about">About Us</NavLink>
                <h4>About Vegistechnology</h4>
            </div>
            <div className="row about-section">
                <h5 className="about-header">Our <span className="underline">Mission</span></h5>
                <div className="col s12">
                    <p className="about-text">Our mission is to ensure a stable and a steady flow of ICT Training from firms to customers through a digital platform as part of our responsibility in meeting the needs of our customers and empowering our students. This is in line with the country's economic diversification policy. Moving ICT to the next level, other than what it is now is our utmost desire.</p>
                    <br />
                    <p className="about-text">Consequently, we intend to establish a link between other firms who are related or have link with ICT and customers nationwide such that, services rendered by these firms can be extended to interested individuals around and within the country.</p>
                    <br />
                    <p className="about-text">Most importantly, job creation is an important aspect of our mission that cannot be overlooked. We intend to help in the achievement of the country's development goal by providing platforms where thousand and one individual around the country can be gainfully employed.</p>
                </div>
            </div>
            <div className="row about-section">
                <h5 className="about-header">Our <span className="underline">Vision</span></h5>
                <div className="col s12">
                    <p className="about-text">For us at <strong>VEGISTECHNOLOGY</strong>, once there is an idea, brand or product, and there is a student or consumer, a transaction is certain irrespective of the Individual or location. For us, individual or location is never a limitation but an opportunity to display our high level of professionalism. So, <strong>"LET US SERVE YOU, AS OUR SERVICES ARE QUALITATIVE, AFFORDABLE, FLEXIBLE AND RELIABLE."</strong></p>
                </div>
            </div>
            <div className="row about-section">
                <h5 className="about-header">What <span className="underline">We Do</span></h5>
                <div className="col s12">
                    <p className="about-text">Our priority is to proffer solution to the problems of customers and students as well as meeting their needs through ICT all around the country. We provide a market for all ICT products some of the various services we render are listed below.</p>
                    <br />
                    <ul id="aboutUs-list">
                        <li>Web Design &amp; Development</li>
                        <li>Educational Portal Solutions</li>
                        <li>Branding &amp; Digital Advertisment</li>
                        <li>IT Consultancy &amp; Training</li>
                        <li>Project Management</li>
                        <li>Software Development &amp; Graphics Design</li>
                        <li>Networking</li>
                    </ul>
                    <br />
                    <p className="about-text">How these ideas, product and services will get to you safely and in a good condition and at an affordable price or cost is what we are trained to do. So, when it comes to quality delivery of ICT services, VEGISTECHNOLOGY is the best option.</p>
                </div>
            </div>
        </Fragment>
    );
};

export default About;