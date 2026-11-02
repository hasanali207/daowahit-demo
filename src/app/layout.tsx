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

const SITE_URL = "https://daowahit.com";
const SITE_NAME = "Dawah IT";
const SITE_SHORT_NAME = "দাওয়াহ আইটি";

const SITE_DESCRIPTION =
  "Dawah IT (দাওয়াহ আইটি) provides professional web development, software development, custom software solutions, website design, and modern IT services to help businesses grow through technology.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Dawah IT | Web Development, Software Development & IT Solutions",
    template: "%s | Dawah IT",
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
    "Dawah IT",
    "দাওয়াহ আইটি",
    "Dawah IT Bangladesh",
    "Software Development Company",
    "Web Development Company",
    "Website Design and Development",
    "Custom Software Development",
    "Software Solutions",
    "IT Solutions Bangladesh",
    "Web Application Development",
    "Mobile Application Development",
    "E-commerce Website Development",
    "Next.js Development",
    "React Development",
    "Laravel Development",
    "Digital Solutions",
    "Technology Company Bangladesh",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Dawah IT | Professional Web Development & Software Solutions",
    description:
      "Build your digital future with Dawah IT. We provide professional website development, custom software, web applications, and modern IT solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dawah IT - Web Development and Software Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dawah IT | Web Development & IT Solutions",
    description:
      "Professional web development, software solutions, and modern IT services by Dawah IT.",
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

  category: "technology",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
