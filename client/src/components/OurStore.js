import React from 'react';
import { NavLink } from 'react-router-dom';  

const OurStore = () => (
    <section className="section">
        <h4 className="center">Our store</h4>
        <div id="store" className="row">
            <div className="col s12 m6 l3">
                <NavLink to="/store">
                    <div className="card hoverable">
                        <div className="card-content">
                            <span className="mdi mdi-desktop-mac store-icon"></span>
                        </div>
                        <div className="card-action">
                            <p>Computers</p>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className="col s12 m6 l3">
                <NavLink to="/store/tabs">
                    <div className="card hoverable">
                        <div className="card-content">
                            <span className="mdi mdi-tablet-cellphone store-icon"></span>
                        </div>
                        <div className="card-action">
                            <p>Tablets</p>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className="col s12 m6 l3">
                <NavLink to="/store/printers">
                    <div className="card hoverable">
                        <div className="card-content">
                            <span className="mdi mdi-printer store-icon"></span>
                        </div>
                        <div className="card-action">
                            <p>Printers</p>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className="col s12 m6 l3">
                <NavLink to="/store/accessories">
                    <div className="card hoverable">
                        <div className="card-content">
                            <span className="mdi mdi-headphones-settings store-icon"></span>
                        </div>
                        <div className="card-action">
                            <p>Accessories</p>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
        <div className="container center">
            <NavLink to="/store" className="more">More<span style={{ marginLeft: '-2px' }} className="mdi mdi-chevron-double-right"></span></NavLink>
        </div>
    </section>
);

export default OurStore;