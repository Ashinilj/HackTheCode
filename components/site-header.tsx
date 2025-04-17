"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Theme", id: "theme" },
    { name: "Our Team", id: "our-team" },
    { name: "FAQs", id: "faqs" },
    { name: "Contact Us", id: "contact-us" },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false); // Close menu on click
    if (pathname === "/") {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#ea623e]/10 via-[#934d76]/10 to-[#632182]/10 backdrop-blur-sm border-b border-border/40"
    >
      <div className="container flex h-16 items-center px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/htc1.png"
            alt="Wth Logo"
            width={68}
            height={68}
            className="rounded-lg"
          />
        </Link>

        {/* Mobile Menu Toggle (Only for Mobile) */}
        <button
          className="md:hidden text-white ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-end items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-lg font-medium text-white hover:bg-gradient-to-r hover:from-[#ea623e] hover:via-[#934d76] hover:to-[#632182] hover:bg-clip-text hover:text-transparent hover:underline"
            >
              {link.name}
            </button>
          ))}

          {/* Timeline Button - Extreme Right */}
          <div className="ml-auto">
            <Link
              href="/timeline"
              className="inline-flex items-center justify-center rounded-md sm:text-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 h-9 px-5"
            >
              Timeline
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 w-full bg-[#121212]/90 backdrop-blur-lg border-t border-border/40"
          >
            <nav className="flex flex-col items-center space-y-4 py-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-lg font-medium text-white hover:bg-gradient-to-r hover:from-[#ea623e] hover:via-[#934d76] hover:to-[#632182] hover:bg-clip-text hover:text-transparent hover:underline"
                >
                  {link.name}
                </button>
              ))}

              {/* Timeline Button - In Mobile Menu */}
              <Link
                href="/timeline"
                className="inline-flex items-center justify-center rounded-md text-lg font-semibold transition-colors bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 h-10 px-6"
              >
                Timeline
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
