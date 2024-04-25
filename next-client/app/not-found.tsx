"use Client";
import { Button } from "@/components/ui/button";
import { Loader, MoveLeftIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className=" flex justify-center items-center relative min-h-screen">
      <div className=" absolute top-5 left-5  flex gap-x-5 justify-center items-center ">
        <Button variant="ghost">
          {" "}
          <MoveLeftIcon className="size-4 mr-2" /> Back{" "}
        </Button>

        <Link href="/">
          <Button variant="outline">Home</Button>
        </Link>
      </div>
      <Button size="lg" variant={"secondary"} className=" text-xl">
        <Loader className=" size-8  mr-3 animate-spin" />
        Page Not Found
      </Button>
    </div>
  );
};

export default page;
