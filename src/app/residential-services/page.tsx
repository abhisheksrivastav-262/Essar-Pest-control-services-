import React from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { QuoteForm } from '@/components/QuoteForm';
import { CTABanner } from '@/components/CTABanner';
import { Check, ShieldCheck, HelpCircle, Phone } from 'lucide-react';

export const metadata = {
  title: "Home & Residential Pest Control | Essar Pest Control Services",
  description:
    "Comprehensive home pest control packages starting at ₹999. Odorless cockroach gel, termite drill treatment, bed bug steam blast, and mosquito protection. Call 8898172297.",
};

const PLAN_TIERS = [
  {
    name: 'Basic Home Protection',
    price: '₹999',
    period: 'Single Service Visit',
    popular: false,
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80',
    description: 'Ideal for small apartments needing fast, targeted eradication of cockroaches, ants, or silverfish.',
    features: [
      'Odorless Kitchen Gel Baiting',
      'Drain & Bathroom Crevice Spray',
      'Targeted Ant Pheromone Eradication',
      '30-Day Money-Back Warranty',
      'Single Technician Visit',
    ],
  },
  {
    name: 'Standard Shield Plan',
    price: '₹1,999',
    period: '1 Year (3 Service Visits)',
    popular: true,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    description: 'Our most popular annual home plan with 3 scheduled visits covering all crawling and flying insects.',
    features: [
      'Everything in Basic Plan',
      '3 Scheduled Visits Per Year',
      'Balcony Mosquito Larvicidal Treatment',
      'Spider & Cobweb Vacuuming',
      '100% Free Unlimited Callouts Between Visits',
      '1-Year Written Service Warranty',
    ],
  },
  {
    name: 'Premium Complete Protection',
    price: '₹3,499',
    period: '2 Years + Termite Shield',
    popular: false,
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80',
    description: 'Total peace of mind combining annual general pest control with subterranean termite drill-and-fill barrier protection.',
    features: [
      'Everything in Standard Plan',
      'Subterranean Anti-Termite Drill-Fill-Seal Barrier',
      'Bed Bug Thermal Steam Inspection',
      'Rodent Exclusion & Baiting',
      'Priority 1-Hour Emergency Dispatch',
      '2-Year Full Protection Guarantee',
    ],
  },
];

const FAQS = [
  {
    q: 'Do we need to empty our kitchen cabinets before the technician arrives?',
    a: "No! Unlike old-fashioned smelly sprays, Essar Pest Control utilizes odorless herbal gel dots applied directly inside crack junctions. You do not need to empty dishes, utensils, or food packages.",
  },
  {
    q: 'Are the chemicals safe for my children, elderly parents, and pets?',
    a: 'Yes, absolutely. We exclusively use government-approved (CIB&RC) and EPA-registered micro-encapsulated formulations from Bayer and Syngenta that target cold-blooded insect nervous systems while remaining 100% safe for mammals.',
  },
  {
    q: 'What happens if I see cockroaches or ants again after treatment?',
    a: "All Essar Pest Control residential plans come with a written warranty. If pests reappear during your warranty period, simply call 8898172297 and our technician will conduct a free return re-treatment within 24 hours.",
  },
  {
    q: 'How long does subterranean anti-termite treatment last?',
    a: 'Our drill-inject chemical barrier creates an impenetrable subterranean termiticide zone that lasts 3 to 5 years, completely backed by our written warranty certificate.',
  },
];

export default function ResidentialServicesPage() {
  return (
    <div className="space-y-16 pb-12">
      <PageHero
        title="Residential & Home Pest Control Services"
        subtitle="Safe, odorless, and eco-friendly home protection plans designed for apartments, villas, and residential societies."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Residential Services' }]}
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-worker-disinfecting-a-house-with-a-spray-gun-42409-large.mp4"
        posterUrl="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Overview Section with Supporting Kitchen Gel Photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-green-600 bg-brand-green-50 px-3 py-1 rounded-full">
              <ShieldCheck className="w-4 h-4" /> Home Hygiene Specialists
            </div>
            <h2 className="text-3xl font-extrabold text-brand-slate tracking-tight">
              Keep Your Family & Furniture 100% Protected
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Living in residential apartments, housing societies, or independent homes exposes premises to termites, German cockroaches, bed bugs, and seasonal pests. Essar Pest Control & Service combines advanced inspection with eco-friendly treatments that eradicate pests at the source while preserving indoor air quality.
            </p>

            {/* Photo & Features Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2 items-center">
              {/* Kitchen Gel Photo */}
              <div className="md:col-span-5 h-48 rounded-2xl overflow-hidden relative shadow-md border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80"
                  alt="Odorless Kitchen Gel Application in Gurgaon Apartment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-bold text-white">Odorless Kitchen Gel Matrix</span>
                </div>
              </div>

              {/* Coverage Grid */}
              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <div className="font-bold text-brand-slate text-xs">Interior Gel Barrier</div>
                  <div className="text-[11px] text-slate-500">Applied behind appliances & cabinets.</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <div className="font-bold text-brand-slate text-xs">Exterior Perimeter Shield</div>
                  <div className="text-[11px] text-slate-500">Balcony and window track sprays.</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <div className="font-bold text-brand-slate text-xs">Drain & Trench Flushing</div>
                  <div className="text-[11px] text-slate-500">Neutralizing pipe breeding zones.</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <div className="font-bold text-brand-slate text-xs">100% Free Callout</div>
                  <div className="text-[11px] text-slate-500">Unlimited free re-visits in warranty.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <QuoteForm title="Book Home Service" subtitle="Instant quote & same-day visit booking" />
          </div>
        </div>
      </section>

      {/* Pricing / Plan Tiers with Image Headers */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold text-brand-amber-400 uppercase tracking-widest">
              Transparent Indian Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Home Pest Protection Plans
            </h2>
            <p className="text-slate-400 text-sm">
              Choose the right coverage level for your flat or villa. No hidden fees — tax included.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLAN_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-3xl flex flex-col justify-between relative transition-all duration-300 overflow-hidden ${
                  tier.popular
                    ? 'bg-gradient-to-b from-brand-green-900 to-slate-950 border-2 border-brand-green-500 shadow-2xl scale-105'
                    : 'bg-slate-800/80 border border-slate-700 hover:border-slate-600'
                }`}
              >
                {/* Visual Header Image per Plan */}
                <div className="relative h-40 w-full bg-slate-800">
                  <Image src={tier.image} alt={tier.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  {tier.popular && (
                    <div className="absolute top-3 right-3 bg-brand-amber-500 text-white font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md z-10">
                      Most Popular
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-black text-white">{tier.name}</h3>
                      <p className="text-xs text-slate-400 mt-1">{tier.description}</p>
                    </div>

                    <div className="border-y border-slate-700/80 py-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-brand-amber-400">{tier.price}</span>
                        <span className="text-xs text-slate-400 font-medium">/ {tier.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-brand-green-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <a
                      href="tel:8898172297"
                      className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                        tier.popular
                          ? 'bg-brand-amber-500 hover:bg-brand-amber-600 text-white'
                          : 'bg-brand-green-500 hover:bg-brand-green-600 text-white'
                      }`}
                    >
                      <Phone className="w-4 h-4 fill-current" />
                      <span>Book {tier.name}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-brand-green-500 uppercase tracking-widest">
            Got Questions?
          </div>
          <h2 className="text-3xl font-extrabold text-brand-slate tracking-tight">
            Residential Service FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
              <h3 className="font-extrabold text-brand-slate text-base flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-brand-green-500 flex-shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-slate-600 pl-7 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTABanner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTABanner />
      </section>
    </div>
  );
}
