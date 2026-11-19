import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  layout?: 'horizontal' | 'stacked';
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  showText = true,
}) => {
  const iconSizes = {
    sm: 'h-9 w-auto',
    md: 'h-10 sm:h-12 md:h-14 w-auto',
    lg: 'h-12 sm:h-14 md:h-16 w-auto',
  }[size];

  const titleSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-base sm:text-xl md:text-2xl',
    lg: 'text-xl sm:text-2xl md:text-3xl',
  }[size];

  const subSizes = {
    sm: 'text-[9px] sm:text-[10px]',
    md: 'text-[9px] sm:text-[11px] md:text-xs',
    lg: 'text-[10px] sm:text-xs md:text-sm',
  }[size];

  const isLight = variant === 'light';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-green-500 rounded-xl transition-all ${className}`}
      aria-label="Sangle's Pest Control & Service - Home"
    >
      {/* Logo Emblem Icon */}
      <div
        className={`relative flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${
          isLight ? 'bg-white p-1.5 sm:p-2 rounded-xl shadow-md border border-white/20' : ''
        }`}
      >
        <Image
          src="/images/logo-icon.png"
          alt="Sangle's Pest Control & Service Logo"
          width={130}
          height={145}
          priority
          className={`${iconSizes} object-contain`}
        />
      </div>

      {/* Business Name right next to the logo */}
      {showText && (
        <div className="flex flex-col justify-center leading-none select-none">
          <span
            className={`font-black tracking-tight leading-none ${titleSizes} ${
              isLight ? 'text-white' : 'text-[#A31F25]'
            }`}
          >
            Sangle&apos;s
          </span>
          <span
            className={`font-extrabold tracking-wider uppercase leading-none mt-1 ${subSizes} ${
              isLight ? 'text-brand-green-400' : 'text-[#1F6B3A]'
            }`}
          >
            Pest Control &amp; Service
          </span>
        </div>
      )}
    </Link>
  );
};
