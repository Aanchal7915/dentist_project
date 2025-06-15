import React from 'react';
import { FaGraduationCap, FaUserMd, FaAward, FaTooth, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DentistDetails = () => {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mt-10">
            Meet Our Dentist
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Expert dental care from our experienced professionals
          </p>
        </div>

        {/* Dentist Profile Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/3">
              <div className="h-full bg-gray-200 relative">
                <img
                  src="/dentist.png"
                  alt="Dr. Aman Ahlawat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h2 className="text-2xl font-bold text-white">Dr. Aman Ahlawat</h2>
                  <p className="text-gray-200">Dentist & Founder</p>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="md:w-2/3 p-8">
              <div className="space-y-6">
                {/* Introduction */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">About Me</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hello, I am your friend and dentist Dr. Aman Ahlawat. I've a bachelor's degree in dental surgery with over 15 years of experience. During these long years I've dealt with almost every type of dental problems, now after 15 years of dental practice I am sure I can help my community with any type of tooth related problems. See you guys at Ahlawat Dental.
                  </p>
                </div>

                {/* Qualifications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <FaGraduationCap className="text-blue-600 text-2xl mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Education</h4>
                      <p className="text-gray-600">Bachelor's Degree in Dental Surgery</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaUserMd className="text-blue-600 text-2xl mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Experience</h4>
                      <p className="text-gray-600">15+ Years of Practice</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaAward className="text-blue-600 text-2xl mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Specialization</h4>
                      <p className="text-gray-600">General Dentistry</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaTooth className="text-blue-600 text-2xl mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Expertise</h4>
                      <p className="text-gray-600">Comprehensive Dental Care</p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-3">
                      <FaPhone className="text-blue-600" />
                      <span className="text-gray-600">+91 890 134 1831</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaEnvelope className="text-blue-600" />
                      <span className="text-gray-600">ahlawatdental01@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaMapMarkerAlt className="text-blue-600" />
                      <span className="text-gray-600">1915-P Sector-3 Rohtak-124001</span>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="border-t border-gray-200 pt-6">
                  <button 
                  onClick={()=>navigate("/appointment")}
                  className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Book an Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentistDetails; 