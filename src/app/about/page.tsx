import React from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { Award, MapPin, Users, Target, Phone, MessageSquare } from 'lucide-react';

export const metadata = {
  title: "About Essar Pest Control & Service | Quality & Safety Standards",
  description:
    "Learn about Essar Pest Control & Service story, mission, and professional pest management for Commercial, Industrial, Home, Society & Warehouse. Located at Malad West, Mumbai, Maharashtra 400095.",
};

const CERTIFICATIONS = [
  {
    title: 'Certified Safety Standard',
    badge: 'Quality Standard',
    image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=400&q=80',
    desc: 'Adherence to proven management systems for safe pest control chemical handling and customer service excellence.',
  },
  {
    title: 'Professional Service Ethic',
    badge: 'Industry Standards',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80',
    desc: 'Committed to strict ethical pest control practices, environmental responsibility, and structural preservation.',
  },
  {
    title: 'Government Approved Methods',
    badge: 'Certified Application',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
    desc: 'Authorized application of certified pest formulations ensuring legal safety and audit compliance.',
  },
  {
    title: 'Safe & Odorless Formulations',
    badge: 'Safety First',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&q=80',
    desc: '100% odorless, eco-friendly chemical formulations safe for children, seniors, and indoor pets.',
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-12">
      <PageHero
        title="About Essar Pest Control & Service"
        subtitle="Dedicated to eco-friendly, odorless protection for Commercial, Industrial, Home, Society & Warehouse properties."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        badge="Our Heritage & Standards"
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-team-of-workers-disinfecting-an-office-42408-large.mp4"
        posterUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Story Section with Supporting HQ / Technician Photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-green-600 bg-brand-green-50 px-3 py-1 rounded-full">
              <MapPin className="w-4 h-4" /> Malad West, Mumbai
            </div>
            <h2 className="text-3xl font-extrabold text-brand-slate tracking-tight">
              Protecting Properties with Science, Care & Dedication
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Based at Gate no-7, N C C, Shop No 17, Plot No- 8, Malvani Rd, Malvani, Malad West, Mumbai, Maharashtra 400095, Essar Pest Control & Service was created to replace toxic, smelly, old-fashioned extermination methods with modern, scientific Integrated Pest Management (IPM).
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              We specialize in pest management for <strong>Commercial</strong> establishments, <strong>Industrial</strong> facilities, <strong>Home</strong> residences, <strong>Housing Societies</strong>, and large <strong>Warehouses</strong>.
            </p>

            {/* Photo & Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2 items-center">
              {/* Supporting Photo */}
              <div className="md:col-span-5 h-48 rounded-2xl overflow-hidden relative shadow-md border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
                  alt="Essar Pest Control Field Inspection Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-bold text-white">Malad West Office</span>
                </div>
              </div>

              {/* Stats / Features */}
              <div className="md:col-span-7 space-y-3">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                  <div className="p-2 bg-brand-green-50 text-brand-green-500 rounded-lg">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-brand-slate text-xs">Targeted Gel Matrix</div>
                    <div className="text-[11px] text-slate-500">Zero evacuation or dish clearing</div>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                  <div className="p-2 bg-brand-amber-50 text-brand-amber-500 rounded-lg">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-brand-slate text-xs">Verified Local Staff</div>
                    <div className="text-[11px] text-slate-500">Police-verified trained technicians</div>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                  <div className="p-2 bg-brand-green-50 text-brand-green-500 rounded-lg">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-brand-slate text-xs">Full Spectrum Coverage</div>
                    <div className="text-[11px] text-slate-500">Commercial / Industrial / Home / Society / Warehouse</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact quick strip */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="tel:8898172297"
                className="inline-flex items-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-md"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Helpline: 8898172297</span>
              </a>

              <a
                href="https://wa.me/918898172297"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp: 8898172297</span>
              </a>
            </div>
          </div>

          {/* Right Supporting Collage */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-72">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Essar Pest Control Senior Pest Control Specialist"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/80 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <div className="font-extrabold text-base">Expert Entomological Methods</div>
                  <div className="text-xs text-slate-300">Precision chemical calculation & safe baiting</div>
                </div>
              </div>
            </div>

            <div className="bg-brand-slate text-white p-6 rounded-2xl border border-slate-800 space-y-2">
              <div className="text-xs text-brand-amber-400 font-bold uppercase tracking-wider">
                Our Corporate Promise
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We believe that modern pest management should never compromise the health of your family, your pets, or your customers. We back every service with a written satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Industry Standards Grid */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold text-brand-green-500 uppercase tracking-widest">
              Industry Compliance
            </div>
            <h2 className="text-3xl font-extrabold text-brand-slate tracking-tight">
              Our Safety Standards & Protocols
            </h2>
            <p className="text-slate-600 text-sm">
              We operate strictly under government-approved pest control guidelines and safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all overflow-hidden flex flex-col"
              >
                <div className="relative h-36 w-full bg-slate-100">
                  <Image src={cert.image} alt={cert.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-brand-slate/20" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-bold bg-white text-brand-slate px-2.5 py-0.5 rounded-full shadow-sm">
                      {cert.badge}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="font-extrabold text-brand-slate text-sm">{cert.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">{cert.desc}</p>
                  </div>
                </div>
              </div>
            ))}
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
