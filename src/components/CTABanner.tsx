import React from 'react';
import Link from 'next/link';
import { Phone, Tag, ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  title = 'Special Monsoon Offer: 30% Off Home Pest Shield',
  subtitle = 'Book your hassle-free inspection today. 100% money-back guarantee & zero toxic fumes.',
  badge = 'Limited-Time Gurgaon Discount',
}) => {
  return (
    <div className="bg-gradient-to-r from-brand-green-600 via-brand-green-500 to-emerald-700 text-white rounded-3xl p-8 md:p-12 shadow-xl my-12 relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-amber-500/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
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

        <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full lg:w-auto">
          <a
            href="tel:8368334476"
            className="w-full sm:w-auto bg-white hover:bg-slate-100 text-brand-slate font-black text-base py-3.5 px-6 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5 text-brand-green-500 fill-current animate-pulse" />
            <span>Call 8368334476</span>
          </a>

          <Link
            href="/contact-us"
            className="w-full sm:w-auto bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-extrabold text-base py-3.5 px-6 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 group"
          >
            <span>Book Free Quote</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
