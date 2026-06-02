import { Star } from "lucide-react";
import sarah_img from "@/public/images/sarah.jpg";
import michael_img from "@/public/images/michael.jpg";
import emma_img from "@/public/images/emma.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United States",
      rating: 5,
      text: "Our journey through Bhutan was absolutely magical. The guides were incredibly knowledgeable and the itinerary was perfectly paced. Visiting Tiger's Nest was a life-changing experience.",
      image: sarah_img.src,
    },
    {
      name: "Michael Chen",
      country: "Singapore",
      rating: 5,
      text: "Bhutan Travels exceeded all our expectations. From the stunning landscapes to the warm hospitality, every moment was unforgettable. Highly recommended for anyone seeking authentic cultural experiences.",
      image: michael_img.src,
    },
    {
      name: "Emma Williams",
      country: "United Kingdom",
      rating: 5,
      text: "The attention to detail and personalized service made our Bhutan adventure truly special. Our guide shared fascinating insights about Buddhism and Bhutanese culture. We can't wait to return!",
      image: emma_img.src,
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from our guests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
