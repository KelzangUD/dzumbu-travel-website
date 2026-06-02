"use client";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDates: "",
    travelers: "",
    tourType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      <section
        className="relative py-50"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1772702812433-ffc2aa5e4318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Let's plan your perfect Bhutan adventure together
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Plan Your Trip</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Preferred Destination
                      </label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select destination</option>
                        <option value="paro">Paro</option>
                        <option value="thimphu">Thimphu</option>
                        <option value="punakha">Punakha</option>
                        <option value="bumthang">Bumthang</option>
                        <option value="phobjikha">Phobjikha Valley</option>
                        <option value="haa">Haa Valley</option>
                        <option value="multiple">Multiple Destinations</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Preferred Travel Dates
                      </label>
                      <input
                        type="text"
                        name="travelDates"
                        value={formData.travelDates}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., March 2026"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Number of Travelers
                      </label>
                      <select
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select number</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3-5">3-5 People</option>
                        <option value="6-10">6-10 People</option>
                        <option value="10+">10+ People</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Tour Type
                    </label>
                    <select
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select tour type</option>
                      <option value="cultural">Cultural Heritage</option>
                      <option value="adventure">Adventure & Trekking</option>
                      <option value="wellness">Wellness Retreat</option>
                      <option value="festival">Festival Tour</option>
                      <option value="photography">
                        Photography Expedition
                      </option>
                      <option value="custom">Custom Itinerary</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Message / Special Requests
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your dream Bhutan trip, any special requirements, or questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-8 py-4 rounded-md hover:bg-primary/90 transition-colors font-semibold flex items-center justify-center"
                  >
                    <Send size={20} className="mr-2" />
                    Send Inquiry
                  </button>

                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 24 hours. All inquiries are free
                    with no obligation.
                  </p>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin
                      className="text-primary mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold">Office Address</p>
                      <p className="text-sm text-muted-foreground">
                        Thimphu, Bhutan
                        <br />
                        Near Clock Tower Square
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone
                      className="text-primary mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        +975 2 123 4567
                      </p>
                      <p className="text-sm text-muted-foreground">
                        +975 17 987 654
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail
                      className="text-primary mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-muted-foreground">
                        info@bhutantravels.com
                      </p>
                      <p className="text-sm text-muted-foreground">
                        bookings@bhutantravels.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock
                      className="text-primary mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold">Office Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Mon - Fri: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sat: 10:00 AM - 4:00 PM
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sun: Closed
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        (Bhutan Standard Time - BST)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Licensed by Tourism Council of Bhutan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>15+ years of experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Expert local guides</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Custom itineraries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>24/7 support during your trip</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Sustainable tourism practices</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-bold mb-3">Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  Need immediate assistance? WhatsApp us at{" "}
                  <strong>+975 17 987 654</strong> for quick responses during
                  business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
