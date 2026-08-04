import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-slate text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand Info & Trust Badges */}
          <div className="space-y-5">
            <Logo layout="stacked" variant="light" size="lg" className="-ml-1" />
            <p className="text-xs leading-relaxed text-slate-400">
              Gurgaon premier ISO 9001:2015 certified pest control company. Delivering safe, odorless, and government-approved pest management for homes & businesses.
            </p>

            {/* Trust Badges */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-green-400" />
                <span>100% Satisfaction Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <Award className="w-4 h-4 text-brand-amber-400" />
                <span>ISO 9001:2015 Certified & PCAI Member</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <ShieldCheck className="w-4 h-4 text-brand-green-400" />
                <span>Licensed & Fully Insured Technicians</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services Links */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-4 border-brand-green-500 pl-2">
              Pest Control Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/residential-services" className="hover:text-brand-green-400 transition-colors">
                  Residential Home Pest Control
                </Link>
              </li>
              <li>
                <Link href="/commercial-services" className="hover:text-brand-green-400 transition-colors">
                  Commercial & Corporate Hygiene
                </Link>
              </li>
              <li>
                <Link href="/pest-library/termites" className="hover:text-brand-green-400 transition-colors">
                  Anti-Termite (Deemak) Drill Barrier
                </Link>
              </li>
              <li>
                <Link href="/pest-library/cockroaches" className="hover:text-brand-green-400 transition-colors">
                  Herbal Kitchen Cockroach Gel Treatment
                </Link>
              </li>
              <li>
                <Link href="/pest-library/bed-bugs" className="hover:text-brand-green-400 transition-colors">
                  Bed Bug Heat & Steam Eradication
                </Link>
              </li>
              <li>
                <Link href="/pest-library/rodents" className="hover:text-brand-green-400 transition-colors">
                  Rodent & Cable Gnawing Exclusion
                </Link>
              </li>
              <li>
                <Link href="/pest-library/mosquitoes" className="hover:text-brand-green-400 transition-colors">
                  Balcony Mosquito & Larvicidal Mist
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-4 border-brand-amber-500 pl-2">
              Quick Links & Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-brand-amber-400 transition-colors">
                  About Nexora & Licensing
                </Link>
              </li>
              <li>
                <Link href="/pest-library" className="hover:text-brand-amber-400 transition-colors">
                  Pest Library & Identification Guide
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-brand-amber-400 transition-colors">
                  Gurgaon & Delhi NCR Service Areas
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-amber-400 transition-colors">
                  Pest Prevention Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-brand-amber-400 transition-colors">
                  Contact Us & Location Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info Block */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-4 border-brand-green-500 pl-2">
              Gurgaon HQ Contact Info
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <a
                href="tel:8368334476"
                className="flex items-center gap-3 group hover:text-white transition-colors"
              >
                <div className="p-2 bg-brand-green-500/20 text-brand-green-400 rounded-lg group-hover:bg-brand-green-500 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-slate-400 font-semibold">24/7 Dispatch Phone</div>
                  <div className="font-bold text-sm text-brand-amber-400">8368334476</div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-amber-500/20 text-brand-amber-400 rounded-lg mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-slate-400 font-semibold">Corporate Address</div>
                  <div className="leading-snug">
                    Sheetla Colony, Sector 5, Block A, Gurgaon, Haryana 122001
                  </div>
                  <a
                    href="https://maps.google.com/?q=Sheetla+Colony+Sector+5+Gurgaon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-amber-400 hover:underline mt-1"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-800 text-slate-300 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-slate-400 font-semibold">Email Service Care</div>
                  <div className="font-medium text-slate-200">contact@nexorapest.online</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Line */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            ©️ 2026 Nexora Pest Management Pvt Ltd. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-slate-400 font-medium">Registered Office: Gurgaon, Haryana, India</span>
            <span>|</span>
            <Link href="/contact-us" className="hover:text-slate-300 transition-colors">
              Privacy Policy & Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
