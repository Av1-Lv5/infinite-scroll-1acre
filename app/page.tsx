import ImageCarousel from "@/components/ImageCarousel";
import LandCard from "@/components/LandCard";

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        <LandCard />
        <LandCard />
        <LandCard />
        <LandCard />
        <LandCard />
        <LandCard />
      </div>
    </main>
  );
}
