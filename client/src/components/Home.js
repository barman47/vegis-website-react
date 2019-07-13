import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import VideoSection from './VideoSection';
import OurStore from './OurStore';
import Values from './Values';
import Contact from './Contact';
import Parallax1 from './Parallax1';
import Parallax2 from './Parallax2';
import OurTeam from './OurTeam';


const Home = () => (
    <Fragment>
        <Helmet><title>Home : : vegistech.com</title></Helmet>
        <VideoSection />
        <OurStore />
        <Values />
        <Contact />
        <Parallax1 />
        <OurTeam />
        <Parallax2 />
    </Fragment>
);

export default Home;