import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do I need a visa to visit Bhutan?",
      answer:
        "Yes, all tourists (except Indian, Bangladeshi, and Maldivian nationals) require a visa to enter Bhutan. We handle all visa arrangements as part of your tour package. The visa is issued upon arrival after we process your application.",
    },
    {
      question: "What is the best time to visit Bhutan?",
      answer:
        "The best time to visit Bhutan is during spring (March-May) and autumn (September-November). These seasons offer clear skies, pleasant weather, and colorful festivals. However, Bhutan is beautiful year-round, with each season offering unique experiences.",
    },
    {
      question: "How much does a trip to Bhutan cost?",
      answer:
        "Bhutan operates on a 'high value, low impact' tourism policy. The Sustainable Development Fee is $100 per night. Our tour packages range from $1,500 to $5,000+ depending on duration, accommodation level, and activities included.",
    },
    {
      question: "Is Bhutan safe for travelers?",
      answer:
        "Bhutan is one of the safest countries in the world for travelers. Crime rates are extremely low, and the Bhutanese people are known for their warmth and hospitality. Our experienced guides ensure your safety throughout the journey.",
    },
    {
      question: "What should I pack for my Bhutan trip?",
      answer:
        "Pack comfortable walking shoes, layers for varying temperatures, sun protection, and modest clothing for monastery visits. Trekking gear is needed for adventure tours. We provide a detailed packing list once you book your tour.",
    },
    {
      question: "What is the trekking difficulty level?",
      answer:
        "We offer treks for all fitness levels, from easy cultural walks to challenging high-altitude expeditions. The Tiger's Nest hike is moderate, while treks like Snowman Trek are for experienced trekkers. We'll help you choose the right trek.",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Plan Your Trip</h2>
          <p className="text-lg text-muted-foreground">
            Common questions about traveling to Bhutan
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between items-center w-full px-6 py-4 text-left hover:bg-muted/50 transition-colors group">
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className="flex-shrink-0 transition-transform group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-4 text-muted-foreground">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        {/* <div className="text-center mt-8">
          <Link
            href="/faq"
            className="text-primary font-semibold hover:underline inline-flex items-center"
          >
            View All FAQs <ArrowRight size={18} className="ml-2" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default FAQSection;
