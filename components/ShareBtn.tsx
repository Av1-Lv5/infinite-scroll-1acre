import Image from "next/image";
import { Button } from "./ui/button";

function ShareBtn() {
  return (
    <Button className="bg-white hover:outline hover:outline-black hover:bg-white p-2 w-8 h-8 rounded-full cursor-pointer">
      <Image
        unoptimized
        className="w-4 h-4"
        width={13}
        height={12}
        src="/assets/share.svg"
        alt=""
      />
    </Button>
  );
}

export default ShareBtn;
