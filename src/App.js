import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ServiceDetails from './components/ServiceDetails';
import DentistDetails from './components/DentistDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Appointment from './components/Appointment';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServiceDetails />} />
        <Route path="/dentist" element={<DentistDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
