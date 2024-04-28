"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import LikeBtn from "./LikeBtn";
import ShareBtn from "./ShareBtn";

function ImageCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <Image
            alt="An image of agricultural land"
            width={500}
            className="object-cover h-full w-full rounded-t-lg"
            height={279}
            src="https://res.cloudinary.com/dy530bex0/image/upload/w_500,f_auto/v1/media/images/land_2_ubvrzo"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="An image of agricultural land"
            className="object-cover w-full h-full rounded-t-lg"
            width={500}
            height={279}
            src="https://res.cloudinary.com/dy530bex0/image/upload/w_500,f_auto/v1/media/images/land_3_give8u"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="An image of agricultural land"
            className="object-cover h-full rounded-lg w-full"
            width={500}
            height={279}
            src="https://res.cloudinary.com/dy530bex0/image/upload/w_500,f_auto/v1/media/images/land_4_aelnwi"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
      <div className="flex items-center gap-4 absolute right-8 top-6">
        <LikeBtn />
        <ShareBtn />
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
