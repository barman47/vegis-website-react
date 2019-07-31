import React, { Component } from 'react';

import accessDB from '../img/accessDB.png';
import graphicsDesign from '../img/graphics.jpg';
import internetTechnology from '../img/internet-technology.jpg';
import mysql from '../img/mysql.png';
import visualBasic1 from '../img/visual-basic.png';
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
            <section className="courses">
                <div className="row">
                    <CourseCard 
                        src={accessDB}
                        alt="Access Database"
                        title="Access Database for Beginners"
                        to="/courses/intro-to-access-db-for-beginners"
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
                        src={mysql}
                        alt="MySQL Database"
                        title="Learn Database Design with MySQL"
                        to="/courses/learn-database-design-with-mysql"
                    />
                </div>
                <div className="row">
                    <CourseCard 
                        src={visualBasic1}
                        alt="Visual Basic"
                        title="Learn and make apps that sells using Visual Basic.NET"
                        to="/courses/learn-and-make-app-that-sells-using-visual-basic"
                    />
                    <CourseCard 
                        src={vbMasterclass}
                        alt="Graphices Design Mastery"
                        title="Visual Basic.NET Masterclass"
                        to="/courses/visual-basic-dot-net-masterclass"
                    />
                    <CourseCard 
                        src={accessDB}
                        alt="Internet Technology Masterclass"
                        title="Visual Basic programming with windows form Apps"
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
                        src={accessDB}
                        alt="Desktop Publishing Masterclass"
                        title="Complete Desktop Publishing Masterclass"
                        to="/courses/complete-desktop-publishing-masterclass"
                    />
                    <CourseCard 
                        src={java}
                        alt="Programming in Java"
                        title="A complete guide to programming in Java"
                        to="/courses/a-complete-guide-to-programming-in-java"
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
                        src={node}
                        alt="NodeJS, ExpressJS, and MongoDB"
                        title="Node.js, Express.js &amp; Mongo DB: From development to Deployment"
                        to="/courses/nodejs-expressjs-mongodb-from-development-to-deployment"
                    />                    
                </div>
            </section>
        );
    }
}

export default Courses;