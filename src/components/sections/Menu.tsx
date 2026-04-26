"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

const menuData = {
  "Starters": [
    { name: "Chicken 65", price: "₹250", pop: true },
    { name: "Chilli Chicken", price: "₹240", pop: false },
    { name: "Chicken Majestic", price: "₹260", pop: true },
    { name: "Paneer 65", price: "₹220", pop: false },
    { name: "Gobi Manchuria", price: "₹180", pop: false },
  ],
  "Biryani Specials": [
    { name: "Chicken Dum Biryani", price: "₹280", pop: true },
    { name: "Chicken Fry Piece Biryani", price: "₹290", pop: true },
    { name: "Mutton Biryani", price: "₹380", pop: false },
    { name: "Prawn Biryani", price: "₹350", pop: false },
    { name: "Mixed Biryani", price: "₹400", pop: true },
  ],
  "Rice Items": [
    { name: "Veg Fried Rice", price: "₹160", pop: false },
    { name: "Egg Fried Rice", price: "₹180", pop: false },
    { name: "Chicken Fried Rice", price: "₹220", pop: true },
  ],
  "Curries": [
    { name: "Butter Chicken", price: "₹260", pop: true },
    { name: "Paneer Butter Masala", price: "₹240", pop: false },
    { name: "Mushroom Masala", price: "₹230", pop: false },
    { name: "Kadai Chicken", price: "₹250", pop: false },
  ],
  "Bakery & Desserts": [
    { name: "Black Forest Cake", price: "₹450", pop: true },
    { name: "Chocolate Cake", price: "₹500", pop: false },
    { name: "Red Velvet", price: "₹550", pop: true },
    { name: "Pastries", price: "₹80", pop: false },
  ],
  "Milkshakes": [
    { name: "Chocolate", price: "₹120", pop: true },
    { name: "Mango", price: "₹110", pop: false },
    { name: "Dry Fruit", price: "₹150", pop: true },
    { name: "Cold Coffee", price: "₹100", pop: false },
  ]
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState("Biryani Specials");
  const categories = Object.keys(menuData);
  const { addToCart } = useCart();

  // @ts-ignore
  const activeItems = menuData[activeTab];

  return (
    <section id="menu" className="pt-32 pb-24 bg-brandBg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-primary text-sm font-bold uppercase tracking-wider mb-2">Our Menu</h2>
          <h3 className="text-3xl md:text-5xl font-poppins font-bold text-brandText mb-8">
            Explore Our Flavors
          </h3>
          
          {/* Scrollable Tabs */}
          <div className="flex overflow-x-auto pb-4 justify-start lg:justify-center gap-3 no-scrollbar snap-x">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`whitespace-nowrap px-6 py-3 rounded-full font-semibold transition-all snap-center ${
                  activeTab === cat 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-white text-brandText border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {activeItems.map((item: any) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group flex flex-col h-full"
              >
                {item.pop && (
                  <div className="absolute top-4 right-4 bg-accent text-brandText text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
                    Best Seller
                  </div>
                )}
                {/* Content Container with top margin to avoid badge overlap */}
                <div className="flex flex-col flex-1 mt-8">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h4 className="text-xl font-bold font-poppins text-brandText flex-1 leading-snug">{item.name}</h4>
                    <span className="text-xl font-bold text-primary font-inter shrink-0">{item.price}</span>
                  </div>
                </div>
                {/* Fixed bottom Add to Cart */}
                <div className="flex justify-start mt-auto pt-4 border-t border-gray-50">
                  <button 
                    onClick={() => {
                      const numPrice = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
                      addToCart({ id: item.name, name: item.name, price: numPrice, quantity: 1 });
                    }}
                    className="bg-ctaBase/10 text-ctaBase hover:bg-ctaBase hover:text-white px-5 py-2 rounded-full font-semibold transition-colors flex items-center gap-2 text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
