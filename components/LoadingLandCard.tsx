import { MotionDiv } from "./MotionDiv";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const LoadingLandCard = () => {
  return (
    <MotionDiv
      variants={variants} // Assuming you have these defined elsewhere
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0, // No delay for loading component
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
    >
      <Card className="skeleton shadow-md hover:shadow-xl">
        <div className="h-48 bg-gray-200 animate-pulse"></div>
        {/* Placeholder for image */}
        <CardHeader>
          <CardTitle className="text-base">
            <div className="flex gap-4 items-center">
              <div className="h-6 w-24 bg-gray-200 animate-pulse"></div>
              {/* Placeholder for title */}
              <div className="h-6 w-6 bg-gray-200 animate-pulse rounded-full">
                {" "}
              </div>
              {/* Placeholder for verified icon */}
            </div>
            <div className="h-4 w-16 bg-gray-200 animate-pulse"></div>
            {/* Placeholder for district */}
          </CardTitle>
          <CardDescription className="flex items-center gap-1">
            <div className="h-4 w-24 bg-gray-200 animate-pulse"></div>
            {/* Placeholder for area */}
            <span>•</span>
            <div className="h-4 w-16 bg-gray-200 animate-pulse"></div>
            {/* Placeholder for price */}
          </CardDescription>
        </CardHeader>
      </Card>
    </MotionDiv>
  );
};
export default LoadingLandCard;
