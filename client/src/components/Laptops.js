import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

import StoreItem from './common/StoreItem';

import AcerAspireES1 from '../img/laptops/acer-aspire-es1-432.jpg'; 
import DellInspiron14 from '../img/laptops/dell-inspiron-14.jpg';
import DellInspiron15 from '../img/laptops/dell-inspiron-15.jpg';
import HP15db0599sa from '../img/laptops/hp-15-db0599sa-15.6-inches.jpg';

import HP15Notebook from '../img/laptops/hp-15-notebook.jpg';
import HP250G6 from '../img/laptops/hp-250-g6.jpg';
import HPElite850 from '../img/laptops/hp-elite-850.jpg';
import HPElite820 from '../img/laptops/hp-elitebook-820.jpg';

import HPEliteBook830G5 from '../img/laptops/hp-elite-book-830-g5.jpg';
import HPEliteBookFolioG1 from '../img/laptops/hp-elite-book-folio-g1.jpg';
import Lenovo from '../img/laptops/lenovo.jpg';
import LenovoIdeapad320 from '../img/laptops/lenovo-ideapad-320.png';

import LenovoV110_15 from '../img/laptops/lenovo-v110-15.jpg';
import ToshibaSatellitePro from '../img/laptops/toshiba-satellite-pro.jpg';
import ToshibaDynabookA55_E from '../img/laptops/toshiba-dynabook-a55-e.jpg';

const Laptops = () => (
    <Fragment>
        <Helmet><title>Store : : Laptops - vegistech.com</title></Helmet>
        <div id="store-header">
            <div className="col s12">
                <NavLink to="/" className="breadcrumb">Home</NavLink>
                <NavLink to="/#!" className="breadcrumb">Store</NavLink>
                <NavLink to="/store/laptops" className="breadcrumb store">Laptops</NavLink>
            </div>
            <h4>What We Sell</h4>
        </div>
        <div id="store">
            <h5>Laptops</h5>
            <div className="row">
                <StoreItem
                    src={AcerAspireES1}
                    alt="Acer Aspire ES1"
                    itemName="Acer Aspire ES1"
                    dataCaption="Acer Aspire ES1"
                />
                <StoreItem
                    src={DellInspiron14}
                    alt="Dell Inspiron 14"
                    itemName="Dell Inspiron 14"
                    dataCaption="Dell Inspiron 14"
                />
                <StoreItem
                    src={DellInspiron15}
                    alt="Dell Inspiron 15"
                    itemName="Dell Inspiron 15"
                    dataCaption="Dell Inspiron 15"
                />
                <StoreItem
                    src={HP15db0599sa}
                    alt="HP 15 db0599sa"
                    itemName="HP 15 db0599sa"
                    dataCaption="HP 15 db0599sa"
                />
            </div>

            <div className="row">
                <StoreItem
                    src={HP15Notebook}
                    alt="HP 15 Notebook"
                    itemName="HP 15 Notebook"
                    dataCaption="HP 15 Notebook"
                />
                <StoreItem
                    src={HP250G6}
                    alt="HP 250 G6"
                    itemName="HP 250 G6"
                    dataCaption="HP 250 G6"
                />
                <StoreItem
                    src={HPElite850}
                    alt="HP Elite 850"
                    itemName="HP Elite 850"
                    dataCaption="HP Elite 850"
                />
                <StoreItem
                    src={HPElite820}
                    alt="HP EliteBook 820"
                    itemName="HP EliteBook 820"
                    dataCaption="HP EliteBook 820"
                />
            </div>

            <div className="row">
                <StoreItem
                    src={HPEliteBook830G5}
                    alt="HP EliteBook 830 G5"
                    itemName="HP EliteBook 830 G5"
                    dataCaption="HP EliteBook 830 G5"
                />
                <StoreItem
                    src={HPEliteBookFolioG1}
                    alt="HP EliteBook Folio G1"
                    itemName="HP EliteBook Folio G1"
                    dataCaption="HP EliteBook Folio G1"
                />
                <StoreItem
                    src={Lenovo}
                    alt="Lenovo"
                    itemName="Lenovo"
                    dataCaption="Lenovo"
                />
                <StoreItem
                    src={LenovoIdeapad320}
                    alt="Lenovo Ideapad 320"
                    itemName="Lenovo Ideapad 320"
                    dataCaption="Lenovo Ideapad 320"
                />
            </div>

            <div className="row">
                <StoreItem
                    src={LenovoIdeapad320}
                    alt="Lenovo Ideapad 320 15.6''"
                    itemName="Lenovo Ideapad 320 15.6''"
                    dataCaption="Lenovo Ideapad 320 15.6''"
                />
                <StoreItem
                    src={LenovoV110_15}
                    alt="HP EliteBook Folio G1"
                    itemName="HP EliteBook Folio G1"
                    dataCaption="Lenovo v110-15"
                />
                <StoreItem
                    src={ToshibaSatellitePro}
                    alt="Toshiba Satellite Pro"
                    itemName="Toshiba Satellite Pro"
                    dataCaption="Toshiba Satellite Pro"
                />
                <StoreItem
                    src={ToshibaDynabookA55_E}
                    alt="Toshiba Dynabook A55-E"
                    itemName="Toshiba Dynabook A55-E"
                    dataCaption="Toshiba Dynabook A55-E"
                />
            </div>
            <div className="pages">
                <ul className="pagination center">
                    <li className="disabled"><NavLink to="#!"><span className="mdi mdi-chevron-left"></span></NavLink></li>
                    <li className="active"><NavLink to="#!">1</NavLink></li>
                    <li className="waves-effect"><NavLink to="/store/systemUnits">2</NavLink></li>
                    <li className="waves-effect"><NavLink to="/store/tabs">3</NavLink></li>
                    <li className="waves-effect"><NavLink to="/store/screens">4</NavLink></li>
                    <li className="waves-effect"><NavLink to="/store/printers">5</NavLink></li>
                    <li className="waves-effect"><NavLink to="/store/accessories">6</NavLink></li>
                    <li className="waves-effect"><NavLink to="/store/systemUnits"><span className="mdi mdi-chevron-right"></span></NavLink></li>
                </ul>
            </div>
        </div>
    </Fragment>
);

export default Laptops;