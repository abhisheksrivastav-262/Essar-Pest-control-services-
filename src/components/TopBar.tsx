import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="hidden lg:block bg-brand-slate text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side: Address & Guarantee */}
        <div className="flex items-center space-x-6">
          <a
            href="https://maps.google.com/?q=Sheetla+Colony+Sector+5+Gurgaon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-brand-amber-400 transition-colors"
            title="View Gurgaon HQ on Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-brand-green-400" />
            <span>Sheetla Colony, Sector 5, Block A, Gurgaon, Haryana 122001</span>
          </a>
          <div className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-amber-400" />
            <span>ISO 9001:2015 Certified & PCAI Member</span>
          </div>
        </div>

        {/* Right Side: 24/7 Helpline + Click to Call */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-brand-green-400" />
            <span>24/7 Emergency Service</span>
          </div>
          <a
            href="tel:8368334476"
            className="flex items-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold py-1 px-3 rounded-full transition-all shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 fill-current animate-pulse" />
            <span>Call 24/7: 8368334476</span>
          </a>
        </div>
      </div>
    </div>
  );
};
