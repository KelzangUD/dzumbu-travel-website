import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1585491402540-5cdf0857d402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-primary/90" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Bhutan Journey?
        </h2>
        <p className="text-xl mb-8 text-white/90">
          Let our experts craft your perfect Himalayan adventure. Contact us
          today for a custom itinerary.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-md hover:bg-white/90 transition-colors font-semibold"
        >
          Plan My Trip
          <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    </section>
  );
};
export default CTABanner;
