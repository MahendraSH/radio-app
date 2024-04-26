import { FC, useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { dashboardNav } from "@/lib/data/dashboard-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        size={"icon"}
        onClick={() => setOpen(!open)}
        className=" md:hidden"
      >
        <MenuIcon className="size-5" />
      </Button>
      <SheetContent side="left" className="h-full w-5/6 ">
        {dashboardNav.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className={cn(
              buttonVariants({
                variant: pathname === item.href ? "underline" : "ghost",
                size: "lg",
              }),
              "w-full my-4 text-lg"
            )}
          >
            {item.name}
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
