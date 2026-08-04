'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Tag, ArrowRight, MessageSquare } from 'lucide-react';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  bgImageUrl?: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  title = 'Special Monsoon Offer: 30% Off Home Pest Shield',
  subtitle = 'Book your hassle-free inspection today. 100% money-back guarantee & zero toxic fumes.',
  badge = 'Limited-Time Gurgaon Discount',
  bgImageUrl = 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1200&q=80',
}) => {
  const openWhatsApp = () => {
    const formattedMessage = `🛡️ New Website Lead - Nexora Pest Management\n\nI want to claim the Special Monsoon Offer: 30% Off Home Pest Shield in Gurgaon.\nPhone Helpline: 8368334476\n\nSource:\nWebsite Offer Banner`;
    window.open(`https://wa.me/918368334476?text=${encodeURIComponent(formattedMessage)}`, '_blank');
  };

  return (
    <div className="relative text-white rounded-3xl p-8 md:p-12 shadow-2xl my-12 overflow-hidden border border-brand-green-500/30">
      {/* Supporting Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImageUrl}
          alt="Nexora Pest Control Service"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Dark Green Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-slate/95 via-brand-green-950/90 to-brand-green-900/90 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-3 text-center lg:text-left">
          <div className="inline-flex items-center gap-1.5 bg-brand-amber-500 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
            <Tag className="w-3.5 h-3.5" />
            {badge}
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-sm md:text-base text-brand-green-100 max-w-2xl">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full lg:w-auto">
          <a
            href="tel:8368334476"
            className="w-full sm:w-auto bg-white hover:bg-slate-100 text-brand-slate font-black text-sm py-3.5 px-5 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-brand-green-500 fill-current animate-pulse" />
            <span>Call 8368334476</span>
          </a>

          <button
            onClick={openWhatsApp}
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm py-3.5 px-5 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>WhatsApp Us</span>
          </button>

          <Link
            href="/contact-us"
            className="w-full sm:w-auto bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-extrabold text-sm py-3.5 px-5 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 group"
          >
            <span>Book Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
