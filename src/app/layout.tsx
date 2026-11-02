import Providers from "@/providers/Providers";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://islamia.daowahit.com";

const SITE_NAME = "মা'হাদুদ দাওয়াহ আল ইসলামিয়া";
const SITE_SHORT_NAME = "ইসলামিয়া বাগানবাড়ী দাওয়াহ মাদ্রাসা";

const SITE_DESCRIPTION =
  "মা'হাদুদ দাওয়াহ আল ইসলামিয়া (ইসলামিয়া বাগানবাড়ী দাওয়াহ মাদ্রাসা)। ঠিকানা: বড়গাছা ঘোনপাড়া, সোনারায়, ডোমার, নীলফামারী। ২০১৮ ইংরেজিতে প্রতিষ্ঠিত একটি দ্বীনি শিক্ষা প্রতিষ্ঠান।";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | ${SITE_SHORT_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,

  keywords: [
    "মা'হাদুদ দাওয়াহ আল ইসলামিয়া",
    "ইসলামিয়া বাগানবাড়ী দাওয়াহ মাদ্রাসা",
    "ইসলামিয়া দাওয়াহ মাদ্রাসা",
    "বড়গাছা ঘোনপাড়া মাদ্রাসা",
    "সোনারায় মাদ্রাসা",
    "ডোমার মাদ্রাসা",
    "নীলফামারী মাদ্রাসা",
    "ইসলামিক শিক্ষা",
    "দ্বীনি শিক্ষা প্রতিষ্ঠান",
    "Maahadud Dawah Al Islamia",
    "Islamia Baganbari Dawah Madrasa",
    "Dawar Madrasa Domar Nilphamari",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_SHORT_NAME}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: "/apple-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "education",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
