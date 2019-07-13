import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

import StoreItem from './common/StoreItem';

import MicrosoftSurface from '../img/tabs/microsoft-surface-10-inches.jpg'; 
import SamsungGalaxyNote from '../img/tabs/samsung-galaxy-note-10.1.jpg'; 
import SamsungGalaxyTabS3 from '../img/tabs/samsung-galaxy-tab-s3.jpg'; 
import SonyTab from '../img/tabs/sony-tab.jpg'; 

import AmazonFire from '../img/tabs/amazon-fire.jpg'; 
import ChuwiWindowsAndroid from '../img/tabs/chuwi-windows-android-2-in-1.png'; 
import HuaweiMediaPad from '../img/tabs/Huawei-MediaPad.jpg'; 
import LenovoTab4 from '../img/tabs/lenovo-tab-4.png'; 

import ToshibaThrive from '../img/tabs/toshiba-thrive-10.1.jpg'; 

const Tabs = () => (
    <Fragment>
        <Helmet><title>Store : : Tablets - vegistech.com</title></Helmet>
        <div id="store-header">
            <div className="col s12">
                <NavLink to="/" className="breadcrumb">Home</NavLink>
                <NavLink to="#" className="breadcrumb">Store</NavLink>
                <NavLink to="/store/tabs" className="breadcrumb store">Tablet Devices</NavLink>
            </div>
            <h4>What We Sell</h4>
        </div>
        <div id="store">
            <h5>Tablet Devices</h5>
            <div className="row">
                <StoreItem
                    src={MicrosoftSurface}
                    alt="Microsoft Surface"
                    itemName="Microsoft Surface"
                    dataCaption="Microsoft Surface"
                />
                <StoreItem
                    src={SamsungGalaxyNote}
                    alt="Samsung Galaxy Note"
                    itemName="Samsung Galaxy Note"
                    dataCaption="Samsung Galaxy Note"
                />
                <StoreItem
                    src={SamsungGalaxyTabS3}
                    alt="Samsung Galaxy Tab S3"
                    itemName="Samsung Galaxy Tab S3"
                    dataCaption="Samsung Galaxy Tab S3"
                />
                <StoreItem
                    src={SonyTab}
                    alt="Sony Tab"
                    itemName="Sony Tab"
                    dataCaption="Sony Tab"
                />
            </div>

            <div className="row">
                <StoreItem
                    src={AmazonFire}
                    alt="Amazon Fire"
                    itemName="Amazon Fire"
                    dataCaption="Amazon Fire"
                />
                <StoreItem
                    src={ChuwiWindowsAndroid}
                    alt="Chuwi Windows-Android (Dual OS)"
                    itemName="Chuwi Windows-Android (Dual OS)"
                    dataCaption="Chuwi Windows-Android (Dual OS)"
                />
                <StoreItem
                    src={HuaweiMediaPad}
                    alt="Huawei MediaPad"
                    itemName="Huawei MediaPad"
                    dataCaption="Huawei MediaPad"
                />
                <StoreItem
                    src={LenovoTab4}
                    alt="Lenovo Tab-4"
                    itemName="Lenovo Tab-4"
                    dataCaption="Lenovo Tab-4"
                />
            </div>

            <div className="row">
                <StoreItem
                    src={ToshibaThrive}
                    alt="Toshiba Thrive"
                    itemName="Toshiba Thrive"
                    dataCaption="Toshiba Thrive"
                />
            </div>
            <div class="pages">
                <ul class="pagination center">
                    <li class="waves-effect"><NavLink to="/store/systemUnits"><span class="mdi mdi-chevron-left"></span></NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/laptops">1</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/systemUnits">2</NavLink></li>
                    <li class="active waves-effect"><NavLink to="/store/tabs">3</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/screens">4</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/printers">5</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/accessories">6</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/screens"><span class="mdi mdi-chevron-right"></span></NavLink></li>
                </ul>
            </div>
        </div>
    </Fragment>
);

export default Tabs;