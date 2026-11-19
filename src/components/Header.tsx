'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, CalendarCheck } from 'lucide-react';
import { Logo } from './Logo';
import { QuoteModal } from './QuoteModal';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo layout="horizontal" size="md" variant="dark" />

          {/* Desktop Navigation Center */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-semibold text-slate-700">
            {/* Home */}
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive('/')
                  ? 'text-brand-green-500 bg-brand-green-50 font-bold'
                  : 'hover:text-brand-green-500 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  pathname.includes('/services')
                    ? 'text-brand-green-500 bg-brand-green-50 font-bold'
                    : 'hover:text-brand-green-500 hover:bg-slate-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 mt-1 animate-fadeIn z-50">
                  <Link
                    href="/residential-services"
                    className="block px-4 py-3 hover:bg-brand-green-50 hover:text-brand-green-500 transition-colors"
                  >
                    <div className="font-bold text-slate-900 text-sm">Residential Pest Control</div>
                    <div className="text-xs text-slate-500">Apartments, Villas & Societies</div>
                  </Link>
                  <div className="border-t border-slate-100 my-1"></div>
                  <Link
                    href="/commercial-services"
                    className="block px-4 py-3 hover:bg-brand-green-50 hover:text-brand-green-500 transition-colors"
                  >
                    <div className="font-bold text-slate-900 text-sm">Commercial Pest Control</div>
                    <div className="text-xs text-slate-500">Restaurants, Offices & Warehouses</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Pest Library */}
            <Link
              href="/pest-library"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive('/pest-library')
                  ? 'text-brand-green-500 bg-brand-green-50 font-bold'
                  : 'hover:text-brand-green-500 hover:bg-slate-50'
              }`}
            >
              Pest Library
            </Link>

            {/* Locations */}
            <Link
              href="/locations"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive('/locations')
                  ? 'text-brand-green-500 bg-brand-green-50 font-bold'
                  : 'hover:text-brand-green-500 hover:bg-slate-50'
              }`}
            >
              Locations
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive('/about')
                  ? 'text-brand-green-500 bg-brand-green-50 font-bold'
                  : 'hover:text-brand-green-500 hover:bg-slate-50'
              }`}
            >
              About Us
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact-us"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive('/contact-us')
                  ? 'text-brand-green-500 bg-brand-green-50 font-bold'
                  : 'hover:text-brand-green-500 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-extrabold text-sm px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Get a Free Quote</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-brand-green-500 rounded-xl focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 py-2 border-b border-slate-100"
            >
              Home
            </Link>

            <div className="py-1 border-b border-slate-100">
              <div className="font-bold text-slate-800 mb-1 text-xs uppercase tracking-wider text-brand-green-500">
                Services
              </div>
              <Link
                href="/residential-services"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-700 hover:text-brand-green-500 py-1.5 pl-3 text-sm font-medium"
              >
                Residential Pest Control
              </Link>
              <Link
                href="/commercial-services"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-700 hover:text-brand-green-500 py-1.5 pl-3 text-sm font-medium"
              >
                Commercial Pest Control
              </Link>
            </div>

            <Link
              href="/pest-library"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 py-2 border-b border-slate-100"
            >
              Pest Library
            </Link>

            <Link
              href="/locations"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 py-2 border-b border-slate-100"
            >
              Locations (Gurgaon & NCR)
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 py-2 border-b border-slate-100"
            >
              About Us & Certifications
            </Link>

            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 py-2"
            >
              Contact Us
            </Link>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsQuoteModalOpen(true);
              }}
              className="w-full bg-brand-amber-500 text-white font-extrabold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 mt-4"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Get a Free Quote</span>
            </button>
          </div>
        )}
      </header>

      {/* Global Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
};
