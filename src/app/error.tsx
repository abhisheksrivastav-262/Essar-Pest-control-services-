'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home, Phone } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Next.js App Error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-2xl text-center max-w-lg space-y-6">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
          <RefreshCw className="w-8 h-8 animate-spin" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-brand-slate">Something Went Wrong</h2>
          <p className="text-xs text-slate-600">
            An unexpected error occurred while loading this page. Please click reload to try again.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto bg-brand-green-500 hover:bg-brand-green-600 text-white font-bold text-xs py-3 px-5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reload Page</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 px-5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Link>

          <a
            href="tel:8898172297"
            className="w-full sm:w-auto bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-bold text-xs py-3 px-5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call 8898172297</span>
          </a>
        </div>
      </div>
    </div>
  );
}
