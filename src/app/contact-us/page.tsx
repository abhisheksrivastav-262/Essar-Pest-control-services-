import React from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { QuoteForm } from '@/components/QuoteForm';
import { CTABanner } from '@/components/CTABanner';
import { Phone, Mail, MapPin, Clock, ExternalLink, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Contact Nexora Pest Management Gurgaon | Call 8368334476',
  description:
    'Contact Nexora Pest Management Pvt Ltd in Sheetla Colony, Sector 5 Gurgaon. 24/7 Helpline: 8368334476. Get a free home inspection quote or directions to our HQ.',
};

export default function ContactUsPage() {
  return (
    <div className="space-y-16 pb-12">
      <PageHero
        title="Contact Nexora Pest Management Pvt Ltd"
        subtitle="Speak with our Gurgaon technical team, request a free site inspection, or visit our central office at Sector 5."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
        badge="24/7 Helpline & Support"
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-car-driving-down-a-city-street-42513-large.mp4"
        posterUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Two-Column Main Contact Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Full Contact Details & Supporting Office Photo & Map */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-green-600 bg-brand-green-50 px-3 py-1 rounded-full">
                <ShieldCheck className="w-4 h-4" /> Always Here to Help
              </div>
              <h2 className="text-3xl font-extrabold text-brand-slate tracking-tight">
                Get in Touch with Our Gurgaon HQ
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you need emergency termite control, routine cockroach gel servicing, or commercial FSSAI audit support, our helpline is active 24/7.
              </p>
            </div>

            {/* Supporting Office / Service Fleet Visual Card */}
            <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow-md border-2 border-white">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                alt="Nexora Sector 5 Gurgaon Dispatch Fleet"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/90 via-transparent to-transparent flex items-end p-4">
                <div>
                  <div className="font-extrabold text-white text-sm">Sheetla Colony Operational Facility</div>
                  <div className="text-[11px] text-slate-300">Dispatch hub for all Gurgaon sectors & NCR</div>
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <a
                href="tel:8368334476"
                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:border-brand-green-500 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green-500 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 fill-current animate-pulse" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold uppercase text-slate-400">
                    24/7 Click-to-Call Helpline
                  </div>
                  <div className="text-xl font-extrabold text-brand-slate group-hover:text-brand-green-600 transition-colors">
                    8368334476
                  </div>
                  <div className="text-xs text-brand-amber-500 font-semibold">
                    Instant callback within 15 minutes
                  </div>
                </div>
              </a>

              {/* Address Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-amber-500 text-white flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] font-extrabold uppercase text-slate-400">
                    Corporate Office Address & Registration
                  </div>
                  <div className="text-sm font-bold text-brand-slate leading-snug">
                    Sheetla Colony, Sector 5, Block A, Gurgaon, Haryana 122001
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    CIN: U46692HR2026PTC147850
                  </div>
                  <a
                    href="https://maps.google.com/?q=Sheetla+Colony+Sector+5+Gurgaon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-green-500 hover:underline pt-1"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Operating Hours & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-1">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-brand-slate">
                    <Clock className="w-4 h-4 text-brand-green-500" />
                    <span>Hours of Operation</span>
                  </div>
                  <div className="text-xs text-slate-600">
                    <div>Office: 8:00 AM – 9:00 PM</div>
                    <div className="font-semibold text-brand-green-600">Emergency Dispatch: 24/7</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-1">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-brand-slate">
                    <Mail className="w-4 h-4 text-brand-amber-500" />
                    <span>Email Inquiries</span>
                  </div>
                  <div className="text-xs text-slate-600">
                    <div>contact@nexorapest.online</div>
                    <div>support@nexorapest.online</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map Frame */}
            <div className="bg-white p-2 rounded-3xl border border-slate-200 shadow-md">
              <div className="h-64 rounded-2xl overflow-hidden relative">
                <iframe
                  title="Nexora Pest Management Gurgaon Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.018956972049!2d77.0163351!3d28.4790856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d672957b49%3A0xa1e7d8d6ff0b6d91!2sSheetla%20Colony%2C%20Sector%205%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Full Quote & Contact Form */}
          <div className="lg:col-span-6 sticky top-24">
            <QuoteForm title="Send Us a Message" subtitle="Fill out the form for immediate callback & quote" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTABanner />
      </section>
    </div>
  );
}
