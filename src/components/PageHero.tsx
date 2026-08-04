import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  badge = 'Nexora Pest Management Gurgaon',
  breadcrumbs = [{ label: 'Home', href: '/' }],
}) => {
  return (
    <div className="relative bg-gradient-to-br from-brand-green-900 via-brand-slate to-slate-950 text-white py-16 md:py-20 px-4 overflow-hidden border-b border-slate-800">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1F6B3A_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
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
          <div className="inline-block bg-brand-green-500/20 text-brand-green-300 border border-brand-green-500/40 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
            {badge}
          </div>
        )}

        <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
          {title}
        </h1>

        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
