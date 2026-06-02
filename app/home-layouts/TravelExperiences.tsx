import monastry_img from "@/public/images/monastry.jpg";
import traditional_img from "@/public/images/traditional.jpg";
import trekking_img from "@/public/images/trekking.jpg";
import wildlife_img from "@/public/images/phobjikha.jpg";
import buddha_img from "@/public/images/buddha.jpg";

const TravelExperiences = () => {
  const experiences = [
    {
      title: "Buddhist Culture & Monasteries",
      image: monastry_img.src,
    },
    {
      title: "Traditional Festivals",
      image: traditional_img.src,
    },
    {
      title: "Himalayan Trekking",
      image: trekking_img.src,
    },
    {
      title: "Nature & Wildlife",
      image: wildlife_img.src,
    },
    {
      title: "Wellness & Meditation",
      image: buddha_img.src,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Bhutan Travel Experiences</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in the unique traditions and natural wonders of the
            Himalayan kingdom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative h-72 rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-semibold">{exp.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelExperiences;
