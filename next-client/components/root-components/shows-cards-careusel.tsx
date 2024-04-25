import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
interface showCardsCarouselProps {
  items: {
    label: string;
    imageUrl: string;
    id: string;
    showSlug: string;
  }[];
}

const ShowCardsCarousel: FC<showCardsCarouselProps> = ({ items }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[95%] mx-auto "
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="max-w-fit">
            <div className="p-1">
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default ShowCardsCarousel;
