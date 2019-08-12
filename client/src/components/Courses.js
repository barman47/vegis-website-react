import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import accessDB from '../img/accessDB.png';
import graphicsDesign from '../img/graphics.jpg';
import internetTechnology from '../img/internet-technology.jpg';
import desktopPublishing from '../img/desktop-publishing.jpg';
import mysql from '../img/mysql.png';
import visualBasic from '../img/visual-basic.png';
import appsThatSell from '../img/apps-that-sell.png';
import vbMasterclass from '../img/vb-masterclass.png';
import systemEngineering from '../img/system-engineering.jpg';
import java from '../img/java.jpg';
import javascript from '../img/js.png';
import web from '../img/web.png';
import mongodb from '../img/mongodb.jpg';
import sqlite from '../img/lite.png';
import node from '../img/node3.png';

import CourseCard from './common/CourseCard';

class Courses extends Component {
    render () {
        return (
            <Fragment>
                <Helmet><title>Courses : : vegistech.com</title></Helmet>
                <section className="courses">
                    <div>
                        <div className="breadcrumb-section">
                            <NavLink className="home link" to="/">Home</NavLink>&nbsp;&nbsp;
                            <span className="mdi mdi-chevron-right"></span>&nbsp;&nbsp;
                            <NavLink className="active link" to="/courses">Courses</NavLink>
                            <h4>Our Courses</h4>
                        </div>
                    </div>
                    <div className="row">
                        <CourseCard 
                            src={desktopPublishing}
                            alt="Desktop Publishing Masterclass"
                            title="Complete Desktop Publishing Masterclass"
                            to="/courses/complete-desktop-publishing-masterclass"
                        />
                        <CourseCard 
                            src={graphicsDesign}
                            alt="Graphices Design Mastery"
                            title="Graphics Design Mastery: From Scratch to Professional"
                            to="/courses/graphics-design-mastery"
                        />
                        <CourseCard 
                            src={internetTechnology}
                            alt="Internet Technology Masterclass"
                            title="Internet Technology Masterclass"
                            to="/courses/internet-technology-masterclass"
                        />
                        <CourseCard 
                            src={systemEngineering}
                            alt="Computer and System Engineering"
                            title="Computer and System Engineering for Beginners"
                            to="/courses/computer-and-system-engineering-for-beginners"
                        />
                    </div>
                    <div className="row">
                        <CourseCard 
                            src={node}
                            alt="NodeJS, ExpressJS, and MongoDB"
                            title="Node.js, Express.js &amp; Mongo DB: From development to Deployment"
                            to="/courses/nodejs-expressjs-mongodb-from-development-to-deployment"
                        />
                        <CourseCard 
                            src={javascript}
                            alt="JavaScript"
                            title="Learn JavaScript from Novice to Professional"
                            to="/courses/learn-javascript-from-novice-to-professional"
                        />
                        <CourseCard 
                            src={web}
                            alt="Web Development"
                            title="Web Development: A beginner’s Guide"
                            to="/courses/web-development-a-beginners-guide"
                        />
                        <CourseCard 
                            src={visualBasic}
                            alt="Internet Technology Masterclass"
                            title="Visual Basic programming with windows form Apps"
                            to="/courses/visual-basic-programming-with-windows-forms-apps"
                        />
                    </div>
                    <div className="row">
                        <CourseCard 
                            src={accessDB}
                            alt="Access Database"
                            title="Access Database for Beginners"
                            to="/courses/access-db-for-beginners"
                        />
                        <CourseCard 
                            src={java}
                            alt="Programming in Java"
                            title="A complete guide to programming in Java"
                            to="/courses/a-complete-guide-to-programming-in-java"
                        />
                        <CourseCard 
                            src={mysql}
                            alt="MySQL Database"
                            title="Learn Database Design with MySQL"
                            to="/courses/learn-database-design-with-mysql"
                        />
                         <CourseCard 
                            src={appsThatSell}
                            alt="Visual Basic"
                            title="Learn and make apps that sell using Visual Basic.NET"
                            to="/courses/learn-and-make-app-that-sells-using-visual-basic"
                        />
                    </div>
                    <div className="row">
                        <CourseCard 
                            src={mongodb}
                            alt="MongoDB"
                            title="MongoDB Essentials"
                            to="/courses/mongodb-essentials"
                        />                    
                        <CourseCard 
                            src={sqlite}
                            alt="SQLite"
                            title="SQLite made Easy"
                            to="/courses/sqlite-made-easy"
                        />                    
                        
                        <CourseCard 
                            src={vbMasterclass}
                            alt="Graphices Design Mastery"
                            title="Visual Basic.NET Masterclass"
                            to="/courses/visual-basic-dot-net-masterclass"
                        />                
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Courses;