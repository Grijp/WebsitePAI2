'use client';

import React from 'react';

export default function MethodeFlowchart() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-slate-900 border-2 border-blue-600 rounded-lg px-8 py-4">
            <p className="text-2xl lg:text-3xl font-bold text-white">
              TOEGANGSPRIJS €250,- PER PERSOON
            </p>
          </div>
        </div>

        <div className="relative border-4 border-blue-600 rounded-2xl p-8 lg:p-12 bg-slate-900/50">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-blue-600"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-blue-600"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
            <div className="bg-blue-950/60 border-2 border-blue-600 rounded-xl p-6 lg:p-8 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Fase 1: Workshop</h3>
              
              <div className="mb-6">
                <p className="text-blue-400 font-semibold mb-2">Doel:</p>
                <p className="text-gray-300">Leer meer uit jezelf halen met AI Inhoud</p>
              </div>
              
              <div className="mb-6">
                <p className="text-blue-400 font-semibold mb-2">Workshop (3 uur):</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Wat is een taalmodel?</li>
                  <li>Leren basisvaardigheden</li>
                </ol>
              </div>
              
              <div>
                <p className="text-blue-400 font-semibold mb-2">Wat levert het op?</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Vrij creëren m.b.v. een taalmodel.</li>
                  <li>Eerste toepassingsideeën.</li>
                </ol>
              </div>
              
            </div>

            <div className="bg-emerald-900/40 border-2 border-emerald-600 rounded-xl p-6 lg:p-8 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Fase 2: Coaching</h3>
              
              <div className="mb-6">
                <p className="text-emerald-400 font-semibold mb-2">Doel:</p>
                <p className="text-gray-300">Zelfstandig use-cases vinden</p>
              </div>
              
              <div className="mb-6">
                <p className="text-emerald-400 font-semibold mb-2">Coaching (4x30 min):</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Wekelijkse huiswerkopdrachten</li>
                  <li>Concrete toepassingen vinden</li>
                </ol>
              </div>
              
              <div>
                <p className="text-emerald-400 font-semibold mb-2">Wat levert het op?</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Inzicht in het nieuwe werken</li>
                  <li>Inzicht in de mogelijkheden</li>
                </ol>
              </div>
              
            </div>

            <div className="lg:col-span-2 bg-indigo-900/40 border-2 border-indigo-600 rounded-xl p-6 lg:p-8 relative z-10 mt-8 lg:mt-0">
              <h3 className="text-2xl font-bold text-white mb-4">Fase 3: Gezamenlijke terugblik</h3>
              
              <div className="mb-6">
                <p className="text-indigo-400 font-semibold mb-2">Doel:</p>
                <p className="text-gray-300">Geleidelijke kennisverspreiding en verandering binnen de organisatie</p>
              </div>
              
              <div className="mb-6">
                <p className="text-indigo-400 font-semibold mb-2">Inhoud terugblik (2 uur):</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Deelnemers delen hun ervaringen en resultaten.</li>
                  <li>Uitwisselen van ideeën en inzichten</li>
                </ol>
              </div>
              
              <div>
                <p className="text-indigo-400 font-semibold mb-2">Wat levert het op?</p>
                <p className="text-gray-300">Betere besluitvorming over AI door de organisatie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

