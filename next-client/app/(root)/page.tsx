import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import ShowCardsCarousel from "@/components/root-components/shows-cards-careusel";
import { MoveRight } from "lucide-react";
interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  const artists = [
    "Radiohead",
    "Metallica",
    "Queen",
    "some",
    "player",
    "1",
    "2",
    "3",
  ];
  const items = artists.map((artist, index) => ({
    label: artist,
    imageUrl: "/image.jpg", // Placeholder image URL
    id: index.toString(),
    showSlug: "lang-1",
  }));
  return (
    <div className=" ">
      <h2 className="md:text-4xl text-3xl font-bold underline underline-offset-4  pb-6">
        Radio stations
      </h2>

      <div className="my-4 flex flex-col justify-start items-start gap-y-4 max-w-full">
        <div className=" flex flex-row justify-between items-center w-full">
          <div>
            <div className="text-2xl font-semibold">lang-1 </div>
          </div>
          <div className=" ml-auto text-lg">
            <Link
              href="/show/lang-1"
              className={cn(buttonVariants({ variant: "link" }))}
            >
              See all shows <MoveRight className="size-4 ml-2" />
            </Link>
          </div>
        </div>
        <div className="flex flex-row flex-wrap  max-w-full gap-3">
          <ShowCardsCarousel items={items} />
        </div>
      </div>

      <Separator />
    </div>
  );
};

export default HomePage;
