import Footer from "@/components/nav-components/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/lib/data/site-config";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  authors: {
    name: siteConfig.name,
    url: siteConfig.url,
  },
  metadataBase: new URL(siteConfig.url),

  other: {
    ogImage: siteConfig.ogImage,
    twitterImage: siteConfig.ogImage,
    twitterCard: "summary_large_image",
    twitterSite: "@twitter",
    twitterCreator: "@twitter",
    language: "en",
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
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: siteConfig.name,
    card: "summary_large_image",
  },
  creator: siteConfig.name,
  publisher: siteConfig.name,

  appleWebApp: {
    title: siteConfig.name,
    capable: true,
    statusBarStyle: "default",
  },

  verification: {
    google: "google.com",
    yahoo: "yahoo.com",
    yandex: "yandex.com",
  },

  alternates: {
    canonical: siteConfig.url,
  },

  // TODO: Add JSON-LD

  // TODO: Add Open Graph

  // TODO: Add Twitter
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <>{children}</>
        </ThemeProvider>
      </body>
    </html>
  );
}
