import React from 'react';
import { Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="hidden lg:block bg-brand-slate text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side: Address & Services */}
        <div className="flex items-center space-x-6">
          <a
            href="https://maps.google.com/?q=Gate+No+7+NCC+Shop+No+17+Plot+No+8+Malvani+Rd+Malvani+Malad+West+Mumbai+Maharashtra+400095"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-brand-amber-400 transition-colors"
            title="View Office on Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-brand-green-400 flex-shrink-0" />
            <span className="truncate max-w-xl">
              Gate no-7, N C C, Shop No 17, Plot No- 8, Malvani Rd, Malvani, Malad West, Mumbai, Maharashtra 400095
            </span>
          </a>
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="text-brand-amber-400 font-bold">Services:</span>
            <span>Gel Treatment • Rodent • Mosquito • Honey Bees • General Pest • Termite</span>
          </div>
        </div>

        {/* Right Side: Contact & WhatsApp */}
        <div className="flex items-center space-x-5">
          <a
            href="https://wa.me/918898172297"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-200 hover:text-[#25D366] transition-colors font-medium"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp: 8898172297</span>
          </a>
          <a
            href="tel:8898172297"
            className="flex items-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold py-1 px-3 rounded-full transition-all shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 fill-current animate-pulse" />
            <span>Call: 8898172297</span>
          </a>
        </div>
      </div>
    </div>
  );
};
