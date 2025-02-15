import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Software Engineer", "Data Engineer", "Architect", "IT Consultant"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>David Salathé</h1>
        <p>
          I'm <span ref={typedRef}></span>
        </p>
        <div className="social-links">
          <a href="https://github.com/dsalathe" className="github">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/david-salath%C3%A9/" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;