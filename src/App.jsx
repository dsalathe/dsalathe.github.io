import { useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Facts from './components/sections/Facts';
import Skills from './components/sections/Skills';
import Resume from './components/sections/Resume';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

// Import CSS (move your current CSS here)
import './assets/css/style.css';

function App() {
  useEffect(() => {
    // Initialize any plugins here (AOS, typed.js, etc.)
  }, []);

  return (
    <>
      <Header />
      
      <main id="main">
        <Hero />
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;