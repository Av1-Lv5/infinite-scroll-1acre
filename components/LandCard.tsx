import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ImageCarousel from "./ImageCarousel";
import { MotionDiv } from "./MotionDiv";
import { Land } from "@/types";
import Image from "next/image";
import { getPrice } from "@/lib/utils";

export type LandProps = {
  land: Land;
  index: number;
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function LandCard(props: LandProps) {
  const { land, index } = props;

  const totalPrice = getPrice({
    atleast1acre: land.total_land_size_in_acres.acres !== 0,
    inCr: land.price_per_acre_crore.crore,
    inLakh: land.price_per_acre_crore.lakh,
    totalPrice: land.total_price,
  });

  const landSize =
    (land.total_land_size_in_acres.acres !== 0
      ? `${land.total_land_size_in_acres.acres} acre`
      : "") +
    " " +
    (land.total_land_size_in_acres.guntas
      ? `${land.total_land_size_in_acres.guntas} guntas`
      : "");

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
    >
      <Card className="shadow-md hover:shadow-xl">
        <div>
          <ImageCarousel media={land.land_media} />
        </div>
        <CardHeader>
          <CardTitle className="text-base">
            <div className="flex gap-4 items-center">
              <p>
                {land.village_name}, {land.mandal_name}
              </p>
              <Image
                unoptimized
                width={26}
                height={26}
                className="w-auto"
                src="/assets/verified-active.svg"
                alt="verified icon"
              />
            </div>
            <p>{land.district_name} (dt)</p>
          </CardTitle>
          <CardDescription className="flex items-center gap-1">
            <span className="text-black font-bold">{landSize}</span>
            <span>•</span>
            <span> ₹ {totalPrice}</span>
          </CardDescription>
        </CardHeader>
      </Card>
    </MotionDiv>
  );
}

export default LandCard;
