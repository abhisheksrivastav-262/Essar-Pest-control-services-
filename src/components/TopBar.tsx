import React from 'react';
import { Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="hidden lg:block bg-brand-slate text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side: Address & Services */}
        <div className="flex items-center space-x-6">
          <a
            href="https://maps.google.com/?q=Bandivali+School+Majasgaon+Jogeshwari+East+400060"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-brand-amber-400 transition-colors"
            title="View Office on Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-brand-green-400 flex-shrink-0" />
            <span className="truncate max-w-xl">
              Office No 2 Laxuman Parb chawl, opp. Bandivali School, Majasgaon, Jogeshwari East 400060
            </span>
          </a>
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="text-brand-amber-400 font-bold">Services:</span>
            <span>Commercial • Industrial • Home • Society • Warehouse</span>
          </div>
        </div>

        {/* Right Side: Contact & WhatsApp */}
        <div className="flex items-center space-x-5">
          <a
            href="https://wa.me/918286007801"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-200 hover:text-[#25D366] transition-colors font-medium"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp: 8286007801</span>
          </a>
          <a
            href="tel:8286007801"
            className="flex items-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold py-1 px-3 rounded-full transition-all shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 fill-current animate-pulse" />
            <span>Call: 8286007801</span>
          </a>
        </div>
      </div>
    </div>
  );
};
