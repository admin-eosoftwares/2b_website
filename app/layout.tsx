import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Loading from "../components/Loading";
import TopContactBar from "../components/TopContactBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MobileMenuProvider } from "../contexts/MobileMenuContext";
import PageWrapper from "@/components/PageWrapper";
import MobileMenu from "@/components/MobileMenu";
import ScrollHandler from "../components/ScrollHandler";
import ErrorBoundary from "../components/ErrorBoundary";
import GoogleAnalytics from "../components/GoogleAnalytics";
import PerformanceMonitor from "../components/PerformanceMonitor";
import SkipLinks from "../components/SkipLinks";

const inter = Inter({ subsets: ["latin"] });

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "2B Global Enerji - Yenilenebilir Enerji Çözümleri",
    template: "%s | 2B Global Enerji"
  },
  description: "Antalya merkezli yenilenebilir enerji ve elektrik-elektronik sektörlerinde 20+ yıllık deneyim. Güneş enerjisi, fotovoltaik modül, inverter ve batarya çözümleri.",
  keywords: [
    "güneş enerjisi",
    "yenilenebilir enerji",
    "fotovoltaik",
    "inverter",
    "batarya",
    "solar panel",
    "güneş paneli",
    "enerji çözümleri",
    "EPC",
    "Antalya",
    "2B Global Enerji",
    "CW Enerji",
    "Varta",
    "Tommatech"
  ],
  authors: [{ name: "2B Global Enerji" }],
  creator: "2B Global Enerji",
  publisher: "2B Global Enerji",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://2bltd.com.tr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://2bltd.com.tr",
    title: "2B Global Enerji - Yenilenebilir Enerji Çözümleri",
    description: "Antalya merkezli yenilenebilir enerji ve elektrik-elektronik sektörlerinde 20+ yıllık deneyim.",
    siteName: "2B Global Enerji",
    images: [
      {
        url: "/images/logos/2b_logo_sag.avif",
        width: 1200,
        height: 630,
        alt: "2B Global Enerji Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2B Global Enerji - Yenilenebilir Enerji Çözümleri",
    description: "Antalya merkezli yenilenebilir enerji ve elektrik-elektronik sektörlerinde 20+ yıllık deneyim.",
    images: ["/images/logos/2b_logo_sag.avif"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <SkipLinks />
        <ErrorBoundary>
          <MobileMenuProvider>
            <PageWrapper>
              <Loading />
              <TopContactBar />

              <Header />

              <main id="main-content" className="flex-1 pt-[60px] md:pt-[100px] scroll-pt-[60px] md:scroll-pt-[60px]" role="main">
                {children}
              </main>

              <Footer />
            </PageWrapper>

            <MobileMenu />
            <ScrollHandler />

            {/* Analytics ve Performance Monitoring */}
            {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
              <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
            )}
            <PerformanceMonitor />
          </MobileMenuProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
