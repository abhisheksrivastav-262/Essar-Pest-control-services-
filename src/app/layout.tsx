import type { Metadata } from 'next';
import './globals.css';
import { TopBar } from '@/components/TopBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { FloatingQuoteButton } from '@/components/FloatingQuoteButton';

export const metadata: Metadata = {
  title: {
    default: 'Nexora Pest Management Pvt Ltd | Gurgaon Pest Control Services',
    template: '%s | Nexora Pest Management Gurgaon',
  },
  description:
    'Nexora Pest Management Pvt Ltd is Gurgaon premier ISO 9001:2015 certified pest control company. Safe, odorless anti-termite, cockroach gel, bed bug heat treatment, and mosquito control for residential and commercial properties in Gurgaon and NCR. Call 8368334476.',
  keywords: [
    'Pest Control Gurgaon',
    'Termite Treatment Gurgaon',
    'Cockroach Gel Pest Control Gurgaon',
    'Bed Bug Control Gurgaon',
    'Commercial Pest Control Gurgaon',
    'Nexora Pest Management Pvt Ltd',
    'Sheetla Colony Pest Control',
    'Sector 5 Gurgaon Pest Control',
  ],
  authors: [{ name: 'Nexora Pest Management Pvt Ltd' }],
  metadataBase: new URL('https://nexorapest.online'),
  openGraph: {
    title: 'Nexora Pest Management Pvt Ltd | Best Pest Control in Gurgaon',
    description:
      'ISO 9001:2015 Certified Pest Management in Gurgaon & Delhi NCR. 24/7 Same-Day Service. Call 8368334476.',
    url: 'https://nexorapest.online',
    siteName: 'Nexora Pest Management',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased selection:bg-brand-green-500 selection:text-white">
        <TopBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
        <FloatingQuoteButton />
      </body>
    </html>
  );
};
