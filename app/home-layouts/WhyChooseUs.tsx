import { Users, Heart, Shield, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Licensed Bhutan Travel Experts",
      description:
        "Fully licensed and certified by the Tourism Council of Bhutan with 15+ years experience",
    },
    {
      icon: Heart,
      title: "Sustainable & Responsible Tourism",
      description:
        "We practice and promote Bhutan's philosophy of high value, low impact tourism",
    },
    {
      icon: Users,
      title: "Expert Local Guides",
      description:
        "Knowledgeable local guides who share deep insights into Bhutanese culture and history",
    },
    {
      icon: Clock,
      title: "Custom Itineraries & 24/7 Support",
      description:
        "Tailored experiences designed around your interests with round-the-clock assistance",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Travel With Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience Bhutan with a trusted partner committed to authentic,
            sustainable travel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
