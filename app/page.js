import HomeAbout from "@/Components/About/HomeAbout";
import HomeGallery from "@/Components/Gallery/HomeGallery";
import HeroSection from "@/Components/HeroSection";
import Location from "@/Components/Location";
import PopularDishes from "@/Components/PopularDishes";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularDishes />
      <HomeAbout />
      <HomeGallery />
      <Testimonials />
      <Location />
    </>
  );
}
