import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import video from '../vid/vid.mkv';

class VideoSection extends Component {
    constructor() {
        super();
        this.state = {
            txtElement: '',
            words: [
                  [  
                    'When you think of quality products and services, think vegistech . . . . . . . ',
                    'Providing IT-based solutions to solve daily business tasks . . . . . . ',
                    'Our solutions keep firms ahead of their competition and ensure high profit returns . . . . . . ',
                    'We ensure speedy and reliable delivery for our products and services . . . . . .'
                  ]
            ],
            txt: '',
            wordIndex: 0,
            wait: 0,
            IsDeleting: false
        };
    }

    componentDidMount () {
        this.type();
    }

    type = () => {
        let letterIndex;
        let wordLength;
        // eslint-disable-next-line
        let letter;
        // eslint-disable-next-line
        let currentLetter;
        for (var i = 0; i < this.state.words.length; i++) {
            for (var j = 0; j < this.state.words[i].length; j++) {
                letterIndex = this.state.words[i][j].indexOf(this.state.words[i][j].charAt(this.state.words[i][j]));
                wordLength = this.state.words[i][j].length;
                letter = this.state.words[i][j].charAt(letterIndex);
                for (var k = 0; k < this.state.words[i][j].length; k++) {
                    currentLetter = this.state.words[i][j].charAt(letterIndex) + this.state.words[i][j].charAt(this.state.words[i][j]);
                    if(letterIndex < wordLength) {
                        // document.write(currentLetter);
                    }
                }
            }
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
                    <h1>Vegistech</h1>
                    <p className="txt-type"></p>
                    <p className="txt-type"><span id="typewriter-text">We ensure speedy and reliable delivery for our products and services . . . . . . </span></p>
                    <NavLink id="readMore" to="/about" className="btn btn-large">Read More</NavLink>
                </div>
            </div>
        );
    }
};

export default VideoSection;