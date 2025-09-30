

import React from 'react';

const Navbar = () => {
    return (
        
        <nav className="navbar-fixed">
            <div className="container">
                <div className="nav-content">

                    <a href="#home" className="logo">{"<Dev />"}</a> 
                    <ul className="nav-list">
                        <li><a href="#home" className="nav-link">Inicio</a></li>
                        <li><a href="#about" className="nav-link">Sobre Mí</a></li>
                         <li><a href="#skills" className="nav-link">Habilidades</a></li> 
                        <li><a href="#projects" className="nav-link">Proyectos</a></li> 
                        <li><a href="#contact" className="nav-link">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;