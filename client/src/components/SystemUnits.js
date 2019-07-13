import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

import StoreItem from './common/StoreItem';

import DellVostro3900 from '../img/system-units/dell-vostro-3900.jpg'; 
import HPCompaqElite from '../img/system-units/hp-compaq-elite.jpg'; 
import HPPavilion from '../img/system-units/hp-pavilion-system-unit.jpg'; 
import HPProDeskTower from '../img/system-units/hp-proDesk-tower.jpg'; 

import AcerVeritonThinClient from '../img/system-units/acer-veriton-thin-client.jpg'; 
import DellTower from '../img/system-units/dell-1.jpeg'; 
import DellOptiflex390Slim from '../img/system-units/dell-optiflex-390-slim.png'; 
import DellOptiflex9020 from '../img/system-units/dell-optiflex-9020.jpg'; 

import HPDC700 from '../img/system-units/hp-system-unit-dc700.jpg'; 
import HPT730ThinClient from '../img/system-units/hp-t730-thin-client.jpg'; 
import HPThinClient from '../img/system-units/hp-thin-client.jpeg'; 
import LenovoThinkCenter from '../img/system-units/lenovo-think-centre.jpg'; 

const SystemUnits = () => (
    <Fragment>
        <Helmet><title>Store : : System Units - vegistech.com</title></Helmet>
        <div id="store-header">
            <div className="col s12">
                <NavLink to="/" className="breadcrumb">Home</NavLink>
                <NavLink to="#" className="breadcrumb">Store</NavLink>
                <NavLink to="/store/systemUnits" className="breadcrumb store">System Units</NavLink>
            </div>
            <h4>What We Sell</h4>
        </div>
        <div id="store">
            <h5>System Units</h5>
            <div className="row">
                <StoreItem
                    src={DellVostro3900}
                    alt="Dell Vostro 3900"
                    itemName="Dell Vostro 3900"
                    dataCaption="Dell Vostro 3900"
                />
                <StoreItem
                    src={HPCompaqElite}
                    alt="HP Compaq Elite"
                    itemName="HP Compaq Elite"
                    dataCaption="HP Compaq Elite"
                />
                <StoreItem
                    src={HPPavilion}
                    alt="HP Pavilion"
                    itemName="HP Pavilion"
                    dataCaption="HP Pavilion"
                />
                <StoreItem
                    src={HPProDeskTower}
                    alt="HPProDeskTower"
                    itemName="HPProDeskTower"
                    dataCaption="HPProDeskTower"
                />
            </div>

            <div className="row">
                <StoreItem
                    src={AcerVeritonThinClient}
                    alt="Acer Veriton Thin Client"
                    itemName="Acer Veriton Thin Client"
                    dataCaption="Acer Veriton Thin Client"
                />
                <StoreItem
                    src={DellTower}
                    alt="Dell Tower"
                    itemName="Dell Tower"
                    dataCaption="Dell Tower"
                />
                <StoreItem
                    src={DellOptiflex390Slim}
                    alt="Dell Optiflex 390 Slim"
                    itemName="Dell Optiflex 390 Slim"
                    dataCaption="Dell Optiflex 390 Slim"
                />
                <StoreItem
                    src={DellOptiflex9020}
                    alt="Dell Optiflex 9020"
                    itemName="Dell Optiflex 9020"
                    dataCaption="Dell Optiflex 9020"
                />
            </div>

            <div className="row">
                <StoreItem
                    src={HPDC700}
                    alt="HP DC700"
                    itemName="HP DC700"
                    dataCaption="HP DC700"
                />
                <StoreItem
                    src={HPT730ThinClient}
                    alt="HP T730 Thin Client"
                    itemName="HP T730 Thin Client"
                    dataCaption="HP T730 Thin Client"
                />
                <StoreItem
                    src={HPThinClient}
                    alt="HP Thin Client"
                    itemName="HP Thin Client"
                    dataCaption="HP Thin Client"
                />
                <StoreItem
                    src={LenovoThinkCenter}
                    alt="Lenovo Think Center"
                    itemName="Lenovo Think Center"
                    dataCaption="Lenovo Think Center"
                />
            </div>
            <div class="pages">
                <ul class="pagination center">
                    <li class="waves-effect"><NavLink to="/store/laptops"><span class="mdi mdi-chevron-left"></span></NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/laptops">1</NavLink></li>
                    <li class="active waves-effect"><NavLink to="/store/systemUnits">2</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/tabs">3</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/screens">4</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/printers">5</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/accessories">6</NavLink></li>
                    <li class="waves-effect"><NavLink to="/store/tabs"><span class="mdi mdi-chevron-right"></span></NavLink></li>
                </ul>
            </div>
        </div>
    </Fragment>
);

export default SystemUnits;