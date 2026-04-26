"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brandBg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold uppercase tracking-wider mb-2">Reach Us</h2>
          <h3 className="text-3xl md:text-5xl font-poppins font-bold text-brandText">
            Contact & Location
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-50">
          {/* Info Side */}
          <div className="flex-1 flex flex-col justify-center">
            <h4 className="text-2xl font-bold font-poppins mb-6 text-brandText">Yati Foods</h4>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full text-xl shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h5 className="font-bold text-lg text-brandText">Address</h5>
                  <p className="text-gray-600 font-inter mt-1">Teachers Colony, Nimmathota,<br/>Samarlakota, Andhra Pradesh 533440</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full text-xl shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h5 className="font-bold text-lg text-brandText">Phone</h5>
                  <p className="text-gray-600 font-inter mt-1 cursor-pointer hover:text-primary transition-colors">+91 98482 99456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full text-xl shrink-0">
                  <FaClock />
                </div>
                <div>
                  <h5 className="font-bold text-lg text-brandText">Opening Hours</h5>
                  <p className="text-gray-600 font-inter mt-1">Everyday: 9:00 AM – 10:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-auto">
              <a href="tel:+919848299456" className="flex-1 bg-primary hover:bg-secondary text-white text-center py-3 rounded-full font-bold shadow-md transition-colors whitespace-nowrap">
                Call Now
              </a>
              <a href="#" className="flex-1 bg-ctaBase hover:bg-ctaHover text-white text-center py-3 rounded-full font-bold shadow-md transition-colors whitespace-nowrap">
                Get Directions
              </a>
            </div>
          </div>

          {/* Map Side */}
          <div className="flex-1 h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15278.490791404113!2d82.16450650000001!3d17.04944445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a382c443b7e7a81%3A0xc6cbfa0ab1a457c3!2sSamarlakota%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
