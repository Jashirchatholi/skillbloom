import React from 'react';
import { BookOpen } from 'lucide-react';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white">Careers - we're hiring!</a></li>
              <li><a href="/news" className="text-gray-400 hover:text-white">News</a></li>
              <li><a href="/investors" className="text-gray-400 hover:text-white">Investor Relations</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="/partners" className="text-gray-400 hover:text-white">Partners & Integrations</a></li>
              <li><a href="/partner-with-us" className="text-gray-400 hover:text-white">Partner with SkillBloom</a></li>
              <li><a href="/tour" className="text-gray-400 hover:text-white">Take a product tour</a></li>
              <li><a href="/events" className="text-gray-400 hover:text-white">Events</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="/help" className="text-gray-400 hover:text-white">Help</a></li>
              <li><a href="/sitemap" className="text-gray-400 hover:text-white">Sitemap</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/terms" className="text-gray-400 hover:text-white">Terms & conditions</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy policy</a></li>
              <li><a href="/cookie" className="text-gray-400 hover:text-white">Cookie settings</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">SkillBloom</span>
              <span className="text-sm text-gray-400 ml-4">© 2024 SkillBloom, Inc.</span>
            </div>

            {/* Social Links and Language */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">Follow us</span>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="h-5 w-5" /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-5 w-5" /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-5 w-5" /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><Instagram className="h-5 w-5" /></a>
                </div>
              </div>
              <button className="flex items-center space-x-2 border border-gray-700 rounded-md px-3 py-1.5 text-sm text-gray-400 hover:border-gray-600">
                <span>🌐</span>
                <span>English</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 