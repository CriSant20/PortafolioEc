import React from 'react';
import CV from '../../assets/meri_gogichashvili_cv.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Descargar CV
      </a>
      <a href="#contact" className="btn btn-primary">
        
      </a>
    </div>
  );
};

export default CTA;
