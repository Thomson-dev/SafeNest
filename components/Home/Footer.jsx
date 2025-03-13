"use client";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#245E40] text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        
        {/* SafeNest Branding & About */}
        <div>
          <h3 className="text-2xl font-bold">SafeNest</h3>
          <p className="mt-2 text-gray-300">
            Empowering businesses with financial security, savings, and growth solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-[#FF8C00]">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-[#FF8C00] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#FF8C00] transition">Services</a></li>
            <li><a href="#" className="hover:text-[#FF8C00] transition">Testimonials</a></li>
            <li><a href="#" className="hover:text-[#FF8C00] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-[#FF8C00]">Contact Us</h4>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> 123 Business Street, Lagos, Nigeria
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +234 800 123 4567
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> support@safenest.com
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-lg font-semibold text-[#FF8C00]">Stay Updated</h4>
          <p className="mt-2 text-gray-300">Subscribe to our newsletter for the latest updates.</p>
          <form className="mt-3 flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-2 text-black bg-transparent border border-white rounded-l-lg outline-none placeholder-gray-300"
            />
            <button className="bg-[#FF8C00] px-4 py-2 rounded-r-lg text-white hover:bg-orange-700 transition">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Social Media & Copyright */}
      <div className="mt-10 border-t border-gray-500 pt-6 text-center flex flex-col items-center">
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-[#FF8C00] transition">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-[#FF8C00] transition">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-[#FF8C00] transition">
            <Instagram size={24} />
          </a>
        </div>
        <p className="mt-4 text-gray-400 text-sm">
          © {new Date().getFullYear()} SafeNest. All rights reserved. | 
          <a href="#" className="hover:text-[#FF8C00]"> Privacy Policy</a> | 
          <a href="#" className="hover:text-[#FF8C00]"> Terms of Service</a>
        </p>
      </div>

    </footer>
  );
}
