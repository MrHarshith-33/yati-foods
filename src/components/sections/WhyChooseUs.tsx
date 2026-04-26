"use client";
import { motion } from "framer-motion";
import { FaHeart, FaRupeeSign, FaListUl, FaLeaf, FaShoppingBag, FaUsers } from "react-icons/fa";

const reasons = [
  { icon: <FaHeart />, title: "Authentic Andhra Taste", desc: "Traditional recipes that bring the real local flavor to your plate." },
  { icon: <FaRupeeSign />, title: "Affordable Prices", desc: "Enjoy premium quality food without breaking the bank." },
  { icon: <FaListUl />, title: "Large Menu Variety", desc: "From biryanis to cakes, we have something for everyone." },
  { icon: <FaLeaf />, title: "Freshly Prepared", desc: "We cook daily with fresh ingredients to ensure the best quality." },
  { icon: <FaShoppingBag />, title: "Quick Takeaway", desc: "Fast service for those on the go, without compromising taste." },
  { icon: <FaUsers />, title: "Family Friendly", desc: "A great ambience to enjoy meals together with your loved ones." }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold uppercase tracking-wider mb-2">Benefits</h2>
          <h3 className="text-3xl md:text-5xl font-poppins font-bold text-brandText">Why Choose Us</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-brandBg p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold font-poppins mb-3 text-brandText">{reason.title}</h4>
              <p className="text-gray-600 font-inter">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
