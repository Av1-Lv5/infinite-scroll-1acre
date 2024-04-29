"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import LikeBtn from "./LikeBtn";
import ShareBtn from "./ShareBtn";
import { LandMedia } from "@/types";
import Image from "next/image";

type CarouselProps = {
  media: LandMedia[];
};

function ImageCarousel(props: CarouselProps) {
  const { media } = props;
  return (
    <Carousel
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="-ml-2">
        {media.map((imageData) => {
          return (
            <CarouselItem key={imageData.id} className="pl-2">
              <Image
                alt="An image of agricultural land"
                width={500}
                className="object-cover h-[250px] w-full rounded-t-lg"
                height={279}
                src={imageData.image}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="flex items-center gap-3 absolute right-3 top-3">
        <LikeBtn />
        <ShareBtn />
      </div>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}

export default ImageCarousel;
