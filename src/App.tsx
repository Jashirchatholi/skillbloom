import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CourseCategories from './pages/CourseCategories';
import CategoryDetailPage from './pages/CategoryDetailPage';
import CourseDetailPage from './pages/CourseDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<CourseCategories />} />
        <Route path="/category/:categorySlug" element={<CategoryDetailPage />} />
        <Route path="/category/:categorySlug/course/:courseId" element={<CourseDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;