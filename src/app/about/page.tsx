import React from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { QuoteForm } from '@/components/QuoteForm';
import { Award, MapPin, Users, Target } from 'lucide-react';

export const metadata = {
  title: 'About Nexora Pest Management Gurgaon | ISO & PCAI Certified',
  description:
    'Learn about Nexora Pest Management Pvt Ltd story, mission, ISO 9001:2015 certifications, PCAI membership, and Gurgaon leadership team.',
};

const CERTIFICATIONS = [
  {
    title: 'ISO 9001:2015 Certified',
    badge: 'Quality Standard',
    image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=400&q=80',
    desc: 'Certified Quality Management System for pest control chemical handling and customer service excellence.',
  },
  {
    title: 'PCAI Active Member',
    badge: 'Association Standards',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80',
    desc: 'Member of Pest Control Association of India adhering to strict entomological ethics.',
  },
  {
    title: 'Government Licensed',
    badge: 'Municipal Authorization',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
    desc: 'Licensed pesticide applicator under Haryana Directorate of Agriculture & Farmers Welfare.',
  },
  {
    title: 'EPA & CIB Approved',
    badge: 'Safety First',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&q=80',
    desc: '100% odorless, eco-friendly chemical formulations safe for children, seniors, and indoor pets.',
  },
];

const TEAM = [
  {
    name: 'Vikram Singh',
    role: 'Head of Technical Operations',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    bio: '8+ years leading field entomology and subterranean termite barrier engineering in Gurgaon high-rises.',
  },
  {
    name: 'Dr. Anita Sharma',
    role: 'Senior Entomologist & Technical Advisor',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'M.Sc. Entomology specialist designing zero-odor cockroach gel matrices and larvicidal mist protocols.',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Commercial Audit Readiness Lead',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Specialist in FSSAI and HACCP compliance auditing for Cyber Hub restaurants and corporate cafeterias.',
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-12">
      <PageHero
        title="About Nexora Pest Management Pvt Ltd"
        subtitle="Gurgaon premier ISO 9001:2015 certified pest control company dedicated to eco-friendly, odorless protection."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        badge="Our Heritage & Licensing"
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-team-of-workers-disinfecting-an-office-42408-large.mp4"
        posterUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Story Section with Supporting HQ / Technician Photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-green-600 bg-brand-green-50 px-3 py-1 rounded-full">
              <MapPin className="w-4 h-4" /> Rooted in Gurgaon, Haryana
            </div>
            <h2 className="text-3xl font-extrabold text-brand-slate tracking-tight">
              Protecting NCR Homes & Businesses with Science & Care
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Founded at Sheetla Colony, Sector 5, Gurgaon, Nexora Pest Management Pvt Ltd was created to replace toxic, smelly, old-fashioned extermination methods with modern, scientific Integrated Pest Management (IPM).
            </p>

            {/* Photo & Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2 items-center">
              {/* Supporting Photo */}
              <div className="md:col-span-5 h-48 rounded-2xl overflow-hidden relative shadow-md border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
                  alt="Nexora HQ Field Inspection Team in Gurgaon"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-bold text-white">Sheetla Colony Sector 5 HQ</span>
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
                    <div className="text-[11px] text-slate-500">100% Police & background checked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <QuoteForm title="Connect with Our Team" subtitle="Book an inspection or ask a question" />
          </div>
        </div>
      </section>

      {/* Certifications & Memberships with Badge Visual Graphics */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold text-brand-amber-400 uppercase tracking-widest">
              Industry Credentials
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Certifications & Regulatory Licensing
            </h2>
            <p className="text-slate-400 text-sm">
              We operate under strict government and technical safety protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between space-y-4 hover:border-brand-green-500 transition-all"
              >
                <div className="relative h-36 w-full bg-slate-800">
                  <Image src={cert.image} alt={cert.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-brand-green-500 text-white flex items-center justify-center shadow-md">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2 text-center flex-1">
                  <span className="text-[10px] font-extrabold uppercase text-brand-amber-400 bg-brand-amber-950/80 border border-brand-amber-500/30 px-2.5 py-0.5 rounded-full inline-block">
                    {cert.badge}
                  </span>
                  <h3 className="text-base font-extrabold text-white pt-1">{cert.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-bold text-brand-green-500 uppercase tracking-widest">
            Leadership & Technical Staff
          </div>
          <h2 className="text-3xl font-extrabold text-brand-slate tracking-tight">
            Meet the Nexora Experts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-card overflow-hidden text-center space-y-4 p-6"
            >
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-brand-green-50 shadow-md">
                <Image src={member.img} alt={member.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-brand-slate">{member.name}</h3>
                <div className="text-xs text-brand-green-600 font-bold mt-0.5">{member.role}</div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTABanner />
      </section>
    </div>
  );
}
