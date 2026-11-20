import type { Metadata } from 'next';
import './globals.css';
import { TopBar } from '@/components/TopBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { FloatingQuoteButton } from '@/components/FloatingQuoteButton';

export const metadata: Metadata = {
  title: {
    default: "Essar Pest Control Services | Gel Treatment, Rodent, Mosquito, Honey Bees & Termite",
    template: "%s | Essar Pest Control Services",
  },
  description:
    "Essar Pest Control Services provides safe, odorless, and government-approved pest control — Gel Treatment, Rodent Treatment, Mosquito Treatment, Honey Bees Pest Control, General Pest Management, and Termite Treatment. Located at Malvani, Malad West, Mumbai, Maharashtra 400095. Call / WhatsApp 8898172297.",
  keywords: [
    "Essar Pest Control Services",
    'Pest Control Services',
    'Gel Treatment',
    'Rodent Treatment',
    'Mosquito Treatment',
    'Honey Bees Pest Control',
    'General Pest Management',
    'Termite Treatment',
    'Malad West Pest Control',
    'Malvani Pest Control',
    'Mumbai Pest Control',
    'Cockroach Control',
    'Bed Bug Treatment',
  ],
  authors: [{ name: "Essar Pest Control Services" }],
  openGraph: {
    title: "Essar Pest Control Services | Best Pest Control in Malad West Mumbai",
    description:
      'Pest Control Services: Gel Treatment, Rodent, Mosquito, Honey Bees, General Pest Management & Termite. Call or WhatsApp 8898172297.',
    siteName: "Essar Pest Control Services",
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
