import HeroSection from "@/app/home-layouts/HeroSection";
import FeaturedTours from "@/app/home-layouts/FeaturedTours";
import TopDestinations from "@/app/home-layouts/TopDestinations";
import WhyChooseUs from "@/app/home-layouts/WhyChooseUs";
import TravelExperiences from "@/app/home-layouts/TravelExperiences";
import Testimonials from "@/app/home-layouts/Testimonials";
import Gallery from "@/app/home-layouts/Gallery";
import FAQSection from "@/app/home-layouts/FAQSection";
import CTABanner from "@/app/home-layouts/CTABanner";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedTours />
      <TopDestinations />
      <WhyChooseUs />
      <TravelExperiences />
      <Testimonials />
      <Gallery />
      <FAQSection />
      <CTABanner />
    </div>
  );
}
