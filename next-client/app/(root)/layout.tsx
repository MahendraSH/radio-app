import Footer from "@/components/nav-components/footer";
import Navbar from "@/components/nav-components/navbar";
import { siteConfig } from "@/lib/data/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className=" container  min-h-screen  py-16">{children}</main>

      <Footer />
    </>
  );
}
