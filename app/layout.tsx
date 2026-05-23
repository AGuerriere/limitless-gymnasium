import type { Metadata } from "next";
import { Manrope, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import RevealInit from "@/components/RevealInit";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = "https://limitlessgymnasium.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Limitless Gymnasium — Ballycastle",
    template: "%s | Limitless Gymnasium",
  },
  description:
    "Independent, locally owned gym in Ballycastle, Co. Antrim. Serious equipment, qualified staff, open 7 days a week — train without limits.",
  keywords: [
    "gym Ballycastle",
    "Limitless Gymnasium",
    "Ballycastle gym",
    "fitness Ballycastle",
    "personal training Ballycastle",
    "Northern Ireland gym",
    "Co. Antrim gym",
    "group fitness classes Ballycastle",
    "Ascnd classes",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Limitless Gymnasium",
    title: "Limitless Gymnasium — Ballycastle",
    description:
      "Independent, locally owned gym in Ballycastle, Co. Antrim. Serious equipment, qualified staff, open 7 days a week — train without limits.",
    locale: "en_GB",
    images: [
      {
        url: "/logo.webp",
        width: 502,
        height: 206,
        alt: "Limitless Gymnasium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Limitless Gymnasium — Ballycastle",
    description:
      "Independent, locally owned gym in Ballycastle, Co. Antrim. Serious equipment, qualified staff, open 7 days a week — train without limits.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", rel: "shortcut icon" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "Limitless Gymnasium",
  description:
    "Independent, locally owned gym in Ballycastle, Co. Antrim. Serious equipment, qualified staff, and no distractions — just work.",
  url: SITE_URL,
  foundingDate: "2022",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ballycastle",
    addressRegion: "County Antrim",
    postalCode: "BT54",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.2003,
    longitude: -6.2543,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:30",
      closes: "21:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/limitless.gymnasium/",
    "https://www.facebook.com/p/Limitless-Gymnasium-61556424757610/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${archivo.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RevealInit />
        {children}
      </body>
    </html>
  );
}
