import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/categories';
import { Monitor, Code, Database, Globe, LineChart, Smartphone } from 'lucide-react';

const CourseCategories = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#eef3ff] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2d2d5f]">
            Explore Diverse Learning Paths Within
            <br /> Our Course <span className="text-[#ff6b6b]">Categories</span>
          </h2>
          <p className="mt-6 text-gray-600">
            Where students are encouraged to reach their full potential through rigorous coursework,
            innovative research, and a supportive learning environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.slug}
              onClick={() => navigate(`/category/${category.slug}`)}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6 flex items-center cursor-pointer"
            >
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                {category.title === "Computer Science" && <Monitor className="w-6 h-6" />}
                {category.title === "Programming Languages" && <Code className="w-6 h-6" />}
                {category.title === "Software Development" && <Database className="w-6 h-6" />}
                {category.title === "Web Development" && <Globe className="w-6 h-6" />}
                {category.title === "Data Science & Analytics" && <LineChart className="w-6 h-6" />}
                {category.title === "Mobile App Development" && <Smartphone className="w-6 h-6" />}
              </div>
              <h3 className="text-lg font-bold text-[#2d2d5f] mb-2 ml-4">{category.title}</h3>
            </div>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/courses')}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            View all courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;