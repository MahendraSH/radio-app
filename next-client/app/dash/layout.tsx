import Header from "@/components/dash-nav-componets/header";
import Navbar from "@/components/nav-components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "dashboard",
  description: "dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className=" min-h-screen w-full ">{children}</main>
    </>
  );
}
