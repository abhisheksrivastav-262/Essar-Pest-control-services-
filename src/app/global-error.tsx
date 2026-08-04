'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-slate-800 border border-slate-700 rounded-3xl p-8 text-center space-y-5 shadow-2xl">
          <div className="w-16 h-16 bg-brand-green-500/20 text-brand-green-400 rounded-full flex items-center justify-center mx-auto text-2xl font-black">
            🛡️
          </div>
          <h2 className="text-2xl font-black text-white">Application Error</h2>
          <p className="text-xs text-slate-300">
            A temporary system error occurred. Please click reload to restore the session.
          </p>
          <div className="space-y-2 pt-2">
            <button
              onClick={() => reset()}
              className="w-full bg-brand-green-500 hover:bg-brand-green-600 text-white font-extrabold text-xs py-3.5 px-6 rounded-xl transition-all shadow-md"
            >
              Reload Application
            </button>
            <a
              href="tel:8368334476"
              className="block w-full bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-extrabold text-xs py-3 px-6 rounded-xl transition-all shadow-md"
            >
              Call Helpline: 8368334476
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
