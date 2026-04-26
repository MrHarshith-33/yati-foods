"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { itemsCount, setIsCartOpen } = useCart();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOrderNow = (e: React.MouseEvent) => {
    e.preventDefault();
    if (itemsCount > 0) {
      setIsCartOpen(true);
      setIsOpen(false);
    } else {
      router.push("/#menu");
      setIsOpen(false);
    }
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "glass shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="font-poppins font-bold text-2xl text-primary flex items-center gap-2">
          <span className="text-3xl">🍲</span>
          Yati Foods
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="font-medium hover:text-primary transition-colors text-brandText">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <button onClick={handleOrderNow} className="bg-ctaBase hover:bg-ctaHover text-white px-6 py-2 rounded-full font-semibold transition-colors shadow-lg relative">
            Order Now
            {itemsCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">{itemsCount}</span>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-2xl text-brandText" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brandBg shadow-lg border-b border-gray-200">
          <ul className="flex flex-col items-center py-6 gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-lg font-medium text-brandText"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <button 
                onClick={handleOrderNow}
                className="bg-ctaBase text-white px-8 py-3 rounded-full font-semibold mt-2 inline-flex items-center gap-2 relative"
              >
                Order Now
                {itemsCount > 0 && (
                  <span className="bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{itemsCount}</span>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
