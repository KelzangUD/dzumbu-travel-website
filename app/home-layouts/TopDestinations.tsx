import Link from "next/link";
import { ArrowRight } from "lucide-react";
import taktshang_img from "@/public/images/hero.jpg";
import thimphu_img from "@/public/images/photo-1761048169718-f7ea52252128.jpg";
import punakha_dzong from "@/public/images/travel_img.jpg";
import bumthang_img from "@/public/images/bumthang.jpg";
import phobjikha_img from "@/public/images/phobjikha.jpg";
import haa_img from "@/public/images/haa.jpg";

const TopDestinations = () => {
  const destinations = [
    {
      name: "Paro",
      subtitle: "Tiger's Nest Monastery",
      image: taktshang_img.src,
    },
    {
      name: "Thimphu",
      subtitle: "Capital City",
      image: thimphu_img.src,
    },
    {
      name: "Punakha",
      subtitle: "Punakha Dzong",
      image: punakha_dzong.src,
    },
    {
      name: "Bumthang",
      subtitle: "Cultural Heartland",
      image: bumthang_img.src,
    },
    {
      name: "Phobjikha Valley",
      subtitle: "Black-necked Cranes",
      image: phobjikha_img.src,
    },
    {
      name: "Haa Valley",
      subtitle: "Hidden Gem",
      image: haa_img.src,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Explore Bhutan's Treasures
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From ancient monasteries to pristine valleys, discover the diverse
            landscapes of the Last Shangri-La
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <Link
              key={index}
              href="/destinations"
              className="relative h-80 rounded-lg overflow-hidden group"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                <p className="text-white/90 mb-3">{dest.subtitle}</p>
                <span className="text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Discover <ArrowRight size={16} className="ml-2" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
