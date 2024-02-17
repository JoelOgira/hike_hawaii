import BookNextTripSection from "./components/home/BookNextTripSection"
import CategorySection from "./components/home/CategorySection";
import HeroSection from "./components/home/HeroSection";
import TopSellingSection from "./components/home/TopSellingSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CategorySection />
      <TopSellingSection />
      <BookNextTripSection />
    </main>
  );
}
