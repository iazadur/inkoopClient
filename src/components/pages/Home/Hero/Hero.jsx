import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className="my" >
            <h1 className="heroHeading">Home of <span className="heroHeadingSpan"> 1000,000+ </span><br/> Books and podcasts</h1>
            <p className="heroDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Officiis veniam maxime voluptate eveniet exercitationem! Dolor.
            </p>
            <button className="heroButton">Get Started</button>
        </div>
    );
};

export default Hero;