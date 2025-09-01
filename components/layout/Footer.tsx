// components/layout/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">ALX Listing App</h3>
          <p className="text-sm text-gray-400">
            Find your perfect stay, anywhere in the world.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400">
              {/* Replace with actual SVG icons for social media */}
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ALX Listing App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;