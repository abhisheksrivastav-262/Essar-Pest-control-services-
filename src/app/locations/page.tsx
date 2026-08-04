import React from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { QuoteForm } from '@/components/QuoteForm';
import { CTABanner } from '@/components/CTABanner';
import { locationsData } from '@/data/locations';
import { MapPin, Phone, ExternalLink, Clock } from 'lucide-react';

export const metadata = {
  title: 'Pest Control Locations Gurgaon & Delhi NCR | Service Areas',
  description:
    'Nexora Pest Management Pvt Ltd headquarters in Sector 5 Gurgaon, servicing DLF Phase 1-5, Golf Course Road, Sohna Road, Cyber City, Delhi, Noida, Manesar & Faridabad.',
};

export default function LocationsPage() {
  return (
    <div className="space-y-16 pb-12">
      <PageHero
        title="Gurgaon Headquarters & NCR Service Areas"
        subtitle="Rapid 30-minute to 2-hour technician dispatch across all Gurgaon sectors, DLF societies, and neighboring NCR cities."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Locations' }]}
        badge="Gurgaon HQ & Coverage Network"
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
              Sheetla Colony, Sector 5 Central Dispatch
            </h2>

            {/* HQ Supporting Photo + Details */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center pt-1">
              <div className="sm:col-span-5 h-44 rounded-2xl overflow-hidden relative shadow-md border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
                  alt="Nexora Sector 5 Gurgaon Central Dispatch Fleet"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/80 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[10px] font-bold text-white">Sector 5 Fleet Hub</span>
                </div>
              </div>

              <div className="sm:col-span-7 space-y-2">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our central warehouse and technician fleet are stationed at Sector 5, Block A, Gurgaon. This strategic location enables us to guarantee same-day service visits across Old Gurgaon, DLF Cyber City, Golf Course Road, and Sohna Road.
                </p>
                <div className="space-y-1 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-green-500" />
                    <span>Operating Hours: 24 Hours / 7 Days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-amber-500" />
                    <span>Helpline: 8368334476</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Sheetla+Colony+Sector+5+Gurgaon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white font-bold text-xs py-3 px-5 rounded-xl transition-all shadow-md"
              >
                <span>Get Google Maps Directions to HQ</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Map Frame Placeholder */}
          <div className="lg:col-span-5 h-80 rounded-2xl overflow-hidden border border-slate-300 relative shadow-inner bg-slate-100 flex items-center justify-center">
            <iframe
              title="Nexora Pest Management Gurgaon HQ Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.018956972049!2d77.0163351!3d28.4790856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d672957b49%3A0xa1e7d8d6ff0b6d91!2sSheetla%20Colony%2C%20Sector%205%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Grid of Service Area Cards with Supporting Neighborhood Images */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-bold text-brand-green-500 uppercase tracking-widest">
            Service Coverage Network
          </div>
          <h2 className="text-3xl font-extrabold text-brand-slate tracking-tight">
            Gurgaon Localities & NCR Service Zones
          </h2>
          <p className="text-slate-600 text-sm">
            Click on any locality to request fast technician dispatch in your neighborhood.
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
                      Company HQ
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
                      Key Neighborhoods Covered:
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
                    href="tel:8368334476"
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
        <QuoteForm title="Schedule Local Inspection" subtitle="Selected service area dispatch" />
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTABanner />
      </section>
    </div>
  );
}
