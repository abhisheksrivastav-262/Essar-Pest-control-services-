import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { QuoteForm } from '@/components/QuoteForm';
import { CTABanner } from '@/components/CTABanner';
import { blogPosts } from '@/data/blog';
import { Calendar, Clock, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Nexora Pest Blog`,
    description: post.excerpt,
  };
}

export default function SingleBlogPostPage({ params }: BlogPostProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="space-y-16 pb-12">
      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title.slice(0, 30) + '...' },
        ]}
        badge={post.category}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Rich Content */}
          <div className="lg:col-span-8 space-y-8 bg-white p-6 md:p-10 rounded-3xl border border-slate-200/80 shadow-md">
            {/* Header Meta Info */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden relative bg-slate-200">
                  <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-brand-slate">{post.author.name}</div>
                  <div className="text-xs text-slate-500">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-amber-500" />
                  {post.publishDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-green-500" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-80 w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
              <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
            </div>

            {/* Intro Paragraph */}
            <div className="prose max-w-none text-slate-700 space-y-6 text-sm leading-relaxed">
              <p className="text-base font-medium text-slate-900 leading-relaxed border-l-4 border-brand-green-500 pl-4 py-1 bg-brand-green-50/50 rounded-r-xl">
                {post.content.intro}
              </p>

              {/* Dynamic Body Sections */}
              {post.content.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3 pt-2">
                  <h3 className="text-xl font-extrabold text-brand-slate tracking-tight">
                    {sec.heading}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{sec.body}</p>

                  {sec.bulletPoints && (
                    <ul className="space-y-2 pt-1 pl-2">
                      {sec.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-green-500 flex-shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Conclusion Box */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2 mt-6">
                <h4 className="font-extrabold text-brand-slate text-base">Key Takeaway</h4>
                <p className="text-xs text-slate-600">{post.content.conclusion}</p>
              </div>
            </div>
          </div>

          {/* Sidebar Sidebar */}
          <div className="lg:col-span-4 sticky top-24 space-y-8">
            <QuoteForm title="Need Professional Help?" subtitle="Book instant inspection in Gurgaon" compact />

            {/* Related Posts */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md space-y-4">
              <h4 className="font-extrabold text-brand-slate text-base">Related Articles</h4>
              <div className="space-y-4">
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.slug}
                    href={`/blog/${rPost.slug}`}
                    className="block group border-b border-slate-100 pb-3 last:border-none last:pb-0"
                  >
                    <span className="text-[10px] font-bold uppercase text-brand-green-600 bg-brand-green-50 px-2 py-0.5 rounded-md">
                      {rPost.category}
                    </span>
                    <h5 className="font-bold text-xs text-slate-800 group-hover:text-brand-green-500 transition-colors mt-1.5 leading-snug">
                      {rPost.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <CTABanner />
      </div>
    </div>
  );
}
