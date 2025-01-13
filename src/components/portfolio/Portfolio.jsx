import React from 'react';

import './portfolio.css';

// Importa las imágenes necesarias
import gourmetgoImage from '../../assets/gourmetgo.png';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'GourmetGO',
      description:
        'Este sistema integral está diseñado para la gestión administrativa de restaurantes.',
      technologies: 'React, Next.js, HTML, TailwindCSS, CSS',
      github: 'https://github.com/PSW-GourtmetGO/GourtmetGo-Web-FrontEnd.git',
      img: gourmetgoImage, // Ruta de la imagen importada
    },
  ];

  return (
    <section id="portfolio">
      <h5>Proyectos Recientes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
