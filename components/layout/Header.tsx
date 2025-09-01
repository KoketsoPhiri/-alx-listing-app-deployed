// components/layout/Header.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FILTER_LABELS } from '../../constants'; // Import filter labels

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-12 fixed w-full top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center mb-4 md:mb-0">
          <Image src="/logo.svg" alt="ALX Listing App Logo" width={120} height={32} />
        </Link>

        {/* Search Bar */}
        <div className="relative w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search by location or property type..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>

        {/* Auth Links (Sign In / Sign Up) */}
        <div className="flex items-center space-x-4">
          <Link href="/signin" className="text-gray-700 hover:text-blue-600 font-medium">
            Sign In
          </Link>
          <Link
            href="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Categories/Types of Accommodation (Pills) */}
      <div className="container mx-auto mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex space-x-4 py-2">
          {FILTER_LABELS.map((label) => (
            <span
              key={label}
              className="inline-block bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition duration-300"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;