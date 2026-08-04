'use client';

import React, { useState } from 'react';
import { Calendar, Phone, MessageSquare } from 'lucide-react';
import { QuoteModal } from './QuoteModal';

export const FloatingQuoteButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = () => {
    const defaultMsg = `🛡️ New Website Lead - Nexora Pest Management\n\nI need a free quote for pest control service in Gurgaon.\nCall Helpline: 8368334476\n\nSource: Floating Screen Widget`;
    window.open(`https://wa.me/918368334476?text=${encodeURIComponent(defaultMsg)}`, '_blank');
  };

  return (
    <>
      <div className="fixed bottom-6 left-6 z-40 flex items-center space-x-2.5">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-extrabold text-xs md:text-sm px-4 py-3 rounded-full shadow-floating flex items-center gap-2 transition-transform transform hover:scale-105"
        >
          <Calendar className="w-4 h-4 animate-bounce" />
          <span>Free Quote</span>
        </button>

        <button
          onClick={openWhatsApp}
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 rounded-full shadow-floating transition-transform transform hover:scale-105 flex items-center gap-1.5 font-bold text-xs"
          aria-label="Chat on WhatsApp 8368334476"
          title="Instant WhatsApp Chat 8368334476"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span className="hidden md:inline">WhatsApp</span>
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
