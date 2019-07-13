import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

import StoreItem from './common/StoreItem';

import AcerLCDMonitor from '../img/screens/acer-lcd-monitor-g-195hqv.jpeg';
import Dell19inchesMonitor from '../img/screens/dell-19-inches-monitor.gif';
import DellMonitor from '../img/screens/dell-monitor.jpg';
import Dellse2416h from '../img/screens/dell-se2416h-monitor.jpg';

import Dellu2412mb from '../img/screens/dell-u2412mb-24-inches-monitor.jpg';
import HPl24455 from '../img/screens/hp-l24455-monitor.jpg';
import HPw2082a from '../img/screens/hp-w2082a-20-inches-lcd-monitor.jpg';
import HP2010i from '../img/screens/hp-2010i.jpg';

const Screens = () => (
    <Fragment>
        <Helmet><title>Store : : Monitor Screens - vegistech.com</title></Helmet>
        <div id="store-header">
            <div className="col s12">
                <NavLink to="/" className="breadcrumb">Home</NavLink>
                <NavLink to="#" className="breadcrumb">Store</NavLink>
                <NavLink to="/store/screens" className="breadcrumb store">Monitor Screens</NavLink>
            </div>
            <h4>What We Sell</h4>
        </div>
        <div id="store">
            <h5>Monitor Screens</h5>
            <div className="row">
                <StoreItem
                    src={AcerLCDMonitor}
                    alt="Acer LCD Monitor"
                    itemName="Acer LCD Monitor"
                    dataCaption="Acer LCD Monitor"
                />
                <StoreItem
                    src={Dell19inchesMonitor}
                    alt="Dell 19 inches Monitor"
                    itemName="Dell 19 inches Monitor"
                    dataCaption="Dell 19 inches Monitor"
                />
                <StoreItem
                    src={DellMonitor}
                    alt="Dell Monitor"
                    itemName="Dell Monitor"
                    dataCaption="Dell Monitor"
                />
                <StoreItem
                    src={Dellse2416h}
                    alt="Dell se2416h"
                    itemName="Dell se2416h"
                    dataCaption="Dell se2416h"
                />
            </div>

            <div className="row">
                <StoreItem
                    src={Dellu2412mb}
                    alt="Dell u2412mb"
                    itemName="Dell u2412mb"
                    dataCaption="Dell u2412mb"
                />
                <StoreItem
                    src={HPl24455}
                    alt="HP l24455"
                    itemName="HP l24455"
                    dataCaption="HP l24455"
                />
                <StoreItem
                    src={HPw2082a}
                    alt="HP w2082a"
                    itemName="HP w2082a"
                    dataCaption="HP w2082a"
                />
                <StoreItem
                    src={HP2010i}
                    alt="HP 2010i"
                    itemName="HP 2010i"
                    dataCaption="HP 2010i"
                />
            </div>
            <div class="pages">
                <ul class="pagination center">
                    <li class="waves-effect"><NavLink to="/store/tabs"><span class="mdi mdi-chevron-left"></span></NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/laptops">1</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/systemUnits">2</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/tabs">3</NavLink></li>
                    <li class="active waves-effect"><NavLink to="/store/screens">4</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/printers">5</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/accessories">6</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/printers"><span class="mdi mdi-chevron-right"></span></NavLink></li>
                </ul>
            </div>
        </div>
    </Fragment>
);

export default Screens;