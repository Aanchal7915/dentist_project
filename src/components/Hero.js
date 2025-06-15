import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate=useNavigate();  

  return (
    <div id="home" className="relative bg-gradient-to-r from-blue-500 to-white-700 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Smile, Our Priority
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Experience world-class dental care with our expert team of professionals
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <button
              onClick={() => navigate("/appointment")}
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition duration-300">
                Book Appointment
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                Learn More
              </button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <h3 className="text-2xl font-bold">15+</h3>
                <p className="text-sm">Years Experience</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <h3 className="text-2xl font-bold">100K+</h3>
                <p className="text-sm">Happy Patients</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <h3 className="text-2xl font-bold">24/7</h3>
                <p className="text-sm">Emergency Care</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/hero-dental.png"
              alt="Dental Care"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 