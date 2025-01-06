import React from 'react';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>HOLA, YO SOY</h5>
        <h1>Christopher Paúl Santamaria Márquez</h1>
        <h5 className="text-light">Ingeniero de Software | Desarrollador Front-End | Apasionado por la gestión de proyectos y auditorías de procesos</h5>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
