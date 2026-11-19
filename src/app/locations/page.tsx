import React from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { QuoteForm } from '@/components/QuoteForm';
import { CTABanner } from '@/components/CTABanner';
import { locationsData } from '@/data/locations';
import { MapPin, Phone, ExternalLink, Clock, MessageSquare } from 'lucide-react';

export const metadata = {
  title: "Pest Control Service Locations | Sangle's Pest Control & Service",
  description:
    "Sangle's Pest Control & Service central office in Majasgaon, Jogeshwari East 400060. Servicing Commercial, Industrial, Home, Society, and Warehouse properties. Call 8286007801.",
};

export default function LocationsPage() {
  return (
    <div className="space-y-16 pb-12">
      <PageHero
        title="Jogeshwari East Office & Coverage Network"
        subtitle="Rapid 30-minute to 2-hour technician dispatch for Commercial, Industrial, Home, Society, and Warehouse locations."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Locations' }]}
        badge="Office HQ & Service Network"
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-and-buildings-42512-large.mp4"
        posterUrl="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Central Dispatch Section with HQ Office Photo + Map Frame */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-brand-green-50 text-brand-green-600 px-3 py-1 rounded-full text-xs font-bold">
              <MapPin className="w-4 h-4" /> Operational Central Hub
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-slate">
              Office No 2 Laxuman Parb chawl, Majasgaon, Jogeshwari East
            </h2>

            {/* HQ Supporting Photo + Details */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center pt-1">
              <div className="sm:col-span-5 h-44 rounded-2xl overflow-hidden relative shadow-md border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
                  alt="Sangle's Pest Control Central Dispatch Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/80 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[10px] font-bold text-white">Jogeshwari East HQ</span>
                </div>
              </div>

              <div className="sm:col-span-7 space-y-2">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our central office is located at Office No 2 Laxuman Parb chawl, opposite Bandivali School, Majasgaon, Jogeshwari East 400060. We provide reliable pest control services for Commercial, Industrial, Home, Society, and Warehouse requirements.
                </p>
                <div className="space-y-1 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-green-500" />
                    <span>Operating Hours: 24 Hours / 7 Days Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-amber-500" />
                    <span>Contact No: 8286007801</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp: 8286007801</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Bandivali+School+Majasgaon+Jogeshwari+East+400060"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white font-bold text-xs py-3 px-5 rounded-xl transition-all shadow-md"
              >
                <span>Get Google Maps Directions to Office</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="tel:8286007801"
                className="inline-flex items-center gap-2 bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-bold text-xs py-3 px-5 rounded-xl transition-all shadow-md"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call 8286007801</span>
              </a>
            </div>
          </div>

          {/* Map Frame */}
          <div className="lg:col-span-5 h-80 rounded-2xl overflow-hidden border border-slate-300 relative shadow-inner bg-slate-100 flex items-center justify-center">
            <iframe
              title="Sangle's Pest Control & Service Office Map"
              src="https://maps.google.com/maps?q=Bandivali+School,+Majasgaon,+Jogeshwari+East,+Mumbai+400060&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Grid of Service Area Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-bold text-brand-green-500 uppercase tracking-widest">
            Service Coverage Network
          </div>
          <h2 className="text-3xl font-extrabold text-brand-slate tracking-tight">
            Service Areas & Local Coverage
          </h2>
          <p className="text-slate-600 text-sm">
            Providing expert pest control across Commercial, Industrial, Home, Society, and Warehouse locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationsData.map((loc) => (
            <div
              key={loc.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                loc.isHeadquarters
                  ? 'bg-gradient-to-br from-brand-green-50 to-white border-2 border-brand-green-500 shadow-lg'
                  : 'bg-white border-slate-200/80 hover:border-brand-green-500 hover:shadow-card-hover'
              }`}
            >
              {/* Card Header Image */}
              <div className="relative h-40 w-full bg-slate-100">
                <Image src={loc.imageUrl} alt={loc.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/90 via-brand-slate/30 to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-brand-slate/80 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                    {loc.type}
                  </span>
                  {loc.isHeadquarters && (
                    <span className="text-[10px] font-black uppercase tracking-wider bg-brand-amber-500 text-white px-2.5 py-0.5 rounded-full shadow-sm">
                      Company Office HQ
                    </span>
                  )}
                </div>
                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <h3 className="text-lg font-extrabold text-white drop-shadow">{loc.name}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <p className="text-xs text-slate-600 leading-relaxed">{loc.description}</p>

                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase mb-1">
                      Key Areas Covered:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {loc.servicedNeighborhoods.map((nh, nIdx) => (
                        <span
                          key={nIdx}
                          className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium"
                        >
                          {nh}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">
                    ⚡ {loc.responseDelay}
                  </span>

                  <a
                    href="tel:8286007801"
                    className="text-xs font-extrabold text-brand-green-500 hover:text-brand-amber-500 transition-colors flex items-center gap-1"
                  >
                    <span>Request Service</span>
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Quote Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm title="Schedule Local Inspection" subtitle="Selected service area dispatch • Commercial / Industrial / Home / Society / Warehouse" />
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTABanner />
      </section>
    </div>
  );
}
