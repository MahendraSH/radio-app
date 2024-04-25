import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface HomePageProps {
  searchParams: {
    showSlug: string;
  };
}

const HomePage: FC<HomePageProps> = ({ searchParams }) => {
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
    <div className="my-4 flex flex-col justify-start items-start gap-y-4 max-w-full">
      <h2 className="md:text-4xl text-3xl font-bold underline underline-offset-4  pb-6">
        Lang-1
      </h2>

      <div className="flex flex-row flex-wrap  max-w-full gap-3">
        {items.map((item, index) => (
          <div className="p-1" key={index}>
            <Link href={`/show/${item.showSlug}/${item.id}`}>
              <Card className=" ">
                <CardContent>
                  <Image
                    src={item.imageUrl}
                    alt={item.label}
                    width={300}
                    height={300}
                    className="w-48 aspect-square"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle>{item.label} </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
