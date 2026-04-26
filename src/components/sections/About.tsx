"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-brandBg">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-primary text-sm font-bold uppercase tracking-wider mb-2">Our Story</h2>
          <h3 className="text-3xl md:text-5xl font-poppins font-bold text-brandText mb-8">
            Welcome to Yati Foods
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed font-inter mb-10">
            Yati Foods is a popular fast-food and biryani destination in Samarlakota, known for its flavorful starters, delicious biryanis, Indo-Chinese dishes, and bakery delights. We serve fresh food daily with authentic taste and generous portions. Our priority is quality ingredients, affordable pricing, and delivering a family-friendly environment.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white border-2 border-primary/20 px-4 py-2 rounded-full font-semibold text-primary shadow-sm">Fresh Ingredients</span>
            <span className="bg-white border-2 border-primary/20 px-4 py-2 rounded-full font-semibold text-primary shadow-sm">Affordable Pricing</span>
            <span className="bg-white border-2 border-primary/20 px-4 py-2 rounded-full font-semibold text-primary shadow-sm">Family-Friendly</span>
            <span className="bg-white border-2 border-primary/20 px-4 py-2 rounded-full font-semibold text-primary shadow-sm">Local Favorite</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
