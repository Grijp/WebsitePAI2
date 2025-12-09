'use client';

import React from 'react';
import { Linkedin, Mail, MapPin, FileText } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl lg:text-6xl font-bold text-yellow-500 mb-4 text-center">
          Contact
        </h1>
        
        <p className="text-lg lg:text-xl text-white italic text-center mb-16">
          Heb je vragen over PrinciplesAI? Neem gerust contact met ons op.
        </p>

        <div className="relative flex items-center justify-center min-h-[600px] py-12">
          <div className="absolute z-10 flex items-center justify-center">
            <img 
              src="/logo.svg" 
              alt="PrinciplesAI Logo" 
              className="w-64 h-64 lg:w-96 lg:h-96 brightness-0 invert opacity-90"
            />
          </div>

          <div className="relative z-20 grid grid-cols-2 gap-6 lg:gap-12 max-w-4xl">
            <div className="bg-slate-800 border-2 border-yellow-500 rounded-xl p-6 lg:p-8 backdrop-blur-sm transform -translate-x-1/4 -translate-y-1/4">
              <Mail className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-500 mb-4" />
              <p className="text-white font-semibold mb-2 text-lg">Email</p>
              <a 
                href="mailto:info@principlesai.nl" 
                className="text-gray-300 hover:text-white transition-colors break-all"
              >
                info@principlesai.nl
              </a>
            </div>

            <div className="bg-slate-800 border-2 border-yellow-500 rounded-xl p-6 lg:p-8 backdrop-blur-sm transform translate-x-1/4 -translate-y-1/4">
              <Linkedin className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-500 mb-4" />
              <p className="text-white font-semibold mb-2 text-lg">LinkedIn</p>
              <a 
                href="https://www.linkedin.com/company/principlesai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                PrinciplesAI
              </a>
            </div>

            <div className="bg-slate-800 border-2 border-yellow-500 rounded-xl p-6 lg:p-8 backdrop-blur-sm transform -translate-x-1/4 translate-y-1/4">
              <MapPin className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-500 mb-4" />
              <p className="text-white font-semibold mb-2 text-lg">Locatie</p>
              <p className="text-gray-300">Sneek, Nederland</p>
            </div>

            <div className="bg-slate-800 border-2 border-yellow-500 rounded-xl p-6 lg:p-8 backdrop-blur-sm transform translate-x-1/4 translate-y-1/4">
              <FileText className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-500 mb-4" />
              <p className="text-white font-semibold mb-2 text-lg">KVK</p>
              <p className="text-gray-300">91805651</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

