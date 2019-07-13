import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

import StoreItem from './common/StoreItem';

import LaptopChargers from '../img/accessories/chargers.jpg';
import HardDrives from '../img/accessories/hard-drives.jpg';
import LaptopBattery from '../img/accessories/laptop-battery.jpeg';
import Keyboard from '../img/accessories/laptop-keyboard.jpg';

import Mouse from '../img/accessories/mouse.jpg';
import RAM from '../img/accessories/ram.jpg';
import Screens from '../img/accessories/screens.png';

const Accessories = () => (
    <Fragment>
        <Helmet><title>Store : : Accessories - vegistech.com</title></Helmet>
        <div id="store-header">
            <div className="col s12">
                <NavLink to="/" className="breadcrumb">Home</NavLink>
                <NavLink to="#!" className="breadcrumb">Store</NavLink>
                <NavLink to="/store/accessories" className="breadcrumb store">Accessories</NavLink>
            </div>
            <h4>What We Sell</h4>
        </div>
        <div id="store">
            <h5>Computer Accessories</h5>
            <div className="row">
                <StoreItem
                    src={LaptopChargers}
                    alt="Laptop Chargers"
                    itemName="Laptop Chargers"
                    dataCaption="Laptop Chargers"
                />
                <StoreItem
                    src={HardDrives}
                    alt="Hard Drives"
                    itemName="Hard Drives"
                    dataCaption="Hard Drives"
                />
                <StoreItem
                    src={LaptopBattery}
                    alt="Laptop Battery"
                    itemName="Laptop Battery"
                    dataCaption="Laptop Battery"
                />
                <StoreItem
                    src={Keyboard}
                    alt="Keyboard"
                    itemName="Keyboard"
                    dataCaption="Keyboard"
                />
            </div>

            <div className="row">
                <StoreItem
                    src={Mouse}
                    alt="Mouse"
                    itemName="Mouse"
                    dataCaption="Mouse"
                />
                <StoreItem
                    src={RAM}
                    alt="RAM"
                    itemName="RAM"
                    dataCaption="RAM"
                />
                <StoreItem
                    src={Screens}
                    alt="Screens"
                    itemName="Screens"
                    dataCaption="Screens"
                />
            </div>
            <div class="pages">
                <ul class="pagination center">
                    <li class="waves-effect"><NavLink to="/store/printers"><span class="mdi mdi-chevron-left"></span></NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/laptops">1</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/systemUnits">2</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/tabs">3</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/screens">4</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/printers">5</NavLink></li>
                    <li class="active waves-effect"><NavLink to="/store/accessories">6</NavLink></li>
                    <li class="disabled waves-effect"><NavLink to="#"><span class="mdi mdi-chevron-right"></span></NavLink></li>
                </ul>
            </div>
        </div>
    </Fragment>
);

export default Accessories;