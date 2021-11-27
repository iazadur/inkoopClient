import React from 'react';
import Features from '../Features/Features';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Writers from '../Writers/Writers';

const Home = () => {
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <Features />
            <Writers />
            
        </div>
    );
};

export default Home;