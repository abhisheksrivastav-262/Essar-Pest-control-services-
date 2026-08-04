'use client';

import React, { useState } from 'react';
import { PageHero } from '@/components/PageHero';
import { PestCard } from '@/components/PestCard';
import { CTABanner } from '@/components/CTABanner';
import { pestsData } from '@/data/pests';
import { Search, Filter, Bug } from 'lucide-react';

export default function PestLibraryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Insects', 'Crawling', 'Flying', 'Rodents'];

  const filteredPests = pestsData.filter((pest) => {
    const matchesSearch =
      pest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pest.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pest.shortHook.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || pest.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12 pb-12">
      <PageHero
        title="Gurgaon Pest Identification Library"
        subtitle="Learn how to identify common Indian pests, recognize signs of infestation, and understand Nexora target treatment solutions."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Pest Library' }]}
        badge="Complete Identification Guide"
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-close-up-shot-of-ants-on-wood-43093-large.mp4"
        posterUrl="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search pest by name (e.g., Termite, Roach, Bed Bug)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:bg-white transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-green-500 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pest Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPests.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
            <Bug className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-700">No matching pests found</h3>
            <p className="text-xs text-slate-500">
              Try searching for terms like &quot;termites&quot;, &quot;ants&quot;, or click &quot;All&quot; to reset filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPests.map((pest) => (
              <PestCard key={pest.slug} pest={pest} />
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTABanner
          title="Not sure what pest is invading your home?"
          subtitle="Our Gurgaon entomologists offer free photo identification via WhatsApp or on-site inspection. Call 8368334476 today."
          badge="Free Pest Identification"
        />
      </section>
    </div>
  );
}
