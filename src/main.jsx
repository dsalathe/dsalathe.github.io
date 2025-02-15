import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import vendor JS files
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'aos/dist/aos.js'
import 'glightbox/dist/js/glightbox.min.js'
import 'isotope-layout/dist/isotope.pkgd.min.js'
import 'swiper/swiper-bundle.min.js'
import 'waypoints/lib/noframework.waypoints.min.js'

// Initialize AOS
import AOS from 'aos';
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)