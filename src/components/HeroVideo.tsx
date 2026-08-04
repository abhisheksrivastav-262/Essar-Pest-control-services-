'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface HeroVideoProps {
  videoUrl?: string;
  posterUrl: string;
  className?: string;
  overlayClass?: string;
  children?: React.ReactNode;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
  videoUrl,
  posterUrl,
  className = '',
  overlayClass = 'bg-gradient-to-br from-brand-slate/90 via-slate-900/85 to-brand-green-950/90',
  children,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMotionChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMotionChange);
      }
    };
  }, []);

  useEffect(() => {
    const videoElem = videoRef.current;
    const containerElem = containerRef.current;

    if (!videoElem || !containerElem || prefersReducedMotion || !videoUrl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElem.play().catch(() => {});
          } else {
            videoElem.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(containerElem);

    return () => {
      observer.unobserve(containerElem);
    };
  }, [prefersReducedMotion, videoUrl]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Background Poster Fallback */}
      <div className="absolute inset-0 z-0">
        <Image
          src={posterUrl}
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* HTML5 Video Element */}
      {videoUrl && !prefersReducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={posterUrl}
          className="hidden md:block absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Dark Gradient Overlay */}
      <div className={`absolute inset-0 z-10 ${overlayClass}`} />

      {/* Foreground Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};
