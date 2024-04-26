"use client";
import { Button } from "@/components/ui/button";
import { Loader, MoveLeftIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface pageProps {}

const NotFoundPage: FC<pageProps> = ({}) => {
  const router = useRouter();
  const onHandleBack = () => {
    router.back();
  };
  return (
    <div className=" flex justify-center items-center relative min-h-screen">
      <div className=" absolute top-5 left-5  flex gap-x-5 justify-center items-center ">
        <Button variant="ghost" onClick={onHandleBack}>
          {" "}
          <MoveLeftIcon className="size-4 mr-2" /> Back{" "}
        </Button>

        <Link href="/">
          <Button variant="outline">Home</Button>
        </Link>
      </div>
      <Link href={"/"}>
        <Button size="lg" variant={"secondary"} className=" text-xl">
          <Loader className=" size-8  mr-3 animate-spin" />
          Page Not Found
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
