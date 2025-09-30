

import React from 'react';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-text-container">
                <p className="hero-greeting">Hola, mi nombre es...</p>
                <h1 className="hero-name">Yercko Andres Talamilla Gallegos</h1>
                <h2 className="hero-title">Soy Desarrollador Full Stack.</h2>
                <p className="hero-bio">
                    Transformando ideas en soluciones digitales robustas y escalables con JavaScript, React, y la mejor ingeniería de software.
                </p>
                <a href="#contact" className="cta-button">Contáctame</a>
            </div>
    
        </div>
    );
};

export default Hero;