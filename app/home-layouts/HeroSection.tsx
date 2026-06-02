import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero_img from "@/public/images/hero.jpg";

const HeroSection =() => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${Hero_img.src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-50 px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover the Hidden
          <br />
          Kingdom of Bhutan
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
          Experience authentic Himalayan culture, breathtaking landscapes, and
          sustainable travel with licensed Bhutanese experts
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/tours"
            className="bg-primary text-white px-8 py-4 rounded-md hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
          >
            Explore Tours
            <ArrowRight size={20} className="ml-2" />
          </Link>
          <Link
            href="/contact"
            className="bg-white text-secondary px-8 py-4 rounded-md hover:bg-white/90 transition-colors inline-flex items-center justify-center"
          >
            Customize Trip
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
