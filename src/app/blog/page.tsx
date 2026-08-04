'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { blogPosts } from '@/data/blog';
import { Calendar, Clock, ArrowRight, User, Filter } from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Seasonal Guides', 'Termite Prevention', 'Commercial Hygiene', 'Home Tips'];

  const filteredPosts = blogPosts.filter(
    (post) => selectedCategory === 'All' || post.category === selectedCategory
  );

  return (
    <div className="space-y-12 pb-12">
      <PageHero
        title="Gurgaon Pest Control Blog & Expert Advice"
        subtitle="Practical tips on termite protection, seasonal pest management, and commercial food hygiene from certified entomologists."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        badge="Expert Knowledge Base"
      />

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm">
          <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Topics:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-green-500 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Image */}
                <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-brand-green-500 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                    {post.category}
                  </div>
                </div>

                {/* Body Content */}
                <div className="px-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-amber-500" />
                      {post.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-green-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-extrabold text-brand-slate group-hover:text-brand-green-500 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read More */}
              <div className="p-6 pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full overflow-hidden relative bg-slate-200">
                    <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                  </div>
                  <span className="text-xs font-bold text-slate-700">{post.author.name}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-green-500 group-hover:text-brand-amber-500 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
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
