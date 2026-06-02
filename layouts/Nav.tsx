"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
// import logo_1 from "@/public/icons/logo_1.svg";
import logo_2 from "@/public/icons/logo_2.svg";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo_2} alt="logo" className="h-42 w-42" />
          </Link>

          <div className="hidden lg:flex items-center space-x-14">
            <Link
              href="/"
              className="text-xl hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-xl hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/tours"
              className="text-xl hover:text-primary transition-colors"
            >
              Tours
            </Link>
            <Link
              href="/destinations"
              className="text-xl hover:text-primary transition-colors"
            >
              Destinations
            </Link>
          </div>
          <div className="">
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-xl hover:bg-primary/90 transition-colors"
            >
              Plan Your Trip
            </Link>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-sm hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-sm hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/tours"
              className="block py-2 text-sm hover:text-primary transition-colors"
            >
              Tours
            </Link>
            <Link
              href="/destinations"
              className="block py-2 text-sm hover:text-primary transition-colors"
            >
              Destinations
            </Link>
            <Link
              href="/contact"
              className="block bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-sm text-center mt-4"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
