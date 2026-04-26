"use client";
import { useCart } from "@/context/CartContext";
import { FaTimes, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, cartTotal, deliveryFee, gst, grandTotal } = useCart();

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsCartOpen(false)}
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[60] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-brandBg">
              <h2 className="text-2xl font-poppins font-bold text-brandText">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-brandText hover:text-primary transition-colors text-xl">
                <FaTimes />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="text-center text-gray-500 mt-20">
                  <span className="text-4xl block mb-4">🛒</span>
                  <p className="text-xl mb-4 font-poppins font-medium">Your cart is empty.</p>
                  <button onClick={() => setIsCartOpen(false)} className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-secondary transition-colors">
                    Browse Menu
                  </button>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex justify-between items-center border-b border-gray-50 pb-4">
                    <div>
                      <h4 className="font-bold text-brandText">{item.name}</h4>
                      <p className="text-primary font-inter font-bold">₹{item.price}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3 bg-gray-50 rounded-full px-3 py-1 border border-gray-200">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-gray-600 hover:text-primary">
                          <FaMinus className="text-xs" />
                        </button>
                        <span className="font-medium w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-gray-600 hover:text-primary">
                          <FaPlus className="text-xs" />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600">
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-brandBg/50 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-poppins font-medium text-gray-600 text-sm">Subtotal</span>
                  <span className="font-poppins font-semibold text-brandText">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-poppins font-medium text-gray-600 text-sm">Delivery Charge</span>
                  <span className="font-poppins font-semibold text-brandText">{deliveryFee === 0 ? <span className="text-green-500">Free</span> : `₹${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-poppins font-medium text-gray-600 text-sm">GST (5%)</span>
                  <span className="font-poppins font-semibold text-brandText">₹{gst}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <span className="font-poppins font-bold text-brandText text-lg">Grand Total</span>
                  <span className="font-poppins font-bold text-primary text-2xl drop-shadow-sm">₹{grandTotal}</span>
                </div>
                <Link 
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full bg-ctaBase hover:bg-ctaHover text-white text-center py-4 rounded-xl font-bold shadow-md transition-colors text-lg"
                >
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
