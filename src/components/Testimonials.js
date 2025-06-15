import React, { useState } from 'react';

const allTestimonials = [
  {
    name: 'Dr. Aman',
    role: 'Dentist & Founder',
    image: '/avatar.png',
    quote: 'Our clients are our priority. We offer quality dental services of specialists with 15 years of dental experience and over 100,000 dental services completed.'
  },
  {
    name: 'Trailers',
    role: 'Patient',
    image: '/avatar.png',
    quote: 'I have been sending my patients to Dr. Aman Ahlawat in Rohtak for their dental needs, and they have all had great experiences! He is a highly skilled and knowledgeable dentist.'
  },
  {
    name: 'Sharma Kiryana',
    role: 'Patient',
    image: '/avatar.png',
    quote: 'I recently had a dental emergency, and Dr. Aman Ahlawat was able to see me right away. His painless procedure and quick thinking saved my tooth, and I\'m forever grateful.'
  },
  {
    name: 'Asha Devi',
    role: 'Patient',
    image: '/avatar.png',
    quote: 'Dr. Aman Ahlawat is the best dentist in Rohtak, hands down. His painless procedures are a game-changer, and his dental implant service is second to none. He\'s also fantastic at teeth whitening.'
  },
  {
    name: 'Sandeep Kumar',
    role: 'Patient',
    image: '/avatar.png',
    quote: 'If you\'re looking for a dentist in Rohtak, look no further than Dr. Aman Ahlawat. His painless procedures and excellent dental implant service make him stand out from the crowd. He\'s also fantastic at teeth whitening!'
  },
  {
    name: 'Sandeep Hooda',
    role: 'Patient',
    image: '/avatar.png',
    quote: 'Dr. Aman Ahlawat is a top-rated dentist in Rohtak, and for good reason. His painless procedures and excellent dental implant service make him stand out from the crowd. He\'s also fantastic at teeth whitening.'
  },
  {
    name: 'Sonu Gahlawat',
    role: 'Patient',
    image: '/avatar.png',
    quote: 'If you\'re looking for a skilled and experienced dentist in Rohtak, Dr. Aman Ahlawat is your guy! His painless procedures and gentle demeanor make going to the dentist a breeze. He\'s also fantastic at teeth whitening.'
  },
  {
    name: 'Rinku Siwach',
    role: 'Patient',
    image: '/avatar.png',
    quote: 'I recently had a teeth whitening procedure done by Dr. Aman Ahlawat, and my smile has never looked better! He\'s an excellent dentist in Rohtak, and I highly recommend him for all your dental needs.'
  },
  {
    name: 'Naveen Hooda',
    role: 'Patient',
    image: '/avatar.png',
    quote: 'Dr. Ahlawat is one of the most charming and professional Dentist in entire North India. I got my dentures and root canals done from him and never had a complaint. He is super good at what he does and surprisingly easy on pocket too. A must visit if you got any sort of dental problems.'
  },
  {
    name: 'Gaurav Malik',
    role: 'Patient',
    image: '/avatar.png',
    quote: 'I recently visited Dr. Aman Ahlawat for a dental implant procedure, and I have to say, it was painless! He\'s an excellent dentist in Rohtak, and I highly recommend him for all your dental needs.'
  },
  {
    name: 'Anju Narwal',
    role: 'Patient',
    image: '/avatar.png',
    quote: 'I\'m posting this review after a month of extraction of my \'wisdom tooth\' without any stitches and long list of medicines. No pain No side-effects. No doubt he is the best Dentist.'
  },
  {
    name: 'Sonali Saharan',
    role: 'Patient',
    image: '/avatar.png',
    quote: 'Dr. Aman\'s nature is very good, soft spoken, Highly skilled and Experienced doctor in Rohtak. Pain-free treatment with fast service. His treatment cost justify his service which he provides. I will definitely recommend to anyone who is looking for a good dentist with good service.'
  }
];

const MIN_REVIEWS = 3;

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? allTestimonials : allTestimonials.slice(0, MIN_REVIEWS);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Clients Review
          </h2>
          <p className="text-xl text-gray-600">
            Real Reviews From Our Real Customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className={`px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ${showAll ? 'bg-gray-300 text-gray-700 hover:bg-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? 'Show Less Reviews' : 'View More Reviews'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 