import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { QuoteForm } from '@/components/QuoteForm';
import { PestCard } from '@/components/PestCard';
import { CTABanner } from '@/components/CTABanner';
import { pestsData } from '@/data/pests';
import { AlertCircle, Calendar, ArrowLeft } from 'lucide-react';

interface PestPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return pestsData.map((pest) => ({
    slug: pest.slug,
  }));
}

export async function generateMetadata({ params }: PestPageProps) {
  const pest = pestsData.find((p) => p.slug === params.slug);
  if (!pest) return { title: 'Pest Not Found' };

  return {
    title: `${pest.name} Control in Gurgaon | Nexora Pest Management`,
    description: `Professional ${pest.name} eradication in Gurgaon. ${pest.tagline}. Safe, odorless, and government-approved treatment with written warranty. Call 8368334476.`,
  };
}

export default function SinglePestPage({ params }: PestPageProps) {
  const pest = pestsData.find((p) => p.slug === params.slug);

  if (!pest) {
    notFound();
  }

  const relatedPests = pestsData
    .filter((p) => p.slug !== pest.slug)
    .slice(0, 3);

  return (
    <div className="space-y-16 pb-12">
      <PageHero
        title={`Live ${pest.name}-Free with Nexora`}
        subtitle={pest.tagline}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Pest Library', href: '/pest-library' },
          { label: pest.name },
        ]}
        badge={`${pest.category} Management Specialist`}
        posterUrl={pest.imageUrl}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Content */}
          <div className="lg:col-span-7 space-y-10">
            {/* Top Overview Box */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-md space-y-6">
              <div className="relative h-72 w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={pest.imageUrl}
                  alt={`Nexora Pest Management - ${pest.name} Control`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-brand-slate/90 text-white font-bold text-xs px-3 py-1.5 rounded-full backdrop-blur-md">
                  Scientific Name: {pest.scientificName}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-b border-slate-100 pb-4 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-brand-green-500" />
                  <span>Primary Peak Season: <strong className="text-brand-slate">{pest.primarySeason}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-brand-amber-500" />
                  <span>Threat Level: <strong className="text-brand-amber-600">{pest.dangerLevel}</strong></span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h2 className="text-2xl font-extrabold text-brand-slate">About {pest.name}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{pest.description}</p>
              </div>

              {/* Appearance & Behavior */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <h4 className="font-extrabold text-brand-slate text-xs uppercase tracking-wider mb-1">
                    Appearance
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{pest.appearance}</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <h4 className="font-extrabold text-brand-slate text-xs uppercase tracking-wider mb-1">
                    Behavior & Habitat
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{pest.behavior}</p>
                </div>
              </div>
            </div>

            {/* Why It's a Problem (With Supporting Visual Card) */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-md space-y-6">
              <h3 className="text-xl font-extrabold text-brand-slate flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-brand-amber-500" />
                Why {pest.name} Are a Major Hazard in Gurgaon
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7">
                  <ul className="space-y-2.5">
                    {pest.whyItsAProblem.map((prob, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-slate-700 leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-brand-amber-500 mt-1.5 flex-shrink-0" />
                        <span>{prob}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Supporting Hazard Photo */}
                <div className="md:col-span-5 h-48 rounded-2xl overflow-hidden relative shadow-sm border-2 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80"
                    alt={`Property Hazard caused by ${pest.name}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] font-bold text-white">Gurgaon Property Damage Risk</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Treatment Process (Numbered Steps + Supporting Treatment Photo) */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-md space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-bold text-brand-green-600 uppercase tracking-wider">
                  Guaranteed Eradication Protocol
                </div>
                <h3 className="text-2xl font-extrabold text-brand-slate">
                  Our 3-Step {pest.name} Treatment Process
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Steps */}
                <div className="md:col-span-8 space-y-6">
                  {pest.treatmentProcess.map((step) => (
                    <div key={step.step} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-brand-green-500 text-white font-extrabold flex items-center justify-center text-lg flex-shrink-0 shadow-md">
                        {step.step}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-extrabold text-brand-slate text-base">{step.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Supporting Treatment Photo */}
                <div className="md:col-span-4 h-64 rounded-2xl overflow-hidden relative shadow-md border-2 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
                    alt={`Nexora Technician Performing ${pest.name} Treatment`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/90 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] font-bold text-white">Target Treatment Protocol</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Quote Form */}
          <div className="lg:col-span-5 sticky top-24">
            <QuoteForm
              title={`Eradicate ${pest.name}`}
              subtitle="Free quote & guaranteed same-day inspection"
            />
          </div>
        </div>

        {/* Related Pests Grid */}
        <div className="space-y-6 border-t border-slate-200 pt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-extrabold text-brand-slate">Other Pests We Treat</h3>
            <Link
              href="/pest-library"
              className="text-xs font-bold text-brand-green-500 hover:underline flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Full Library
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPests.map((rPest) => (
              <PestCard key={rPest.slug} pest={rPest} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <CTABanner />
      </div>
    </div>
  );
}
