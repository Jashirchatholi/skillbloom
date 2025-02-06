import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { categories } from '../data/categories';
import { Category, Course } from '../types/course';

const CategoryDetailPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();
  
  const category = categories.find(cat => cat.slug === categorySlug);

  if (!category) {
    navigate('/courses');
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      <Header />
      
      {/* Category Hero Section */}
      <section className="pt-32 pb-20 relative bg-[#2d2d5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {category.title}
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.courses.map((course: Course) => (
              <div 
                key={course.id}
                onClick={() => navigate(`/category/${categorySlug}/course/${course.id}`)}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  {course.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-white px-2 py-1 rounded text-xs font-medium">
                        {course.badge}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-4">
                    <img 
                      src={course.logo}
                      alt={course.provider}
                      className="h-6 w-6 mr-2"
                    />
                    <span className="text-sm font-medium">{course.provider}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2d2d5f] mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-500">{course.type}</p>
                  
                  {/* Study Materials Section - Will be populated from admin panel */}
                  {course.studyMaterials && course.studyMaterials.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Study Materials</h4>
                      <ul className="space-y-2">
                        {course.studyMaterials.map((material, index) => (
                          <li key={index}>
                            <a 
                              href={material.pdfUrl}
                              className="text-blue-600 text-sm hover:text-blue-700 flex items-center"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {material.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryDetailPage; 