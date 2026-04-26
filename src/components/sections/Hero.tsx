"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaStar, FaUtensils, FaMotorcycle } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function Hero() {
  const { itemsCount, setIsCartOpen } = useCart();
  const router = useRouter();

  const handleOrderNow = (e: React.MouseEvent) => {
    e.preventDefault();
    if (itemsCount > 0) setIsCartOpen(true);
    else router.push("/#menu");
  };
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed" 
        style={{ backgroundImage: "url('/images/hero_biryani.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-white mb-6 leading-tight drop-shadow-lg"
        >
          Authentic Biryani & <br className="hidden md:block"/> Starters in Samarlakota
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-200 mb-10 font-medium font-inter max-w-2xl"
        >
          Freshly prepared meals with real Andhra flavor.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <button onClick={handleOrderNow} className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-[0_4px_20px_rgba(211,84,0,0.4)] relative">
            Order Now
            {itemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full shadow-lg animate-pulse">{itemsCount}</span>
            )}
          </button>
          <Link href="#menu" className="glass hover:bg-white hover:text-brandText text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
            View Menu
          </Link>
        </motion.div>

        {/* Trust Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-brandBg/95 backdrop-blur-md rounded-xl flex flex-wrap justify-center items-center gap-8 md:gap-16 p-6 md:p-8 w-full max-w-4xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20"
        >
          <div className="flex items-center gap-3 text-brandText font-medium text-[15px] md:text-lg">
            <FaStar className="text-accent text-2xl" />
            <span>4.8 Google Rating</span>
          </div>
          <div className="flex items-center gap-3 text-brandText font-medium text-[15px] md:text-lg">
            <FaUtensils className="text-primary text-2xl" />
            <span>Famous Chicken Biryani</span>
          </div>
          <div className="flex items-center gap-3 text-brandText font-medium text-[15px] md:text-lg">
            <FaMotorcycle className="text-primary text-2xl" />
            <span>Delivery Available</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
