import Link from "next/link";
import { Star, Check } from "lucide-react";
import travel_img from "@/public/images/travel_img.jpg";
import trek_img from "@/public/images/trekking.jpg";
import mindful_img from "@/public/images/mindful.jpg";

const FeaturedTours = () => {
  const tours = [
    {
      title: "Cultural Heritage Tour",
      duration: "7 Days",
      price: "$2,499",
      rating: 4.9,
      reviews: 127,
      image: travel_img.src,
      highlights: ["Tiger's Nest", "Punakha Dzong", "Traditional Festivals"],
    },
    {
      title: "Himalayan Trekking Adventure",
      duration: "10 Days",
      price: "$3,299",
      rating: 5.0,
      reviews: 89,
      image: trek_img.src,
      highlights: ["Snowman Trek", "High Altitude Lakes", "Mountain Views"],
    },
    {
      title: "Wellness & Mindfulness Retreat",
      duration: "5 Days",
      price: "$1,899",
      rating: 4.8,
      reviews: 156,
      image: mindful_img.src,
      highlights: ["Meditation Sessions", "Spa Treatments", "Yoga & Nature"],
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Handpicked Bhutan Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully curated tours designed to showcase the best of Bhutan's
            culture, nature, and spirituality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                <div className="flex items-center mb-3">
                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400 mr-1"
                  />
                  <span className="text-sm font-semibold">{tour.rating}</span>
                  <span className="text-sm text-muted-foreground ml-1">
                    ({tour.reviews} reviews)
                  </span>
                </div>
                <ul className="space-y-1 mb-4">
                  {tour.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-center"
                    >
                      <Check
                        size={16}
                        className="text-primary mr-2 flex-shrink-0"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-sm text-muted-foreground">From</span>
                    <p className="text-2xl font-bold text-primary">
                      {tour.price}
                    </p>
                  </div>
                  <Link
                    href="/tours"
                    className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
