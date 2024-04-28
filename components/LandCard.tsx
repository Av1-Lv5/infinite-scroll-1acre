import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ImageCarousel from "./ImageCarousel";

function LandCard() {
  return (
    <Card>
      <div>
        <ImageCarousel />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default LandCard;
