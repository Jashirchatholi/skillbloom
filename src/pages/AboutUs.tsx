import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-[#2d2d5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-[#ff6b6b]">SkillBloom</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">              
              SkillBloom is dedicated to empowering learners across the globe by providing access to high-quality education and practical, future-ready skills. With a focus on innovation and inclusivity, SkillBloom bridges the gap between theoretical knowledge and real-world application, equipping individuals with the tools they need to thrive in an ever-evolving world. By fostering a culture of continuous learning, SkillBloom inspires growth, unlocks potential, and enables learners to achieve their personal and professional aspirations. Whether you're starting from scratch or advancing your expertise, SkillBloom is your partner in building a brighter, more capable future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2d2d5f] mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At SkillBloom, we believe that quality education should be accessible to everyone. 
                Our mission is to provide world-class learning experiences that empower individuals 
                to achieve their personal and professional goals.
              </p>
              <p className="text-gray-600">
                We collaborate with leading universities and industry experts to deliver 
                cutting-edge courses that prepare our learners for the challenges of tomorrow.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/63c4cc17ab4c86b48dc7b59e_featured.png" 
                alt="Our Mission" 
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#2d2d5f] mb-16">
            Numbers speaking for themselves
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 rounded-2xl bg-[#f8f9ff] hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl font-bold text-[#2d2d5f] mb-3">12K+</div>
              <div className="text-base text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="p-8 rounded-2xl bg-[#f8f9ff] hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl font-bold text-[#2d2d5f] mb-3">₹1100 Cr+</div>
              <div className="text-base text-gray-600 font-medium">Customer's revenue earned</div>
            </div>
            <div className="p-8 rounded-2xl bg-[#f8f9ff] hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl font-bold text-[#2d2d5f] mb-3">51,000+</div>
              <div className="text-base text-gray-600 font-medium">Courses created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-[#eef3ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d2d5f] mb-16">
            Meet the leaders behind SkillBloom's success
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Leader 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="mb-6 relative">
                  <div className="mx-auto p-1 transform transition-transform duration-300 hover:scale-105">
                    <img 
                      src="/A2JSX6VG9FuhRiGiZ3IaPuibl4.png" 
                      alt="Shankar Mahesh"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2d2d5f] mb-2">Name the person</h3>
                <p className="text-[#ff6b6b] font-medium mb-4">Co-Founder & CEO</p>
                <div className="h-px w-16 bg-gray-200 mx-auto mb-4"></div>
                <p className="text-gray-600 text-sm leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="mb-6 relative">
                <div className="mx-auto p-1 transform transition-transform duration-300 hover:scale-105">
                    <img 
                      src="/A2JSX6VG9FuhRiGiZ3IaPuibl4.png" 
                      alt="Shankar Mahesh"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2d2d5f] mb-2">Name the person</h3>
                <p className="text-[#ff6b6b] font-medium mb-4">Co-Founder & CFO</p>
                <div className="h-px w-16 bg-gray-200 mx-auto mb-4"></div>
                <p className="text-gray-600 text-sm leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>

            {/* Leader 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="mb-6 relative">
                <div className="mx-auto p-1 transform transition-transform duration-300 hover:scale-105">
                    <img 
                      src="/A2JSX6VG9FuhRiGiZ3IaPuibl4.png" 
                      alt="Shankar Mahesh"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2d2d5f] mb-2">Name the person</h3>
                <p className="text-[#ff6b6b] font-medium mb-4">Co-Founder & CTO</p>
                <div className="h-px w-16 bg-gray-200 mx-auto mb-4"></div>
                <p className="text-gray-600 text-sm leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>

            {/* Leader 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="mb-6 relative">
                <div className="mx-auto p-1 transform transition-transform duration-300 hover:scale-105">
                    <img 
                      src="/A2JSX6VG9FuhRiGiZ3IaPuibl4.png" 
                      alt="Shankar Mahesh"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2d2d5f] mb-2">Name the person</h3>
                <p className="text-[#ff6b6b] font-medium mb-4">Co-Founder & Chief Evangelist</p>
                <div className="h-px w-16 bg-gray-200 mx-auto mb-4"></div>
                <p className="text-gray-600 text-sm leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add CallToAction before Footer */}
      <CallToAction />

      <Footer />
    </div>
  );
};

export default AboutUs; 