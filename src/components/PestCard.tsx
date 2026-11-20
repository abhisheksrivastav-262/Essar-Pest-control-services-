import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, AlertTriangle } from 'lucide-react';
import { Pest } from '@/data/pests';

interface PestCardProps {
  pest: Pest;
}

export const PestCard: React.FC<PestCardProps> = ({ pest }) => {
  const dangerBadgeColor = {
    Low: 'bg-emerald-100 text-emerald-800',
    Moderate: 'bg-blue-100 text-blue-800',
    High: 'bg-amber-100 text-amber-800',
    Severe: 'bg-red-100 text-red-800',
  }[pest.dangerLevel];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Photo Container */}
      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
        <Image
          src={pest.imageUrl}
          alt={`Essar Pest Control Services - ${pest.name} Control`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${dangerBadgeColor}`}>
            {pest.dangerLevel} Threat
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1 font-medium">
            <span>{pest.scientificName}</span>
            <span className="flex items-center gap-1 text-slate-500">
              <Calendar className="w-3 h-3 text-brand-green-500" />
              {pest.category}
            </span>
          </div>

          <h3 className="text-xl font-extrabold text-brand-slate group-hover:text-brand-green-500 transition-colors">
            {pest.name}
          </h3>

          <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {pest.shortHook}
          </p>
        </div>

        {/* Action Link */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 font-semibold flex items-center gap-1">
            <AlertTriangle className="w-3 h-3 text-brand-amber-500" />
            {pest.primarySeason}
          </span>

          <Link
            href={`/pest-library/${pest.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-brand-green-500 group-hover:text-brand-amber-500 transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
