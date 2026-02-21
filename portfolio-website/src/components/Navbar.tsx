"use client";

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="shrink-0 flex items-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ scale: 1.08 }}
              >
                <Link href="/" className="text-2xl font-bold text-indigo-600">
                  Nicolas Tattoo
                </Link>
              </motion.div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#home" className="nav-link border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </a>
                <a href="#about" className="nav-link border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                About
              </a>
                <a href="#portfolio" className="nav-link border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Portfolio
              </a>
                <a href="#booking" className="nav-link border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Booking
              </a>
            </div>
          </div>
          {/* Removed Sign In and Register buttons as requested */}
          
          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Home
            </Link>
            <Link href="/booking" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Booking
            </Link>
          </div>
          <div className="pt-4 pb-4 border-t border-gray-200">
            {user ? (
               <div className="flex items-center px-4">
                  <div className="text-base font-medium text-gray-800">Hello, {user.name}</div>
                  <button onClick={logout} className="ml-auto bg-gray-100 text-gray-700 px-3 py-1 rounded">Logout</button>
               </div>
            ) : (
                <div className="mt-3 space-y-1">
                    <Link href="/auth/signin" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Sign In</Link>
                    <Link href="/auth/register" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Register</Link>
                </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
