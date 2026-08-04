import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { HeroVideo } from './HeroVideo';

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  breadcrumbs?: { label: string; href?: string }[];
  videoUrl?: string;
  posterUrl?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  badge = 'Nexora Pest Management Gurgaon',
  breadcrumbs = [{ label: 'Home', href: '/' }],
  videoUrl,
  posterUrl = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
}) => {
  return (
    <HeroVideo
      videoUrl={videoUrl}
      posterUrl={posterUrl}
      className="py-16 md:py-24 px-4 border-b border-slate-800 text-white"
    >
      <div className="max-w-7xl mx-auto text-center space-y-4">
        {/* Breadcrumbs */}
        <nav className="flex justify-center items-center space-x-2 text-xs text-brand-green-300 font-medium mb-2">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-slate-300 font-bold">{crumb.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && <ChevronRight className="w-3 h-3 text-slate-500" />}
            </React.Fragment>
          ))}
        </nav>

        {badge && (
          <div className="inline-block bg-brand-green-500/30 backdrop-blur-md text-brand-green-200 border border-brand-green-400/40 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
            {badge}
          </div>
        )}

        <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-md">
          {title}
        </h1>

        <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow">
          {subtitle}
        </p>
      </div>
    </HeroVideo>
  );
};
