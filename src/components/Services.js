import React, { useState } from 'react';

const allServices = [
  {
    title: 'Consultation',
    description: 'Professional dental consultation to understand your needs and provide the best treatment plan.',
    icon: '👨‍⚕️'
  },
  {
    title: 'Radiography',
    description: 'Advanced dental imaging for accurate diagnosis and treatment planning.',
    icon: '📷'
  },
  {
    title: 'RCT & Fillings',
    description: 'Painless root canal treatment and high-quality dental fillings.',
    icon: '🦷'
  },
  {
    title: 'Dentures',
    description: 'Custom-made dentures using the best materials and specialist labs.',
    icon: '😁'
  },
  {
    title: 'Implants',
    description: 'Modern dental implants for a natural-looking and functional smile.',
    icon: '⭐'
  },
  {
    title: 'Surgery',
    description: 'Clean, isolated, and sterilized dental practice for successful surgeries.',
    icon: '🔬'
  },
  {
    title: 'Aesthetics',
    description: 'Aesthetic dentistry to make your teeth look new, ideal, and pleasing.',
    icon: '🎨'
  },
  {
    title: 'Orthodontics',
    description: 'Straighten and align your teeth for a perfect smile.',
    icon: '🦷'
  },
  {
    title: 'Periodontology',
    description: 'Comprehensive gum care for full oral health.',
    icon: '🌱'
  }
];

const MIN_SERVICES = 3;

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? allServices : allServices.slice(0, MIN_SERVICES);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Best Dental Services
          </h2>
          <p className="text-xl text-gray-600">
            Enjoy Specialized Care Through Precision, Artistry, and Experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className={`px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ${showAll ? 'bg-gray-300 text-gray-700 hover:bg-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? 'Show Less Services' : 'View More Services'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services; 