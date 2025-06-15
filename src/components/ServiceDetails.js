import React from 'react';
import { FaTooth, FaXRay, FaCrown, FaTeeth, FaTooth as FaToothbrush, FaUserMd, FaSmile, FaTeethOpen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ServiceDetails = () => {
  const navigate=useNavigate()
  const services = [
    {
      id: 1,
      title: "Consultation",
      icon: <FaUserMd className="text-4xl text-blue-600" />,
      description: "Consulting you guys here is a process, in which we listen carefully and calmly and try our best to understand the situations and issues you have been facing, with your chief complaints. Then we look into your mouth from outside inside clinically then we inspect, probe, use X-rays etc. Which helps us making a proper and careful treatment plan which constitutes the pricing and how many visits you going to need and unavoidable possible issues (if there are any). Finally we discuss about your needs according to which the final treatment will be executed."
    },
    {
      id: 2,
      title: "Radiography",
      icon: <FaXRay className="text-4xl text-blue-600" />,
      description: "Knowing actual problem is one of the most important clinial step. For this we rely on listening to our patients carefully, analysing clinically with the help of long clinical experience, our dear technology advanced tools and an in house X-rays machine. sometimes we need help from our city's best nmnarula's diagnostic centres for the same"
    },
    {
      id: 3,
      title: "RCT Fillings Caps",
      icon: <FaCrown className="text-4xl text-blue-600" />,
      description: "We urge everyone to get themselves checked once every year it doesn't cost you anything and tooth decays can be prevented in time. We try our best to not do RCT in first place but if that's necessary to do the RCTs. we give you a pain free RCT experience. we try to give our patients best experience regarding lesser duration for RCT. Most of times we are doing RCT in a single sitting. About caps or crowns, these are the best way a dentist can restore any decayed, RC treated or fractured tooth. we use best labs for our crown fabrication. best dental materials for impressions and best crown materials for example zirconia emax etc. which gives our patient everlasting, no problem and best looking crowns ever. mostly we give our patients of 5 or 10 or 15 years warranty on caps"
    },
    {
      id: 4,
      title: "Dentures",
      icon: <FaTeeth className="text-4xl text-blue-600" />,
      description: "We have specialist for this particular work specialist labs best materials for you we don't spare any expense and take plenty time so that our loving elders can have a good looking functional and best fitting. Our patients can have a BPS danger also that is a biopalatel seal denture. The BPS danger is the most technologically advanced stranger till date we provide a special is dentist for the BPS dangers which ensures you get the best dental experience in this work."
    },
    {
      id: 5,
      title: "Implants",
      icon: <FaTooth className="text-4xl text-blue-600" />,
      description: "Nowadays, implants are the ultimate way to replace natural teeth. you can have a beautiful and functional crown, that no one can recognise, even if you ever lost or extracted the tooth. implants won't leave your side for the lifetime and be reliable throughout."
    },
    {
      id: 6,
      title: "Surgery",
      icon: <FaUserMd className="text-4xl text-blue-600" />,
      description: "Medicines are on going treatment,surgeries are the cure. Full surgery to be successful cleanliness proper sterilization and isolation are the primary goals which we achieve hair every. Then you need experience surgical hands to cure you from your problems. Here at a lover dental you never feel left out even after the process is done. here you will get proper good post-operative care as well. so complete satisfaction"
    },
    {
      id: 7,
      title: "Aesthetics",
      icon: <FaSmile className="text-4xl text-blue-600" />,
      description: "(Looking good factor) Dentistry have come a long way in making our bad looking teeth looks just like new,ideal, aesthetically pleasing and functional as you see them on TV celebrities. Most of the celebrities undergo aesthetic dental transformations for the perfect photogenic smile. now you can also have that kind of a smile for yourself. It will be a pain-free procedure. Aesthetic transformations are generally expensive but with us you can be assured of reasonable prices and very reliable results."
    },
    {
      id: 8,
      title: "Orthodontics",
      icon: <FaTeethOpen className="text-4xl text-blue-600" />,
      description: "Every person needs to have straight orientation or synchronised alignment between their teeth. it is such a big requirement because badly aligned teeth looks bad, hard to clean, rot easy, fracture easy, you can't properly make sounds and the person feels under confidence socially. To straighten them out we advise you to undergo orthodontic rehabilitation which can be achieved by two ways basically first is fixed orthodontics in which we put braces and wire for 12 to 18 months. for that ideal ages 14 to 21 years but it can be done above that age group also. you need to visit clinic every month once for 10 minutes. second is removable way which is three times cost then fixed ones but time invested will be lesser, you don't need to wear braces or wires and you don't have to visit clinic every month we will ship treatment to your doorstep every 2 to 3 months these are the latest and most advanced clear aligners for you. These are most suitable for our foreign or abroad living patients. good results are guaranteed."
    },
    {
      id: 9,
      title: "Periodontology",
      icon: <FaToothbrush className="text-4xl text-blue-600" />,
      description: "Now think about a problem which doesn't just make your one or two or three teeth bad but affects on a full oral health yes it is piarrhoea. it creates a bad smell and bleeding gums. actually it is worse, it makes your teeth loose which means you have to get your healthy teeth extracted. solution to this is pero-rehabilitation, during which we will clean and heal your gums. it is not very expensive or painful process neither it is dependent on severity of your condition"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mt-10">
            Our Services
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Comprehensive dental care for your entire family
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-gray-600 mb-8">
            Book your appointment today and experience the best dental care
          </p>
          <button
          onClick={()=>navigate("/appointment")}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails; 