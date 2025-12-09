import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bedrijfsinfo */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">PrinciplesAI</h3>
            <p className="text-gray-400">Sneek</p>
            <p className="text-gray-400">KVK: 91805651</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <a 
              href="mailto:info@principlesai.nl" 
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-3"
            >
              <Mail className="w-5 h-5" />
              <span>info@principlesai.nl</span>
            </a>
            <a 
              href="https://www.linkedin.com/company/principlesai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigatie</h3>
            <div className="flex flex-col space-y-2">
              <a href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="/methode" className="text-gray-400 hover:text-white transition-colors">
                Over de methode
              </a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PrinciplesAI. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}

