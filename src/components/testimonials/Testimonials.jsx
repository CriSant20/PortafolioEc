import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/marlon-alexis-copara-allauca-b7338330b/?trk=nav_responsive_tab_profile_pic&originalSubdomain=ec',
      name: 'Marlon Copara',
      role: 'Ingeniero de Software. Apasionado por el desarrollo web y móvil, especializado en backend, con dominio en frontend. | Java | Python | TypeScript | Javascript | PHP | MySQL | Angular | Bootstrap | TailwindCSS.',
      test: 'Gran amigo, siempre dispuesto a echar una mano y trabajar en equipo. Tiene mucha experiencia creando páginas y aplicaciones, especialmente en lo relacionado con el diseño y la interacción con el usuario. Además, le gusta aprender sobre temas como la seguridad digital y cómo organizar proyectos, lo que le da una visión más completa. Siempre está buscando mejorar y aprender, lo que lo hace una persona muy confiable y comprometida con lo que hace.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/yishak-wesego/',
      name: 'Tamia Maliza',
      test: ''
    }
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials