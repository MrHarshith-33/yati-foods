export default function Footer() {
  return (
    <footer className="bg-brandText text-white pt-16 pb-8 md:pb-8 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-poppins font-bold text-accent mb-4">Yati Foods</h2>
            <p className="text-gray-400 mb-4 font-inter">
              Serving the authentic taste of Andhra with fresh ingredients and love.
            </p>
            <div className="inline-block bg-white text-brandText px-3 py-1 rounded font-bold text-xs mt-2">
              FSSAI Lic. No: XXXXXXXXXXXXXX
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Teachers Colony, Nimmathota, Samarlakota, AP 533440</li>
              <li>📞 +91 98482 99456</li>
              <li>⏰ Open Daily: 9:00 AM – 10:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Yati Foods. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
