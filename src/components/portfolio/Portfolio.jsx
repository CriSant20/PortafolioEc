import React from 'react';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Sistema de Gestion de Restaurantes',
      description:
        'Este sistema integral está diseñado para la gestión administrativa de restaurantes. Ofrece una solución web y móvil que permite a los usuarios administrativos manejar todas las operaciones clave del negocio, mientras los usuarios compradores disfrutan de una experiencia optimizada para interactuar con los servicios del restaurante. Con funcionalidades modernas y prácticas, este sistema simplifica la administración y mejora la eficiencia operativa.'
    ,
      technologies: 'React, Next.js, HTML, TailwindCSS, CSS',
      github: 'https://github.com/PSW-GourtmetGO/GourtmetGo-Web-FrontEnd.git',
    }
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
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
