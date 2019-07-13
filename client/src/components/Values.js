import React from 'react';

const Values = () => {
    return (
        <div id="values">
            <h4 className="center">Values</h4>
            <div className="row">
                <div className="col s12 m2 l3 value">
                    <span className="mdi mdi-source-branch values-icon"></span>
                    <h5 className="values-header">Openness</h5>
                    <p>All our store and services are distributed and rendered with genuiness and customer satisfaction in mind.</p>
                </div>
                <div className="col s12 m2 l3 value">
                    <span className="mdi mdi-school values-icon"></span>
                    <h5 className="values-header">Quality</h5>
                    <p>We are focused on delivering quality store and services, store simplicity and user experience.</p>
                </div>
                <div className="col s12 m2 l3 value">
                    <span className="mdi mdi-lightbulb-on-outline values-icon"></span>
                    <h5 className="values-header">Usefulness</h5>
                    <p>We provide store and services that match the needs of both private and public organizations.</p>
                </div>
                <div className="col s12 m2 l3 value">
                    <span className="mdi mdi-rocket values-icon"></span>
                    <h5 className="values-header">Reactivity</h5>
                    <p>We listen to the requests made by organizations that use our store.</p>
                </div>
            </div>
        </div>
    );
};

export default Values
