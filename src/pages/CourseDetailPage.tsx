import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { categories } from '../data/categories';
import { Course } from '../types/course';

const CourseDetailPage = () => {
  const { categorySlug, courseId } = useParams<{ categorySlug: string; courseId: string }>();
  const navigate = useNavigate();
  
  // Find the course from categories data
  const category = categories.find(cat => cat.slug === categorySlug);
  const course = category?.courses.find(c => c.id === Number(courseId));

  if (!course) {
    navigate('/courses');
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Card - Video/PDF Preview */}
            <div className="bg-white">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              <div className="flex gap-4">
                {course.videoUrl && (
                  <button 
                    onClick={() => window.open(course.videoUrl, '_blank')}
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    View Video
                  </button>
                )}
                {course.studyMaterials && course.studyMaterials.length > 0 && (
                  <button 
                    onClick={() => window.open(course.studyMaterials![0].pdfUrl, '_blank')}
                    className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    Download Study Materials
                  </button>
                )}
              </div>
            </div>

            {/* Right Card - Course Details */}
            <div className="bg-white">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={course.logo} 
                  alt={course.provider}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {course.title}
                  </h1>
                  <p className="text-gray-600">{course.provider}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {course.badge && (
                  <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {course.badge}
                  </div>
                )}
                
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Course Type</h2>
                  <p className="text-gray-600">{course.type}</p>
                </div>

                {course.studyMaterials && course.studyMaterials.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Study Materials</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {course.studyMaterials.map((material, index) => (
                        <li key={index}>{material.title}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Category</h2>
                  <p className="text-gray-600">{category?.title}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8">
                  <button 
                    onClick={() => course.videoUrl ? window.open(course.videoUrl, '_blank') : alert('Video coming soon!')}
                    className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Watch Video
                  </button>
                  <button 
                    onClick={() => course.studyMaterials && course.studyMaterials.length > 0 ? window.open(course.studyMaterials![0].pdfUrl, '_blank') : alert('Study materials coming soon!')}
                    className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetailPage;
