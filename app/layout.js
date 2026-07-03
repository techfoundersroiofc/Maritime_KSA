import { Outfit, EB_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { SEO_METADATA } from "./constants/seo";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: SEO_METADATA.home.title,
  description: SEO_METADATA.home.description,
  keywords: SEO_METADATA.home.keywords.join(", "),
  metadataBase: new URL("https://pkimse.edu.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SEO_METADATA.home.title,
    description: SEO_METADATA.home.description,
    url: "https://pkimse.edu.in",
    siteName: "PKIMSE Maritime College",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo/PKIMSE.PNG",
        width: 1200,
        height: 630,
        alt: "PKIMSE KSA Maritime College Campus Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_METADATA.home.title,
    description: SEO_METADATA.home.description,
    images: ["/images/logo/PKIMSE.PNG"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${ebGaramond.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
        <Navbar />
        <main className="flex-grow pt-[84px] md:pt-[108px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
