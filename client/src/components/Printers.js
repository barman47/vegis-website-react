import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

import StoreItem from './common/StoreItem';

import HPDeskjet1510 from '../img/printers/hp-deskjet-1510.jpg';
import HPDeskjet4675 from '../img/printers/hp-deskjet-4675.png';
import HPLaserjet3015 from '../img/printers/hp-laserjet-3015.jpg';
import HPLaserjetProm402dn from '../img/printers/hp-laserjet-pro-m402dn.jpg';

import HPDeskjet2520 from '../img/printers/hp-deskjet-2520.jpg';
import HPLaserjet1020 from '../img/printers/hp-laserjet-1020.jpg';
// import HPLaserjet1102w from '../img/printers/hp-laserjet-p1102.jpeg';
import HPLaserjetCZ173A from '../img/printers/hp-laserjet-cz173a.jpeg';

const Printers = () => (
    <Fragment>
        <Helmet><title>Store : : Printers - vegistech.com</title></Helmet>
        <div id="store-header">
            <div className="col s12">
                <NavLink to="/" className="breadcrumb">Home</NavLink>
                <NavLink to="#!" className="breadcrumb">Store</NavLink>
                <NavLink to="/store/printers" className="breadcrumb store">Printers</NavLink>
            </div>
            <h4>What We Sell</h4>
        </div>
        <div id="store">
            <h5>Printers</h5>
            <div className="row">
                <StoreItem
                    src={HPDeskjet1510}
                    alt="HP Deskjet 1510"
                    itemName="HP Deskjet 1510"
                    dataCaption="HP Deskjet 1510"
                />
                <StoreItem
                    src={HPDeskjet4675}
                    alt="HP Deskjet 4675"
                    itemName="HP Deskjet 4675"
                    dataCaption="HP Deskjet 4675"
                />
                <StoreItem
                    src={HPLaserjet3015}
                    alt="HP Laserjet 3015"
                    itemName="HP Laserjet 3015"
                    dataCaption="HP Laserjet 3015"
                />
                <StoreItem
                    src={HPLaserjetProm402dn}
                    alt="HP Laserjet Pro m402dn"
                    itemName="HP Laserjet Pro m402dn"
                    dataCaption="HP Laserjet Pro m402dn"
                />
            </div>

            <div className="row">
                <StoreItem
                    src={HPDeskjet2520}
                    alt="HP Deskjet 2520"
                    itemName="HP Deskjet 2520"
                    dataCaption="HP Deskjet 2520"
                />
                <StoreItem
                    src={HPLaserjet1020}
                    alt="HP Laserjet 1020"
                    itemName="HP Laserjet 1020"
                    dataCaption="HP Laserjet 1020"
                />
                {/* <StoreItem
                    src={HPLaserjet1102w}
                    alt="HP Laserjet 1102w"
                    itemName="HP Laserjet 1102w"
                    dataCaption="HP Laserjet 1102w"
                /> */}
                <StoreItem
                    src={HPLaserjetCZ173A}
                    alt="HP Laserjet CZ173A"
                    itemName="HP Laserjet CZ173A"
                    dataCaption="HP Laserjet CZ173A"
                />
            </div>
            <div class="pages">
                <ul class="pagination center">
                    <li class="waves-effect"><NavLink to="/store/screens"><span class="mdi mdi-chevron-left"></span></NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/laptops">1</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/systemUnits">2</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/tabs">3</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/screens">4</NavLink></li>
                    <li class="active waves-effect"><NavLink to="/store/printers">5</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/accessories">6</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/accessories"><span class="mdi mdi-chevron-right"></span></NavLink></li>
                </ul>
            </div>
        </div>
    </Fragment>
);

export default Printers;