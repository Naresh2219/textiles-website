import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
  FacebookIcon,
} from "lucide-react"; // install lucide-react

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-10 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Brand & About */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">VDTilesCo</h2>
          <p className="text-sm leading-relaxed">
            Premium tiles for every space — stylish, durable, and affordable.
            Transform your interiors with our exclusive collection.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-yellow-400 transition">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> <span>+91  8019538669</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> <span>vdmarketing96@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> <span>Hyderabad, India</span>
            </li>
          </ul>
          {/* Socials */}
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/vdmarketing96?utm_source=qr&igsh=MXFveno1cXJvbHBzeA==" className="hover:text-yellow-400">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/vdmarketing96?utm_source=qr&igsh=MXFveno1cXJvbHBzeA==" className="hover:text-yellow-400">
              <Instagram size={20} />
            </a>
            <a href="https://www.instagram.com/vdmarketing96?utm_source=qr&igsh=MXFveno1cXJvbHBzeA==" className="hover:text-yellow-400">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} VDTilesCo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
