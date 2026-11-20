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
    sm: 'h-11 w-auto',
    md: 'h-12 sm:h-14 md:h-16 w-auto',
    lg: 'h-16 sm:h-[4.5rem] md:h-20 w-auto',
  }[size];

  const titleSizes = {
    sm: 'text-lg sm:text-xl',
    md: 'text-lg sm:text-xl md:text-2xl',
    lg: 'text-xl sm:text-2xl md:text-3xl',
  }[size];

  const subSizes = {
    sm: 'text-[10px] sm:text-xs',
    md: 'text-[10px] sm:text-xs md:text-sm',
    lg: 'text-[11px] sm:text-xs md:text-sm',
  }[size];

  const isLight = variant === 'light';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-green-500 rounded-xl transition-all ${className}`}
      aria-label="Essar Pest Control Services - Home"
    >
      {/* Logo Emblem Icon */}
      <div
        className={`relative flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${
          isLight ? 'bg-white p-1.5 sm:p-2 rounded-xl shadow-md border border-white/20' : ''
        }`}
      >
        <Image
          src="/images/essar-logo.jpeg"
          alt="Essar Pest Control Services rat mascot logo"
          width={715}
          height={715}
          priority
          className={`${iconSizes} rounded-lg object-contain`}
        />
      </div>

      {/* Business Name right next to the logo */}
      {showText && (
        <div className="flex flex-col flex-shrink-0 justify-center leading-none select-none">
          <span
            className={`font-black tracking-tight leading-none whitespace-nowrap ${titleSizes} ${
              isLight ? 'text-white' : 'text-brand-amber-500'
            }`}
          >
            Essar
          </span>
          <span
            className={`font-extrabold tracking-wider uppercase leading-none whitespace-nowrap mt-1 ${subSizes} ${
              isLight ? 'text-brand-green-400' : 'text-brand-green-600'
            }`}
          >
            Pest Control Services
          </span>
        </div>
      )}
    </Link>
  );
};
