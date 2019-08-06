import React from 'react';

export default function Footer() {
    return (
        <footer className="page-footer">
            <div className="section">
                <div className="row">
                    <div className="col s12 m6 l2">
                        <h5>Services</h5>
                        <ul id="services-list">
                            <li>Web Design &amp; Development</li>
                            <li>Educational Portal Solutions</li>
                            <li>Branding &amp; Digital Advertisment</li>
                            <li>IT Consultancy &amp; Training</li>
                            <li>Project Management</li>
                            <li>Software Development &amp; Graphics Design</li>
                            <li>Networking</li>
                        </ul>
                    </div>
                    <div className="col s12 m4 l5">
                        <h5>About Us</h5>
                        <p className="grey-text text-lighten-4">
                            Vegistechnology is an ICT Firm established mainly for training, sales and distribution of our software, products and services within the country. Its main intention is to ensure that we provide the best of knowledge and the demands of ICT Trainings, Digital design, software development and gadget for clients who are interested at any particular point in time irrespective of the location.                     
                        </p>
                    </div>
                    <div className="col s12 m6 l5" id="find-us">
                        <h5>Find Us</h5>
                        <p><span className="mdi mdi-map-marker-radius prefix left"></span>&nbsp;&nbsp;Opposite Michael Okpara University of Agriculture, Umudike School Gate, Off Ikpot-Ekpene Road,  Abia State.</p>
                        <p><span className="mdi mdi-phone prefix left"></span>&nbsp;&nbsp;08162201403,&nbsp;&nbsp;&nbsp;09026425337,&nbsp;&nbsp;&nbsp;08105875600</p>
                        <p><span className="mdi mdi-email-outline prefix left"></span>&nbsp;&nbsp;vegistechnology@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="copyright-text">
                    <span className="center copy">&copy; Copyright Vegistechnology - &nbsp;{new Date().getFullYear()}</span>
                </div>
                <div className="footer-copyright__footer-links">
                    <ul id="footer-links">
                        <li><a href="#!"><span className="mdi mdi-instagram left footer-icon"></span></a></li>
                        {/* <li><a href="#!"><span className="mdi mdi-twitter left footer-icon"></span></a></li> */}
                        <li><a href="https://web.facebook.com/vegistech/?ref=br_rs" target="_blank" rel="noopener noreferrer"><span className="mdi mdi-facebook left footer-icon"></span></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};