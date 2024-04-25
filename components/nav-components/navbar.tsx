import { FC } from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import { siteConfig } from "@/lib/data/site-config";
import { SearchIcon } from "lucide-react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className=" flex justify-between items-center min-h-16 p-2  max-w-full  top-0 w-full shadow-muted shadow-md ">
      <h1 className=" md:text-2xl text-xl font-bold">{siteConfig.name}</h1>

      <div className=" flex items-center justify-center  ml-auto px-4 space-x-5 ">
        <Button variant="outline">
          {" "}
          <span className="text-sm hidden  md:flex "> Search... </span>{" "}
          <SearchIcon className="ml-2 size-5" />{" "}
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
