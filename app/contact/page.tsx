'use client';

import React from 'react';
import { Linkedin, Mail, MapPin, FileText } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Titel */}
        <h1 className="text-5xl lg:text-6xl font-bold text-yellow-500 mb-4 text-center">
          Contact
        </h1>
        
        {/* Ondertitel */}
        <p className="text-lg lg:text-xl text-white italic text-center mb-16">
          Heb je vragen over PrinciplesAI? Neem gerust contact met ons op.
        </p>

        {/* Centrale container met brein en contact boxes */}
        <div className="relative flex items-center justify-center min-h-[700px] py-20">
          {/* Centraal Brein Logo - achtergrond */}
          <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img 
              src="/logo.svg" 
              alt="PrinciplesAI Logo" 
              className="w-80 h-80 lg:w-96 lg:h-96 brightness-0 invert opacity-90"
            />
          </div>

          {/* Vier contact boxes rondom het brein - absoluut gepositioneerd */}
          <div className="relative z-10 w-full max-w-6xl h-[600px]">
            {/* Top-left: Email */}
            <div className="absolute top-8 left-4 lg:top-12 lg:left-12 bg-slate-800 border-2 border-yellow-500 rounded-xl p-6 lg:p-8 backdrop-blur-sm w-[260px] lg:w-[300px]">
              <Mail className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-500 mb-4" />
              <p className="text-white font-semibold mb-2 text-lg">Email</p>
              <a 
                href="mailto:info@principlesai.nl" 
                className="text-gray-300 hover:text-white transition-colors break-all"
              >
                info@principlesai.nl
              </a>
            </div>

            {/* Top-right: LinkedIn */}
            <div className="absolute top-8 right-4 lg:top-12 lg:right-12 bg-slate-800 border-2 border-yellow-500 rounded-xl p-6 lg:p-8 backdrop-blur-sm w-[260px] lg:w-[300px]">
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

            {/* Bottom-left: Locatie */}
            <div className="absolute bottom-8 left-4 lg:bottom-12 lg:left-12 bg-slate-800 border-2 border-yellow-500 rounded-xl p-6 lg:p-8 backdrop-blur-sm w-[260px] lg:w-[300px]">
              <MapPin className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-500 mb-4" />
              <p className="text-white font-semibold mb-2 text-lg">Locatie</p>
              <p className="text-gray-300">Sneek, Nederland</p>
            </div>

            {/* Bottom-right: KVK */}
            <div className="absolute bottom-8 right-4 lg:bottom-12 lg:right-12 bg-slate-800 border-2 border-yellow-500 rounded-xl p-6 lg:p-8 backdrop-blur-sm w-[260px] lg:w-[300px]">
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

