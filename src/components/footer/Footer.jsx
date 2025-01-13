import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Meri-MG</a>
      <ul className="permalinks">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Acerca de</a></li>
        <li><a href="#experience">Habilidades</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/christopher-pa%C3%BAl-santamaria-m%C3%A1rquez-5b241222b/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/CriSant20" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Christopher Santamaria {getYear()}. Portafolio</small>
      </div>
    </footer>
  )
}

export default Footer
