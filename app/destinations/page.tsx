import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const Destinations = () => {
  const destinations = [
    {
      name: "Paro",
      tagline: "Gateway to the Dragon Kingdom",
      description:
        "Home to Bhutan's only international airport and the iconic Tiger's Nest Monastery (Taktsang), Paro is where most journeys begin. This picturesque valley is dotted with sacred sites and offers stunning mountain views.",
      highlights: [
        "Tiger's Nest Monastery (Taktsang Palphug)",
        "Rinpung Dzong fortress",
        "National Museum of Bhutan",
        "Kyichu Lhakhang temple",
        "Paro weekend market",
      ],
      image:
        "https://images.unsplash.com/photo-1772203248551-978d4c154804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
      bestTime: "March to May, September to November",
    },
    {
      name: "Thimphu",
      tagline: "The World's Most Unique Capital",
      description:
        "Bhutan's capital city beautifully blends tradition with modernity. With no traffic lights, this serene city offers museums, monasteries, markets, and a glimpse into contemporary Bhutanese life.",
      highlights: [
        "Buddha Dordenma statue",
        "Tashichho Dzong",
        "National Memorial Chorten",
        "Weekend craft market",
        "Traditional textile museums",
      ],
      image:
        "https://images.unsplash.com/photo-1761048169718-f7ea52252128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
      bestTime: "Year-round",
    },
    {
      name: "Punakha",
      tagline: "The Ancient Winter Capital",
      description:
        "Blessed with a subtropical climate and stunning river valleys, Punakha was Bhutan's capital until 1955. The majestic Punakha Dzong, sitting at the confluence of two rivers, is one of Bhutan's most beautiful structures.",
      highlights: [
        "Punakha Dzong (Palace of Great Happiness)",
        "Chimi Lhakhang fertility temple",
        "Khamsum Yulley Namgyal Chorten",
        "Suspension bridge walk",
        "White-water rafting",
      ],
      image:
        "https://images.unsplash.com/photo-1670962521533-c784cf60e4e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
      bestTime: "October to April",
    },
    {
      name: "Bumthang",
      tagline: "The Cultural Heartland",
      description:
        "Considered the spiritual heart of Bhutan, Bumthang comprises four valleys filled with ancient temples, monasteries, and sacred sites. This region is deeply important to Bhutanese Buddhism and culture.",
      highlights: [
        "Jambay Lhakhang (7th century temple)",
        "Kurjey Lhakhang monastery complex",
        "Tamshing Monastery",
        "Red panda trekking",
        "Traditional cheese and honey farms",
      ],
      image:
        "https://images.unsplash.com/photo-1641184916406-12dc8c5b4d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
      bestTime: "April to June, September to November",
    },
    {
      name: "Phobjikha Valley",
      tagline: "Winter Home of Black-Necked Cranes",
      description:
        "This glacial valley on the western slopes of the Black Mountains is one of Bhutan's most beautiful regions. Every winter, rare black-necked cranes migrate here from Tibet, making it a paradise for nature lovers.",
      highlights: [
        "Black-necked crane watching (Nov-Mar)",
        "Gangtey Monastery",
        "Nature trails through pristine valley",
        "Traditional farmhouse stays",
        "Wildlife observation",
      ],
      image:
        "https://images.unsplash.com/photo-1629778634400-21720d1b92b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
      bestTime: "November to March (crane season)",
    },
    {
      name: "Haa Valley",
      tagline: "Bhutan's Hidden Gem",
      description:
        "One of the most pristine and least visited valleys in Bhutan, Haa remained closed to tourists until 2002. Surrounded by mountains and forests, it offers authentic cultural experiences and untouched natural beauty.",
      highlights: [
        "Lhakhang Karpo (White Temple)",
        "Lhakhang Nagpo (Black Temple)",
        "Cheley La Pass (3,988m)",
        "Traditional Haap culture",
        "Hiking and camping",
      ],
      image:
        "https://images.unsplash.com/photo-1772702824640-26fd4da9638b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
      bestTime: "May to September",
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="relative py-50"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1729180253317-93ba9cf4ceb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Destinations</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore the diverse valleys, ancient cities, and sacred sites of the
            Last Shangri-La
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-96 object-cover rounded-lg shadow-xl"
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-3">
                    <MapPin size={20} className="text-primary mr-2" />
                    <h2 className="text-3xl font-bold">{destination.name}</h2>
                  </div>
                  <p className="text-lg text-primary font-semibold mb-4">
                    {destination.tagline}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {destination.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Attractions:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {destination.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <span className="text-primary mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm">
                      <span className="font-semibold">Best Time to Visit:</span>{" "}
                      <span className="text-muted-foreground">
                        {destination.bestTime}
                      </span>
                    </p>
                  </div>

                  <Link
                    href="/tours"
                    className="inline-flex items-center text-primary font-semibold hover:underline"
                  >
                    View Tours to {destination.name}
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Plan Your Perfect Itinerary
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Combine multiple destinations for a comprehensive Bhutan experience.
            Our experts will help you create the perfect journey.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-semibold"
          >
            Start Planning
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
