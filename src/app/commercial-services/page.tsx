import React from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { QuoteForm } from '@/components/QuoteForm';
import { CTABanner } from '@/components/CTABanner';
import {
  UtensilsCrossed,
  Building2,
  Hospital,
  ShoppingBag,
  Hotel,
  Warehouse,
  ShieldCheck,
  FileCheck,
  Clock,
} from 'lucide-react';

export const metadata = {
  title: 'Commercial Pest Control Gurgaon | FSSAI & HACCP Compliant Hygiene',
  description:
    'Commercial Integrated Pest Management (IPM) for Gurgaon restaurants, Cyber City office parks, hotels, cloud kitchens, and warehouses. Discite night-shift servicing & audit logs.',
};

const INDUSTRIES = [
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Cloud Kitchens',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    desc: 'FSSAI audit compliance, zero-tolerance cockroach gel baiting, fly traps, and discreet after-hours servicing.',
  },
  {
    icon: Building2,
    title: 'Corporate Office Parks',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    desc: 'Rodent cable exclusion, cockroach barrier, and washroom sanitization for Cyber City & Golf Course Road offices.',
  },
  {
    icon: Warehouse,
    title: 'Industrial Warehouses & Plants',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    desc: 'IMT Manesar warehouse rodent bait stations, bird netting, and structural wooden pallet termite protection.',
  },
  {
    icon: Hospital,
    title: 'Healthcare & Hospitals',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    desc: 'Ultra-safe, non-toxic IPM treatments meeting NABH healthcare hygiene standards.',
  },
  {
    icon: Hotel,
    title: 'Hotels & Hospitality',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    desc: 'Discreet bed bug prevention, kitchen roach gel baiting, and lawn mosquito fogging for luxury hotels.',
  },
  {
    icon: ShoppingBag,
    title: 'Retail Outlets & Malls',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80',
    desc: 'Scheduled monthly pest maintenance logs for retail chains across MG Road and Ambience Mall.',
  },
];

export default function CommercialServicesPage() {
  return (
    <div className="space-y-16 pb-12">
      <PageHero
        title="Commercial Integrated Pest Management (IPM)"
        subtitle="Protect your brand reputation, ensure FSSAI audit compliance, and safeguard commercial premises across Gurgaon & NCR."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Commercial Services' }]}
        badge="Enterprise B2B Solutions"
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-cleaning-the-counters-of-a-kitchen-42405-large.mp4"
        posterUrl="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Overview with Commercial Kitchen Photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-green-600 bg-brand-green-50 px-3 py-1 rounded-full">
              <FileCheck className="w-4 h-4" /> FSSAI & HACCP Audit Ready
            </div>
            <h2 className="text-3xl font-extrabold text-brand-slate tracking-tight">
              Zero-Tolerance Pest Compliance for Businesses
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              A single pest sighting in a commercial establishment can ruin customer trust, cause audit failures, and endanger operating licenses. Nexora Commercial Services provides custom Integrated Pest Management (IPM) contracts tailored to your operational schedule.
            </p>

            {/* Photo + Features Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2 items-center">
              {/* Kitchen Photo */}
              <div className="md:col-span-5 h-56 rounded-2xl overflow-hidden relative shadow-md border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
                  alt="Commercial Restaurant Kitchen Pest Inspection Gurgaon"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-bold text-white">Cyber Hub Restaurant Servicing</span>
                </div>
              </div>

              {/* Business Features */}
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <div className="p-1.5 bg-brand-green-50 text-brand-green-500 rounded-lg">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-slate text-xs">Discreet After-Hours Servicing</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Night shift servicing so customer operations remain 100% uninterrupted.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <div className="p-1.5 bg-brand-amber-50 text-brand-amber-500 rounded-lg">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-slate text-xs">FSSAI Audit Logbooks</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Detailed MSDS safety data sheets & bait station maps provided.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <div className="p-1.5 bg-brand-green-50 text-brand-green-500 rounded-lg">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-slate text-xs">Gurgaon Key Account Manager</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Dedicated manager for rapid 1-hour commercial emergency dispatch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <QuoteForm title="Request B2B Quote" subtitle="Get a custom proposal for your commercial facility" />
          </div>
        </div>
      </section>

      {/* Industries Served Grid with Representative Photos */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold text-brand-amber-400 uppercase tracking-widest">
              Tailored B2B Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Industries We Protect in Gurgaon & NCR
            </h2>
            <p className="text-slate-400 text-sm">
              Over 200+ commercial clients trust Nexora for monthly pest management compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-800/80 border border-slate-700 rounded-2xl overflow-hidden hover:border-brand-green-500 transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="relative h-44 w-full bg-slate-800">
                    <Image src={ind.image} alt={ind.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-brand-green-500 text-white flex items-center justify-center shadow-md">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 pt-0 space-y-2 flex-1">
                    <h3 className="text-lg font-bold text-white">{ind.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commercial Callout strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTABanner
          title="Need Immediate Commercial Audit Readiness?"
          subtitle="Speak with our Senior Commercial Technical Officer at 8368334476 for a free site audit."
          badge="Enterprise Hotline"
        />
      </section>
    </div>
  );
}
