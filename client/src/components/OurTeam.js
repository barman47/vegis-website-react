import React from 'react';
import dominic from '../img/me.jpg';
import chika from '../img/chika.jpg';
import promise from '../img/promise.jpg';

const OurTeam = () => {
    return (
        <section id="our-team" className="white">
            <h3>Our Team</h3>
            <div className="row white">
                <div className="col s12 m6 l3 image-container">
                    <img className="hoverable" src={dominic} alt="Uzoanya Dominic" />
                    <p className="name">Uzoanya Dominic</p>
                    <p className="title">Senior Developer</p>
                </div>
                <div className="col s12 m6 l3 image-container">
                    <img className="hoverable" src={dominic} alt="Uzoanya Dominic" />
                    <p className="name">Uzoanya Dominic</p>
                    <p className="title">Senior Developer</p>
                </div>
                <div className="col s12 m6 l3 image-container">
                    <img className="hoverable" src={chika} alt="Ikeanyionwu Chika" />
                    <p className="name">Ikeanyionwu Chika</p>
                    <p className="title">Administration Manager</p>  
                </div>
                <div className="col s12 m6 l3 image-container">
                    <img className="hoverable" src={promise} alt="Chikwendu Promise" />
                    <p className="name">Chikwendu Promise</p>
                    <p className="title">Admin Manager</p>
                </div>
            </div>
                {/* <div className="col s12 m6 l3">
                    <div className="card medium">
                        <div className="card-image">
                            <img src={dominic} alt="Uzoanya Dominic" />
                        </div>
                        <div className="card-content">
                            <p>Uzoanya Dominic</p>
                        </div>
                        <div className="card-action">
                            <p>Senior Developer</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l3">
                    <div className="card medium">
                        <div className="card-image">
                            <img src={dominic} alt="Uzoanya Dominic" />
                        </div>
                        <div className="card-content">
                            <p>Uzoanya Dominic</p>
                        </div>
                        <div className="card-action">
                            <p>Senior Developer</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l3">
                    <div className="card medium">
                        <div className="card-image">
                            <img src={chika} alt="Ikeanyionwu Chika" />
                        </div>
                        <div className="card-content">
                            <p>Ikeanyionwu Chika</p>
                        </div>
                        <div className="card-action">
                            <p>Administration Manager</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l3">
                    <div className="card medium">
                        <div className="card-image">
                            <img src={promise} alt="Chikwendu Promise" />
                        </div>
                        <div className="card-content">
                            <p>Chikwendu Promise</p>
                        </div>
                        <div className="card-action">
                            <p>Admin Manager</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>      
    );
};

export default OurTeam;
