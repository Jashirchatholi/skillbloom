import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const CategorySection = ({ title, description, courses }: any) => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const urlSlug = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <section className="py-16 border-b border-gray-100 last:border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-[#2d2d5f] mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>
          <button 
            onClick={() => navigate(`/category/${urlSlug}`)}
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
          >
            View all {title} courses
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.slice(0, showMore ? 8 : 4).map((course: any) => (
            <div 
              key={course.id}
              onClick={() => navigate(`/category/${urlSlug}/course/${course.id}`)}
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
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          {courses.length > 4 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium border border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center mx-auto"
            >
              <span>{showMore ? 'Show less courses' : 'Show 4 more courses'}</span>
              <svg 
                className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                  showMore ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

const CourseCategories = () => {
  const categories = [
    {
      title: "Computer Science",
      description: "Master the fundamentals of computer science and programming",
      courses: [
        {
          id: 1,
          title: "Introduction to Computer Science",
          provider: "Harvard University",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "Bestseller",
          type: "Professional Certificate"
        },
        {
          id: 2,
          title: "Data Structures and Algorithms",
          provider: "Stanford",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "Popular",
          type: "Specialization"
        },
        {
          id: 3,
          title: "Operating Systems",
          provider: "MIT",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "New",
          type: "Course"
        },
        {
          id: 4,
          title: "Computer Architecture",
          provider: "Princeton",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          type: "Course"
        },
        {
          id: 5,
          title: "Database Management",
          provider: "IBM",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "Trending",
          type: "Professional Certificate"
        },
        {
          id: 6,
          title: "Computer Networks",
          provider: "Cisco",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          type: "Specialization"
        },
        {
          id: 7,
          title: "Artificial Intelligence",
          provider: "DeepLearning.AI",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "Hot",
          type: "Specialization"
        },
        {
          id: 8,
          title: "Machine Learning",
          provider: "Stanford",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "Popular",
          type: "Course"
        }
      ]
    },
    {
      title: "Programming Languages",
      description: "Learn popular programming languages from scratch",
      courses: [
        {
          id: 1,
          title: "Python for Everybody",
          provider: "University of Michigan",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "Bestseller",
          type: "Specialization"
        },
        {
          id: 2,
          title: "Java Programming",
          provider: "Duke University",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "Popular",
          type: "Course"
        },
        {
          id: 3,
          title: "JavaScript Fundamentals",
          provider: "Meta",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "New",
          type: "Professional Certificate"
        },
        {
          id: 4,
          title: "C++ Programming",
          provider: "UC Santa Cruz",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          type: "Course"
        },
        {
          id: 5,
          title: "Ruby on Rails",
          provider: "Johns Hopkins",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "Trending",
          type: "Specialization"
        },
        {
          id: 6,
          title: "Swift Programming",
          provider: "Apple",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          type: "Course"
        },
        {
          id: 7,
          title: "Go Programming",
          provider: "Google",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "Hot",
          type: "Professional Certificate"
        },
        {
          id: 8,
          title: "Rust Programming",
          provider: "Mozilla",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "New",
          type: "Course"
        }
      ]
    },
    {
      title: "Software Development",
      description: "Build real-world applications with industry best practices",
      courses: [
        {
          id: 1,
          title: "Full Stack Development",
          provider: "Meta",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "New",
          type: "Professional Certificate"
        },
        {
          id: 2,
          title: "DevOps Engineering",
          provider: "AWS",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "Trending",
          type: "Specialization"
        },
        {
          id: 3,
          title: "Cloud Computing",
          provider: "Google Cloud",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "Popular",
          type: "Professional Certificate"
        },
        {
          id: 4,
          title: "Microservices Architecture",
          provider: "IBM",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          type: "Course"
        },
        {
          id: 5,
          title: "Software Testing",
          provider: "Microsoft",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "Hot",
          type: "Specialization"
        },
        {
          id: 6,
          title: "Agile Development",
          provider: "Atlassian",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          type: "Course"
        },
        {
          id: 7,
          title: "System Design",
          provider: "Meta",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "New",
          type: "Professional Certificate"
        },
        {
          id: 8,
          title: "API Development",
          provider: "IBM",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          type: "Course"
        }
      ]
    },
    {
      title: "Web Development",
      description: "Create modern websites and web applications",
      courses: [
        {
          id: 1,
          title: "React Development",
          provider: "Meta",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "Popular",
          type: "Professional Certificate"
        },
        {
          id: 2,
          title: "Angular Framework",
          provider: "Google",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "Hot",
          type: "Specialization"
        },
        // ... Add 6 more courses
      ]
    },
    {
      title: "Data Science & Analytics",
      description: "Transform data into actionable insights",
      courses: [
        {
          id: 1,
          title: "Data Science",
          provider: "IBM",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "Bestseller",
          type: "Professional Certificate"
        },
        {
          id: 2,
          title: "Business Analytics",
          provider: "Wharton",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "Popular",
          type: "Specialization"
        },
        // ... Add 6 more courses
      ]
    },
    {
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications",
      courses: [
        {
          id: 1,
          title: "iOS App Development",
          provider: "Apple",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "New",
          type: "Professional Certificate"
        },
        {
          id: 2,
          title: "Android Development",
          provider: "Google",
          image: "/adobestock-250967980.jpg",
          logo: "/rb-logo-icon.svg",
          badge: "Trending",
          type: "Specialization"
        },
        // ... Add 6 more courses
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-[#2d2d5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Learn without <span className="text-[#ff6b6b]">limits</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Start, switch, or advance your career with more than 10,000 courses,
              Professional Certificates, and degrees from world-class universities
              and companies.
            </p>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((category, index) => (
        <CategorySection key={index} {...category} />
      ))}

      <Footer />
    </div>
  );
};

export default CourseCategories; 