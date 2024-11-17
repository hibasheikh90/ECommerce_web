import React from "react";
import { FaInstagram } from "react-icons/fa";
import {
  FaArrowUp,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      {/* Footer Upper Section */}
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-10 sm:py-20 mt-10 bg-green-900 text-white px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Brand and Social Links */}
        <div className="py-5 text-center lg:text-left">
          <h1 className="font-extrabold text-white text-4xl sm:text-6xl font-serif">
            Rivo
          </h1>
          <div className="flex justify-center lg:justify-start gap-5 py-5">
            <FaFacebookF className="text-xl cursor-pointer hover:text-gray-300" />
            <FaTwitter className="text-xl cursor-pointer hover:text-gray-300" />
            <FaLinkedinIn className="text-xl cursor-pointer hover:text-gray-300" />
            <FaInstagram className="text-xl cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        {/* Shop Links */}
        <div className="py-5 text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-bold">SHOP</h2>
          <ul className="space-y-2 py-3 sm:py-5">
            <li className="hover:text-gray-300 cursor-pointer">Hoodies</li>
            <li className="hover:text-gray-300 cursor-pointer">Y-shirt</li>
            <li className="hover:text-gray-300 cursor-pointer">Jacket</li>
          </ul>
        </div>

        {/* About Us Links */}
        <div className="py-5 text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-bold">ABOUT US</h2>
          <ul className="space-y-2 py-3 sm:py-5">
            <li className="hover:text-gray-300 cursor-pointer">Our Producers</li>
            <li className="hover:text-gray-300 cursor-pointer">Sitemap</li>
            <li className="hover:text-gray-300 cursor-pointer">FAQ</li>
            <li className="hover:text-gray-300 cursor-pointer">About Us</li>
            <li className="hover:text-gray-300 cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Customer Services Links */}
        <div className="py-5 text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-bold">CUSTOMER SERVICES</h2>
          <ul className="space-y-2 py-3 sm:py-5">
            <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
            <li className="hover:text-gray-300 cursor-pointer">
              Track Your Order
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              Product Care & Repair
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              Book an Appointment
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              Shipping & Returns
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Lower Section */}
      <div className="bg-black w-full py-3">
        <div className="wrapper flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24">
          {/* Copyright Text */}
          <p className="text-white text-sm text-center sm:text-left">
            © 2024 Coral, Inc.
          </p>
          {/* Scroll to Top */}
          <button className="text-white flex items-center gap-2 mt-2 sm:mt-0 text-sm hover:text-gray-300 cursor-pointer">
            Scroll to top
            <FaArrowUp />
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
