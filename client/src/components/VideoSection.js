import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactTypingEffect from 'react-typing-effect';
import video from '../vid/vid.mkv';

class VideoSection extends Component {
    constructor() {
        super();
        this.state = {
            words: [                
                'When you think of quality products and services, think vegistech . . . . . . . ',
                'Providing IT-based solutions to solve daily business tasks . . . . . . ',
                'Our solutions keep firms ahead of their competition and ensure high profit returns . . . . . . ',
                'We ensure speedy and reliable delivery for our products and services . . . . . .'
            ]
        }
    }
   
    render () {
        return (
            <div className="v-header container">
                <div className="fullscreen-video-wrap">
                    <video className="responsive-video" src={video} autoPlay={true} loop={true} muted={true} playsInline></video>
                </div>
                <div className="header-overlay"></div>
                <div className="header-content">
                    <h1><span className="vegis">Vegis</span><span className="tech">tech</span></h1>
                    <ReactTypingEffect
                        text={this.state.words}
                        className="txt-type"
                        speed={100}
                        eraseDelay={7000}
                        cursor=" _"
                        cursorClassName="cursor"
                    />
                    <NavLink id="readMore" to="/about" className="btn btn-large">Read More</NavLink>
                </div>
            </div>
        );
    }
};

export default VideoSection;