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
              Sangle&apos;s Pest Control & Service delivers safe, odorless, and government-approved pest management solutions for Commercial, Industrial, Home, Society, and Warehouse properties.
            </p>

            {/* Trust Badges */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-green-400" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <Award className="w-4 h-4 text-brand-amber-400" />
                <span>Certified & Experienced Specialists</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <ShieldCheck className="w-4 h-4 text-brand-green-400" />
                <span>Licensed & Eco-Friendly Treatments</span>
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
                <Link href="/commercial-services" className="hover:text-brand-green-400 transition-colors font-medium">
                  🏢 Commercial Pest Control
                </Link>
              </li>
              <li>
                <Link href="/commercial-services" className="hover:text-brand-green-400 transition-colors font-medium">
                  🏭 Industrial Pest Control
                </Link>
              </li>
              <li>
                <Link href="/residential-services" className="hover:text-brand-green-400 transition-colors font-medium">
                  🏠 Home & Residential Pest Control
                </Link>
              </li>
              <li>
                <Link href="/residential-services" className="hover:text-brand-green-400 transition-colors font-medium">
                  🏘️ Society & Complex Pest Control
                </Link>
              </li>
              <li>
                <Link href="/commercial-services" className="hover:text-brand-green-400 transition-colors font-medium">
                  📦 Warehouse & Storage Pest Control
                </Link>
              </li>
              <li>
                <Link href="/pest-library/termites" className="hover:text-brand-green-400 transition-colors">
                  Anti-Termite (Deemak) Drill Barrier
                </Link>
              </li>
              <li>
                <Link href="/pest-library/german-cockroach" className="hover:text-brand-green-400 transition-colors">
                  Herbal Kitchen Cockroach Gel Treatment
                </Link>
              </li>
              <li>
                <Link href="/pest-library/bed-bugs" className="hover:text-brand-green-400 transition-colors">
                  Bed Bug Heat & Steam Eradication
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
                  About Sangle&apos;s Pest Control & Service
                </Link>
              </li>
              <li>
                <Link href="/pest-library" className="hover:text-brand-amber-400 transition-colors">
                  Pest Library & Identification Guide
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-brand-amber-400 transition-colors">
                  Service Areas & Local Coverage
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-brand-amber-400 transition-colors">
                  Contact Us & Location Map
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/918286007801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Chat on WhatsApp (8286007801)</span>
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
                href="tel:8286007801"
                className="flex items-center gap-3 group hover:text-white transition-colors"
              >
                <div className="p-2 bg-brand-green-500/20 text-brand-green-400 rounded-lg group-hover:bg-brand-green-500 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-slate-400 font-semibold">Contact No (24/7)</div>
                  <div className="font-bold text-sm text-brand-amber-400">8286007801</div>
                </div>
              </a>

              {/* WhatsApp No */}
              <a
                href="https://wa.me/918286007801"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group hover:text-white transition-colors"
              >
                <div className="p-2 bg-[#25D366]/20 text-[#25D366] rounded-lg group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-slate-400 font-semibold">WhatsApp No</div>
                  <div className="font-bold text-sm text-[#25D366]">8286007801</div>
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
                    Office No 2 Laxuman Parb chawl, opposite Bandivali School, Majasgaon, Jogeshwari East 400060
                  </div>
                  <a
                    href="https://maps.google.com/?q=Bandivali+School+Majasgaon+Jogeshwari+East+400060"
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
            ©️ 2026 Sangle&apos;s Pest Control & Service. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-slate-400 font-medium">Jogeshwari East 400060</span>
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
