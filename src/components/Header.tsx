import React, { useState, useEffect } from 'react';
import { BookOpen, ShoppingCart, Menu } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import SignInPopup from './SignInPopup';
import SignUpPopup from './SignUpPopup';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  // Use useLocation hook to get current path
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      
      // Only hide/show when scrolling more than 10px
      if (Math.abs(currentScrollPos - prevScrollPos) > 10) {
        setIsVisible(!isScrollingDown);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Get current path to determine active link
  console.log('Current path:', currentPath);

  const handleSwitchToSignUp = () => {
    setIsSignInOpen(false);
    setIsSignUpOpen(true);
  };

  const handleSwitchToSignIn = () => {
    setIsSignUpOpen(false);
    setIsSignInOpen(true);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 bg-white shadow-sm z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SkillBloom</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 bg-[#f0f0f0] px-6 py-2 rounded-full">
              <Link 
                to="/" 
                className={`px-3 py-2 text-sm transition-colors ${
                  currentPath === '/' 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-700 hover:text-blue-600 font-medium'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 text-sm transition-colors ${
                  currentPath === '/about' 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-700 hover:text-blue-600 font-medium'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/courses" 
                className={`px-3 py-2 text-sm transition-colors ${
                  currentPath === '/courses' 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-700 hover:text-blue-600 font-medium'
                }`}
              >
                Courses
              </Link>
              <Link 
                to="/members" 
                className={`px-3 py-2 text-sm transition-colors ${
                  currentPath === '/members' 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-700 hover:text-blue-600 font-medium'
                }`}
              >
                Members
              </Link>
              <Link 
                to="/faq" 
                className={`px-3 py-2 text-sm transition-colors ${
                  currentPath === '/faq' 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-700 hover:text-blue-600 font-medium'
                }`}
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 text-sm transition-colors ${
                  currentPath === '/contact' 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-700 hover:text-blue-600 font-medium'
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-blue-600">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">
                  0
                </span>
              </button>
              <button 
                onClick={() => setIsSignInOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign In
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <SignInPopup 
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onSwitchToSignUp={handleSwitchToSignUp}
      />
      
      <SignUpPopup 
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        onSwitchToSignIn={handleSwitchToSignIn}
      />
    </>
  );
};

export default Header;