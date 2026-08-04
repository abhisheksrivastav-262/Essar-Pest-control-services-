'use client';

import React, { useState } from 'react';
import { Calendar, Phone } from 'lucide-react';
import { QuoteModal } from './QuoteModal';

export const FloatingQuoteButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 left-6 z-40 flex items-center space-x-3">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-extrabold text-xs md:text-sm px-4 py-3 rounded-full shadow-floating flex items-center gap-2 transition-transform transform hover:scale-105"
        >
          <Calendar className="w-4 h-4 animate-bounce" />
          <span>Free Quote</span>
        </button>

        <a
          href="tel:8368334476"
          className="hidden sm:flex bg-brand-green-500 hover:bg-brand-green-600 text-white p-3 rounded-full shadow-floating transition-transform transform hover:scale-105"
          aria-label="Call Nexora Gurgaon 8368334476"
          title="Call 24/7 Helpline 8368334476"
        >
          <Phone className="w-4 h-4 fill-current" />
        </a>
      </div>

      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
