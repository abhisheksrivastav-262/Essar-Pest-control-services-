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
  CheckCircle2,
  ArrowRight,
  Check,
} from 'lucide-react';
import { QuoteForm } from '@/components/QuoteForm';
import { PestCard } from '@/components/PestCard';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { CTABanner } from '@/components/CTABanner';
import { HeroAnimatedBg } from '@/components/HeroAnimatedBg';
import { pestsData } from '@/data/pests';

export default function HomePage() {
  const commonPests = pestsData.filter((p) =>
    ['termites', 'german-cockroach', 'bed-bugs', 'rodents'].includes(p.slug)
  );

  return (
    <div className="space-y-16 md:space-y-24 pb-12">
      {/* 1. HERO SECTION WITH ANIMATED PEST-CONTROL BACKGROUND */}
      <section className="relative bg-gradient-to-br from-brand-green-950 via-brand-slate to-slate-950 text-white py-12 md:py-20 overflow-hidden border-b border-slate-800">
        {/* Subtle Animated Background Elements */}
        <HeroAnimatedBg />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-brand-green-500/30 text-brand-green-200 border border-brand-green-400/40 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-brand-amber-400" />
                Gurgaon #1 ISO Certified Pest Management
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight drop-shadow-md">
                Live <span className="text-brand-amber-400">Pest-Free</span> with Nexora Management
              </h1>

              <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed drop-shadow">
                Government-licensed, odorless, and eco-friendly pest protection for Gurgaon homes and businesses. 100% money-back guarantee with same-day emergency dispatch.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="tel:8368334476"
                  className="w-full sm:w-auto bg-brand-green-500 hover:bg-brand-green-600 text-white font-extrabold text-base py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                >
                  <Phone className="w-5 h-5 fill-current animate-pulse" />
                  <span>Call 8368334476 (24/7)</span>
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
                  <span>Gurgaon Callback</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-brand-amber-400 font-black text-base">100%</span>
                  <span>Money Back Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Form Component */}
            <div className="lg:col-span-5">
              <QuoteForm compact title="Get Same-Day Service Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US (6-Icon Feature Grid + Supporting Stock Photo Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-bold text-brand-green-500 uppercase tracking-widest bg-brand-green-50 px-3 py-1 rounded-full inline-block">
            The Nexora Difference
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-slate tracking-tight">
            Why Gurgaon Homeowners Trust Nexora
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            We bring professional corporate standards, government-approved odorless chemicals, and verified local technicians to every job.
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
                Pest emergencies don&apos;t wait for office hours. Call 8368334476 anytime for rapid same-day technician dispatch across Gurgaon.
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
                Every Nexora field technician undergoes thorough police verification, background checks, and health screenings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-amber-50 text-brand-amber-500 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-slate">Certified & Licensed Technicians</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trained under PCAI guidelines with expertise in chemical safety and precision application.
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
              <h3 className="text-lg font-bold text-brand-slate">EPA-Approved / Kid & Pet Safe</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We exclusively use odorless Bayer & Syngenta formulations that are non-toxic to children and pets.
              </p>
            </div>
          </div>

          {/* Supporting Photo Column */}
          <div className="lg:col-span-4 h-full min-h-[380px] relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80"
              alt="Nexora Certified Pest Technician in Protective Gear"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/90 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <div className="font-extrabold text-base">Verified Field Specialist</div>
                <div className="text-xs text-slate-300">Equipped with EPA-approved odorless gel formulations</div>
              </div>
            </div>
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
                What to Expect When You Work with Nexora
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                From your very first inquiry to complete pest elimination, we deliver a hassle-free 3-step home service experience.
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
                    <h4 className="font-bold text-slate-900 text-sm">3. Digital Warranty Certificate & Audit Logs</h4>
                    <p className="text-xs text-slate-600">
                      Receive instant WhatsApp/email warranty receipts backed by our 100% free re-treatment promise.
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
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                  alt="Nexora Technician Performing Home Sanitation Inspection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="font-extrabold text-lg">Gurgaon Certified Technicians</div>
                    <div className="text-xs text-slate-200">Sheetla Colony Operational Fleet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMMON PEST PROBLEMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-brand-green-500 uppercase tracking-widest">
              Common Gurgaon Infestations
            </div>
            <h2 className="text-3xl font-extrabold text-brand-slate tracking-tight">
              Pest Problems We Solve Daily
            </h2>
          </div>
          <Link
            href="/pest-library"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-green-500 hover:text-brand-amber-500 transition-colors"
          >
            <span>View All 15+ Pests in Library</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commonPests.map((pest) => (
            <PestCard key={pest.slug} pest={pest} />
          ))}
        </div>
      </section>

      {/* 5. TECHNICIAN SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative h-72 lg:h-auto bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Vikram Singh Senior Supervisor Nexora Pest Management"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="lg:col-span-7 p-8 md:p-12 space-y-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-amber-600 bg-brand-amber-50 px-3 py-1 rounded-full w-max">
                <CheckCircle2 className="w-4 h-4" /> Technician Spotlight
              </div>

              <blockquote className="text-lg md:text-xl font-medium text-slate-800 italic leading-relaxed">
                &ldquo;At Nexora, we treat every home in Gurgaon as if it were our own family&apos;s residence. We don&apos;t just spray chemical solution — we locate the subterranean nest queen and guarantee 100% long-term protection.&rdquo;
              </blockquote>

              <div>
                <div className="font-extrabold text-brand-slate text-base">Vikram Singh</div>
                <div className="text-xs text-brand-green-600 font-semibold">
                  Head of Technical Operations & Senior Entomologist (8+ Years Service in Gurgaon)
                </div>
              </div>
            </div>
          </div>
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
