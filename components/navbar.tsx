'use client';

import React, { useState } from 'react';
import EmailModal from './email-modal';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="container mx-auto px-4 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src="/logo.svg" alt="PrinciplesAI Logo" className="h-8 w-auto" />
            <span className="text-white font-bold text-xl">PrinciplesAI</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="/methode" className="text-gray-300 hover:text-white transition-colors">
              Over de methode
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
            >
              Start de Shift
            </button>
          </div>
        
          <button 
            onClick={() => setIsModalOpen(true)}
            className="md:hidden bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
          >
            Start de Shift
          </button>
        </div>
      </nav>
    
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

