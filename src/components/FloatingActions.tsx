"use client";

import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function FloatingActions() {
  const [showOrderBar, setShowOrderBar] = useState(false);
  const { itemsCount, setIsCartOpen } = useCart();
  const router = useRouter();

  const handleOrderNow = (e: React.MouseEvent) => {
    e.preventDefault();
    if (itemsCount > 0) setIsCartOpen(true);
    else router.push("/#menu");
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky order bar when scrolled down
      setShowOrderBar(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Global Floating WhatsApp Button */}
      <a
        href="https://wa.me/919848299456"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-transform transform hover:scale-110 flex items-center justify-center"
        aria-label="Order on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* Mobile Sticky Order Bar (hidden on desktop) */}
      <div 
        className={`md:hidden fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] p-3 z-40 transition-transform duration-300 ${
          showOrderBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex gap-3">
          <Link href="#menu" className="flex-1 bg-primary text-white text-center py-3 rounded-full font-bold shadow-md">
            View Menu
          </Link>
          <button onClick={handleOrderNow} className="flex-1 bg-ctaBase text-white text-center py-3 rounded-full font-bold shadow-md relative">
            Order Now
            {itemsCount > 0 && (
              <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full animate-bounce shadow-md">{itemsCount}</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
