"use client";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";
import { siteConfig } from "@/lib/data/site-config";
import { SearchIcon } from "lucide-react";
import toast from "react-hot-toast";
import { axiosClient } from "@/lib/axios/helper";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { dashboardNav } from "@/lib/data/dashboard-nav";
import Sidebar from "./side";
interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const handlerLogout = async () => {
    setIsLoading(true);
    await axiosClient
      .get("/users/logout")
      .then((res) => {
        if (res.status === 200) {
          toast.success("Logout Successful");
          router.push("/auth/login");
        }
      })
      .catch((error) => {
        toast.error("Logout Failed :- " + error.response?.data.message);
        console.log(error);
      });
    setIsLoading(false);
  };

  return (
    <nav className=" flex justify-between items-center min-h-16 p-2  max-w-full  top-0 w-full shadow-muted shadow-md ">
      <h1 className=" md:text-xl text-xl font-bold">{siteConfig.name}</h1>

      <div className="  items-center justify-center  mx-auto px-4 space-x-5  hidden md:flex">
        {dashboardNav.map((item) => (
          <Link key={item.name} href={item.href}>
            <Button variant={pathname === item.href ? "underline" : "ghost"}>
              {item.name}
            </Button>
          </Link>
        ))}
      </div>

      <div className="  items-center justify-center  ml-auto  space-x-5 flex">
        <Sidebar />
        <Button onClick={() => handlerLogout()}> logout </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Header;
