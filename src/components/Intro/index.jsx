import React from 'react';
import './intro.css'

const Intro = () => {
    return (
        <div className="intro">
            <h1 className='intro-title'>A modern publishing plataform</h1>
            <p className="intro-text">Grow your audience and build your online brand</p>
            <div className='intro-buttons'>
                <button className='intro-btn start'>Start for free</button>
                <button className='intro-btn learn'>Learn more</button>
            </div>
        </div>
    );
}

export default Intro;