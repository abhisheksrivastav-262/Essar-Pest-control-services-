import React from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { QuoteForm } from '@/components/QuoteForm';
import { CTABanner } from '@/components/CTABanner';
import { Phone, Mail, MapPin, Clock, ExternalLink, ShieldCheck, MessageSquare } from 'lucide-react';

export const metadata = {
  title: "Contact Sangle's Pest Control & Service | Call 8286007801",
  description:
    "Contact Sangle's Pest Control & Service at Office No 2 Laxuman Parb chawl, opp. Bandivali School, Majasgaon, Jogeshwari East 400060. Call or WhatsApp 8286007801. Free site inspections for Commercial, Industrial, Home, Society & Warehouse.",
};

export default function ContactUsPage() {
  return (
    <div className="space-y-16 pb-12">
      <PageHero
        title="Contact Sangle's Pest Control & Service"
        subtitle="Speak with our team, request a free site inspection, or visit our office at Jogeshwari East."
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
                Get in Touch with Our Office
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you need pest control for Commercial properties, Industrial plants, Homes, Housing Societies, or Warehouses, our helpline is active 24/7.
              </p>
            </div>

            {/* Supporting Office / Service Fleet Visual Card */}
            <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow-md border-2 border-white">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                alt="Sangle's Pest Control & Service Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/90 via-transparent to-transparent flex items-end p-4">
                <div>
                  <div className="font-extrabold text-white text-sm">Jogeshwari East Operational Facility</div>
                  <div className="text-[11px] text-slate-300">Office No 2 Laxuman Parb chawl, opp. Bandivali School, Majasgaon, Jogeshwari East 400060</div>
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <a
                href="tel:8286007801"
                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:border-brand-green-500 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green-500 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 fill-current animate-pulse" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold uppercase text-slate-400">
                    24/7 Click-to-Call Contact No
                  </div>
                  <div className="text-xl font-extrabold text-brand-slate group-hover:text-brand-green-600 transition-colors">
                    8286007801
                  </div>
                  <div className="text-xs text-brand-amber-500 font-semibold">
                    Instant callback within 15 minutes
                  </div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/918286007801"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:border-[#25D366] transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold uppercase text-slate-400">
                    WhatsApp Support No
                  </div>
                  <div className="text-xl font-extrabold text-[#25D366] transition-colors">
                    8286007801
                  </div>
                  <div className="text-xs text-slate-500 font-semibold">
                    Chat with us directly on WhatsApp
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
                    Office Address
                  </div>
                  <div className="text-sm font-bold text-brand-slate leading-snug">
                    Office No 2 Laxuman Parb chawl, opposite Bandivali School, Majasgaon, Jogeshwari East 400060
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    Services: Commercial / Industrial / Home / Society / Warehouse
                  </div>
                  <a
                    href="https://maps.google.com/?q=Bandivali+School+Majasgaon+Jogeshwari+East+400060"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-green-500 hover:underline pt-1"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-xs font-extrabold text-brand-slate">
                  <Clock className="w-4 h-4 text-brand-green-500" />
                  <span>Hours of Operation</span>
                </div>
                <div className="text-xs text-slate-600">
                  <div>Office Hours: 8:00 AM – 9:00 PM</div>
                  <div className="font-semibold text-brand-green-600">Emergency & Inspection Dispatch: 24/7 Available</div>
                </div>
              </div>
            </div>

            {/* Embedded Map Frame */}
            <div className="bg-white p-2 rounded-3xl border border-slate-200 shadow-md">
              <div className="h-64 rounded-2xl overflow-hidden relative">
                <iframe
                  title="Sangle's Pest Control & Service Location"
                  src="https://maps.google.com/maps?q=Bandivali+School,+Majasgaon,+Jogeshwari+East,+Mumbai+400060&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
