import React from 'react';
import dominic from '../img/me.jpg';
import elvis from '../img/elvis.jpg';
import chika from '../img/chika.jpg';
import promise from '../img/promise.jpg';

const OurTeam = () => {
    return (
        <section id="our-team" className="white">
            <h3>Our Team</h3>
            <div className="row white">
                <div className="col s12 m6 l3 image-container">
                    <img className="hoverable" src={elvis} alt="Elvis Chukwudi" />
                    <p className="name">Elvis Chukwudi</p>
                    <p className="title">Software Developer</p>
                </div>
                <div className="col s12 m6 l3 image-container">
                    <img className="hoverable" src={dominic} alt="Uzoanya Dominic" />
                    <p className="name">Uzoanya Dominic</p>
                    <p className="title">Senior Developer</p>
                </div>
                <div className="col s12 m6 l3 image-container">
                    <img className="hoverable" src={chika} alt="Ikeanyionwu Chika" />
                    <p className="name">Ikeanyionwu Chika</p>
                    <p className="title">Administrator</p>  
                </div>
                <div className="col s12 m6 l3 image-container">
                    <img className="hoverable" src={promise} alt="Chikwendu Promise" />
                    <p className="name">Chikwendu Promise</p>
                    <p className="title">Human Resource Manager</p>
                </div>
            </div>
        </section>      
    );
};

export default OurTeam;
