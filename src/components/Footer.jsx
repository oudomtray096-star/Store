// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { categories, fiigure } from "../Data/data";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Get 4 best sellers for mini-grid
  const bestSellers = fiigure.slice(0, 4);

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white transition">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">Contact</Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-white transition">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Categories Mini-Grid */}
        <div>
          <h3 className="font-bold text-white mb-4">Categories</h3>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.name}`}
                className="hover:text-white transition text-sm"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Best Sellers Mini-Grid */}
        <div>
          <h3 className="font-bold text-white mb-4">Best Sellers</h3>
          <div className="grid grid-cols-2 gap-2">
            {bestSellers.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="hover:text-white transition text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Anime Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;