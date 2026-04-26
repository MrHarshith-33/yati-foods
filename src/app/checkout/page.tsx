"use client";
import { useState, FormEvent, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CheckoutPage() {
  const { items, cartTotal, clearCart, deliveryFee, gst, grandTotal } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If cart is empty and not currently submitting, redirect to home
  useEffect(() => {
    if (items.length === 0 && !isSubmitting) {
      router.push("/");
    }
  }, [items, isSubmitting, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: FormEvent) => {
    e.preventDefault();

    const WHATSAPP_NUMBER = "919848299456";

    let itemsText = items.map(
      item => `${item.name} × ${item.quantity} = ₹${item.price * item.quantity}`
    ).join("\n");

    const message = `Hello Yati Foods,

Customer Name: ${formData.name}
Phone Number: ${formData.phone}
Delivery Address:
${formData.address}

Order Summary:

${itemsText}

Subtotal: ₹${cartTotal}
Delivery: ₹${deliveryFee}
GST (5%): ₹${gst}
Grand Total: ₹${grandTotal}

Please confirm this order.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    setIsSubmitting(true);

    setTimeout(() => {
      // Clear cart
      clearCart();
      
      // Open whatsapp in new tab
      window.open(whatsappUrl, "_blank");
      
      // Navigate home
      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
    }, 1500);
  };

  if (items.length === 0 && !isSubmitting) return null;

  return (
    <div className="min-h-screen bg-brandBg pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-secondary font-bold mb-8 transition-colors">
          <FaArrowLeft /> Back to Menu
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Form Section */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-fit">
            <h2 className="text-2xl font-poppins font-bold text-brandText mb-6">Delivery Details</h2>
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-inter" 
                  placeholder="Enter your name" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-inter" 
                  placeholder="Enter 10-digit number" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Delivery Address</label>
                <textarea 
                  name="address" 
                  required 
                  rows={4}
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-inter resize-none" 
                  placeholder="Enter full address with landmarks" 
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-[#25D366] hover:bg-[#1EBE53] text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2">
                <FaWhatsapp className="text-2xl" /> Let&apos;s Order via WhatsApp
              </button>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-fit">
            <h2 className="text-2xl font-poppins font-bold text-brandText mb-6">Order Summary</h2>
            
            <div className="flex-1 overflow-y-auto pr-2 space-y-4 mb-6 max-h-[400px]">
              {items.map(item => (
                <div key={item.id} className="flex justify-between items-center bg-brandBg/50 p-4 rounded-xl">
                  <div>
                    <h4 className="font-bold text-brandText">{item.name}</h4>
                    <p className="text-sm text-gray-500 font-inter">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">₹{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-6 space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Charge</span>
                <span>{deliveryFee === 0 ? <span className="text-green-500 font-bold">Free</span> : `₹${deliveryFee}`}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>GST (5%)</span>
                <span>₹{gst}</span>
              </div>
              <div className="flex justify-between text-brandText text-xl font-bold pt-3 border-t border-gray-100">
                <span>Grand Total</span>
                <span className="text-secondary text-2xl drop-shadow-sm">₹{grandTotal}</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {isSubmitting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brandBg/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center flex flex-col items-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
              >
                <FaCheckCircle className="text-6xl text-green-500 mb-6 drop-shadow-md" />
              </motion.div>
              
              <h3 className="text-2xl font-poppins font-bold text-brandText mb-2">Order Placed!</h3>
              <p className="text-gray-500 font-inter mb-6">Redirecting to WhatsApp confirmation...</p>
              
              <div className="w-full bg-gray-50 rounded-xl p-4 text-left border border-gray-100">
                <p className="font-bold text-brandText mb-1 text-sm text-center">Summary Preview</p>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-brandText">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>Delivery:</span>
                  <span className="font-semibold text-brandText">{deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>GST:</span>
                  <span className="font-semibold text-brandText">₹{gst}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 mt-2 pt-2">
                  <span className="font-bold text-brandText text-sm">Grand Total</span>
                  <span className="font-bold text-primary text-lg">₹{grandTotal}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
