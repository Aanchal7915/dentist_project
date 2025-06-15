import React from 'react';

const highlights = [
  {
    icon: '🦷',
    title: 'Teeth Fillings',
    desc: 'High-quality, long-lasting dental fillings for all ages.'
  },
  {
    icon: '👑',
    title: 'Dental Caps',
    desc: 'Durable and aesthetic dental caps for tooth protection.'
  },
  {
    icon: '🩻',
    title: 'Dental X-Ray',
    desc: 'Digital dental X-rays for precise diagnosis.'
  },
  {
    icon: '💉',
    title: 'Painless Treatment',
    desc: 'Experience pain-free dental procedures with advanced techniques.'
  },
  {
    icon: '🦷',
    title: 'Surgical Tooth Removal',
    desc: 'Safe and sterile surgical tooth extractions.'
  },
  {
    icon: '🦷',
    title: 'RCT (Root Canal)',
    desc: 'Root canal therapy to save and restore your teeth.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">About Our Clinic</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            <span className="font-semibold text-blue-600">Our Clients are Our Priority</span>, we offer quality dental services by specialists. We are committed to providing exceptional care through precision, artistry, and experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8">
            <span className="text-5xl mb-2">🎓</span>
            <h3 className="text-2xl font-bold text-blue-700 mb-1">15 Years</h3>
            <p className="text-gray-600">Dental Experience</p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8">
            <span className="text-5xl mb-2">🏆</span>
            <h3 className="text-2xl font-bold text-blue-700 mb-1">100,000+</h3>
            <p className="text-gray-600">Dental Services</p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8">
            <span className="text-5xl mb-2">🧑‍⚕️</span>
            <h3 className="text-2xl font-bold text-blue-700 mb-1">Specialists</h3>
            <p className="text-gray-600">Quality Dental Care</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center bg-blue-50 rounded-xl shadow p-6 hover:bg-blue-100 transition">
              <span className="text-4xl mb-2">{item.icon}</span>
              <h4 className="text-lg font-semibold text-blue-700 mb-1">{item.title}</h4>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 