'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 leading-tight">
          Voelt jouw brein als de bottleneck in je werkdag?
        </h1>
        
        <p className="text-center text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 lg:mb-16 max-w-4xl mx-auto">
          Stop met produceren. Start met cureren. Ontdek de nieuwe manier van werken voor kenniswerkers waarbij AI het loopwerk doet, en jij de regie houdt.
        </p>
        
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px]">
          <div className="bg-emerald-900/40 border border-emerald-800/50 rounded-2xl lg:rounded-r-none lg:rounded-l-2xl p-8 lg:pl-4 lg:pr-48 relative overflow-visible z-20">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent pointer-events-none"></div>
            
            <div className="relative z-30">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 uppercase">
                DE HUIDIGE STATUS
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Ik ben de hele dag druk, maar ik kom nauwelijks toe aan het werk dat echt telt. AI-tools zat, maar het voelt als nóg een ding erbij. Ik wil eigenlijk dat er gewoon dingen van mijn bord verdwijnen.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-950/60 border border-blue-800/50 rounded-2xl lg:rounded-l-none lg:rounded-r-2xl p-8 lg:pl-48 lg:pr-4 relative overflow-visible z-20">
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-600/20 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-blue-600/10 blur-xl pointer-events-none"></div>
            
            <div className="relative z-30">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 uppercase">
                JOUW NIEUWE ROL
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Je zoekt geen nieuwe tool – je zoekt een nieuwe manier van werken. In ons leertraject maak je de shift van produceren naar cureren: jij dumpt context, AI maakt opties, en jij kiest. Minder rennen, meer regie. Dat is hoe werk wél uit handen gaat.
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

