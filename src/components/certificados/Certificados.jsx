import React from 'react';
import './certificados.css';

// Importar imágenes directamente con ES6 importación
import JSparticipacion from '../../assets/JSparticipacion.png';
import Microsoft from '../../assets/microsoft.png';
import p4h from '../../assets/p4h.png';
import congreso2024 from '../../assets/congreso2024.png';
import iso27001 from '../../assets/iso27001.png';
import cisco from '../../assets/cisco.png';
import java from '../../assets/java.png';

const Certificados = () => {
  const certificados = [
    {
      id: 1,
      title: 'Certificado de Participación Desarrollo Web con JavaScript',
      institution: 'Alura latam',
      date:'Septiembre de 2024',
      description: 'Desarrollo Web con JS',
      image: JSparticipacion, // Importación de la imagen
    },
    {
      id: 2,
      title: 'Micro:pet',
      institution: 'Microsoft Learn Student Ambassador',
      date: 'Diciembre 2024',
      description: 'Mi primera mascota digital con Micro:bit',
      image: Microsoft, // Importación de la imagen
    },
    {
      id: 3,
      title: 'Introduction to Bionic Exoskeletons',
      institution: 'P4H Bionics',
      date: 'Agosto 2022',
      description: 'Webinar con Examen de aprobación practica (beca generada)',
      image: p4h, // Importación de la imagen
    },
    
    {
      id: 4,
      title: 'Aprobación CTT 2024',
      institution: 'CTT',
      date: '2024',
      description: 'Congreso Internacional',
      image: congreso2024, // Importación de la imagen
    },
    {
      id: 5,
      title: 'Seguridad de la Informaición - ISO 27001',
      institution: 'Seguridad Cero',
      date: '05 de septiembre de 2024',
      description: 'Capacitación y Curso',
      image: iso27001, // Importación de la imagen
    },
    {
      id: 6,
      title: 'Introducción a Ciberseguridad',
      institution: 'Cisco Networking Academy',
      date: '15 de noviembre de 2024',
      description: 'Curso',
      image: cisco, // Importación de la imagen
    },
    {
      id: 7,
      title: 'Programación con Java',
      institution: 'GEM',
      date: '02 e marzo de 2023',
      description: 'Taller y Participación',
      image: java, // Importación de la imagen
    }
  ];

  return (
    <section id="certificates">
      <h5>Mis Certificados</h5>
      <h2>Certificaciones</h2>

      <div className="container certificates__container">
        {certificados.map((cert) => (
          <article className="certificate__item" key={cert.id}>
            <div className="certificate__item-preview">
              {/* Muestra la imagen como vista previa */}
              {cert.image && <img src={cert.image} alt={`Vista previa de ${cert.title}`} className="image-preview" />}
            </div>
            <div className="certificate__item-content">
              <h3>{cert.title}</h3>
              <p><strong>Institución:</strong> {cert.institution}</p>
              <p><strong>Fecha:</strong> {cert.date}</p>
              <p>{cert.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certificados;
