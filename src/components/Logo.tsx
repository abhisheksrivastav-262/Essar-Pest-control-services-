import React from 'react';
import Link from 'next/link';

interface LogoProps {
  layout?: 'horizontal' | 'stacked';
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  layout = 'horizontal',
  variant = 'dark',
  size = 'md',
  className = '',
  showText = true,
}) => {
  // Color tokens based on variant
  const iconPrimary = '#1F6B3A'; // Primary forest green
  const iconAccent = '#D97706'; // Warm amber check/leaf accent
  const textPrimary = variant === 'light' ? '#FFFFFF' : '#0F172A';
  const textSecondary = variant === 'light' ? '#CBD5E1' : '#475569';

  // Sizing scale
  const dimensions = {
    sm: { icon: 32, title: 'text-lg', subtitle: 'text-[10px]' },
    md: { icon: 42, title: 'text-xl font-extrabold', subtitle: 'text-xs font-medium' },
    lg: { icon: 54, title: 'text-2xl font-black', subtitle: 'text-sm font-semibold' },
  }[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-green-500 rounded-lg p-1 transition-all ${
        layout === 'stacked' ? 'flex-col text-center' : 'flex-row'
      } ${className}`}
      aria-label="Nexora Pest Management - Home"
    >
      {/* SVG Icon: Rounded Shield Outline with Leaf & Checkmark */}
      <div className="relative flex-shrink-0 transition-transform group-hover:scale-105">
        <svg
          width={dimensions.icon}
          height={dimensions.icon}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Outer Shield Glow / Gradient Background Circle */}
          <rect width="48" height="48" rx="12" fill={iconPrimary} fillOpacity="0.08" />
          
          {/* Rounded Shield Body Outline */}
          <path
            d="M24 6L38 11V22C38 31.5 32 39.2 24 42C16 39.2 10 31.5 10 22V11L24 6Z"
            fill={iconPrimary}
            stroke={iconPrimary}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Shield Inner Shield Inset */}
          <path
            d="M24 9.5L35 13.8V22C35 29.8 30.2 36.2 24 38.6C17.8 36.2 13 29.8 13 22V13.8L24 9.5Z"
            fill="#FFFFFF"
          />

          {/* Integrated Leaf Icon inside Shield */}
          <path
            d="M24 16C28.5 16 31 19.5 30.5 24C28 24.5 24 23.5 22 21.5C20 19.5 21 17 24 16Z"
            fill={iconPrimary}
          />

          {/* Verification Checkmark / Protection Swoosh */}
          <path
            d="M18.5 25.5L22.5 29.5L30 20"
            stroke={iconAccent}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Wordmark */}
      {showText && (
        <div className={`flex flex-col leading-tight ${layout === 'stacked' ? 'items-center' : 'items-start'}`}>
          <span
            className={`${dimensions.title} tracking-tight font-sans`}
            style={{ color: textPrimary }}
          >
            Nexora
          </span>
          <span
            className={`${dimensions.subtitle} tracking-wider uppercase font-sans`}
            style={{ color: textSecondary }}
          >
            Pest Management
          </span>
        </div>
      )}
    </Link>
  );
};
