import React from 'react';
import EmailSignup from './email-signup';

export default function Navbar() {
  return (
    <nav className="container mx-auto px-4 lg:px-12 py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img src="/logo.svg" alt="PrinciplesAI Logo" className="h-8 w-auto" />
          <span className="text-white font-bold text-xl">PrinciplesAI</span>
        </a>
        
        {/* Navigation Links & Email Signup */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </a>
          <a href="/methode" className="text-gray-300 hover:text-white transition-colors">
            Over de methode
          </a>
          <EmailSignup />
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

