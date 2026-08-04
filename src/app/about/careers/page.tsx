'use client';

import React, { useState } from 'react';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { openPositions, JobPosition } from '@/data/careers';
import { Briefcase, MapPin, DollarSign, ChevronDown, CheckCircle2, Send, UploadCloud, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ApplicationFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experienceYears: string;
  notes?: string;
}

export default function CareersPage() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>('tech-gurgaon');
  const [applyingJobTitle, setApplyingJobTitle] = useState<string>('Certified Pest Control Specialist / Technician');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    defaultValues: {
      position: 'Certified Pest Control Specialist / Technician',
    },
  });

  const toggleExpand = (id: string, title: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
    setApplyingJobTitle(title);
    setValue('position', title);
  };

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    console.log('Job Application Submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="space-y-16 pb-12">
      <PageHero
        title="Careers & Hiring at Nexora Pest Management"
        subtitle="Join Gurgaon fastest-growing, ISO-certified home services company. Competitive pay, health benefits, and career growth."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
          { label: 'Careers' },
        ]}
        badge="Gurgaon HQ Hiring"
      />

      {/* Culture & Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-bold text-brand-green-500 uppercase tracking-widest">
            Why Work With Nexora
          </div>
          <h2 className="text-3xl font-extrabold text-brand-slate tracking-tight">
            Build Your Career in Home Services
          </h2>
          <p className="text-slate-600 text-sm">
            We empower our field technicians, operations managers, and customer care executives with top-tier training and equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-green-50 text-brand-green-500 flex items-center justify-center font-bold">
              💰
            </div>
            <h3 className="font-extrabold text-brand-slate text-base">Competitive Compensation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Above-market salary packages, monthly performance bonuses, petrol allowances, and annual appraisal cycles.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-amber-50 text-brand-amber-500 flex items-center justify-center font-bold">
              🎓
            </div>
            <h3 className="font-extrabold text-brand-slate text-base">PCAI Entomological Training</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Receive formal certification in chemical handling safety, IPM procedures, and subterranean termite barriering.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-green-50 text-brand-green-500 flex items-center justify-center font-bold">
              🛡️
            </div>
            <h3 className="font-extrabold text-brand-slate text-base">Health Insurance & PPE</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full medical insurance coverage for technicians and family, plus state-of-the-art protective gear.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-bold text-brand-green-500 uppercase tracking-widest">
            Current Gurgaon Vacancies
          </div>
          <h2 className="text-3xl font-extrabold text-brand-slate tracking-tight">
            Open Positions ({openPositions.length})
          </h2>
        </div>

        <div className="space-y-4">
          {openPositions.map((job) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <div
                key={job.id}
                className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded ? 'border-brand-green-500 shadow-xl' : 'border-slate-200/80 shadow-sm'
                }`}
              >
                {/* Header Header */}
                <div
                  onClick={() => toggleExpand(job.id, job.title)}
                  className="p-6 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-4 select-none hover:bg-slate-50/50"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold uppercase bg-brand-green-50 text-brand-green-600 px-2.5 py-0.5 rounded-full">
                        {job.department}
                      </span>
                      <span className="text-[10px] font-bold uppercase bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-brand-slate">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-green-500" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-3.5 h-3.5 text-brand-amber-500" />
                        {job.salaryRange}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end md:self-auto">
                    <button className="bg-brand-amber-500 text-white font-extrabold text-xs px-4 py-2 rounded-xl">
                      {isExpanded ? 'Hide Details' : 'View & Apply'}
                    </button>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="p-6 pt-0 border-t border-slate-100 space-y-6 animate-fadeIn">
                    <p className="text-xs text-slate-600 leading-relaxed pt-4">{job.summary}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                        <h4 className="font-extrabold text-brand-slate text-xs uppercase tracking-wider mb-2">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {job.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <span className="text-brand-green-500 font-bold">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                        <h4 className="font-extrabold text-brand-slate text-xs uppercase tracking-wider mb-2">
                          Candidate Requirements
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {job.requirements.map((req, reqIdx) => (
                            <li key={reqIdx} className="flex items-start gap-2">
                              <span className="text-brand-amber-500 font-bold">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href="#application-form"
                        className="inline-flex items-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all"
                      >
                        <span>Apply for {job.title} Below</span>
                        <Send className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Job Application Form Section */}
      <section id="application-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl space-y-6">
          <div className="space-y-1 text-center">
            <h3 className="text-2xl font-extrabold text-brand-slate">Submit Job Application</h3>
            <p className="text-xs text-slate-500">
              Apply for <span className="font-bold text-brand-green-600">{applyingJobTitle}</span>
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-brand-green-50 border border-brand-green-200 p-6 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-brand-green-500 mx-auto" />
              <h4 className="font-bold text-brand-slate text-lg">Application Submitted Successfully!</h4>
              <p className="text-xs text-slate-600">
                Our HR manager will review your details and call you on your mobile number within 24 business hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-bold text-brand-green-600 hover:underline pt-2 block mx-auto"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Applying Position <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('position', { required: 'Select a position' })}
                    className="w-full text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green-500"
                  >
                    {openPositions.map((pos) => (
                      <option key={pos.id} value={pos.title}>
                        {pos.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Kumar"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green-500"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Mobile Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="8368334476"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: { value: /^[0-9]{10}$/, message: 'Enter 10-digit number' },
                    })}
                    className="w-full text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green-500"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="yourname@gmail.com"
                    {...register('email')}
                    className="w-full text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green-500"
                  />
                </div>
              </div>

              {/* Fake Resume File Upload Box */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Upload Resume / CV (PDF or DOCX)
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center hover:border-brand-green-500 transition-colors bg-slate-50 cursor-pointer">
                  <UploadCloud className="w-8 h-8 text-brand-green-500 mx-auto mb-2" />
                  <div className="text-xs font-bold text-slate-700">Click or Drag & Drop Resume File Here</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Maximum size 5MB</div>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Brief Cover Message / Experience Summary
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your past work experience in Gurgaon..."
                  {...register('notes')}
                  className="w-full text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Submit Job Application</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTABanner />
      </section>
    </div>
  );
}
