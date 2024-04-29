import Image from "next/image";
import { Button } from "./ui/button";

function LikeBtn() {
  return (
    <Button className="bg-white hover:outline hover:outline-black hover:bg-white w-8 h-8 p-2 rounded-full cursor-pointer">
      <Image
        unoptimized
        className="w-4 h-4"
        width={26}
        height={26}
        src="/assets/favorite.svg"
        alt=""
      />
    </Button>
  );
}

export default LikeBtn;
