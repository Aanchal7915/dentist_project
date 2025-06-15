import React, { useState } from 'react';

const faqs = [
  {
    question: 'How can a simple consultation help us?',
    answer: 'Consulting a dentist will help you learn the root cause of your problems. That’s 50% of the problem solved. Then you can consult about your treatment options.'
  },
  {
    question: 'What does consultation cost?',
    answer: '200/- only.'
  },
  {
    question: 'How do you accept payments?',
    answer: 'Paytm, UPI, GPay, online bank transfers, and cash are all accepted.'
  },
  {
    question: 'Is it painful to get RCT done?',
    answer: 'NOT AT ALL!!'
  },
  {
    question: 'Which toothbrush should we use?',
    answer: 'Smart toothbrushes are the future.'
  },
  {
    question: 'How can we take care of our oral health at home?',
    answer: 'a) Drink lots of water daily\nb) Eat lots of roughage in your diet\nc) Brush daily\nd) Floss daily\ne) Rinse your mouth after meals with fingers on your gums.'
  },
  {
    question: 'What does tooth filling cost?',
    answer: '500 to 4000/-'
  },
  {
    question: 'What does an RCT procedure cost?',
    answer: 'Every treatment is largely dependent on severity. Although RCT averagely costs around 3500/-.'
  },
  {
    question: 'Is your dental clinic wheelchair compatible?',
    answer: 'Yes.'
  },
  {
    question: 'Can you extract or treat tooth when it’s paining or swollen?',
    answer: 'Yes, of course we can.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">We answer your most asked questions</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <button
                className="w-full flex justify-between items-center px-6 py-4 bg-blue-50 hover:bg-blue-100 focus:outline-none transition"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span className="text-lg font-medium text-blue-700 text-left">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                className={`px-6 bg-white text-gray-700 text-base transition-all duration-300 ${openIndex === idx ? 'max-h-40 py-4 bg-blue-50' : 'max-h-0 py-0 overflow-hidden'}`}
                style={{ whiteSpace: 'pre-line' }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;