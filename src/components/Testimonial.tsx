import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-20 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#2d2d5f]">
          Learn from our customer's <span className="text-[#ff6b6b]">experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="flex -space-x-4">
              <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-black flex items-center justify-center shadow-lg">
                <img 
                  src="public/tibco-logo-white.png.webp" 
                  alt="TIBCO" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg">
                <img 
                  src="public/KimLoan-Tran.png" 
                  alt="Dr. KimLoan Tran" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <blockquote className="text-center">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 font-medium">
              "Employee development and investing in our workforce are top priorities for TIBCO. 
              We needed a learning solution that would allow our <span className="text-[#ff6b6b]">4,000+ employees</span> to access real-world 
              skills and we chose <span className="text-[#ff6b6b]">SkillBloom</span> over other learning solutions because of its expert global 
              instructors, relevant course selection, and course content quality."
            </p>
            <footer className="space-y-2">
              <div className="font-bold text-2xl text-[#2d2d5f]">Dr. KimLoan Tran</div>
              <div className="text-gray-500 text-lg">Chief Learning Officer at TIBCO</div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonial; 