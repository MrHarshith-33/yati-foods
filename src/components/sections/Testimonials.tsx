"use client";
import { FaStar, FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul S.",
    review: "Chicken dum biryani taste was too good. The genuine Andhra spice level is perfect! Will order again.",
    rating: 5,
    time: "2 weeks ago"
  },
  {
    name: "Priya V.",
    review: "Best place for tasty starters and biryani in Samarlakota. Their Chicken 65 is an absolute must-try.",
    rating: 5,
    time: "1 month ago"
  },
  {
    name: "Anil K.",
    review: "Affordable and filling meals. Generous portions and very friendly staff. My go-to weekend spot for family dinners.",
    rating: 4,
    time: "3 months ago"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brandBg/50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold uppercase tracking-wider mb-2">Reviews</h2>
          <h3 className="text-3xl md:text-5xl font-poppins font-bold text-brandText mb-4">
            What Our Customers Say
          </h3>
          <div className="flex items-center justify-center gap-2 text-lg font-bold">
            <FaGoogle className="text-blue-500" />
            <span>4.8/5 Average Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
            >
              <div className="flex gap-1 text-accent mb-4 text-xl">
                {[...Array(test.rating)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="text-gray-700 italic mb-6 font-inter leading-relaxed">
                &quot;{test.review}&quot;
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="font-bold text-brandText font-poppins">{test.name}</h4>
                  <span className="text-xs text-gray-500 flex items-center mt-1 gap-1">
                    <FaGoogle className="text-blue-500" /> Local Guide
                  </span>
                </div>
                <span className="text-xs text-gray-400">{test.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
