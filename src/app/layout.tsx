import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brenda Protocol Service | Professional Event Coordination in Kigali, Rwanda",
  description: "We Plan It. We Organize It. You Enjoy It. Professional protocol and event coordination services for weddings, corporate events, introductions, and celebrations in Kigali, Rwanda.",
  keywords: ["event planning", "protocol service", "wedding coordination", "corporate events", "Kigali", "Rwanda", "event management", "introduction ceremonies"],
  authors: [{ name: "Brenda Protocol Service" }],
  creator: "Brenda Protocol Service",
  publisher: "Brenda Protocol Service",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://brendaprotocol.com'),
  openGraph: {
    title: "Brenda Protocol Service | Professional Event Coordination",
    description: "We Plan It. We Organize It. You Enjoy It. Professional protocol and event coordination services in Kigali, Rwanda.",
    url: 'https://brendaprotocol.com',
    siteName: 'Brenda Protocol Service',
    locale: 'en_RW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brenda Protocol Service | Professional Event Coordination',
    description: 'We Plan It. We Organize It. You Enjoy It. Professional protocol and event coordination services in Kigali, Rwanda.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
