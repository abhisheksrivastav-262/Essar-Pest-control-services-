import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  ShieldCheck,
  Clock,
  UserCheck,
  Award,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Check,
  Bug,
} from 'lucide-react';
import { QuoteForm } from '@/components/QuoteForm';
import { PestCard } from '@/components/PestCard';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { CTABanner } from '@/components/CTABanner';
import { HeroVideo } from '@/components/HeroVideo';
import { pestsData } from '@/data/pests';

const serviceImages = [
  ['WhatsApp Image 2026-11-20 at 13.10.14 (2).jpeg', 'Cockroach control service'],
  ['WhatsApp Image 2026-11-20 at 13.10.16 (1).jpeg', 'Rodent control service'],
  ['WhatsApp Image 2026-11-20 at 13.10.14 (1).jpeg', 'Mosquito fogging service'],
  ['/images/pests/Wasps & Honey Bees.png', 'Honey bee and wasp control'],
  ['WhatsApp Image 2026-11-20 at 13.10.15 (1).jpeg', 'General pest management service'],
  ['/images/pests/Subterranean Termites (Deemak).png', 'Termite treatment'],
];

export default function HomePage() {
  const commonPests = pestsData.filter((p) =>
    ['termites', 'german-cockroach', 'bed-bugs', 'rodents'].includes(p.slug)
  );
  const featuredServices = [
    { title: 'Gel Treatment', description: 'Targeted gel application for cockroaches and other crawling pests in kitchens, cabinets, and common hiding spots.', icon: Sparkles, image: serviceImages[0] },
    { title: 'Rodent Treatment', description: 'Inspection, baiting, entry point identification, and practical exclusion guidance for rats and mice.', icon: ShieldCheck, image: serviceImages[1] },
    { title: 'Mosquitoes Treatment', description: 'Treatment for mosquito resting and breeding areas, with guidance to reduce standing water around the property.', icon: RotateCcw, image: serviceImages[2] },
    { title: 'Honey Bees Pest Control', description: 'Assessment and safe, situation-specific management of bee activity around homes and workplaces.', icon: Award, image: serviceImages[3] },
    { title: 'General Pest Management Process', description: 'A planned inspection, suitable treatment, and follow-up approach for common household and commercial pests.', icon: Check, image: serviceImages[4] },
    { title: 'Termite Treatment', description: 'Termite inspection and treatment recommendations for affected woodwork, walls, and building foundations.', icon: Bug, image: serviceImages[5] },
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-12">
      {/* 1. HERO SECTION WITH BUSINESS VIDEO BACKGROUND & HIGH CONTRAST OVERLAY */}
      <HeroVideo
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-disinfecting-a-room-with-a-spray-machine-42407-large.mp4"
        posterUrl="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
        className="py-12 md:py-20 text-white border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-brand-green-500/30 text-brand-green-200 border border-brand-green-400/40 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-brand-amber-400" />
                Commercial • Industrial • Home • Society • Warehouse
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight drop-shadow-md">
                Live <span className="text-brand-amber-400">Pest-Free</span> with Essar Pest Control & Service
              </h1>

              <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed drop-shadow">
                Government-licensed, odorless, and eco-friendly pest protection for Commercial, Industrial, Home, Society, and Warehouse properties. 100% satisfaction guarantee with rapid emergency dispatch.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="tel:8898172297"
                  className="w-full sm:w-auto bg-brand-green-500 hover:bg-brand-green-600 text-white font-extrabold text-base py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                >
                  <Phone className="w-5 h-5 fill-current animate-pulse" />
                  <span>Call 8898172297 (24/7)</span>
                </a>

                <Link
                  href="/residential-services"
                  className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700 font-bold text-base py-4 px-8 rounded-2xl transition-all flex items-center justify-center gap-2 backdrop-blur-md"
                >
                  <span>Explore Plans</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-700/80 text-slate-200 text-xs font-semibold">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-brand-amber-400 font-black text-base">₹999</span>
                  <span>Plans Start At</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-brand-green-400 font-black text-base">15 Mins</span>
                  <span>Quick Callback</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-brand-amber-400 font-black text-base">100%</span>
                  <span>Satisfaction Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Form Component */}
            <div className="lg:col-span-5">
              <QuoteForm compact title="Get Same-Day Service Quote" />
            </div>
          </div>
        </div>
      </HeroVideo>

      {/* 2. WHY CHOOSE US (6-Icon Feature Grid + Supporting Stock Photo Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-bold text-brand-green-500 uppercase tracking-widest bg-brand-green-50 px-3 py-1 rounded-full inline-block">
            The Essar Difference
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-slate tracking-tight">
            Why Clients Trust Essar Pest Control & Service
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            We deliver professional corporate standards, government-approved odorless chemicals, and verified local technicians for every commercial, industrial, home, society, and warehouse property.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 6 Feature Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-green-50 text-brand-green-500 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-slate">24/7 Emergency Service</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pest emergencies don&apos;t wait for office hours. Call 8898172297 anytime for rapid same-day technician dispatch.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-amber-50 text-brand-amber-500 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-slate">100% Satisfaction Guarantee</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If pests reappear between scheduled service visits, we return and re-treat your premises completely free of charge.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-green-50 text-brand-green-500 flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-slate">Background-Checked Staff</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every field technician undergoes thorough police verification, background checks, and health screenings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-amber-50 text-brand-amber-500 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-slate">Certified & Licensed Technicians</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trained specialists with expertise in safe chemical application and integrated pest management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-green-50 text-brand-green-500 flex items-center justify-center">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-slate">Free Return Visits Between Services</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our warranty plans include unlimited complimentary spot touch-ups if you spot any lingering activity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-amber-50 text-brand-amber-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-slate">Approved / Kid & Pet Safe</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We exclusively use odorless, government-approved formulations that are safe for children and pets.
              </p>
            </div>
          </div>

          {/* Supporting Photo Column */}
          <div className="lg:col-span-4 h-full min-h-[380px] relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/images/essar/WhatsApp%20Image%202026-11-20%20at%2013.10.15%20(2).jpeg"
              alt="Essar Pest Control team hiring poster"
              fill
              className="object-contain bg-white"
            />
          </div>
        </div>
      </section>

      {/* 3. WHAT TO EXPECT */}
      <section className="bg-brand-green-50/70 border-y border-brand-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold text-brand-green-600 uppercase tracking-widest">
                Seamless Service Experience
              </div>
              <h2 className="text-3xl font-extrabold text-brand-slate tracking-tight">
                What to Expect When You Work with Essar Pest Control & Service
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                From your very first inquiry to complete pest elimination, we deliver a hassle-free 3-step service experience across Commercial, Industrial, Home, Society, and Warehouse sites.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-brand-green-500 text-white rounded-full mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">1. Detailed On-Site Inspection</h4>
                    <p className="text-xs text-slate-600">
                      Our certified technician arrives in uniform, inspects entry points, nesting zones, and moisture sources.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-brand-green-500 text-white rounded-full mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">2. Target Odorless Treatment Application</h4>
                    <p className="text-xs text-slate-600">
                      Zero requirement to empty kitchen cupboards. We apply target gel dots and micro-encapsulated sprays discreetly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-brand-green-500 text-white rounded-full mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">3. Digital Warranty Certificate & Follow-Up</h4>
                    <p className="text-xs text-slate-600">
                      Receive instant WhatsApp/email service receipts backed by our 100% free re-treatment promise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-md text-sm"
                >
                  <span>Request a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[380px]">
                <Image
                  src="/images/essar/WhatsApp%20Image%202026-11-20%20at%2013.09.04.jpeg"
                  alt="Essar pest control technician wearing protective equipment"
                  fill
                  className="object-contain bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section className="bg-white border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold text-brand-green-500 uppercase tracking-widest">Our Services</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-slate tracking-tight">Pest Control Services for Your Property</h2>
            <p className="text-slate-600 text-sm md:text-base">Choose a service to request an inspection and tailored treatment plan for your home, society, or business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map(({ title, description, icon: Icon, image: [image, imageAlt] }) => (
              <article key={title} className="overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-card">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image
                    src={image.startsWith('/') ? image : `/images/essar/${encodeURIComponent(image)}`}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-lg bg-brand-green-50 text-brand-green-600 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h3 className="text-base font-bold text-brand-slate">{title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mt-3">{description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center pt-2">
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
              Request a Service <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. COMMON PEST PROBLEMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-brand-green-500 uppercase tracking-widest">
              Common Pest Infestations
            </div>
            <h2 className="text-3xl font-extrabold text-brand-slate tracking-tight">
              Pest Problems We Solve Daily
            </h2>
          </div>
          <Link
            href="/pest-library"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-green-500 hover:text-brand-amber-500 transition-colors"
          >
            <span>View All Pests in Library</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commonPests.map((pest) => (
            <PestCard key={pest.slug} pest={pest} />
          ))}
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialCarousel />
      </section>

      {/* 7. CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTABanner />
      </section>
    </div>
  );
}
