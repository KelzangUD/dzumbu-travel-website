import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import fb_svg from "@/public/icons/facebook.svg";
import insta_svg from "@/public/icons/instagram.svg";
import tiktok_img from "@/public/icons/tik-tok.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-4xl font-bold mb-4">Dzumbu Travel</h3>
            <p className="text-gray-300 text-xl mb-4">
              Experience the magic of the Hidden Kingdom with licensed Bhutanese
              travel experts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Image
                  src={fb_svg.src}
                  alt="fb"
                  width={32} // 32px is standard for w-8
                  height={32}
                  className="w-4 h-4 object-contain"
                />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Image
                  src={insta_svg.src}
                  alt="instagram"
                  width={32} // 32px is standard for w-8
                  height={32}
                  className="w-4 h-4 object-contain"
                />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Image
                  src={tiktok_img.src}
                  alt="tiktok"
                  width={32} // 32px is standard for w-8
                  height={32}
                  className="w-4 h-4 object-contain"
                />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    About Bhutan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tours"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Tour Packages
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                {/* <li>
                <Link
                  href="/gallery"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Photo Gallery
                </Link>
              </li> */}
                {/* <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li> */}
              </ul>
            </div>

            {/* <div>
            <h4 className="font-semibold mb-4">Tour Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tours"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Cultural Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/trekking"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Trekking & Adventure
                </Link>
              </li>
              <li>
                <Link
                  href="/tours"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Wellness Retreats
                </Link>
              </li>
              <li>
                <Link
                  href="/tours"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Festival Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Custom Itineraries
                </Link>
              </li>
            </ul>
          </div> */}

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start space-x-2">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span>Thimphu, Bhutan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={18} className="flex-shrink-0" />
                  <span>+975 2 123 4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail size={18} className="flex-shrink-0" />
                  <span>info@bhutantravels.com</span>
                </li>
              </ul>
              {/* <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-l-md text-white placeholder:text-gray-400"
                />
                <button className="bg-primary px-4 py-2 text-sm rounded-r-md hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2026 Dzumbu Travel. All rights reserved. Licensed Bhutan Tour
            Operator.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
