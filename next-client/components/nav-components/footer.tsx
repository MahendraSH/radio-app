import { FC } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { footerLinks } from "@/lib/data/nav-links";
import { siteConfig } from "@/lib/data/site-config";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="flex justify-center items-center gap-4 flex-col border-t-2   border-t-muted ">
      <div className=" flex justify-center items-center gap-x-4 flex-wrap min-h-20">
        {footerLinks.map((link) => (
          <Link key={link.label} href={link.path}>
            <Button variant="link"> {link.label} </Button>
          </Link>
        ))}
      </div>
      <div className=" bg-foreground text-muted  min-h-14 w-full flex gap-5 justify-center items-center ">
        <p className="text-center">© 2024 {siteConfig.name}</p>
        <p className="text-center">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
