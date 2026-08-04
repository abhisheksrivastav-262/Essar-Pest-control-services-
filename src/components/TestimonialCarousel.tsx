'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { customerReviews } from '@/data/reviews';

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? customerReviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === customerReviews.length - 1 ? 0 : prev + 1));
  };

  const currentReview = customerReviews[currentIndex];

  return (
    <div className="bg-gradient-to-br from-brand-slate to-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden my-12 border border-slate-800">
      {/* Decorative Quote Icon Background */}
      <div className="absolute top-4 right-8 text-slate-800/40 pointer-events-none">
        <Quote className="w-36 h-36" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-brand-green-500/20 text-brand-green-400 border border-brand-green-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          Verified Gurgaon Customer Reviews
        </div>

        {/* Rating Stars */}
        <div className="flex justify-center space-x-1">
          {[...Array(currentReview.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-brand-amber-400 text-brand-amber-400" />
          ))}
        </div>

        {/* Comment */}
        <blockquote className="text-lg md:text-xl font-medium text-slate-100 italic leading-relaxed">
          &ldquo;{currentReview.comment}&rdquo;
        </blockquote>

        {/* Customer Details */}
        <div className="pt-4 border-t border-slate-800/80 inline-block">
          <div className="font-extrabold text-base text-white">{currentReview.authorName}</div>
          <div className="text-xs text-brand-amber-400 font-semibold mt-0.5">
            {currentReview.location} &bull; <span className="text-slate-400 font-normal">{currentReview.serviceType}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-4 pt-4">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-slate-800 hover:bg-brand-green-500 text-slate-300 hover:text-white transition-all focus:outline-none"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex space-x-2">
            {customerReviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-brand-amber-400 w-6' : 'bg-slate-700'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-full bg-slate-800 hover:bg-brand-green-500 text-slate-300 hover:text-white transition-all focus:outline-none"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
