'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setMessage('');
      setIsSuccess(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage('Bedankt! We nemen zo snel mogelijk contact met je op.');
        setIsSuccess(true);
        setEmail('');
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setMessage(data.message || data.error || 'Er ging iets mis. Probeer het later opnieuw.');
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('Er ging iets mis. Probeer het later opnieuw.');
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 border border-blue-600 rounded-lg p-8 shadow-2xl relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Start de Shift
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Vul je e-mailadres in en we nemen zo snel mogelijk contact met je op.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Je email adres"
            required
            className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-white px-4 py-2 rounded-lg transition-colors"
            >
              Annuleren
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
            >
              {isSubmitting ? 'Verzenden...' : 'Verzenden'}
            </button>
          </div>
          {message && (
            <p className={`text-sm text-center mt-4 ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

