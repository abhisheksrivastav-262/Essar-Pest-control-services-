'use client';

import React, { useState } from 'react';
import { Calendar, Phone, MessageSquare } from 'lucide-react';
import { QuoteModal } from './QuoteModal';

export const FloatingQuoteButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = () => {
    const defaultMsg = `🛡️ New Website Lead - Sangle's Pest Control & Service\n\nI need a free quote for pest control service.\nCall Helpline: 8286007801\n\nSource: Floating Screen Widget`;
    window.open(`https://wa.me/918286007801?text=${encodeURIComponent(defaultMsg)}`, '_blank');
  };

  return (
    <>
      {/* 1. DESKTOP & TABLET FLOATING BUTTONS (Fixed at Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-50 hidden sm:flex flex-col items-end space-y-3">
        {/* Floating Call Button */}
        <a
          href="tel:8286007801"
          className="group flex items-center bg-brand-green-500 hover:bg-brand-green-600 text-white rounded-full shadow-2xl p-2.5 pr-4 transition-all duration-300 transform hover:scale-105 hover:shadow-brand-green-500/50"
          aria-label="Call Sangle's 8286007801"
          title="Call 24/7 Helpline: 8286007801"
        >
          <div className="relative">
            <span className="absolute -inset-1 rounded-full bg-white opacity-40 animate-ping"></span>
            <div className="relative w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Phone className="w-4 h-4 fill-current text-white animate-pulse" />
            </div>
          </div>
          <div className="ml-2.5 flex flex-col text-left">
            <span className="text-[10px] font-medium leading-none text-brand-green-100 uppercase tracking-wider">
              Call 24/7
            </span>
            <span className="text-sm font-black leading-tight tracking-tight mt-0.5">
              8286007801
            </span>
          </div>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={openWhatsApp}
          className="group flex items-center bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl p-2.5 pr-4 transition-all duration-300 transform hover:scale-105 hover:shadow-[#25D366]/50"
          aria-label="Chat on WhatsApp 8286007801"
          title="Instant WhatsApp Chat 8286007801"
        >
          <div className="relative">
            <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
            <div className="relative w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 fill-current text-white" />
            </div>
          </div>
          <div className="ml-2.5 flex flex-col text-left">
            <span className="text-[10px] font-medium leading-none text-emerald-100 uppercase tracking-wider">
              WhatsApp Chat
            </span>
            <span className="text-sm font-black leading-tight tracking-tight mt-0.5">
              8286007801
            </span>
          </div>
        </button>

        {/* Floating Quote Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-extrabold text-xs px-4 py-2.5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Calendar className="w-4 h-4 mr-2 animate-bounce" />
          <span>Get Free Quote</span>
        </button>
      </div>

      {/* 2. MOBILE FLOATING ACTION BAR (Fixed at bottom for mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl flex items-center gap-2">
        {/* Mobile Call Button */}
        <a
          href="tel:8286007801"
          className="flex-1 bg-brand-green-500 hover:bg-brand-green-600 active:bg-brand-green-700 text-white font-extrabold text-sm py-3 px-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
          aria-label="Call 8286007801"
        >
          <Phone className="w-4 h-4 fill-current animate-pulse flex-shrink-0" />
          <span>Call Now</span>
        </a>

        {/* Mobile WhatsApp Button */}
        <button
          onClick={openWhatsApp}
          className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white font-extrabold text-sm py-3 px-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
          aria-label="WhatsApp 8286007801"
        >
          <MessageSquare className="w-4 h-4 fill-current flex-shrink-0" />
          <span>WhatsApp</span>
        </button>

        {/* Mobile Quote Quick Trigger */}
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brand-amber-500 hover:bg-brand-amber-600 text-white p-3 rounded-xl shadow-md flex items-center justify-center flex-shrink-0 transition-transform active:scale-95"
          aria-label="Request Free Quote"
          title="Free Quote"
        >
          <Calendar className="w-5 h-5" />
        </button>
      </div>

      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
