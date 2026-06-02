"use client";
import Link from "next/link";
import { Star, Calendar, Users, Check, ArrowRight } from "lucide-react";
import { useState } from "react";

const Tours = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");

  const tours = [
    {
      id: 1,
      title: "Cultural Heritage Tour",
      category: "culture",
      duration: "7 Days / 6 Nights",
      price: "$2,499",
      rating: 4.9,
      reviews: 127,
      groupSize: "2-12",
      image:
        "https://images.unsplash.com/photo-1670962521533-c784cf60e4e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      highlights: [
        "Tiger's Nest Monastery hike",
        "Punakha Dzong fortress",
        "Traditional festival experience",
        "Thimphu city tour",
        "Local village homestay",
      ],
      description:
        "Immerse yourself in Bhutan's rich cultural heritage with visits to ancient monasteries, dzongs, and traditional festivals.",
    },
    {
      id: 2,
      title: "Himalayan Trekking Adventure",
      category: "adventure",
      duration: "10 Days / 9 Nights",
      price: "$3,299",
      rating: 5.0,
      reviews: 89,
      groupSize: "4-10",
      image:
        "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      highlights: [
        "Druk Path Trek",
        "High altitude lakes",
        "Panoramic mountain views",
        "Camping under stars",
        "Wildlife spotting",
      ],
      description:
        "Challenge yourself with spectacular trekking routes through pristine Himalayan landscapes and remote mountain passes.",
    },
    {
      id: 3,
      title: "Wellness & Mindfulness Retreat",
      category: "wellness",
      duration: "5 Days / 4 Nights",
      price: "$1,899",
      rating: 4.8,
      reviews: 156,
      groupSize: "2-8",
      image:
        "https://images.unsplash.com/photo-1642980522087-b88287220179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      highlights: [
        "Daily meditation sessions",
        "Traditional hot stone baths",
        "Yoga in mountain settings",
        "Spa treatments",
        "Mindfulness workshops",
      ],
      description:
        "Rejuvenate your mind, body, and soul with meditation, yoga, and traditional Bhutanese healing practices.",
    },
    {
      id: 4,
      title: "Festival & Culture Explorer",
      category: "culture",
      duration: "8 Days / 7 Nights",
      price: "$2,799",
      rating: 4.9,
      reviews: 203,
      groupSize: "2-15",
      image:
        "https://images.unsplash.com/photo-1545030856-612d5feaf990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      highlights: [
        "Paro or Thimphu Tshechu",
        "Masked dance performances",
        "Monk blessing ceremonies",
        "Traditional archery",
        "Local craft workshops",
      ],
      description:
        "Time your visit with Bhutan's vibrant festivals and experience colorful masked dances and sacred ceremonies.",
    },
    {
      id: 5,
      title: "Photography Expedition",
      category: "adventure",
      duration: "12 Days / 11 Nights",
      price: "$3,899",
      rating: 5.0,
      reviews: 67,
      groupSize: "4-8",
      image:
        "https://images.unsplash.com/photo-1729180253317-93ba9cf4ceb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      highlights: [
        "Sunrise at Tiger's Nest",
        "Festival photography",
        "Landscape compositions",
        "Portrait sessions with locals",
        "Night sky photography",
      ],
      description:
        "Capture Bhutan's stunning landscapes, vibrant culture, and spiritual essence with expert photography guidance.",
    },
    {
      id: 6,
      title: "Family Adventure Package",
      category: "culture",
      duration: "6 Days / 5 Nights",
      price: "$2,199",
      rating: 4.7,
      reviews: 142,
      groupSize: "4-12",
      image:
        "https://images.unsplash.com/photo-1761048169718-f7ea52252128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      highlights: [
        "Kid-friendly monastery visits",
        "Traditional archery lessons",
        "Farmhouse visits",
        "Cultural storytelling sessions",
        "Nature walks",
      ],
      description:
        "A family-friendly journey designed to engage travelers of all ages with Bhutan's culture and nature.",
    },
  ];

  const filteredTours = tours.filter((tour) => {
    if (selectedCategory !== "all" && tour.category !== selectedCategory)
      return false;
    if (selectedDuration !== "all") {
      const days = parseInt(tour.duration);
      if (selectedDuration === "short" && days > 6) return false;
      if (selectedDuration === "medium" && (days < 7 || days > 10))
        return false;
      if (selectedDuration === "long" && days < 11) return false;
    }
    return true;
  });

  return (
    <div className="pt-20">
      <section
        className="relative py-50"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1772203248551-978d4c154804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Tour Packages</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Carefully crafted journeys to experience the best of Bhutan's
            culture, nature, and spirituality
          </p>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Tour Type
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-border rounded-md bg-white min-w-[200px]"
              >
                <option value="all">All Tours</option>
                <option value="culture">Cultural Tours</option>
                <option value="adventure">Adventure & Trekking</option>
                <option value="wellness">Wellness Retreats</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Duration
              </label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="px-4 py-2 border border-border rounded-md bg-white min-w-[200px]"
              >
                <option value="all">Any Duration</option>
                <option value="short">Up to 6 days</option>
                <option value="medium">7-10 days</option>
                <option value="long">11+ days</option>
              </select>
            </div>
            <div className="text-sm text-muted-foreground">
              Showing {filteredTours.length} of {tours.length} tours
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 h-64 md:h-auto">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold capitalize">
                        {tour.category}
                      </span>
                      <div className="flex items-center">
                        <Star
                          size={16}
                          className="fill-yellow-400 text-yellow-400 mr-1"
                        />
                        <span className="text-sm font-semibold">
                          {tour.rating}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">
                          ({tour.reviews})
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{tour.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {tour.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar size={16} className="mr-2 text-primary" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users size={16} className="mr-2 text-primary" />
                      Group: {tour.groupSize}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold mb-2">Highlights:</p>
                    <ul className="grid grid-cols-1 gap-1">
                      {tour.highlights.slice(0, 3).map((highlight, i) => (
                        <li
                          key={i}
                          className="text-xs text-muted-foreground flex items-start"
                        >
                          <Check
                            size={14}
                            className="text-primary mr-1 mt-0.5 flex-shrink-0"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4 border-t flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">
                        From
                      </span>
                      <p className="text-2xl font-bold text-primary">
                        {tour.price}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        per person
                      </span>
                    </div>
                    <Link
                      href="/contact"
                      className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm font-semibold inline-flex items-center"
                    >
                      Book Now
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We specialize in creating custom itineraries tailored to your
            interests, schedule, and budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-semibold"
          >
            Request Custom Itinerary
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Tours;
