import type { Metadata } from 'next';
import './globals.css';
import { TopBar } from '@/components/TopBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { FloatingQuoteButton } from '@/components/FloatingQuoteButton';

export const metadata: Metadata = {
  title: {
    default: "Sangle's Pest Control & Service | Commercial, Industrial, Home, Society & Warehouse",
    template: "%s | Sangle's Pest Control & Service",
  },
  description:
    "Sangle's Pest Control & Service provides safe, odorless, and government-approved pest control services for Commercial, Industrial, Home, Society & Warehouse. Located at Majasgaon, Jogeshwari East 400060. Call / WhatsApp 8286007801.",
  keywords: [
    "Sangle's Pest Control & Service",
    'Pest Control Services',
    'Commercial Pest Control',
    'Industrial Pest Control',
    'Home Pest Control',
    'Society Pest Control',
    'Warehouse Pest Control',
    'Jogeshwari East Pest Control',
    'Termite Treatment',
    'Cockroach Control',
    'Bed Bug Treatment',
  ],
  authors: [{ name: "Sangle's Pest Control & Service" }],
  openGraph: {
    title: "Sangle's Pest Control & Service | Best Pest Control Solutions",
    description:
      'Pest Control Services: Commercial, Industrial, Home, Society & Warehouse. 24/7 Same-Day Service. Call or WhatsApp 8286007801.',
    siteName: "Sangle's Pest Control & Service",
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
}
