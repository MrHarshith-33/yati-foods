import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const poppins = Poppins({ subsets: ["latin"], weight: ['400', '600', '700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: "Yati Foods | Best Biryani Restaurant in Samarlakota",
  description: "Enjoy authentic chicken biryani, starters, fried rice, cakes and milkshakes at Yati Foods Samarlakota. Dine-in, takeaway and delivery available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-inter bg-brandBg text-brandText`}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingActions />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
