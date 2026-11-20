import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, Award, CheckCircle2, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-slate text-slate-300 pt-16 pb-24 sm:pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand Info & Trust Badges */}
          <div className="space-y-5">
            <Logo layout="stacked" variant="light" size="lg" className="-ml-1" />
            <p className="text-xs leading-relaxed text-slate-400">
              Essar Pest Control Services delivers safe, odorless, and government-approved pest management solutions. Gel Treatment, Rodent, Mosquito, Honey Bees, General Pest Management &amp; Termite Treatment.
            </p>

            {/* Trust Badges */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-green-400" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <Award className="w-4 h-4 text-brand-amber-400" />
                <span>Certified &amp; Experienced Specialists</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <ShieldCheck className="w-4 h-4 text-brand-green-400" />
                <span>Licensed &amp; Eco-Friendly Treatments</span>
              </div>
            </div>
          </div>

          {/* Column 2: Pest Control Services */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-4 border-brand-green-500 pl-2">
              Pest Control Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/residential-services" className="hover:text-brand-green-400 transition-colors font-medium">
                  🧪 Gel Treatment
                </Link>
              </li>
              <li>
                <Link href="/residential-services" className="hover:text-brand-green-400 transition-colors font-medium">
                  🐭 Rodent Treatment
                </Link>
              </li>
              <li>
                <Link href="/residential-services" className="hover:text-brand-green-400 transition-colors font-medium">
                  🦟 Mosquito Treatment
                </Link>
              </li>
              <li>
                <Link href="/residential-services" className="hover:text-brand-green-400 transition-colors font-medium">
                  🐝 Honey Bees Pest Control
                </Link>
              </li>
              <li>
                <Link href="/commercial-services" className="hover:text-brand-green-400 transition-colors font-medium">
                  🛡️ General Pest Management Process
                </Link>
              </li>
              <li>
                <Link href="/pest-library/termites" className="hover:text-brand-green-400 transition-colors">
                  🏚️ Termite Treatment
                </Link>
              </li>
              <li>
                <Link href="/commercial-services" className="hover:text-brand-green-400 transition-colors">
                  🏢 Commercial Pest Control
                </Link>
              </li>
              <li>
                <Link href="/pest-library/german-cockroach" className="hover:text-brand-green-400 transition-colors">
                  Herbal Kitchen Cockroach Gel Treatment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-4 border-brand-amber-500 pl-2">
              Quick Links &amp; Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-brand-amber-400 transition-colors">
                  About Essar Pest Control Services
                </Link>
              </li>
              <li>
                <Link href="/pest-library" className="hover:text-brand-amber-400 transition-colors">
                  Pest Library &amp; Identification Guide
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-brand-amber-400 transition-colors">
                  Service Areas &amp; Local Coverage
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-brand-amber-400 transition-colors">
                  Contact Us &amp; Location Map
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/918898172297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Chat on WhatsApp (8898172297)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info Block */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-4 border-brand-green-500 pl-2">
              Office Contact Info
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              {/* Contact No */}
              <a
                href="tel:8898172297"
                className="flex items-center gap-3 group hover:text-white transition-colors"
              >
                <div className="p-2 bg-brand-green-500/20 text-brand-green-400 rounded-lg group-hover:bg-brand-green-500 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-slate-400 font-semibold">Contact No (24/7)</div>
                  <div className="font-bold text-sm text-brand-amber-400">8898172297</div>
                </div>
              </a>

              {/* WhatsApp No */}
              <a
                href="https://wa.me/918898172297"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group hover:text-white transition-colors"
              >
                <div className="p-2 bg-[#25D366]/20 text-[#25D366] rounded-lg group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-slate-400 font-semibold">WhatsApp No</div>
                  <div className="font-bold text-sm text-[#25D366]">8898172297</div>
                </div>
              </a>

              {/* Office Address */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-amber-500/20 text-brand-amber-400 rounded-lg mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-slate-400 font-semibold">Office Address</div>
                  <div className="leading-snug">
                    Gate no-7, N C C, Shop No 17, Plot No- 8, Malvani Rd, Malvani, Malad West, Mumbai, Maharashtra 400095
                  </div>
                  <a
                    href="https://maps.google.com/?q=Gate+No+7+NCC+Shop+No+17+Plot+No+8+Malvani+Rd+Malvani+Malad+West+Mumbai+Maharashtra+400095"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-amber-400 hover:underline mt-1"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Line */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            ©️ 2026 Essar Pest Control Services. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-slate-400 font-medium">Malad West, Mumbai, Maharashtra 400095</span>
            <span>|</span>
            <Link href="/contact-us" className="hover:text-slate-300 transition-colors">
              Privacy Policy &amp; Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
