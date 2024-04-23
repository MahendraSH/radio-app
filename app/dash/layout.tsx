import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/nav-components/navbar";
import Footer from "@/components/nav-components/footer";
import { siteConfig } from "@/lib/data/site-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dashboard",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 2,
  },
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
          <Navbar />
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
