"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-600 p-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-24">
          <img
            src="/assets/images/author-avatar.png"
            alt="Travel2World.in"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {["Home", "About Us", "Tours", "Destinations", "Blog", "Contact Us"].map((item) => (
            <motion.a
              key={item}
              href="#"
              className="text-white text-lg"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Booking Button */}
        <div className="hidden md:block bg-white rounded-lg py-1 lg:py-2 px-3 lg:px-4">
          <a href="#" className=" text-teal-600  text-lg font-bold">
            Booking Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-teal-700 mt-2 space-y-2 text-center p-4 rounded-lg shadow-lg"
          >
            {["Home", "About Us", "Tours", "Destinations", "Blog", "Contact Us"].map((item) => (
              <motion.a key={item} href="#" className="block text-white text-lg">
                {item}
              </motion.a>
            ))}
            <a href="#" className="block bg-white text-teal-600 py-2 px-4 rounded-lg text-lg mt-2">
              Booking Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
