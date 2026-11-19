import React from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Home, Search, Phone, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="space-y-12 pb-16">
      <PageHero
        title="404 - Page Not Found"
        subtitle="The page or pest resource you are looking for may have been moved or renamed."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: '404 Error' }]}
        badge="Resource Not Found"
      />

      <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-xl space-y-6">
          <div className="w-20 h-20 bg-brand-green-50 text-brand-green-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <Search className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-brand-slate">Looking for Pest Control Services?</h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Don&apos;t worry! You can return to our homepage, explore our Gurgaon service locations, or call our 24/7 emergency dispatch helpline.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/"
              className="w-full sm:w-auto bg-brand-green-500 hover:bg-brand-green-600 text-white font-extrabold text-sm py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              href="/pest-library"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Explore Pest Library</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:8286007801"
              className="w-full sm:w-auto bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-extrabold text-sm py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-current animate-pulse" />
              <span>Call 8286007801</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
