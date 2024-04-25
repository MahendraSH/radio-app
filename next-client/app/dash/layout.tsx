import Navbar from "@/components/nav-components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "dashboard",
  description: "dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </main>
    </>
  );
}
