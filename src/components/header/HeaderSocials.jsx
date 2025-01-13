import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/christopher-paúl-santamaría-márquez-5b241222b" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/CriSant20" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials