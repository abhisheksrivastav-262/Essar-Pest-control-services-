import React from 'react';
import Metadata from 'next';
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
  CheckCircle2,
  Phone,
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
    desc: 'FSSAI audit compliance, zero-tolerance cockroach gel baiting, fly traps, and discreet after-hours servicing.',
  },
  {
    icon: Building2,
    title: 'Corporate Office Parks',
    desc: 'Rodent cable exclusion, cockroach barrier, and washroom sanitization for Cyber City & Golf Course Road offices.',
  },
  {
    icon: Warehouse,
    title: 'Industrial Warehouses & Plants',
    desc: 'IMT Manesar warehouse rodent bait stations, bird netting, and structural wooden pallet termite protection.',
  },
  {
    icon: Hospital,
    title: 'Healthcare & Hospitals',
    desc: 'Ultra-safe, non-toxic IPM treatments meeting NABH healthcare hygiene standards.',
  },
  {
    icon: Hotel,
    title: 'Hotels & Hospitality',
    desc: 'Discreet bed bug prevention, kitchen roach gel baiting, and lawn mosquito fogging for luxury hotels.',
  },
  {
    icon: ShoppingBag,
    title: 'Retail Outlets & Malls',
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
      />

      {/* Overview */}
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

            {/* Business Features */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="p-2 bg-brand-green-50 text-brand-green-500 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-slate text-sm">Discreet After-Hours Servicing</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    We conduct servicing during late night or early morning hours so your business operations and customer dining experience remain 100% uninterrupted.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="p-2 bg-brand-amber-50 text-brand-amber-500 rounded-lg">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-slate text-sm">Comprehensive Audit Documentation Logs</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Every commercial contract includes detailed service trend logs, MSDS safety data sheets, and bait station floor maps for food safety auditors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="p-2 bg-brand-green-50 text-brand-green-500 rounded-lg">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-slate text-sm">Dedicated Gurgaon Key Account Manager</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Single point of contact for emergency callouts, scheduled site audits, and multi-location enterprise contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <QuoteForm title="Request B2B Quote" subtitle="Get a custom proposal for your commercial facility" />
          </div>
        </div>
      </section>

      {/* Industries Served Grid */}
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
                  className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl hover:border-brand-green-500 transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-green-500/20 text-brand-green-400 flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{ind.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{ind.desc}</p>
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
