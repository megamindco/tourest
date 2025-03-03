"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/images/Full_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isToursOpen, setIsToursOpen] = useState(false);

  // Destination data with slugs
  const destinations = {
    India: [
      { name: "Gujarat", slug: "/destinations/india/gujarat" },
      { name: "Karnataka", slug: "/destinations/india/karnataka" },
      { name: "Leh Ladakh", slug: "/destinations/india/leh-ladakh" },
      { name: "Manipur", slug: "/destinations/india/manipur" },
      { name: "Arunachal", slug: "/destinations/india/arunachal" },
      { name: "Meghalaya", slug: "/destinations/india/meghalaya" },
      { name: "Odisha", slug: "/destinations/india/odisha" },
      { name: "Jharkhand", slug: "/destinations/india/jharkhand" },
      { name: "Tripura", slug: "/destinations/india/tripura" },
      { name: "Nagaland", slug: "/destinations/india/nagaland" },
      { name: "India Destination", slug: "/destinations/india" },
      { name: "All Destination", slug: "/destinations" },
    ],
    Asia: [
      { name: "Vietnam", slug: "/destinations/asia/vietnam" },
      { name: "Nepal", slug: "/destinations/asia/nepal" },
      { name: "Mauritius", slug: "/destinations/asia/mauritius" },
      { name: "Bhutan", slug: "/destinations/asia/bhutan" },
      { name: "Bali", slug: "/destinations/asia/bali" },
      { name: "Malaysia", slug: "/destinations/asia/malaysia" },
      { name: "Azerbaijan", slug: "/destinations/asia/azerbaijan" },
      { name: "Hong Kong", slug: "/destinations/asia/hong-kong" },
      { name: "Dubai", slug: "/destinations/asia/dubai" },
      { name: "Maldives", slug: "/destinations/asia/maldives" },
      { name: "International Destination", slug: "/destinations/international" },
    ],
    Europe: [
      // Add European destinations here with slugs
    ],
  };

  // Tours data with slugs
  const tours = [
    { name: "Family Trip", slug: "/tours/family-trip" },
    { name: "Honeymoon Trip", slug: "/tours/honeymoon-trip" },
    { name: "Winter Holidays", slug: "/tours/winter-holidays" },
    { name: "Wildlife", slug: "/tours/wildlife" },
    { name: "Golden Triangle Tour", slug: "/tours/golden-triangle" },
    { name: "Hill Station", slug: "/tours/hill-station" },
    { name: "Adventure Trip", slug: "/tours/adventure" },
    { name: "Trekking Tours", slug: "/tours/trekking" },
  ];

  return (
    <nav className="bg-gradient-to-r from-teal-600 to-cyan-600 p-3 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="w-54 lg:w-" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={logo}
            alt="Travel2World.in"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-10 items-center">
          {["Home", "About Us"].map((item) => (
            <motion.a
              key={item}
              href="#"
              className="text-white text-lg font-semibold hover:text-cyan-200 transition-colors duration-300 relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              <span className="absolute left-0 bottom-0 h-0.5 bg-cyan-200 w-0 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}

          {/* Tours Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsToursOpen(true)}
            onMouseLeave={() => setIsToursOpen(false)}
          >
            <button
              className="text-white text-lg font-semibold hover:text-cyan-200 transition-colors duration-300 flex items-center space-x-2"
              onClick={() => setIsToursOpen(!isToursOpen)}
            >
              <span>Tours</span>
              <FaChevronDown className={`transition-transform duration-300 ${isToursOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isToursOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50 p-4"
                >
                  <ul className="space-y-2">
                    {tours.map(({ name, slug }) => (
                      <li key={name}>
                        <a
                          href={slug}
                          className="block text-gray-700 hover:text-teal-600 transition-colors duration-300"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Destinations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDestinationsOpen(true)}
            onMouseLeave={() => setIsDestinationsOpen(false)}
          >
            <button
              className="text-white text-lg font-semibold hover:text-cyan-200 transition-colors duration-300 flex items-center space-x-2"
              onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
            >
              <span>Destinations</span>
              <FaChevronDown className={`transition-transform duration-300 ${isDestinationsOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isDestinationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-lg z-50 p-6"
                >
                  <div className="grid grid-cols-3 gap-6">
                    {/* India Column */}
                    <div>
                      <h3 className="text-lg font-bold text-teal-700 mb-4">India</h3>
                      <ul className="space-y-2">
                        {destinations.India.map(({ name, slug }) => (
                          <li key={name}>
                            <a
                              href={slug}
                              className="block text-gray-700 hover:text-teal-600 transition-colors duration-300"
                            >
                              {name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Asia Column */}
                    <div>
                      <h3 className="text-lg font-bold text-teal-700 mb-4">Asia</h3>
                      <ul className="space-y-2">
                        {destinations.Asia.map(({ name, slug }) => (
                          <li key={name}>
                            <a
                              href={slug}
                              className="block text-gray-700 hover:text-teal-600 transition-colors duration-300"
                            >
                              {name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    
                   
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {["Contact Us"].map((item) => (
            <motion.a
              key={item}
              href="#"
              className="text-white text-lg font-semibold hover:text-cyan-200 transition-colors duration-300 relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              <span className="absolute left-0 bottom-0 h-0.5 bg-cyan-200 w-0 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        {/* Booking Button */}
        <motion.div
          className="hidden lg:block bg-white rounded-xl py-3 px-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#" className="text-teal-700 text-lg font-bold">
            Booking Now
          </a>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-teal-500/30 drop-shadow-md mt-2 space-y-3 text-center p-6 rounded-lg shadow-lg"
          >
            {["Home", "About Us", "Tours", "Destinations", "Contact Us"].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="block text-white text-lg font-semibold hover:text-cyan-200 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="#"
              className="block bg-white text-teal-700 py-3 px-6 rounded-lg text-lg font-bold mt-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Booking Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;