import Link from "next/link";
import { Heart, Award, Globe, ArrowRight, Check } from "lucide-react";

const About = () => {
  return (
    <div className="pt-20">
      <section
        className="relative py-50"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1761048163587-0c13c4ae450b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Bhutan</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the Land of the Thunder Dragon - where Gross National Happiness matters more than GDP
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6">The Last Himalayan Kingdom</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nestled in the eastern Himalayas between India and China, Bhutan is a kingdom where ancient Buddhist culture thrives in harmony with carefully managed modernization. Known as Druk Yul, the "Land of the Thunder Dragon," Bhutan is the world's only carbon-negative country and a beacon of sustainable development.
                </p>
                <p>
                  This mystical kingdom remained closed to the outside world until 1974, preserving its unique culture, pristine environment, and spiritual traditions. Today, Bhutan opens its doors to a limited number of visitors each year, ensuring tourism enhances rather than diminishes the country's cultural and environmental treasures.
                </p>
                <p>
                  With soaring snow-capped peaks, lush valleys, ancient monasteries perched on cliff faces, and a population that measures success through Gross National Happiness, Bhutan offers travelers an experience unlike anywhere else on Earth.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1670962521533-c784cf60e4e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                alt="Bhutan landscape"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1761048152614-c525d49f31ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                alt="Bhutan monastery"
                className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>

          <div className="bg-muted rounded-lg p-12 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Gross National Happiness</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Unlike most countries that measure progress through GDP, Bhutan evaluates development based on Gross National Happiness (GNH), a holistic approach that balances material and spiritual well-being across four pillars:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Sustainable Development",
                  description: "Environmental conservation and economic growth that serves the people",
                },
                {
                  title: "Cultural Preservation",
                  description: "Protection and promotion of Bhutan's unique cultural heritage",
                },
                {
                  title: "Environmental Conservation",
                  description: "72% forest cover mandate and carbon-negative status",
                },
                {
                  title: "Good Governance",
                  description: "Transparent, accountable leadership focused on citizen well-being",
                },
              ].map((pillar, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="text-primary" size={32} />
                  </div>
                  <h3 className="font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1545030856-612d5feaf990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="Prayer flags"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Culture & Traditions</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Buddhism is woven into every aspect of Bhutanese life. Prayer flags flutter from mountain passes, monasteries cling to cliffsides, and monks in maroon robes are a common sight. The national dress - gho for men and kira for women - is worn with pride, even in modern offices.
                </p>
                <p>
                  Throughout the year, colorful festivals (tshechus) bring communities together to watch masked dances, receive blessings, and celebrate their heritage. Archery, the national sport, is practiced in villages across the country.
                </p>
                <p>
                  Despite modernization, Bhutanese culture remains remarkably intact. Traditional arts and crafts thrive, Dzongkha is the national language, and the country's unique architectural style is preserved by law.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: "Population", value: "~775,000" },
              { label: "Capital", value: "Thimphu" },
              { label: "Official Language", value: "Dzongkha" },
              { label: "Currency", value: "Ngultrum (BTN)" },
            ].map((fact, index) => (
              <div key={index} className="text-center bg-muted p-6 rounded-lg">
                <p className="text-3xl font-bold text-primary mb-2">{fact.value}</p>
                <p className="text-sm text-muted-foreground">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Bhutan is Special</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A destination that prioritizes preservation over profit and happiness over growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "World's Only Carbon-Negative Country",
                description: "Bhutan absorbs more carbon than it produces, with 72% forest coverage protected by constitution",
              },
              {
                icon: Award,
                title: "High Value, Low Impact Tourism",
                description: "Limited tourist numbers and sustainable development fees ensure quality experiences and cultural preservation",
              },
              {
                icon: Heart,
                title: "Living Buddhist Culture",
                description: "Ancient traditions, monasteries, and spiritual practices remain integral to daily life",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Bhutan?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us guide you through this extraordinary kingdom with respect for its culture and commitment to sustainable travel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-semibold"
            >
              Explore Tours
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border-2 border-primary text-primary px-8 py-3 rounded-md hover:bg-primary/5 transition-colors font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
