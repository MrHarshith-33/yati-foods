"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/gallery_biryani.png", alt: "Authentic Mixed Biryani", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { src: "/images/gallery_starter.png", alt: "Chicken 65 Starter", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/images/hero_biryani.png", alt: "Delicious Dum Biryani", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/images/gallery_seating.png", alt: "Premium Restaurant Seating", colSpan: "md:col-span-2", rowSpan: "md:row-span-1" }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold uppercase tracking-wider mb-2">Our Space & Food</h2>
          <h3 className="text-3xl md:text-5xl font-poppins font-bold text-brandText">
            Gallery
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group shadow-md ${img.colSpan} ${img.rowSpan}`}
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
