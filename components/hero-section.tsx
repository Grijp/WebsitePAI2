'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-12 lg:mb-16 leading-tight">
          Voor kenniswerkers bij wie aandacht het nieuwe schaarsste 'kapitaal' is
        </h1>
        
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px]">
          <div className="bg-emerald-900/40 border border-emerald-800/50 rounded-2xl lg:rounded-r-none lg:rounded-l-2xl p-8 lg:pl-4 lg:pr-48 relative overflow-visible z-20">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent pointer-events-none"></div>
            
            <div className="relative z-30">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Voelt jouw brein als de bottleneck...
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Je bent de hele dag aan het rennen, maar komt nauwelijks toe aan het werk dat echt telt. AI voelt nu nog als extra ballast—nóg een taak op je bord. Je wilt dat er dingen van je bord verdwijnen.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-950/60 border border-blue-800/50 rounded-2xl lg:rounded-l-none lg:rounded-r-2xl p-8 lg:pl-48 lg:pr-4 relative overflow-visible z-20">
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-600/20 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-blue-600/10 blur-xl pointer-events-none"></div>
            
            <div className="relative z-30">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Jouw Nieuwe Rol: Cureren.
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Je zoekt geen nieuwe tool, maar een nieuwe manier van werken.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-500 font-bold mt-1">1.</span>
                  <p className="text-gray-300">Jij dumpt context.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-500 font-bold mt-1">2.</span>
                  <p className="text-gray-300">AI maakt opties.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-500 font-bold mt-1">3.</span>
                  <p className="text-gray-300">Jij kiest.</p>
                </div>
              </div>
              
              <p className="text-white font-semibold text-lg">
                Minder rennen, meer regie. Zo gaat werk wél uit handen.
              </p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-10 pointer-events-none">
            <img 
              src="/logo.svg" 
              alt="PrinciplesAI Logo" 
              className="h-full w-auto brightness-0 invert opacity-30 drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

