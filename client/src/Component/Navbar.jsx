"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/images/Full_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false); // State for destinations dropdown
  const [isToursOpen, setIsToursOpen] = useState(false); // State for tours dropdown

  // Destination data
  const destinations = {
    India: [
      "Gujarat",
      "Karnataka",
      "Leh Ladakh",
      "Manipur",
      "Arunachal",
      "Meghalaya",
      "Odisha",
      "Jharkhand",
      "Tripura",
      "Nagaland",
      "India Destination",
      "All Destination",
    ],
    Asia: [
      "Vietnam",
      "Nepal",
      "Mauritius",
      "Bhutan",
      "Bali",
      "Malaysia",
      "Azerbaijan",
      "Hong Kong",
      "Dubai",
      "Maldives",
      "International Destination",
    ],
    Europe: [
      // Add European destinations here
    ],
  };

  // Tours data
  const tours = [
    "Family Trip",
    "Honeymoon Trip",
    "Winter Holidays",
    "Wildlife",
    "Golden Triangle Tour",
    "Hill Station",
    "Adventure Trip",
    "Trekking Tours",
  ];

  return (
    <nav className="bg-gradient-to-r from-teal-600 to-cyan-600 p-3 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="w-96" // Very large logo
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
              {/* Underline effect on hover */}
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

            {/* Tours Dropdown Menu */}
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
                    {tours.map((tour) => (
                      <li key={tour}>
                        <a
                          href="#"
                          className="block text-gray-700 hover:text-teal-600 transition-colors duration-300"
                        >
                          {tour}
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

            {/* Destinations Dropdown Menu */}
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
                        {destinations.India.map((destination) => (
                          <li key={destination}>
                            <a
                              href="#"
                              className="block text-gray-700 hover:text-teal-600 transition-colors duration-300"
                            >
                              {destination}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Asia Column */}
                    <div>
                      <h3 className="text-lg font-bold text-teal-700 mb-4">Asia</h3>
                      <ul className="space-y-2">
                        {destinations.Asia.map((destination) => (
                          <li key={destination}>
                            <a
                              href="#"
                              className="block text-gray-700 hover:text-teal-600 transition-colors duration-300"
                            >
                              {destination}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Europe Column */}
                    <div>
                      <h3 className="text-lg font-bold text-teal-700 mb-4">Europe</h3>
                      <ul className="space-y-2">
                        {destinations.Europe.map((destination) => (
                          <li key={destination}>
                            <a
                              href="#"
                              className="block text-gray-700 hover:text-teal-600 transition-colors duration-300"
                            >
                              {destination}
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

          {[ "Contact Us"].map((item) => (
            <motion.a
              key={item}
              href="#"
              className="text-white text-lg font-semibold hover:text-cyan-200 transition-colors duration-300 relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              {/* Underline effect on hover */}
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