'use client';

import React, { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

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

      if (response.ok) {
        setMessage('Bedankt! We nemen zo snel mogelijk contact met je op.');
        setEmail('');
      } else {
        setMessage('Er ging iets mis. Probeer het later opnieuw.');
      }
    } catch (error) {
      setMessage('Er ging iets mis. Probeer het later opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Je email adres"
        required
        className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent min-w-[200px]"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-lg shadow-blue-600/30 whitespace-nowrap"
      >
        {isSubmitting ? 'Verzenden...' : 'Start de Shift'}
      </button>
      {message && (
        <p className={`text-sm ${message.includes('Bedankt') ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </form>
  );
}

